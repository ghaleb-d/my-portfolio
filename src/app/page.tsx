'use client';

import { Montserrat, Inter } from 'next/font/google';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });




export default function Home() {
  return (
    <div className={`min-h-screen ${montserrat.className}`}>
      <Navigation />
      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="text-center mb-2">
              <span className={`text-2xl ${inter.className} text-gray-400 animate-slide-up`}>Hello! I'm Ghaleb</span>
            </div>
            
            {/* About Me Box */}
            <div className="max-w-2xl bg-gray-100 dark:bg-black p-6 rounded-lg shadow-md text-center">
          <p
            className={`${inter.className} fade-up text-lg text-gray-800 dark:text-gray-200`}
          >
           An engineer & PhD researcher focusing on blockchain consensus and interoperability for specific industries.
          </p>
          <p
            className={`${inter.className} fade-up delay-1 mt-4 text-lg text-gray-800 dark:text-gray-200`}
          >
          Full-Stack engineer building decentralized applications.
          </p>
        </div>
    
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
