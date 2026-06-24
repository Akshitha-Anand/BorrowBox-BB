import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-6 py-32 text-center animate-fade-in">
        <h1 className="text-8xl font-bold text-primary/20">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-textPrimary">Page not found</h2>
        <p className="mt-2 text-textSecondary max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8 group">
          <Home className="h-4 w-4" />
          Go Home
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
