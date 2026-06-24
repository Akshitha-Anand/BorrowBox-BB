import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';

const CATEGORIES = ['All', 'Textbooks', 'Electronics', 'Lab Equipment', 'Tools', 'Other'];

/* Placeholder items for UI display */
const SAMPLE_ITEMS = [
  {
    _id: '1',
    title: 'Scientific Calculator',
    description: 'Casio FX-991ES Plus, barely used. Perfect for engineering math.',
    category: 'Electronics',
    condition: 'Like New',
    price: 50,
    priceType: 'day',
    image: '',
  },
  {
    _id: '2',
    title: 'Arduino Uno Kit',
    description: 'Complete starter kit with sensors, breadboard, jumper wires and more.',
    category: 'Electronics',
    condition: 'Good',
    price: 150,
    priceType: 'day',
    image: '',
  },
  {
    _id: '3',
    title: 'Engineering Drawing Kit',
    description: 'Drafter, set squares, compass, protractor — full set.',
    category: 'Tools',
    condition: 'Good',
    price: 30,
    priceType: 'day',
    image: '',
  },
  {
    _id: '4',
    title: 'Data Structures Textbook',
    description: 'Cormen CLRS 3rd Edition. Highlighted but in great shape.',
    category: 'Textbooks',
    condition: 'Fair',
    price: 80,
    priceType: 'week',
    image: '',
  },
  {
    _id: '5',
    title: 'Raspberry Pi 4',
    description: '4GB RAM model with case, power supply and SD card.',
    category: 'Electronics',
    condition: 'Like New',
    price: 200,
    priceType: 'day',
    image: '',
  },
  {
    _id: '6',
    title: 'Chemistry Lab Coat',
    description: 'White lab coat, size M. Washed and ironed.',
    category: 'Lab Equipment',
    condition: 'Good',
    price: 20,
    priceType: 'day',
    image: '',
  },
];

export default function Marketplace() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = SAMPLE_ITEMS.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-textPrimary">Marketplace</h1>
          <p className="mt-2 text-textSecondary">Browse items available on campus</p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-slide-up">
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-12"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-button'
                    : 'bg-white text-textSecondary border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {filteredItems.map((item) => (
              <ListingCard key={item._id} item={item} onView={(id) => navigate(`/item/${id}`)} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="h-12 w-12 text-primary/30 mb-4" />
            <h3 className="text-lg font-semibold text-textPrimary">No items found</h3>
            <p className="mt-1 text-sm text-textSecondary">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
