"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 bg-opacity-90 backdrop-blur-sm`}>
      <div className={`container  mx-auto flex justify-between items-center`}>
        <div>
          <Link href="/">
            <Image
              src="/ghaleb_logo.png"
              alt="Ghaleb Damaj"
              width={150}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop version */}
        <div className="hidden md:flex gap-8 mr-5">
          <Link href="/" className={`${montserrat.className} nav-hover`}>
            Home
          </Link>
          <Link href="/services" className={`${montserrat.className} nav-hover`}>
         Services
          </Link>
     
          <Link href="/ongoing" className={`${montserrat.className} nav-hover`}>
         My Projects

          </Link>
          <Link href="/contact" className={`${montserrat.className} nav-hover`}>
            Contact
          </Link>
        </div>

        {/* Mobile version of the navbar */}
        <button
          className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-3xl bg-[#171717] hover:bg-[#1A1625]/80 border border-[#2D1B4E]/30 hover:border-[#8B4FFF]/50 transition-all duration-300 group shadow-xl hover:shadow-[#8B4FFF]/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="relative w-7 h-7">
            <span
              className={`absolute top-0 left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            ></span>
            <span
              className={`absolute top-3 left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* isMobileMenuOpen is a state that is used to open and close the mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-30 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
    
          <div className="flex flex-col gap-4">
            <Link href="/" className="mobile-link">
              Home
            </Link>
            <Link href="/services" className="mobile-link">
             Services
            </Link>
          
            <Link href="/ongoing" className="mobile-link">
              My Projects
            </Link>
            <Link href="/contact" className="mobile-link">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
