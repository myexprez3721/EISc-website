'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Translation',
      description:
        'Professional multilingual translation for documents, website copy, press releases, speeches, reports, and more. We ensure every message maintains its meaning and cultural relevance across languages.',
      icon: '📝',
    },
    {
      title: 'Copywriting',
      description:
        'Localized marketing copy that resonates with your target audience. We blend cultural understanding with compelling messaging to connect with local markets.',
      icon: '✍️',
    },
    {
      title: 'Media Monitoring',
      description:
        'Stay informed about what's being said about your brand in Chinese media and the broader Asia-Pacific region. We provide actionable insights into local media landscapes.',
      icon: '📰',
    },
    {
      title: 'Editing',
      description:
        'Refine and perfect your translated content. Our editing services ensure clarity, consistency, and cultural appropriateness across all languages.',
      icon: '✔️',
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="section-padding bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h1 className="hero-title mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive language solutions tailored to your needs. From translation to media monitoring, we deliver with accuracy and cultural understanding.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="section-title">Supported Formats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Microsoft Word', 'Excel', 'PowerPoint', 'PDF', 'Google Docs', 'Plain Text', 'Websites', 'Presentations'].map((format) => (
              <div key={format} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">{format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a single translation or ongoing support, we're here to help bridge your communication gaps.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded font-semibold transition-colors inline-block"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
