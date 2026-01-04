"use client";
import { useEffect, useState } from "react";

export default function FeeCards() {
  const [fees, setFees] = useState<any>(null);

  useEffect(() => {
    fetch("https://mempool.space/api/v1/fees/recommended")
      .then(r => r.json())
      .then(setFees);
  }, []);

  if (!fees) return <p>Loading fees...</p>;

  return (
    <div>
      <h2 className="text-2xl mb-4">Live Fees (sat/vB)</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(fees).map(([k, v]) => (
          <div key={k} className="bg-zinc-900 p-4 rounded-xl">
            <p className="text-gray-400">{k}</p>
            <p className="text-2xl font-bold">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
