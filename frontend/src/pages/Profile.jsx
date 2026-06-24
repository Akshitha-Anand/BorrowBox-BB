import React from 'react';
import { User, Mail, Building2, GraduationCap, Package, Edit3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  /* Fallback for when not logged in */
  const profile = user || {
    name: 'Guest User',
    email: 'guest@campus.edu',
    department: 'Computer Science',
    year: 3,
  };

  const stats = [
    { label: 'Items Posted', value: 5 },
    { label: 'Items Borrowed', value: 3 },
    { label: 'Active Listings', value: 2 },
  ];

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-textPrimary">Profile</h1>
          <p className="mt-2 text-textSecondary">Your account information and stats</p>
        </div>

        {/* Profile Card */}
        <div className="card p-8 animate-slide-up">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
            {/* Avatar */}
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
              <User className="h-10 w-10 text-primary" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-textPrimary">{profile.name}</h2>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Mail className="h-4 w-4 text-primary/60" />
                  <span className="text-sm text-textSecondary">{profile.email}</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Building2 className="h-4 w-4 text-primary/60" />
                  <span className="text-sm text-textSecondary">{profile.department}</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <GraduationCap className="h-4 w-4 text-primary/60" />
                  <span className="text-sm text-textSecondary">Year {profile.year}</span>
                </div>
              </div>
            </div>

            {/* Edit button */}
            <button className="btn-secondary !px-4 !py-2 !text-xs flex-shrink-0">
              <Edit3 className="h-3.5 w-3.5" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {stats.map(({ label, value }) => (
            <div key={label} className="card p-6 text-center">
              <p className="text-3xl font-bold text-primary">{value}</p>
              <p className="mt-1 text-sm text-textSecondary">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
