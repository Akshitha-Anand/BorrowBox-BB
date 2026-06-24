import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Image as ImageIcon, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CATEGORIES = ['Textbooks', 'Electronics', 'Lab Equipment', 'Tools', 'Other'];
const CONDITIONS = ['Like New', 'Good', 'Fair', 'Worn'];

export default function AddItem() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    price: '',
    priceType: 'day',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, category, condition, price } = form;
    if (!title.trim() || !description.trim() || !category || !condition || !price) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    // TODO: connect to backend API
    setTimeout(() => {
      setLoading(false);
      navigate('/my-listings');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />

      <div className="mx-auto max-w-2xl px-6 py-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-textPrimary">Add Item</h1>
          <p className="mt-2 text-textSecondary">Post an item for others to borrow or buy</p>
        </div>

        <div className="card p-8 animate-slide-up">
          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Image upload area */}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-primary">
                Item Photo
              </label>
              <div className="flex h-40 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 transition-colors hover:border-primary/40 hover:bg-primary/5 cursor-pointer">
                <div className="text-center">
                  <ImageIcon className="mx-auto h-8 w-8 text-primary/40" />
                  <p className="mt-2 text-sm text-textSecondary">Click to upload an image</p>
                  <p className="text-xs text-textSecondary/60">PNG, JPG up to 5MB</p>
                </div>
              </div>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-primary">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="e.g., Arduino Uno Kit"
                value={form.title}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-primary">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Describe the item, its features, and condition..."
                value={form.description}
                onChange={handleChange}
                className="input-field resize-none"
              />
            </div>

            {/* Category & Condition */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="category" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-primary">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="input-field appearance-none"
                >
                  <option value="" disabled>Select category…</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="condition" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-primary">
                  Condition
                </label>
                <select
                  id="condition"
                  name="condition"
                  value={form.condition}
                  onChange={handleChange}
                  className="input-field appearance-none"
                >
                  <option value="" disabled>Select condition…</option>
                  {CONDITIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price & Price Type */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="price" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-primary">
                  Price (₹)
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  placeholder="150"
                  value={form.price}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="priceType" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-primary">
                  Per
                </label>
                <select
                  id="priceType"
                  name="priceType"
                  value={form.priceType}
                  onChange={handleChange}
                  className="input-field appearance-none"
                >
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="sale">Sale (one-time)</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading} className="btn-primary w-full group mt-2">
              {loading ? (
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              ) : (
                <>
                  Post Item
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
