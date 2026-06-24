import { Link, useNavigate } from 'react-router-dom';
import { Plus, Package } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';

/* Placeholder listings for UI display */
const MY_ITEMS = [
  {
    _id: '1',
    title: 'Arduino Uno Kit',
    description: 'Complete starter kit with sensors, breadboard, jumper wires.',
    category: 'Electronics',
    condition: 'Good',
    price: 150,
    priceType: 'day',
    image: '',
  },
  {
    _id: '2',
    title: 'Data Structures Textbook',
    description: 'Cormen CLRS 3rd Edition.',
    category: 'Textbooks',
    condition: 'Fair',
    price: 80,
    priceType: 'week',
    image: '',
  },
];

export default function MyListings() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-textPrimary">My Listings</h1>
            <p className="mt-2 text-textSecondary">View and manage your posted items</p>
          </div>
          <Link to="/add-item" className="btn-primary">
            <Plus className="h-4 w-4" />
            Add New Item
          </Link>
        </div>

        {/* Items Grid */}
        {MY_ITEMS.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-slide-up">
            {MY_ITEMS.map((item) => (
              <ListingCard key={item._id} item={item} onView={(id) => navigate(`/item/${id}`)} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center card p-10">
            <Package className="h-12 w-12 text-primary/30 mb-4" />
            <h3 className="text-lg font-semibold text-textPrimary">No listings yet</h3>
            <p className="mt-1 text-sm text-textSecondary mb-6">
              Start sharing by posting your first item.
            </p>
            <Link to="/add-item" className="btn-primary">
              <Plus className="h-4 w-4" />
              Post Your First Item
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
