"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const tools = [
  { title: "Data API", desc: "Real-time blockchain data", endpoint: "api.polygon.technology/v2/" },
  { title: "Analytics SDK", desc: "Track metrics & insights", endpoint: "analytics.polygon.io" },
  { title: "Widget Library", desc: "Embeddable components", endpoint: "widgets.polygon.technology" },
  { title: "Testnet Faucet", desc: "Get test tokens", endpoint: "faucet.polygon.technology" },
];

export function Tools() {
  const [copied, setCopied] = useState<string>("");
  const copy = (t: string) => {
    navigator.clipboard.writeText(t);
    setCopied(t);
    setTimeout(() => setCopied(""), 1500);
  };
  return (
    <section id="tools" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-2">Developer Tools & APIs</h2>
          <p className="text-neutral-600">Build compelling content with real-time data</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((t) => (
            <div key={t.title} className="bg-white dark:bg-neutral-950 rounded-2xl p-6 border border-neutral-100 dark:border-white/10 hover:shadow-sm transition-shadow">
              <h3 className="font-semibold mb-1">{t.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{t.desc}</p>
              <div className="flex items-center gap-2">
                <code className="text-xs bg-neutral-50 dark:bg-white/5 dark:text-neutral-200 px-2 py-1 rounded border border-neutral-200 dark:border-white/10 truncate flex-1">{t.endpoint}</code>
                <button aria-label="Copy endpoint" onClick={() => copy(t.endpoint)} className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10">
                  {copied === t.endpoint ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-neutral-500 dark:text-neutral-300" />}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-[color:rgb(var(--brand-50))] dark:bg-white/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to Create?</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">Join thousands of creators building on Polygon. Get exclusive access to events and rewards.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a className="rounded-full px-6 py-3 text-white bg-[color:rgb(var(--brand-700))] hover:bg-[color:rgb(var(--brand-600))] shadow-md" href="#">Join Creator Program</a>
            <a className="rounded-full px-6 py-3 border border-[color:rgb(var(--brand-100))] dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur" href="#">View Documentation</a>
          </div>
        </div>
      </div>
    </section>
  );
}


