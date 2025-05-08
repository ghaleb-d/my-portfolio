"use client";

import { useEffect, useState } from "react";
import { FaChartLine } from "react-icons/fa";
import { SiBitcoin, SiEthereum, SiSolana } from "react-icons/si";

type Prices = {
  bitcoin?: { usd: number };
  ethereum?: { usd: number };
  solana?: { usd: number };
};

export default function CryptoSSE() {
  const [prices, setPrices] = useState<Prices | null>(null);

  useEffect(() => {
    const es = new EventSource("/api/crypto/sse");
    es.onmessage = (e) => setPrices(JSON.parse(e.data));
    es.onerror = () => es.close();
    return () => es.close();
  }, []);

  if (
    !prices ||
    typeof prices.bitcoin?.usd !== "number" ||
    typeof prices.ethereum?.usd !== "number" ||
    typeof prices.solana?.usd !== "number"
  ) {
    return <p className="text-center text-gray-500">Loading prices…</p>;
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-400/20 hover:-translate-y-1 transition-all duration-300 text-gray-800 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <FaChartLine className="w-5 h-5 text-gray-700" />
        <h4 className="text-xl font-semibold text-gray-900">
          Live Crypto Prices
        </h4>
      </div>

      {/* Prices */}
      <div className="flex justify-between text-lg font-medium space-x-4">
        <div className="flex items-center gap-2">
          <SiBitcoin className="w-6 h-6 text-yellow-500" />
          <span>${prices.bitcoin.usd.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <SiEthereum className="w-6 h-6 text-indigo-500" />
          <span>${prices.ethereum.usd.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <SiSolana className="w-6 h-6 text-green-500" />
          <span>${prices.solana.usd.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
