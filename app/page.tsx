'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import LanguagesSection from '@/components/LanguagesSection';
import WhyChooseSection from '@/components/WhyChooseSection';

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Quick CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">What We Offer</h2>
            <p className="text-lg text-gray-600 mb-8">
              From translation to media monitoring, we provide comprehensive language solutions across 10 Asian languages with a focus on accuracy, speed, and cultural understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/translate" className="btn-secondary">
                Try Free Translation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LanguagesSection />
      <WhyChooseSection />

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you need professional translation, copywriting, media monitoring, or just want to chat, we're here to help.
          </p>
          <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded font-semibold transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
