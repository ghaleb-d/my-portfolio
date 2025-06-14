"use client";

import { Montserrat } from "next/font/google";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCode,
  FaGlobeAmericas,
  FaNetworkWired,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function ServicePage() {
  return (
    <div className={`relative min-h-screen ${montserrat.className} `}>
      <Navigation />

      <main className="relative z-10">
        <div className="container mx-auto px-4 pt-32 pb-24 space-y-24">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto">
            <h1
              className={`text-xl md:text-2xl font-medium text-center mb-16 tracking-wide bg-gradient-to-r from-black via-black/90 to-black/80 bg-clip-text  ${montserrat.className} leading-relaxed py-10`}
            >
              This page shows the services I offer, including development, research consulting, and blockchain system design.
            </h1>
          </section>
        {/*Services section */}
        <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50 rounded-2xl shadow-sm">
            <h2 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide text-black">
              <FaTools className="w-8 h-8 text-black" />
              Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <FaProjectDiagram className="w-6 h-6 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-2">Blockchain Architecture</h3>
                <p className="text-gray-700">
                  Design and planning of blockchain systems to support real-time collaboration, transparency, and secure data exchange in industrial environments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <FaNetworkWired className="w-6 h-6 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cross-Chain Interoperability</h3>
                <p className="text-gray-700">
                  Building secure connections between different blockchain platforms and ERP using modern data protocols.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <FaCode className="w-6 h-6 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Contract Development</h3>
                <p className="text-gray-700">
                  Writing smart contracts with Solidity and Rust for automation, digital assets, secure transactions, and data management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <FaCode className="w-6 h-6 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-2">Full-Stack Blockchain Apps</h3>
                <p className="text-gray-700">
                  Creating end-to-end blockchain applications with user-friendly interfaces, wallet integration, and backend systems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <FaGlobeAmericas className="w-6 h-6 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-2">Research & Technical Consulting</h3>
                <p className="text-gray-700">
                  Supporting companies and research groups with blockchain integration, prototyping, and technical writing for industry projects.
                </p>
              </div>
            </div>
          </section>
          {/* Skills Section */}
          <section className="max-w-7xl mx-auto bg-gray-50 px-4 py-16">
            <section className="max-w-4xl mx-auto">
              <h2
                className={`flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide bg-gradient-to-r from-black via-black/90 to-black/80 bg-clip-text ${montserrat.className} leading-relaxed py-2`}
              >
                <FaCode className="w-8 h-8 text-black" />
                Technical Skills
              </h2>
            </section>

            {/* Main Grid */}
            <div className="flex flex-col gap-8">
              {/* Top Grid - 4 boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Programming Languages */}
                <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Programming Languages
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Solidity", "Rust", "JavaScript", "TypeScript", "VBA"].map((lang, idx) => (
                      <span
                        key={idx}
                        className=" px-3 py-1.5 bg-gray-200 rounded-full text-sm transition-all duration-300 group-hover:bg-gray-300 group-hover:text-gray-900 "
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Web technologies and frameworks */}
                <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Web Technologies & Frameworks
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Html/CSS", "React.js", "Next.js", "Node.js", "Express.js", "Grammy.js", "Web3.js", "Redux", "Solana/Web3.js", "Solana/Anchor", "ethers.js", "Hardhat", "Foundry"].map((skill, idx) => (
                      <span
                        key={idx}
                        className=" px-3 py-1.5 bg-gray-200 rounded-full text-sm transition-all duration-300 group-hover:bg-gray-300 group-hover:text-gray-900 "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DevOps Tools */}
                <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      DevOps & Tools
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Git/GitHub", "Docker", "AWS", "CI/CD", "Nginx"].map((tool, idx) => (
                      <span
                        key={idx}
                        className=" px-3 py-1.5 bg-gray-200 rounded-full text-sm transition-all duration-300 group-hover:bg-gray-300 group-hover:text-gray-900 "
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Databases & Data Storage
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "MongoDB", "Firebase Realtime / Firestore"].map((db, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-200 rounded-full text-sm transition-all duration-300 group-hover:bg-gray-300 group-hover:text-gray-900"
                      >
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spoken Languages */}
          <section className="max-w-7xl mx-auto bg-gray-50 px-4 py-16">
            <section className="max-w-4xl mx-auto">
              <h2
                className={`flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide bg-gradient-to-r from-black via-black/90 to-black/80 bg-clip-text ${montserrat.className} leading-relaxed py-2`}
              >
                <FaGlobeAmericas className="w-8 h-8 text-black" />
                Spoken Languages
              </h2>
            </section>

            {/* Spoken Languages Grid */}
            <div className="grid grid-cols-1 gap-8">
              <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800 ">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Languages
                  </h3>
                </div>
                <div className="space-y-8 max-w-md mx-auto">
                  {["English", "French", "Arabic"].map((lang) => (
                    <div key={lang} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-900">{lang}</span>
                        <span className="text-sm font-semibold text-gray-700">Fluent</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className=" h-full rounded-full w-full bg-gradient-to-r from-gray-400 to-black" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
