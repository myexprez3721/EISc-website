'use client';

import Link from 'next/link';

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-padding bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h1 className="hero-title mb-4">About EIS Agency</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Founded in 2015, we're a Malaysia-based language support company with deep roots in journalism and cross-cultural communication.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Exprez Ideal Services was founded in 2015 with a simple mission: to bridge communication gaps across regions through accurate, culturally-sensitive language services.
              </p>
              <p>
                What started as a freelance translation practice grew into a full-service language support company serving businesses and organizations across Malaysia and beyond. Today, we pride ourselves on our responsive service, dependable turnaround times, and competitive rates.
              </p>
              <p>
                We work with a diverse range of clients—from startups and SMEs to established corporations and NGOs. No matter the industry, we believe language should connect people, not create barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Meet Our Founder</h2>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-2">Eric Shai Chinghan</h3>
              <p className="text-gray-600 font-semibold mb-6">Founder & CEO</p>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Eric brings over a decade of experience in Chinese-language journalism and translation to EIS Agency. His career began at a Malaysian Chinese daily, where he progressed from reporter to Assistant News Editor, gaining valuable experience in news sourcing, interviews, translation, and newsroom coordination.
                </p>

                <p>
                  In 2010, Eric transitioned to freelance translation work, which eventually evolved into Exprez Ideal Services. His foundation in journalism instilled a deep commitment to accuracy, clarity, and cultural sensitivity—principles that guide every project the company undertakes.
                </p>

                <p>
                  Eric holds a Bachelor's degree in Journalism from Renmin University of China in Beijing. He brings with him deep familiarity with the Malaysian Chinese community, local media landscape, and the nuances of cross-cultural communication across Asia.
                </p>

                <div className="mt-6 p-4 bg-primary bg-opacity-10 rounded">
                  <p className="text-primary font-semibold">
                    "Language should connect people, not create barriers. That's what drives everything we do at EIS Agency."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Accuracy</h3>
              <p className="text-gray-600">Every word matters. We ensure precision in every translation and service we deliver.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌏</div>
              <h3 className="text-xl font-bold mb-2">Cultural Understanding</h3>
              <p className="text-gray-600">We don't just translate words—we translate meaning and cultural context.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Responsiveness</h3>
              <p className="text-gray-600">Fast turnaround times without sacrificing quality is our commitment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you need our services or just want to chat, we'd love to hear from you.
          </p>
          <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded font-semibold transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
