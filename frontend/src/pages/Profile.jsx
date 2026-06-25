import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Building2,
  GraduationCap,
  Edit3,
  Package,
  Eye,
  BookOpen,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SAMPLE_ITEMS } from '../data/sampleItems';

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  /* Fallback for when not logged in — use Alex John as demo */
  const profile = user || {
    name: 'Alex John',
    email: 'alex.john@college.edu',
    department: 'Computer Science Engineering',
    year: '3rd Year',
    memberSince: '10 May 2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJohn',
  };

  /* Activity stats */
  const activity = [
    { icon: Package, value: 8, label: 'Items Posted' },
    { icon: Eye, value: 12, label: 'Items Viewed' },
    { icon: BookOpen, value: 5, label: 'Items Borrowed' },
  ];

  /* Show first 3 sample listings as "my listings" for demo */
  const myListings = SAMPLE_ITEMS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-textPrimary">Profile</h1>
          <p className="mt-2 text-textSecondary">Your account information and stats</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left col — Avatar card */}
          <div className="lg:col-span-1">
            <div className="card p-6 flex flex-col items-center text-center animate-slide-up">
              {/* Avatar */}
              <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4 bg-primary/10">
                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                )}
              </div>

              <h2 className="text-xl font-bold text-textPrimary">{profile.name}</h2>
              <p className="mt-1 text-sm text-textSecondary">{profile.email}</p>
              <p className="mt-1 text-xs text-primary font-medium">
                {profile.department}
              </p>
              <p className="text-xs text-textSecondary">{profile.year}</p>

              <button className="btn-secondary !px-5 !py-2 !text-xs mt-4 w-full flex items-center justify-center gap-1.5">
                <Edit3 className="h-3.5 w-3.5" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Right col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Profile Overview */}
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.05s' }}>
              <h3 className="text-base font-bold text-textPrimary mb-4">Profile Overview</h3>
              <div className="divide-y divide-gray-100">
                {[
                  { label: 'Department', value: profile.department },
                  { label: 'Year', value: profile.year },
                  { label: 'Member Since', value: profile.memberSince || '10 May 2024' },
                  { label: 'Email', value: profile.email },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between py-2.5 text-sm">
                    <span className="text-textSecondary">{label}</span>
                    <span className="font-medium text-textPrimary text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Activity */}
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-base font-bold text-textPrimary mb-4">My Activity</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {activity.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="rounded-xl bg-primary/5 p-4">
                    <p className="text-2xl font-bold text-primary">{value}</p>
                    <p className="mt-1 text-xs text-textSecondary">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* My Listings */}
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <h3 className="text-base font-bold text-textPrimary mb-4">My Listings</h3>
              <div className="divide-y divide-gray-100">
                {myListings.map((listing) => (
                  <div
                    key={listing._id}
                    className="flex items-center gap-4 py-3 cursor-pointer hover:bg-background rounded-lg px-2 -mx-2 transition-colors"
                    onClick={() => navigate(`/item/${listing._id}`)}
                  >
                    <div className="h-12 w-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-textPrimary truncate">
                        {listing.title}
                      </p>
                      <p className="text-xs text-textSecondary">
                        {listing.type === 'sale'
                          ? `₹${listing.price}`
                          : `Borrow / per ${listing.priceType}`}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium flex-shrink-0 ${
                        listing.listingStatus === 'Sold'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {listing.listingStatus || 'Pending'}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="mt-4 w-full text-sm font-medium text-primary hover:text-primaryDark flex items-center justify-center gap-1 transition-colors"
                onClick={() => navigate('/my-listings')}
              >
                View All Listings →
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
