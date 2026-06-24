import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

/**
 * ListingCard – Displays a single item card on Marketplace / My Listings.
 * Matches the design spec: white card, rounded-xl, soft shadow, hover lift effect,
 * image, title, description, category + condition badges, price, heart icon.
 */
export default function ListingCard({ item, onView }) {
  const {
    _id,
    title = 'Untitled Item',
    image,
    description = '',
    category = '',
    condition = '',
    price = 0,
    priceType = 'day',
  } = item || {};

  return (
    <div
      className="card group cursor-pointer overflow-hidden"
      onClick={() => onView && onView(_id)}
    >
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden bg-gray-50">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-primary/30">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-textPrimary line-clamp-1">{title}</h3>
        <p className="mt-1 text-sm text-textSecondary line-clamp-2">{description}</p>

        {/* Category & Condition badges */}
        {(category || condition) && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {category && <span className="badge">{category}</span>}
            {condition && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-textSecondary">
                {condition}
              </span>
            )}
          </div>
        )}

        {/* Price & Heart */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-bold text-primary">
            ₹{price} <span className="text-xs font-normal text-textSecondary">/ {priceType}</span>
          </span>
          <button
            aria-label="Add to wishlist"
            className="rounded-full p-2 text-gray-300 transition-colors hover:text-red-400 hover:bg-red-50"
            onClick={(e) => { e.stopPropagation(); }}
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
