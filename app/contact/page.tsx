'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you would send this to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main>
      {/* Page Header */}
      <section className="section-padding bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h1 className="hero-title mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Whether you have a project in mind or just want to say hello, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:myexprez@gmail.com" className="text-primary hover:underline">
                    myexprez@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+60163310747" className="text-primary hover:underline">
                    +60 16-3310747
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Malaysia</p>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Response Time</h3>
                  <p className="text-gray-600">We typically respond to inquiries within 24 hours.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your message and will get back to you soon. Check your email for confirmation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="+60 16-XXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="translation">Translation</option>
                        <option value="copywriting">Copywriting</option>
                        <option value="media-monitoring">Media Monitoring</option>
                        <option value="editing">Editing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
