'use client';

import { useState } from 'react';
import { MarketSummary } from './MarketSummary';

export const Homepage: React.FC = () => {
  const [activeNav, setActiveNav] = useState<'products' | 'community' | 'markets' | 'brokers' | 'more'>('markets');
  const [language, setLanguage] = useState<'EN' | 'ES' | 'FR' | 'DE' | 'ZH'>('EN');

  const languages = ['EN', 'ES', 'FR', 'DE', 'ZH'] as const;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 glass">
        <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TV</span>
            </div>
            <span className="font-bold text-lg text-slate-100">TradingView</span>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveNav('products')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'products' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveNav('community')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'community' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Community
            </button>
            <button
              onClick={() => setActiveNav('markets')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'markets' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Markets
            </button>
            <button
              onClick={() => setActiveNav('brokers')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'brokers' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Brokers
            </button>
            <button
              onClick={() => setActiveNav('more')}
              className={`text-sm font-medium transition-colors ${
                activeNav === 'more' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              More
            </button>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as typeof language)}
              className="bg-slate-800 text-slate-200 text-sm px-3 py-2 rounded border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>

            {/* CTA Buttons */}
            <button className="text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors">
              Sign in
            </button>
            <button className="btn-primary text-sm">Get started</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20 px-4">
            {/* Get Started Section (Left Sidebar) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="glass p-6 rounded-lg border border-slate-800">
                  <h3 className="text-sm font-bold text-slate-200 mb-4">GET STARTED</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-blue-500 hover:text-blue-400 transition-colors">
                      📊 Chart
                    </a>
                    <a href="#" className="block text-sm text-blue-500 hover:text-blue-400 transition-colors">
                      🔍 Screener
                    </a>
                    <a href="#" className="block text-sm text-blue-500 hover:text-blue-400 transition-colors">
                      📈 Heatmaps
                    </a>
                    <a href="#" className="block text-sm text-blue-500 hover:text-blue-400 transition-colors">
                      📅 Economic Calendar
                    </a>
                    <a href="#" className="block text-sm text-blue-500 hover:text-blue-400 transition-colors">
                      💡 Ideas
                    </a>
                    <a href="#" className="block text-sm text-blue-500 hover:text-blue-400 transition-colors">
                      🤖 Pine Script
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="lg:col-span-3">
              <div
                className="relative h-96 rounded-lg overflow-hidden glass border border-slate-800 mb-12 flex items-center justify-center"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 58, 138, 0.2) 100%), url("data:image/svg+xml,%3Csvg width=%27100%27 height=%27100%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0 50 Q25 0 50 50 T100 50%27 stroke=%27rgba(59,130,246,0.1)%27 fill=%27none%27/%3E%3C/svg%3E")',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                {/* Hero Text */}
                <div className="text-center z-10 px-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    Look First
                  </h1>
                  <p className="text-xl text-slate-400 mb-2">Then Leap</p>
                  <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
                    The best trades require research, then commitment.
                  </p>
                  <button className="btn-primary px-8 py-3 text-lg">
                    Join 100M Traders →
                  </button>
                </div>

                {/* Decorative Charts in Background */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <polyline
                      points="0,150 50,120 100,140 150,90 200,110 250,60 300,80 350,40 400,60"
                      stroke="rgb(59, 130, 246)"
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Market Summary Section */}
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Market Summary</h2>
                <MarketSummary />
              </div>
            </div>
          </div>

          {/* Community Ideas Section */}
          <div className="px-4 mb-20">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Community Ideas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Bitcoin - Volatility-Contraction',
                  symbol: 'BTCUSDT',
                  type: 'Long',
                  author: 'UmutTrades',
                  date: 'Feb 20',
                },
                {
                  title: 'GBP/JPY Coiled Like a Spring',
                  symbol: 'GBPJPY',
                  type: 'Short',
                  author: 'AM_AlphaTrading',
                  date: '9 hours ago',
                },
                {
                  title: 'Gold - Resistance Flip',
                  symbol: 'XAUUSD',
                  type: 'Long',
                  author: 'melikatrader94',
                  date: 'Feb 20',
                },
              ].map((idea, i) => (
                <div key={i} className="glass p-4 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{idea.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{idea.symbol}</p>
                    </div>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded ${
                        idea.type === 'Long'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {idea.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>by {idea.author}</span>
                    <span>{idea.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="px-4 mb-20">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Everything You Need</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '📊', title: 'Advanced Charts', desc: 'Professional charting with indicators' },
                { icon: '🔍', title: 'Stock Screener', desc: 'Find trading opportunities instantly' },
                { icon: '🔗', title: 'Trading Integration', desc: 'Trade directly from charts' },
                { icon: '📈', title: 'Pine Script', desc: 'Create custom indicators' },
                { icon: '📅', title: 'Economic Calendar', desc: 'Track market-moving events' },
                { icon: '👥', title: 'Community', desc: 'Share ideas with 100M traders' },
              ].map((feature, i) => (
                <div key={i} className="glass p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {[
              {
                title: 'PRODUCTS',
                links: ['Supercharts', 'Screeners', 'Heatmaps', 'Economic Calendar'],
              },
              {
                title: 'TOOLS',
                links: ['Pine Script', 'Widgets', 'Mobile App', 'Desktop App'],
              },
              {
                title: 'COMMUNITY',
                links: ['Ideas', 'Scripts', 'Social Network', 'Moderators'],
              },
              {
                title: 'COMPANY',
                links: ['About', 'Careers', 'Blog', 'Media Kit'],
              },
              {
                title: 'LEGAL',
                links: ['Terms', 'Privacy', 'Policies', 'Security'],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="text-xs font-bold text-slate-300 mb-3 uppercase">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-6 flex items-center justify-between text-xs text-slate-500">
            <p>© 2026 TradingView, Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-300 transition-colors">
                X
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
