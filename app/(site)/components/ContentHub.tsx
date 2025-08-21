export function ContentHub() {
  const posts = [
    { badge: "Technical", title: "Polygon 2.0: The Value Layer of the Internet", date: "2 days ago", featured: true },
    { badge: "Partnership", title: "Disney, Reddit, and Meta Choose Polygon", date: "5 days ago" },
    { badge: "Developer", title: "zkEVM Reaches 10M Transactions", date: "1 week ago" },
  ];

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
              <div key={p.title} className={`bg-white rounded-2xl p-6 border ${p.featured ? "border-[color:rgb(var(--brand-100))]" : "border-neutral-100"} hover:shadow-sm`}>
                {p.featured && <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">Featured</span>}
                <div className="mt-2">
                  <span className="text-xs font-medium text-[color:rgb(var(--brand-700))] bg-[color:rgb(var(--brand-50))] px-2 py-1 rounded mr-2">{p.badge}</span>
                  <h4 className="font-semibold mt-2">{p.title}</h4>
                  <p className="text-xs text-neutral-500 mt-1">{p.date}</p>
                </div>
              </div>
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


