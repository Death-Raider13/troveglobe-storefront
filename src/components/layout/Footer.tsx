
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">KNITTED GOURMET</h3>
            <p className="text-primary-foreground/80 text-sm">
              Discover the latest trends and timeless classics in our curated collection.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/women" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/category/men" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/category/sale" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 text-sm mb-2">
              Subscribe to receive updates on new arrivals and special offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="rounded-l-md border-0 bg-primary-foreground text-primary py-2 px-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-accent-foreground rounded-r-md px-3 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {year} KNITTED GOURMET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
