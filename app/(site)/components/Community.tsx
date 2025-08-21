export function Community() {
  const stats = [
    { metric: "50K+", label: "Active Creators", sub: "Building on Polygon" },
    { metric: "10M+", label: "Social Reach", sub: "Combined audience" },
    { metric: "500+", label: "Projects Launched", sub: "This month" },
  ];
  return (
    <section id="community" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-2">Join the Polygon Creator Community</h2>
          <p className="text-neutral-600">Connect with builders, developers, and creators worldwide</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[color:rgb(var(--brand-700))] mb-1">{s.metric}</div>
              <div className="font-medium">{s.label}</div>
              <div className="text-sm text-neutral-600">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-8 border border-neutral-100 text-center">
          <h3 className="text-xl font-semibold mb-3">Creator Spotlight</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            From educational content to technical tutorials, our creators are shaping the narrative of Web3 and bringing millions into the Polygon ecosystem.
          </p>
          <a href="#" className="rounded-full px-6 py-3 text-white bg-[color:rgb(var(--brand-700))] hover:bg-[color:rgb(var(--brand-600))]">Explore Creator Stories</a>
        </div>
      </div>
    </section>
  );
}


