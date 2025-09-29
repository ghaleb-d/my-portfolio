// app/ongoing/page.tsx
"use client";

import React from "react";
import { FaProjectDiagram, FaGithub } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

// --- Status normalization & classification ---
const normalizeStatus = (s: string) => s.toLowerCase().trim();

type CanonicalStatus = "ongoing" | "completed";

// Map common variants/synonyms to canonical buckets
const statusAlias: Record<string, CanonicalStatus> = {
  // Completed variants
  completed: "completed",
  complete: "completed",
  done: "completed",
  finished: "completed",
  shipped: "completed",
  launched: "completed",

  // Ongoing variants
  ongoing: "ongoing",
  "in development": "ongoing",
  "in-development": "ongoing",
  "in dev": "ongoing",
  "in-dev": "ongoing",
  "in progress": "ongoing",
  "in-progress": "ongoing",
  wip: "ongoing",
  prototype: "ongoing",
  prototyping: "ongoing",
  beta: "ongoing",
};

const classify = (s: string): CanonicalStatus | null => {
  const n = normalizeStatus(s);
  return statusAlias[n] ?? null;
};

// Safer status dot with fallback for unknowns
const statusDot: Record<CanonicalStatus, string> = {
  ongoing: "bg-green-500 animate-pulse",
  completed: "bg-orange-500 animate-pulse",
};

const dotClass = (s: string) => {
  const c = classify(s);
  return c ? statusDot[c] : "bg-gray-300";
};

// GitHub links mapped by project title
const githubLinks: Record<string, string> = {
  "CLI Voting System for Poll-Based Governance": "https://github.com/ghaleb-d/polls",
  // Add more when ready:
  // "Solana Telegram Trading Bot": "https://github.com/your/repo",
  // "NFT Launchpad – Backend & Frontend": "https://github.com/your/repo",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Digital assets escrow",
      subtitle: "Rust",
      chain: "Solana",
      status: "ongoing",
      items: [
        "Design: defined escrow requirements, asset-swap flow, and “pay the difference” logic; modeled contract sequence with UML/flow diagrams.",
      ],
    },
    
    {
      title:
        "Rust-based smart contract for BIM/ERP integration and On-chain Indexing Module",
      subtitle: "Rust • Substrate ",
      chain: "Chain TBD",
      status: "ongoing",
      items: [
        "This is part of my PhD research on using blockchain for interoperability between different industries, particularly BIM/ERP systems.",
      ],
    },
    {
      title: "Ultra-Low-Latency Solana Trading System",
      subtitle: "Rust • Solana TPU/QUIC • Tokio • Geyser",
      chain: "On-chain (Solana)",
      status: "ongoing",
      items: [
        "Engineered a TPU/QUIC-first execution path with leader-schedule awareness and pre-signed, pre-quoted transactions to minimize slot miss risk.",
        "Implemented risk management algorithms (VaR/ES, Kelly-fraction caps, rolling drawdown guards) with position sizing and circuit-breaker halts.",
        "Built streaming market data via Geyser/WebSocket with lock-free channels and back-pressure control for deterministic throughput.",
        "Added health checks, jitter/latency telemetry, and failover across dedicated RPCs with configurable slippage & priority-fee policies."
      ]
    },
    {
      title: "Auto-Compounding DeFi Vault",
      subtitle: "Rust (Anchor) • Strategy Adapters • Postgres",
      chain: "On-chain (Solana)",
      status: "ongoing",
      items: [
        "Designed a share-based vault with time-bounded harvests, performance/management fees, and strategy adapters.",
        "Implemented deposit/withdraw with precise share accounting and oracle-checked price-per-share sanity.",
        "Built a lightweight keeper to trigger harvests and a minimal UI for deposits and analytics."
      ]
    },
    // {
    //   title: "CLI Voting System for Poll-Based Governance",
    //   subtitle: "Rust • PostgreSQL • Docker",
    //   chain: "Off-chain (CLI-based)",
    //   status: "completed",
    //   items: [
    //     "Developed a command-line polling system with vote recording and user authentication.",
    //     "Implemented persistent storage via PostgreSQL and containerized the entire application using Docker for easy deployment.",
    //     "Optimized input validation and DB querying using async Rust with SQLx.",
    //   ],
    // },
    {
      title: "Solana Telegram Trading Bot",
      subtitle: "Rust • Solana • Telegram SDK for mini-apps",
      chain: "On-chain (Solana)",
      status: "completed",
      items: [
        "Built a high-performance trading bot integrated with Solana’s RPC/Geyser for real-time on-chain data ingestion.",
        "Implemented strategy-based order routing and transaction prioritization.",
        "Connected a Telegram bot interface for user interaction, portfolio updates, and trade execution notifications.",
      ],
    },
    {
      title: "NFT Launchpad – Backend & Frontend",
      subtitle: "Next.js • Solidity • MongoDB",
      chain: "Ethereum-compatible (ERC721A)",
      status: "completed",
      items: [
        "Designed and deployed a factory smart contract that generates optimized ERC721A contracts for each new collection.",
        "Developed a Next.js frontend for creators to manage whitelists, mint settings, and launch dashboards.",
        "Integrated MongoDB for persistent storage of project metadata and user configurations.",
      ],
    },
    {
      title: "Smart Maintenance Machine Contract",
      subtitle: "Solidity • PostgreSQL",
      chain: "Ethereum-compatible (Smart Maintenance)",
      status: "completed",
      items: [
        "Implemented a Solidity smart contract for machine maintenance tracking and automated service scheduling.",
        "Integrated PostgreSQL backend for off-chain data storage, analytics, and maintenance history.",
        "Designed on-chain/off-chain interactions for secure asset lifecycle management and auditability.",
      ],
    },
    {
      title: "Decentralized Decision-Making for Machine Order Routing",
      subtitle: " Solidity • PostgreSQL • Next.js",
      chain: "EVM (Ethereum) with off-chain agents",
      status: "completed",
      items: [
        "Designed a decentralized protocol that routes manufacturing orders to machines using multi-criteria scoring (AHP-based) with on-chain audit trails.",
        "Implemented automated payment/escrow smart contracts (milestone-based releases, penalties, and SLAs) with cryptographic proofs of completion.",
        "Built off-chain router agents (Rust) that gather machine telemetry (MQTT/OPC UA), compute rankings, and commit signed decisions on-chain.",
        "Integrated a Postgres-backed analytics layer and a minimal Next.js dashboard for order status, settlement events, and dispute resolution."
      ]
    }
    
  ];

  // Derived lists using the classifier (auto-scales as you add)
  const ongoingProjects = projects.filter((p) => classify(p.status) === "ongoing");
  const completedProjects = projects.filter((p) => classify(p.status) === "completed");

  const renderProjectSection = (
    projectsList: typeof projects,
    sectionTitle: string
  ) => (
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
        {sectionTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList.map(({ title, subtitle, items, chain, status }) => (
          <div
            key={title}
            className="
              group relative overflow-hidden rounded-2xl
              bg-white border border-gray-200
              p-6
              hover:border-gray-300 hover:shadow-lg hover:-translate-y-1
              transition-all duration-300
              text-gray-800
            "
          >
            <div className="mb-4 flex items-start gap-2">
              <span
                className={`self-start mt-1 shrink-0 h-3 w-3 rounded-full ${dotClass(
                  status
                )}`}
              />
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                {classify(status) === "completed" && githubLinks[title] && (
                  <span
                    role="button"
                    onClick={() =>
                      window.open(githubLinks[title], "_blank", "noopener,noreferrer")
                    }
                    className="cursor-pointer text-gray-600 hover:text-black transition"
                    aria-label="GitHub repository"
                  >
                    <FaGithub className="w-8 h-8 animate-pulse" />
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-600">{subtitle}</p>
            <p className="text-sm text-gray-600 mb-2">{chain}</p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {items.map((point, i) => (
                <li key={`${title}-${i}`}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className={`relative min-h-screen ${montserrat.className}`}>
      <Navigation />
      <main className="relative z-10">
        <div className="container mx-auto px-4 pt-32 pb-24 space-y-24">
          {renderProjectSection(ongoingProjects, "Ongoing Projects")}
          {renderProjectSection(completedProjects, "Completed Projects")}
        </div>
      </main>
      <Footer />
    </div>
  );
}
