import { XMLParser } from 'fast-xml-parser';

export type RssItem = { title: string; link: string; pubDate?: string; description?: string };

type TextNode = { '#text': string };
type LinkNode = { '@_href': string };

type RssItemXml = {
  title?: string | TextNode;
  link?: string | LinkNode;
  pubDate?: string;
  description?: string;
};

type AtomEntryXml = {
  title?: string | TextNode;
  link?: string | LinkNode;
  updated?: string;
  summary?: string;
};

type ParsedXml = {
  rss?: { channel?: { item?: RssItemXml[] } };
  feed?: { entry?: AtomEntryXml[] };
};

const isTextNode = (v: unknown): v is TextNode =>
  typeof v === 'object' && v !== null && '#text' in (v as Record<string, unknown>);

const isLinkNode = (v: unknown): v is LinkNode =>
  typeof v === 'object' && v !== null && '@_href' in (v as Record<string, unknown>);

export async function fetchRss(url: string, limit = 6): Promise<RssItem[]> {
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false });
  const data = parser.parse(xml) as ParsedXml;
  const rssItems = data.rss?.channel?.item ?? [];
  const atomEntries = data.feed?.entry ?? [];

  const normalized: RssItem[] = (rssItems.length ? rssItems : atomEntries)
    .slice(0, limit)
    .map((it) => {
      const rawTitle = (it as RssItemXml | AtomEntryXml).title;
      const rawLink = (it as RssItemXml | AtomEntryXml).link;
      const title = isTextNode(rawTitle) ? rawTitle['#text'] : (rawTitle ?? '');
      const link = isLinkNode(rawLink) ? rawLink['@_href'] : (typeof rawLink === 'string' ? rawLink : '');
      const pubDate = (it as RssItemXml).pubDate ?? (it as AtomEntryXml).updated ?? undefined;
      const description = (it as RssItemXml).description ?? (it as AtomEntryXml).summary ?? undefined;
      return { title, link, pubDate, description };
    });

  return normalized.filter((i) => i.title && i.link);
}


