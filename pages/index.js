import React, { useState } from 'react';
import Head from 'next/head';
import { Building2, Brain, Sparkles } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xdkokwjl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const features = [
    {
      icon: Building2,
      title: "Adaptive Spaces",
      description: "Environments that evolve with your needs"
    },
    {
      icon: Brain,
      title: "Evidence-Based",
      description: "Driven by neuroscience and human behavior"
    },
    {
      icon: Sparkles,
      title: "Future-Ready",
      description: "AI-powered computational design solutions"
    }
  ];

  return (
    <div>
      <Head>
        <title>ARCHREALL - Responsive spatial design for human-centred wellbeing</title>
        <meta name="description" content="Transform your space, enhance your life with ARCHREALL's responsive spatial design." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        {/* Main title with enhanced glow effect */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 blur-3xl animate-pulse"/>
          <h1 
            className="text-7xl md:text-9xl font-bold tracking-tight relative"
            style={{ 
              fontFamily: 'Koulen, sans-serif',
              textShadow: '0 0 40px rgba(255,255,255,0.2)',
            }}
          >
            ARCHREALL
          </h1>
        </div>

        {/* Refined tagline with quote styling */}
        <div className="relative mb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"/>
          <p 
            className="text-lg md:text-xl tracking-wider text-center italic font-light"
            style={{ 
              color: 'rgba(255,255,255,0.7)',
              textShadow: '0 0 20px rgba(255,255,255,0.1)',
              letterSpacing: '0.05em'
            }}
          >
            ⟨ Responsive spatial design
            <br />
            <span className="opacity-90">for human-centred wellbeing ⟩</span>
          </p>
        </div>

        {/* Features row */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={`transition-all duration-500 ${isHovered === index ? 'scale-110' : 'scale-100'}`}>
                <feature.icon 
                  className={`h-12 w-12 mx-auto mb-4 transition-all duration-500 ${
                    isHovered === index ? 'text-blue-400' : 'text-gray-400'
                  }`}
                />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Email signup */}
        <div className="relative max-w-md w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 blur-xl animate-pulse"/>
          <form 
            onSubmit={handleSubmit}
            className="relative bg-black border border-gray-800 p-1 rounded-lg"
          >
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Join the waiting list"
                className="flex-grow bg-black text-white px-4 py-3 rounded-l focus:outline-none placeholder-gray-500"
                style={{ fontFamily: 'Koulen, sans-serif' }}
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors font-medium"
                style={{ fontFamily: 'Koulen, sans-serif' }}
              >
                Join
              </button>
            </div>
          </form>
          {submitted && (
            <p className="text-green-400 text-sm mt-2 text-center">Thank you for joining the waiting list!</p>
          )}
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 text-gray-600 text-sm">
          Transforming spaces, enhancing lives
        </footer>
      </main>
    </div>
  );
}