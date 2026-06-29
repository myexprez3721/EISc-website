'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/eis-logo.png"
              alt="EIS Agency"
              width={50}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/translate" className="hover:text-primary transition-colors">
              Translate
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <Link href="/" className="block py-2 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="block py-2 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="block py-2 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/translate" className="block py-2 hover:text-primary transition-colors">
              Translate
            </Link>
            <Link href="/contact" className="block py-2 mt-2 btn-primary text-center">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
