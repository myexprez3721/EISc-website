'use client';

import TranslationTool from '@/components/TranslationTool';
import Link from 'next/link';

export default function Translate() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-padding bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h1 className="hero-title mb-4">Free Machine Translation</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Try our instant translation tool powered by AI. Works with ChatGPT, Claude, and Gemini. 400 words per day free.
          </p>
        </div>
      </section>

      {/* Translation Tool */}
      <section className="section-padding bg-white">
        <div className="container">
          <TranslationTool />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-primary mb-2">1. Choose Your AI Model</h3>
                <p className="text-gray-600">
                  Select from three powerful AI providers: ChatGPT (OpenAI), Claude (Anthropic), or Gemini (Google). Each offers unique strengths.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-primary mb-2">2. Select Languages</h3>
                <p className="text-gray-600">
                  Pick your source and target languages from our 10 supported Asian languages: English, Malay, Chinese, Japanese, Korean, Thai, Indonesian, Vietnamese, Burmese, and Bengali.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-primary mb-2">3. Paste Your Text</h3>
                <p className="text-gray-600">
                  Enter up to 400 words per day. The tool will instantly translate your content while preserving meaning and context.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-primary mb-2">4. Review & Copy</h3>
                <p className="text-gray-600">
                  Read the translated output and copy it directly. If you need human review or polishing, request our professional services below.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary bg-opacity-10 rounded-lg border-l-4 border-primary">
              <h3 className="font-bold text-gray-900 mb-2">Not satisfied with the machine translation?</h3>
              <p className="text-gray-600 mb-4">
                Our professional translators can review, polish, or completely retranslate your content with cultural accuracy and human touch.
              </p>
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                Request Human Translation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h4 className="font-bold text-gray-900 mb-2">What's the difference between the AI models?</h4>
              <p className="text-gray-600">
                Each AI model has its strengths. ChatGPT is great for natural language, Claude excels at nuance and instruction-following, and Gemini offers competitive quality. Try all three to find what works best for you.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="font-bold text-gray-900 mb-2">Is my data safe?</h4>
              <p className="text-gray-600">
                For now, translations are processed through the respective AI providers' APIs. For sensitive content, we recommend requesting professional human translation from our team.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="font-bold text-gray-900 mb-2">Can I translate more than 400 words per day?</h4>
              <p className="text-gray-600">
                The free tier is limited to 400 words per day. For bulk translations or ongoing needs, contact us about our professional translation packages.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="font-bold text-gray-900 mb-2">Which AI model should I use?</h4>
              <p className="text-gray-600">
                Start with your preferred provider. For technical content, Claude often performs well. For creative writing, ChatGPT is strong. For speed, Gemini is lightweight.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
