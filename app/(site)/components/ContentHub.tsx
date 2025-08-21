export function ContentHub({ posts }: { posts: { title: string; link: string; pubDate?: string }[] }) {

  const ideas = [
    { title: "zkEVM Tutorial Series", meta: "Video • Intermediate" },
    { title: "DeFi Protocol Reviews", meta: "Article • Beginner" },
    { title: "Smart Contract Workshop", meta: "Live • Advanced" },
  ];

  return (
    <section id="content" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-2">Content Inspiration & Updates</h2>
          <p className="text-neutral-600">Stay informed with the latest from Polygon ecosystem</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {posts.map((p) => (
              <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-sm">
                <div className="mt-2">
                  <h4 className="font-semibold mt-1">{p.title}</h4>
                  {p.pubDate && <p className="text-xs text-neutral-500 mt-1">{new Date(p.pubDate).toLocaleDateString()}</p>}
                </div>
              </a>
            ))}
          </div>
          <div>
            <div className="bg-white rounded-2xl p-6 border border-neutral-100">
              <h3 className="text-lg font-semibold mb-4">Content Ideas</h3>
              <div className="space-y-3">
                {ideas.map((i) => (
                  <div key={i.title} className="border border-neutral-100 rounded-xl p-3 hover:shadow-sm">
                    <p className="font-medium text-sm">{i.title}</p>
                    <p className="text-xs text-neutral-500">{i.meta}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 rounded-xl bg-[color:rgb(var(--brand-50))] text-[color:rgb(var(--brand-700))]">Generate More Ideas</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


