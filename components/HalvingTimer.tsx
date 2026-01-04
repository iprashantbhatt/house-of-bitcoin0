"use client";
import { useEffect, useState } from "react";

export default function HalvingTimer() {
  const [blocksLeft, setBlocksLeft] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://mempool.space/api/blocks/tip/height")
      .then(r => r.text())
      .then(h => {
        const height = Number(h);
        const remaining = 210000 - (height % 210000);
        setBlocksLeft(remaining);
      });
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">House of Bitcoin</h1>
      <p className="mt-6 text-gray-400">Bitcoin Halving Countdown</p>
      <div className="mt-8 text-7xl font-mono text-orange-400">
        {blocksLeft ?? "..."}
      </div>
      <p className="mt-4 text-gray-500">Blocks Remaining</p>
    </div>
  );
}
