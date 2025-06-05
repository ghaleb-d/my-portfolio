// app/ongoing/page.tsx
"use client";

import React from "react";
import { FaProjectDiagram, FaGithub } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

const statusDot = {
  ongoing: "bg-green-500 animate-pulse",
  completed: "bg-orange-500 animate-pulse",
};

// GitHub links mapped by project title
const githubLinks: Record<string, string> = {
  "CLI Voting System for Poll-Based Governance": "https://github.com/ghaleb-d/polls",
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
        "This is part of my PhD research on using blockchain for construction industry interoperability",
      ],
    },
    {
      title: "CLI Voting System for Poll-Based Governance",
      subtitle: "Rust • PostgreSQL • Docker",
      chain: "Off-chain (CLI-based)",
      status: "completed",
      items: [
        "Developed a command-line polling system with vote recording and user authentication.",
        "Implemented persistent storage via PostgreSQL and containerized the entire application using Docker for easy deployment.",
        "Optimized input validation and DB querying using async Rust with SQLx.",
      ],
    },
  ];

  const ongoingProjects = projects.filter((p) => p.status === "ongoing");
  const completedProjects = projects.filter((p) => p.status === "completed");

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
        {projectsList.map(({ title, subtitle, items, chain, status }, idx) => (
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
            <div className="mb-4 flex items-start gap-2">
              <span
                className={`self-start mt-1 shrink-0 h-3 w-3 rounded-full ${
                  statusDot[status as keyof typeof statusDot]
                }`}
              />

              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                {status === "completed" && githubLinks[title] && (
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
                <li key={i}>{point}</li>
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
