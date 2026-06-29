'use client';

export default function WhyChooseSection() {
  const reasons = [
    {
      title: 'Regional Expertise',
      description: 'Deep knowledge of Malaysia and cross-cultural communication nuances across Asia.',
      icon: '🗺️',
    },
    {
      title: 'Speed & Responsiveness',
      description: 'Fast turnaround times without compromising on accuracy and cultural sensitivity.',
      icon: '⚡',
    },
    {
      title: 'Expanded Language Coverage',
      description: '10 Asian languages covering major markets in the Asia-Pacific region.',
      icon: '🌍',
    },
    {
      title: 'Cultural Understanding',
      description: 'Every message feels natural in its intended market through culturally-aware translation.',
      icon: '🤝',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="section-title">Why Choose EIS Agency</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-100 hover:border-primary hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
