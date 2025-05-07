'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-white">
      <div className="container mx-auto flex flex-col items-center space-y-2 py-6">
        <Link href="/">
          <Image
            src="/ghaleb_logo.png"
            alt="Ghaleb Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </Link>
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/gdamaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-600"
          >
            <FaLinkedin className="w-10 h-10" />
          </Link>
          <Link
            href="https://github.com/ghaleb-d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-600"
          >
            <FaGithub className="w-10 h-10" />
          </Link>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
