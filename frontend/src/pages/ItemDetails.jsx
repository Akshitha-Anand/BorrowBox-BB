import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* Placeholder item for UI display */
const ITEM = {
  _id: '1',
  title: 'Arduino Uno Kit',
  description:
    'Complete Arduino Uno R3 starter kit including the board, USB cable, breadboard, jumper wires, LED assortment, resistors, push buttons, potentiometer, and a comprehensive project book. It has a lot of features and is great for beginners who want to learn electronics and programming.',
  category: 'Electronics',
  condition: 'Good',
  price: 150,
  priceType: 'day',
  image: '',
  owner: {
    name: 'Alex John',
    department: 'Computer Science',
    year: 3,
  },
};

export default function ItemDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Back link */}
        <Link
          to="/marketplace"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primaryDark transition-colors animate-fade-in"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 animate-slide-up">
          {/* Image */}
          <div className="card overflow-hidden">
            <div className="flex h-72 items-center justify-center bg-gray-50 lg:h-96">
              {ITEM.image ? (
                <img src={ITEM.image} alt={ITEM.title} className="h-full w-full object-cover" />
              ) : (
                <svg className="h-16 w-16 text-primary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="card p-8">
            <h1 className="text-2xl font-bold text-textPrimary">{ITEM.title}</h1>

            {/* Price */}
            <p className="mt-3 text-2xl font-bold text-primary">
              ₹{ITEM.price} <span className="text-sm font-normal text-textSecondary">/ {ITEM.priceType}</span>
            </p>

            {/* Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="badge">{ITEM.category}</span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-textSecondary">
                {ITEM.condition}
              </span>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Description</h3>
              <p className="text-sm leading-relaxed text-textSecondary">{ITEM.description}</p>
            </div>

            {/* Owner */}
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-background p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-textPrimary">{ITEM.owner.name}</p>
                <p className="text-xs text-textSecondary">
                  {ITEM.owner.department} • Year {ITEM.owner.year}
                </p>
              </div>
            </div>

            {/* Contact button */}
            <button className="btn-primary w-full mt-6 group">
              <MessageCircle className="h-4 w-4" />
              Contact Owner
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
