"use client";
import { useMemo } from "react";

const metrics = [
  { label: "Total Transactions", value: "5.3B+", change: "+287K today" },
  { label: "Unique Addresses", value: "117M+", change: "+12.3K today" },
  { label: "TVL Secured", value: "$2.1B", change: "+$45M today" },
  { label: "Avg Gas Price", value: "30 Gwei", change: "-5% vs yesterday" },
];

export function Metrics() {
  const chartPoints = useMemo(() => {
    const months = ["Jan","Feb","Mar","Apr","May","Jun"]; 
    const values = [4.2, 4.5, 4.8, 5.0, 5.1, 5.3];
    return months.map((m, i) => ({ x: i, y: values[i], label: m }));
  }, []);

  return (
    <section id="metrics" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Real-time Polygon Network Tracker</h2>
          <p className="text-neutral-600">Live metrics updated every block</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-sm transition-shadow">
              <div className="text-2xl font-bold mb-1">{m.value}</div>
              <div className="text-sm text-neutral-600 mb-1">{m.label}</div>
              <div className="text-xs font-medium text-emerald-600">{m.change}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-neutral-100">
          <h3 className="text-lg font-semibold mb-4">Transaction Volume (Billions)</h3>
          <SimpleArea points={chartPoints} />
        </div>
      </div>
    </section>
  );
}

function SimpleArea({ points }: { points: { x: number; y: number; label?: string }[] }) {
  const width = 640, height = 256, pad = 24;
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const sx = (x: number) => pad + ((x - minX) / (maxX - minX || 1)) * (width - pad * 2);
  const sy = (y: number) => height - pad - ((y - minY) / (maxY - minY || 1)) * (height - pad * 2);
  const path = ["M", sx(points[0].x), sy(points[0].y)]
    .concat(points.slice(1).flatMap((p) => ["L", sx(p.x), sy(p.y)])).join(" ");
  const area = `${path} L ${sx(points[points.length - 1].x)} ${height - pad} L ${sx(points[0].x)} ${height - pad} Z`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-64">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={`rgb(var(--brand-600))`} stopOpacity="0.25" />
          <stop offset="100%" stopColor={`rgb(var(--brand-600))`} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g>
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <line key={t} x1={pad} x2={width - pad} y1={pad + t * (height - pad * 2)} y2={pad + t * (height - pad * 2)} className="stroke-neutral-100" />
        ))}
      </g>
      <path d={area} fill="url(#grad)" />
      <path d={path} className="stroke-[3] fill-none" stroke={`rgb(var(--brand-600))`} />
    </svg>
  );
}


