import { Link, useNavigate } from 'react-router-dom';
import { Plus, Package } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';
import { SAMPLE_ITEMS } from '../data/sampleItems';

export default function MyListings() {
  const navigate = useNavigate();

  /* Use all sample items as "my listings" for demo — they all have proper images */
  const MY_ITEMS = SAMPLE_ITEMS;

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
              <div key={item._id} className="relative">
                {/* Status badge overlay */}
                <span
                  className={`absolute top-3 left-3 z-10 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold shadow ${
                    item.listingStatus === 'Sold'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {item.listingStatus || 'Pending'}
                </span>
                <ListingCard item={item} onView={(id) => navigate(`/item/${id}`)} />
              </div>
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
