import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Package,
  Eye,
  BookOpen,
  ShoppingBag,
  Clock,
  User,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SAMPLE_ITEMS } from '../data/sampleItems';

export default function SellerProfile() {
  const { sellerId } = useParams();
  const navigate = useNavigate();

  // Find the seller from sampleItems
  const sellerItem = SAMPLE_ITEMS.find((item) => item.owner._id === sellerId);
  const seller = sellerItem?.owner;

  if (!seller) {
    return (
      <div className="min-h-screen bg-background page-transition">
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <User className="mx-auto h-16 w-16 text-primary/30 mb-4" />
          <h2 className="text-2xl font-bold text-textPrimary">Seller not found</h2>
          <p className="mt-2 text-textSecondary">This seller profile does not exist.</p>
          <button onClick={() => navigate('/marketplace')} className="btn-primary mt-6">
            Back to Marketplace
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // All listings by this seller
  const sellerListings = SAMPLE_ITEMS.filter((item) => item.owner._id === sellerId);

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Back link */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primaryDark transition-colors animate-fade-in"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Item Details
        </button>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left — Avatar + basic info */}
          <div className="lg:col-span-1">
            <div className="card p-6 flex flex-col items-center text-center animate-slide-up">
              {/* Avatar */}
              <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4 bg-primary/10">
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                  }}
                />
              </div>

              <h2 className="text-xl font-bold text-textPrimary">{seller.name}</h2>
              <p className="mt-1 text-sm text-textSecondary">{seller.email}</p>
              <p className="mt-1 text-xs text-primary font-medium">
                {seller.department} • {seller.year}
              </p>

              {/* Edit Profile button (own profile look) */}
              <button className="btn-secondary !px-5 !py-2 !text-xs mt-4 w-full">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Right — Details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Profile Overview */}
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.05s' }}>
              <h3 className="text-base font-bold text-textPrimary mb-4">Profile Overview</h3>
              <div className="divide-y divide-gray-100">
                {[
                  { label: 'Department', value: seller.department },
                  { label: 'Year', value: seller.year },
                  { label: 'Member Since', value: seller.memberSince },
                  { label: 'Email', value: seller.email },
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
                {[
                  { icon: Package, value: seller.itemsPosted, label: 'Items Posted' },
                  { icon: Eye, value: seller.itemsViewed, label: 'Items Viewed' },
                  { icon: BookOpen, value: seller.itemsBorrowed, label: 'Items Borrowed' },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="rounded-xl bg-primary/5 p-4">
                    <p className="text-2xl font-bold text-primary">{value}</p>
                    <p className="mt-1 text-xs text-textSecondary">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Owner */}
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <h3 className="text-base font-bold text-textPrimary mb-4">Contact Owner</h3>
              <p className="text-sm text-textSecondary mb-5">
                Reach out to the owner for this item.
              </p>

              {/* Seller mini-card */}
              <div className="flex items-center gap-4 mb-5">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                  <img
                    src={seller.avatar}
                    alt={seller.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-textPrimary">{seller.name}</p>
                  <p className="text-xs text-textSecondary">{seller.email}</p>
                  <p className="text-xs text-primary font-medium">
                    {seller.department}, {seller.year}
                  </p>
                </div>
              </div>

              {/* Contact icons row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <a
                  href={`mailto:${seller.email}`}
                  className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-background p-3 text-center hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-textPrimary">Email</p>
                    <p className="text-xs text-textSecondary">Send Email</p>
                  </div>
                </a>

                <a
                  href={`tel:${seller.phone}`}
                  className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-background p-3 text-center hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                    <Phone className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-textPrimary">Phone</p>
                    <p className="text-xs text-textSecondary">{seller.phone}</p>
                  </div>
                </a>

                <div className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-background p-3 text-center hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
                    <MapPin className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-textPrimary">Campus</p>
                    <p className="text-xs text-textSecondary">Meet on Campus</p>
                  </div>
                </div>
              </div>

              {/* Info banner */}
              <div className="rounded-xl bg-primary/5 border border-primary/10 px-4 py-3 text-sm text-textSecondary">
                You can contact the owner using the email or phone above, or meet on campus.
              </div>
            </div>

            {/* My Listings */}
            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-base font-bold text-textPrimary mb-4">My Listings</h3>
              <div className="divide-y divide-gray-100">
                {sellerListings.map((listing) => (
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
                        listing.type === 'sale'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {listing.type === 'sale' ? 'Active' : 'Active'}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="mt-4 w-full text-sm font-medium text-primary hover:text-primaryDark flex items-center justify-center gap-1 transition-colors"
                onClick={() => navigate('/marketplace')}
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
