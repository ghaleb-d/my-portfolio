"use client";

import { Montserrat } from "next/font/google";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBook,
  FaCode,
  FaGlobeAmericas,
} from "react-icons/fa";
const montserrat = Montserrat({ subsets: ["latin"] });

const timeline = [
  {
    year: "2023",
    school: "Ecole Polytechnique de Montréal",
    title: "PhD researcher: Mathematical and Industrial Engineering",
    details: [
      "Blockchain interoperability with BIM/ERP systems and cross-chain messaging, for better industrial data exchange and project lifecycle management",
      "Benchmarking performance of non-authoritative vs a newly proposed PBFT-based hybrid consensus for industrial interoperability and data exchange",
      "Assessing the performance of Rust-based smart contracts for access control and authority management on a non-authoritative public blockchain and evaluating its impact on interoperability with BIM/ERP systems",
      "Develop and Evaluate an indexing module to optimize cross-domain data retrieval between industrial stakeholders based on the proposed hybrid consensus",
      "Validation of the proposed blockchain interoperability solution through a real-world case study in the construction industry",
    ],
    location: "Montreal, Canada",
    Icon: FaGraduationCap,
  },
  {
    year: "2022",
    school: "McGill University",
    title: "Full-Stack JavaScript Developer",
    subtitle: "Professional development in advanced JavaScript",
    location: "Montreal, Canada",
    Icon: FaGraduationCap,
  },
  {
    year: "2020",
    school: "Ecole de Technologie Supérieure - McGill University",
    title: "Master of Science: Risk Engineering",
    subtitle: "Risk Engineering and system vulnerability assessment",
    details: [
      "Risk assessments using the Analytical Hierarchy Process (AHP) to quantify and prioritize risk factors, leading to precise risk indexing and probability-of-failure estimations.",
      "Modeling and evaluating system vulnerabilities using multidesciplinary approaches for enhanced reliabibility and informed decision-making",
    ],
    location: "Montreal, Canada",
    Icon: FaGraduationCap,
  },
  {
    year: "2016",
    school: "Balamand University",
    title: "Master of Science: Traffic Engineering",
    subtitle: "Traffic data analysis and performance simulation",
    details: [
      "Extensive data-driven research utilizing advanced statistical methods and computational simulations to analyze complex system behaviors",
      "Applied sophisticated data analysis techniques, including statistical inference, regression modeling, and sensitivity analysis, to interpret simulation outcomes effectively",
    ],
    location: "Lebanon",
    Icon: FaGraduationCap,
  },
];

export default function AboutPage() {
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
              This page shows my educational background, technical skills and
              spoken languages.
            </h1>
          </section>
          <section className="max-w-4xl mx-auto">
            <h1
              className={`flex items-center justify-center gap-3 text-xl md:text-5xl font-bold text-center mb-16 tracking-wide bg-gradient-to-r from-black via-black/90 to-black/80 bg-clip-text ${montserrat.className} leading-relaxed py-2`}
            >
              <FaBook className="w-8 h-8 text-gray-400" />
              Educational Background
            </h1>
          </section>

          {/* Timeline with animated vertical line */}
          <section className="max-w-4xl mx-auto">
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 bg-[length:100%_200%]" />

              <ul className="space-y-8 relative z-10">
                {timeline.map(
                  (
                    { year, school, title, subtitle, location, Icon, details }
                  
                  ) => (
                    <li key={year} className="flex items-start md:space-x-4">
                      {/* Icon and Year */}
                      <div className="flex flex-col items-center mr-4 ">
                        <div className="bg-white p-1 rounded-full shadow-md">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <span className="mt-2 font-mono text-gray-800">
                          {year}
                        </span>
                      </div>
                      {/* Details */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {school}
                        </h3>
                        <h4 className="text-lg font-medium text-gray-800">
                          {title}
                        </h4>
                        {subtitle && (
                          <p className="text-gray-700">{subtitle}</p>
                        )}
                        {details && (
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {details.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        )}
                        <div className="flex items-center text-gray-500 text-sm space-x-1">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span>{location}</span>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
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
                {/* Technical Skills */}
                <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Programming Languages
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Solidity",
                      "Rust",
                      "JavaScript",
                      "TypeScript",
                      "VBA"

                    ].map((lang, idx) => (
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
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="4"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3"
                        y="10"
                        width="18"
                        height="4"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3"
                        y="16"
                        width="18"
                        height="4"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <h3 className="text-xl font-semibold text-gray-900">
                      Web technologies and frameworks
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Html/CSS",
                      "React.js",
                      "Next.js",
                      "Node.js",
                      "Express.js",
                      "Grammy.js",
                      "Web3.js",
                      "Redux",
                      "Solana/Web3.js",
                      "Solana/Anchor",
                      "ethers.js",
                      "Hardhat",
                      "Foundry",
                    ].map((skill, idx) => (
                      <span
                        key={idx}
                        className=" px-3 py-1.5 bg-gray-200 rounded-full text-sm transition-all duration-300 group-hover:bg-gray-300 group-hover:text-gray-900 "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className=" group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.92 1.603-.92 1.902 0a1.724 1.724 0 002.56 1.023c.85-.43 1.84.12 1.84 1.043v2.01c0 .34.116.68.336.94l1.388 1.388a1.5 1.5 0 010 2.12l-1.388 1.388a1.724 1.724 0 00-.336.94v2.01c0 .923-.99 1.473-1.84 1.043a1.724 1.724 0 00-2.56 1.023c-.299.92-1.602.92-1.901 0a1.724 1.724 0 00-2.56-1.023c-.85.43-1.84-.12-1.84-1.043v-2.01c0-.34-.116-.68-.336-.94L3.6 11.388a1.5 1.5 0 010-2.12l1.388-1.388c.22-.26.336-.599.336-.94V4.927c0-.923.99-1.473 1.84-1.043a1.724 1.724 0 002.56-1.023zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                      />
                    </svg>

                    <h3 className="text-xl font-semibold text-gray-900">
                      DevOps & tools
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Git/GitHub", "Docker", "AWS", "CI/CD", "Nginx"].map(
                      (tool, idx) => (
                        <span
                          key={idx}
                          className=" px-3 py-1.5 bg-gray-200 rounded-full text-sm transition-all duration-300 group-hover:bg-gray-300 group-hover:text-gray-900 "
                        >
                          {tool}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Languages */}
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {/* Top ellipse */}
                      <ellipse
                        cx="12"
                        cy="6"
                        rx="9"
                        ry="3"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      {/* Middle section */}
                      <path
                        stroke="currentColor"
                        strokeWidth={2}
                        d="M3 6v4c0 1.657 4.03 3 9 3s9-1.343 9-3V6"
                        fill="none"
                      />
                      {/* Bottom section */}
                      <path
                        stroke="currentColor"
                        strokeWidth={2}
                        d="M3 10v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4"
                        fill="none"
                      />
                    </svg>

                    <h3 className="text-xl font-semibold text-gray-900">
                      Databases and data storage
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "PostgreSQL",
                      "MongoDB",
                      "Firebase Realtime / Firestore",
                    ].map((lang, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-200 rounded-full text-sm transition-all duration-300 group-hover:bg-gray-300 group-hover:text-gray-900"
                      >
                        {lang}
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
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
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
