'use client';

export default function LanguagesSection() {
  const languages = [
    { name: 'English', flag: '🇬🇧' },
    { name: 'Malay', flag: '🇲🇾' },
    { name: 'Chinese', flag: '🇨🇳' },
    { name: 'Japanese', flag: '🇯🇵' },
    { name: 'Korean', flag: '🇰🇷' },
    { name: 'Thai', flag: '🇹🇭' },
    { name: 'Indonesian', flag: '🇮🇩' },
    { name: 'Vietnamese', flag: '🇻🇳' },
    { name: 'Burmese', flag: '🇲🇲' },
    { name: 'Bengali', flag: '🇧🇩' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Languages We Speak</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Expertise across 10 major Asian languages, bridging communication gaps across Malaysia and the broader Asia-Pacific region.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-gray-50 hover:bg-primary hover:text-white p-6 rounded-lg text-center transition-colors"
            >
              <div className="text-4xl mb-2">{lang.flag}</div>
              <div className="font-semibold">{lang.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
