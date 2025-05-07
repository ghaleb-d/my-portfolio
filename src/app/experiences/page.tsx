// app/experience/page.tsx
"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFileAlt } from "react-icons/fa";

import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });
export default function ExperiencePage() {
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
              <FaBriefcase className="w-6 h-6 text-gray-900" />
              Work Experience
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {/* Example Item #1 */}
              <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-4 sm:p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800 ">
                {/* header: mobile = column, sm+ = row */}

                {/* 1st item in the same experience card */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Full Stack Engineer
                    </h3>
                    <span className="text-sm text-gray-600">
                      Moonvera Inc. | Canada
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 sm:mt-0">
                    Nov 2023 – Present
                  </span>
                </div>

                <div className="text-gray-700">
                  <h4 className="font-medium mb-2">
                    Solana Telegram Trading Bot (Dev → Production)
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Architected end-to-end trading engine using a private
                      Solana RPC node with Geyser stream filtering for
                      low-latency market data.
                    </li>
                    <li>
                      Integrated leading Solana DEXs, including Raydium and
                      Jupiter, by leveraging their SDKs to enable seamless DeFi
                      trading functionality
                    </li>
                    <li>
                      Built interactive Telegram UI with grammy.js: user
                      commands for trading parameters, profile settings and PNL
                      for trading positions.
                    </li>
                    <li>
                      Rust, Node.js, Docker, AWS EC2, TS/JS, MongoDB, Grammy.js,
                      Solana/web3.js, Raydium/Jupiter SDKs, GitHub Actions,
                    </li>
                  </ul>
                </div>
                {/* 2nd item in the same experience card */}
                <div className="text-gray-700">
                  <h4 className="font-medium mb-2 mt-8">
                    Telegram Mini App (Dev → Production)
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Built an interactive Telegram Mini App using Next.js,
                      fully integrated with the Solana trading bot backend
                    </li>
                    <li>
                      Implemented a user-friendly interface with multiple
                      websockets to fetch real-time market data and provide a
                      seamless trading experience.
                    </li>

                    <li>
                      Rust, Node.js, Next.js, Docker, AWS EC2, TS/JS, MongoDB,
                      telegram sdk, Solana/web3.js, TailwindCSS, GitHub Actions,
                    </li>
                  </ul>
                </div>

                {/* 3rd item in the same experience card */}

                <div className="text-gray-700">
                  <h4 className="font-medium mb-2 mt-8">
                    NFT Launchpad - EVM (Dev → Production)
                  </h4>
                  <div className="flex items-center mb-4 text-sm">
                    <Link href="https://etherscan.io/address/0x6a213cddb2f5ed08ef3d27c66e7f6493970e9426#code">
                      <p className="text-blue-500 hover:underline">
                        Deployed Contract
                      </p>
                    </Link>
                    <span className="mx-2 text-gray-400">|</span>
                    <Link href="https://artistjodi.com/paintx">
                      <p className="text-blue-500 hover:underline">
                        Live Collection Project
                      </p>
                    </Link>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Designed, developed, and deployed a factory smart contract
                      system using ERC721A clone contracts.
                    </li>
                    <li>
                      Built a user-friendly interface with Next.js, TailwindCSS
                      and integrated with the smart contract ABI.
                    </li>
                    <li>
                      Solidity, Node.js, Next.js, Docker, TS/JS, IPFS,
                      TailwindCSS, GitHub Actions, Hardhat, wagmi, ethers.js,
                      thirdweb, Foundry.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Example Item #2 */}
              <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-4 sm:p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800 ">
                {/* header: mobile = column, sm+ = row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Research Assistant
                    </h3>
                    <span className="text-sm text-gray-600">
                      Ecole Polytechnique Montreal | Canada
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 sm:mt-0">
                    Sept 2023 – Feb 2024
                  </span>
                </div>

                <div className="text-gray-700">
                  <h4 className="font-medium mb-2">Smart Maintenance System</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Design and deployment of smart contracts for a machine
                      smart maintenance system.
                    </li>
                    {/*Make it styled for conference paper*/}
                    <li className="flex items-start gap-3 border-l-4 border-blue-500 bg-blue-50 p-3 rounded-lg">
                      <FaFileAlt className="mt-1 w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="italic text-gray-700">
                        Conference paper at IISE 2024: Smart Maintenance
                        Framework in Industry 4.0 using blockchain smart
                        contracts
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Example Item #3 */}
              <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-4 sm:p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800 ">
                {/* header: mobile = column, sm+ = row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Blockchain Consultant
                    </h3>
                    <span className="text-sm text-gray-600">
                      Self-Employed | Canada
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 sm:mt-0">
                    May 2023 – Sept 2023
                  </span>
                </div>

                <div className="text-gray-700">
                  <h4 className="font-medium mb-2">
                    NFT and ERC20 projects (Backend / Frontend)
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Built Solidity contracts for EVM projects (ERC20, ERC721,
                      ERC1155)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Example Item #4 */}
              <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-4 sm:p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800 ">
                {/* header: mobile = column, sm+ = row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Engineering Project Manager
                    </h3>
                    <span className="text-sm text-gray-600">
                      Sensequake | Canada
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 sm:mt-0">
                    Jan 2023 – May 2023
                  </span>
                </div>

                <div className="text-gray-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Managed the lifecycle of IoT projects focused on data
                      collection, cloud-based analytics, risk analysis, and
                      predictive modeling
                    </li>
                    <li>
                      Coordinated cross-functional teams to deliver integrated
                      IoT solutions, ensuring timely completion and alignment
                      with business objectives.
                    </li>
                    <li>
                      Oversaw development of cloud-hosted digital twins and
                      data-processing workflows to optimize performance,
                      reliability, and accuracy of predictive analytics
                    </li>
                  </ul>
                </div>
              </div>

              {/* Example Item #5 */}
              <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-4 sm:p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800 ">
                {/* header: mobile = column, sm+ = row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Consultant Engineer
                    </h3>
                    <span className="text-sm text-gray-600">
                      Leroux+Cyr | Canada
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 sm:mt-0">
                    Oct 2020 – Dec 2022
                  </span>
                </div>

                <div className="text-gray-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Developed custom VBA macro programs integrated with
                      structural engineering software through APIs to automate
                      complex calculations and workflows
                    </li>
                    <li>
                      Collaborated closely with engineering teams to ensure
                      software solutions met operational needs and enhanced
                      productivity
                    </li>
                    <li>
                      Optimized structural analysis processes, significantly
                      reducing manual efforts and increasing accuracy.
                    </li>
                  </ul>
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
