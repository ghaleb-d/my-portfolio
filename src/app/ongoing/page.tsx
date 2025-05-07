// app/ongoing/page.tsx
"use client";

import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });
export default function OngoingProjectsPage() {
  const projects = [
    {
      title: "Digital assets escrow",
      subtitle: "Rust • Solidity",
      chain: "EVM & Solana",
      items: [
       "Design: defined escrow requirements, asset-swap flow, and “pay the difference” logic; modeled contract sequence with UML/flow diagrams. "
      ],
    },
    {
      title: "Rust-based smart contract for BIM/ERP integration and On-chain Indexing Module",
      subtitle: "Rust • Substrate ",
      chain: "Chain TBD",
      items: [
        "This is part of my PhD research on using blockchain for construction industry interoperability"
      ],
    },
 
    // …add more ongoing projects here…
  ];

  return (
    <div className={`relative min-h-screen ${montserrat.className} `}>
    <Navigation />
    <main className="relative z-10">
      <div className="container mx-auto px-4 pt-32 pb-24 space-y-24">
    <section className="max-w-7xl mx-auto bg-gray-50 px-4 py-16">
      <h2
        className={`
          flex items-center justify-center gap-3
          text-4xl md:text-5xl font-bold text-center mb-16
          tracking-wide text-black ${montserrat.className}
          leading-relaxed py-2
        `}
      >
        <FaProjectDiagram className="w-6 h-6 text-gray-900" />
        Ongoing Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(({ title, subtitle, items, chain }, idx) => (
          <div
            key={idx}
            className="
              group relative overflow-hidden rounded-2xl
              bg-white border border-gray-200
              p-6
              hover:border-gray-300 hover:shadow-lg hover:-translate-y-1
              transition-all duration-300
              text-gray-800
            "
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
              <p className="text-sm text-gray-600 mt-1">{chain}</p>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {items.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </div>
    </main>
    <Footer />
    </div>
  );
}
