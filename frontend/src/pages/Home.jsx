import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, Search, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    icon: Share2,
    title: 'Share Easily',
    desc: 'Post items in minutes and help others.',
  },
  {
    icon: Search,
    title: 'Find What You Need',
    desc: 'Search and discover items around campus.',
  },
  {
    icon: DollarSign,
    title: 'Save Money',
    desc: 'Borrow or buy at affordable prices.',
  },
];

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 text-center animate-fade-in">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Intra-Campus Sharing Platform</span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-textPrimary sm:text-5xl lg:text-6xl">
          Borrow{' '}
          <span className="italic text-primary">Anything</span>{' '}
          on Campus
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-xl text-base text-textSecondary sm:text-lg">
          Post your unused calculators, books, Arduino kits, lab equipment, and more.
          Let fellow students borrow or buy what they need.
        </p>

        {/* CTAs */}
        {!user && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/signup" className="btn-primary group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/login" className="btn-secondary">
              I have an account
            </Link>
          </div>
        )}
      </section>

      {/* ── Feature Cards ── */}
      <section className="mx-auto max-w-5xl px-6 pb-24 animate-slide-up" style={{ animationDelay: '0.15s' }}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-textSecondary">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
