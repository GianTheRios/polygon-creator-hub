import { Header } from "./(site)/components/Header";
import { Hero } from "./(site)/components/Hero";
import { Metrics } from "./(site)/components/Metrics";
import { Resources } from "./(site)/components/Resources";
import { ContentHub } from "./(site)/components/ContentHub";
import { Tools } from "./(site)/components/Tools";
import { Community } from "./(site)/components/Community";
import { Footer } from "./(site)/components/Footer";
import { fetchRss } from "../lib/rss";

export default async function Home() {
  const posts = await fetchRss("https://blog.polygon.technology/rss");
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <Hero />
      <Metrics />
      <Resources />
      <ContentHub posts={posts} />
      <Tools />
      <Community />
      <Footer />
    </div>
  );
}
