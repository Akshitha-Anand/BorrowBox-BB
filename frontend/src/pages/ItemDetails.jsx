import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, MessageCircle, ShoppingBag, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SAMPLE_ITEMS = [
  {
    _id: '1',
    title: 'Scientific Calculator',
    description: 'Casio FX-991ES Plus, barely used. Perfect for engineering math.',
    category: 'Electronics',
    condition: 'Like New',
    type: 'sale',
    price: 500,
    image: '',
    owner: { name: 'Alex John', department: 'Engineering', year: 2 },
  },
  {
    _id: '2',
    title: 'Arduino Uno Kit',
    description: 'Complete starter kit with sensors, breadboard, jumper wires and more.',
    category: 'Electronics',
    condition: 'Good',
    type: 'borrow',
    priceType: 'day',
    image: '',
    owner: { name: 'Sarah Lee', department: 'Computer Science', year: 3 },
  },
  {
    _id: '3',
    title: 'Engineering Drawing Kit',
    description: 'Drafter, set squares, compass, protractor — full set.',
    category: 'Tools',
    condition: 'Good',
    type: 'sale',
    price: 300,
    image: '',
    owner: { name: 'Mike Smith', department: 'Mechanical', year: 1 },
  },
  {
    _id: '4',
    title: 'Data Structures Textbook',
    description: 'Cormen CLRS 3rd Edition. Highlighted but in great shape.',
    category: 'Textbooks',
    condition: 'Fair',
    type: 'borrow',
    priceType: 'week',
    image: '',
    owner: { name: 'Emma Doe', department: 'Software Engineering', year: 2 },
  },
  {
    _id: '5',
    title: 'Raspberry Pi 4',
    description: '4GB RAM model with case, power supply and SD card.',
    category: 'Electronics',
    condition: 'Like New',
    type: 'sale',
    price: 4500,
    image: '',
    owner: { name: 'David Chen', department: 'Computer Science', year: 4 },
  },
  {
    _id: '6',
    title: 'Chemistry Lab Coat',
    description: 'White lab coat, size M. Washed and ironed.',
    category: 'Lab Equipment',
    condition: 'Good',
    type: 'borrow',
    priceType: 'day',
    image: '',
    owner: { name: 'Lucy Kim', department: 'Chemistry', year: 1 },
  },
];

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [borrowDuration, setBorrowDuration] = useState('day');

  const ITEM = SAMPLE_ITEMS.find((item) => item._id === id) || SAMPLE_ITEMS[1];

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

            {/* Price / Borrow Info */}
            {ITEM.type === 'sale' ? (
              <p className="mt-3 text-2xl font-bold text-primary">
                ₹{ITEM.price}
              </p>
            ) : (
              <div className="mt-3">
                <p className="text-xl font-bold text-primary flex items-center gap-2">
                  Available for Borrowing
                </p>
                <div className="mt-4 max-w-xs">
                  <label className="block text-sm font-medium text-textSecondary mb-2">
                    Select Borrow Duration:
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-textPrimary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
                    value={borrowDuration}
                    onChange={(e) => setBorrowDuration(e.target.value)}
                  >
                    <option value="day">Per Day</option>
                    <option value="week">Per Week</option>
                    <option value="month">Per Month</option>
                  </select>
                </div>
              </div>
            )}

            {/* Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {ITEM.type && (
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${ITEM.type === 'sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                  {ITEM.type === 'sale' ? 'For Sale' : 'For Borrow'}
                </span>
              )}
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

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              {ITEM.type === 'sale' ? (
                <button 
                  className="btn-primary w-full group py-3 text-base"
                  onClick={() => navigate('/profile')}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Buy Now
                </button>
              ) : (
                <button 
                  className="btn-primary w-full group py-3 text-base"
                  onClick={() => navigate('/profile')}
                >
                  <Clock className="h-5 w-5" />
                  Borrow Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
