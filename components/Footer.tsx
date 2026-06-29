'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/eis-logo.png"
              alt="EIS Agency"
              width={60}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm">
              Malaysia-based language support company connecting regions through communication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/translate" className="hover:text-primary transition-colors">
                  Translator
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Translation</li>
              <li>Copywriting</li>
              <li>Media Monitoring</li>
              <li>Editing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:myexprez@gmail.com" className="hover:text-primary transition-colors">
                  myexprez@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+60163310747" className="hover:text-primary transition-colors">
                  +60 16-3310747
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} EIS Agency. All rights reserved.</p>
            <p>Connecting regions through language.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
