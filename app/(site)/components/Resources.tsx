export function Resources() {
  const items = [
    {
      tag: "Core Assets",
      title: "Polygon Logo Suite",
      description: "Primary logos, wordmarks, and icons in multiple formats",
      size: "12.4 MB",
      chips: ["Full Logo", "Icon Only", "Wordmark", "Lockups"],
    },
    {
      tag: "Visual Identity",
      title: "Color System & Typography",
      description: "Official color palettes and typography guidelines",
      size: "3.2 MB",
      chips: ["Primary Colors", "Secondary Palette", "Font Families", "Usage"],
    },
    {
      tag: "Templates",
      title: "Content Creation Kit",
      description: "Templates for social, presentations, and videos",
      size: "45.7 MB",
      chips: ["Social", "Video Intros", "Decks", "Thumbnails"],
    },
  ];

  return (
    <section id="resources" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-2">Brand Resources & Guidelines</h2>
          <p className="text-neutral-600">Everything you need to represent Polygon accurately</p>
        </div>
        <div className="space-y-6">
          {items.map((r) => (
            <div key={r.title} className="bg-white dark:bg-neutral-950 rounded-2xl p-6 border border-neutral-100 dark:border-white/10 hover:shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-sm font-medium text-[color:rgb(var(--brand-700))]">{r.tag}</p>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{r.description}</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-[color:rgb(var(--brand-50))] dark:bg-white/5 text-[color:rgb(var(--brand-700))]">{r.size}</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {r.chips.map((c) => (
                  <span key={c} className="text-xs bg-neutral-50 dark:bg-white/5 px-3 py-1 rounded-md border border-neutral-200 dark:border-white/10">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


