'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-20 pb-24 md:pt-32 md:pb-32 bg-gradient-to-br from-white via-white to-gray-50">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="hero-title mb-6">
            Bridge Communication <span className="text-primary">Across Asia</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Exprez Ideal Services is your Malaysia-based partner for professional translation, copywriting, media monitoring, and editing across 10 Asian languages. We connect regions through accurate, culturally-sensitive communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <Link href="/translate" className="btn-secondary">
              Try Free Translation
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-gray-600 text-sm">Asian Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2015</div>
              <div className="text-gray-600 text-sm">Est. Since</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-gray-600 text-sm">Fast Turnaround</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
