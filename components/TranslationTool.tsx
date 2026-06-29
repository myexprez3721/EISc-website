'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

type Provider = 'openai' | 'anthropic' | 'google';
type Language = 'en' | 'ms' | 'zh' | 'ja' | 'ko' | 'th' | 'id' | 'vi' | 'my' | 'bn';

interface Model {
  id: string;
  name: string;
  description: string;
}

const LANGUAGES: Record<Language, string> = {
  en: 'English',
  ms: 'Malay',
  zh: 'Chinese',
  ja: 'Japanese',
  ko: 'Korean',
  th: 'Thai',
  id: 'Indonesian',
  vi: 'Vietnamese',
  my: 'Burmese',
  bn: 'Bengali',
};

const MODELS: Record<Provider, Model[]> = {
  openai: [
    { id: 'gpt-4o-mini', name: 'GPT-4o Mini', description: 'Fast, efficient, great for most translations' },
  ],
  anthropic: [
    { id: 'claude-3-haiku-20240307', name: 'Claude 3 Haiku', description: 'Fast and capable, excellent for nuanced translation' },
  ],
  google: [
    { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash', description: 'Quick and versatile, great for diverse content' },
  ],
};

export default function TranslationTool() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [provider, setProvider] = useState<Provider>('openai');
  const [sourceLanguage, setSourceLanguage] = useState<Language>('en');
  const [targetLanguage, setTargetLanguage] = useState<Language>('ms');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [dailyWordCount, setDailyWordCount] = useState(0);
  const [remainingWords, setRemainingWords] = useState(400);

  const DAILY_LIMIT = 400;

  // Load daily word count from localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('translation-date');
    const storedCount = parseInt(localStorage.getItem('translation-count') || '0', 10);

    if (stored === today) {
      setDailyWordCount(storedCount);
      setRemainingWords(Math.max(0, DAILY_LIMIT - storedCount));
    } else {
      localStorage.setItem('translation-date', today);
      localStorage.setItem('translation-count', '0');
      setDailyWordCount(0);
      setRemainingWords(DAILY_LIMIT);
    }
  }, []);

  // Count words in source text
  useEffect(() => {
    const count = sourceText.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWordCount(count);
  }, [sourceText]);

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      setError('Please enter some text to translate');
      return;
    }

    if (wordCount > remainingWords) {
      setError(`Daily limit exceeded. You have ${remainingWords} words remaining today.`);
      return;
    }

    if (sourceLanguage === targetLanguage) {
      setError('Source and target languages must be different');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/translate', {
        text: sourceText,
        sourceLanguage: LANGUAGES[sourceLanguage],
        targetLanguage: LANGUAGES[targetLanguage],
        provider,
        model: MODELS[provider][0].id,
      });

      setTranslatedText(response.data.translation);

      // Update daily count
      const newCount = dailyWordCount + wordCount;
      setDailyWordCount(newCount);
      setRemainingWords(Math.max(0, DAILY_LIMIT - newCount));
      localStorage.setItem('translation-count', newCount.toString());
    } catch (err: any) {
      setError(err.response?.data?.error || 'Translation failed. Make sure API keys are configured.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setSourceText('');
    setTranslatedText('');
    setError('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
  };

  return (
    <div>
      {/* Control Panel */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">AI Provider</label>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value as Provider)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          >
            <option value="openai">ChatGPT (OpenAI)</option>
            <option value="anthropic">Claude (Anthropic)</option>
            <option value="google">Gemini (Google)</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">{MODELS[provider][0].description}</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">From</label>
          <select
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value as Language)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          >
            {Object.entries(LANGUAGES).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">To</label>
          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value as Language)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          >
            {Object.entries(LANGUAGES).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col justify-end">
          <button onClick={handleTranslate} disabled={isLoading || wordCount > remainingWords} className="btn-primary">
            {isLoading ? 'Translating...' : 'Translate'}
          </button>
        </div>
      </div>

      {/* Daily Limit Progress */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-gray-900">Daily Limit</span>
          <span className="text-sm text-gray-600">
            {dailyWordCount} / {DAILY_LIMIT} words used
          </span>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${(dailyWordCount / DAILY_LIMIT) * 100}%` }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-2">
          {remainingWords > 0 ? `${remainingWords} words remaining today` : 'Daily limit reached. Come back tomorrow!'}
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {/* Translation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Source Text */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-semibold text-gray-900">Original Text</label>
            <span className="text-xs text-gray-500">{wordCount} words</span>
          </div>
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Paste your text here..."
            rows={8}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
          />
        </div>

        {/* Translated Text */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-semibold text-gray-900">Translation</label>
            {translatedText && (
              <button
                onClick={handleCopy}
                className="text-xs text-primary hover:underline font-semibold"
              >
                Copy
              </button>
            )}
          </div>
          <textarea
            value={translatedText}
            readOnly
            placeholder="Translation will appear here..."
            rows={8}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 resize-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button onClick={handleClear} className="btn-secondary">
          Clear All
        </button>
      </div>
    </div>
  );
}
