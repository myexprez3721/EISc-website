import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { text, sourceLanguage, targetLanguage, provider, model } = await request.json();

    if (!text || !sourceLanguage || !targetLanguage || !provider) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check API keys
    const apiKey = process.env[
      provider === 'openai'
        ? 'OPENAI_API_KEY'
        : provider === 'anthropic'
          ? 'ANTHROPIC_API_KEY'
          : 'GOOGLE_API_KEY'
    ];

    if (!apiKey) {
      return NextResponse.json(
        {
          error: `${provider} API key not configured. Please add it to your environment variables.`,
        },
        { status: 500 }
      );
    }

    let translation = '';

    if (provider === 'openai') {
      translation = await translateWithOpenAI(text, sourceLanguage, targetLanguage, apiKey);
    } else if (provider === 'anthropic') {
      translation = await translateWithAnthropic(text, sourceLanguage, targetLanguage, apiKey);
    } else if (provider === 'google') {
      translation = await translateWithGoogle(text, sourceLanguage, targetLanguage, apiKey);
    }

    return NextResponse.json({ translation });
  } catch (error: any) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: error.message || 'Translation failed' },
      { status: 500 }
    );
  }
}

async function translateWithOpenAI(
  text: string,
  sourceLanguage: string,
  targetLanguage: string,
  apiKey: string
): Promise<string> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a professional translator. Translate the following text from ${sourceLanguage} to ${targetLanguage}. Maintain the original meaning, tone, and context. Only output the translated text without any explanations or additional commentary.`,
        },
        {
          role: 'user',
          content: text,
        },
      ],
      temperature: 0.3,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error?.message || 'Unknown error'}`);
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
}

async function translateWithAnthropic(
  text: string,
  sourceLanguage: string,
  targetLanguage: string,
  apiKey: string
): Promise<string> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      system: `You are a professional translator. Translate the following text from ${sourceLanguage} to ${targetLanguage}. Maintain the original meaning, tone, and context. Only output the translated text without any explanations or additional commentary.`,
      messages: [
        {
          role: 'user',
          content: text,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Anthropic API error: ${error.error?.message || 'Unknown error'}`);
  }

  const data = await response.json();
  return data.content[0].text.trim();
}

async function translateWithGoogle(
  text: string,
  sourceLanguage: string,
  targetLanguage: string,
  apiKey: string
): Promise<string> {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `Translate the following text from ${sourceLanguage} to ${targetLanguage}. Maintain the original meaning, tone, and context. Only output the translated text without any explanations or additional commentary.\n\nText to translate:\n${text}`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Google API error: ${error.error?.message || 'Unknown error'}`);
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text.trim();
}
