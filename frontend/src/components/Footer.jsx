import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold text-primary">BorrowBox</span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-textSecondary">
          &copy; {new Date().getFullYear()} BorrowBox. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="text-primary/60 hover:text-primary transition-colors">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="text-primary/60 hover:text-primary transition-colors">
            <FaTwitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" className="text-primary/60 hover:text-primary transition-colors">
            <FaInstagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
