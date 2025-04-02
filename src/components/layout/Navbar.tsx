
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingBag, Search, Menu, X, User, Package2 } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { useOrderTracking } from '@/hooks/use-order-tracking';

const categories = [
  { name: "Women", path: "/category/women" },
  { name: "Men", path: "/category/men" },
  { name: "Accessories", path: "/category/accessories" },
  { name: "Sale", path: "/category/sale" },
];

export const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const { hasActiveOrders } = useOrderTracking();
  const isMobile = useIsMobile();
  
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <nav className="sticky top-0 z-40 w-full bg-background shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden space-x-6 md:flex">
              {categories.map((category) => (
                <Link 
                  key={category.name} 
                  to={category.path} 
                  className="nav-link"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
          
          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <Button variant="ghost" size="icon" onClick={toggleSearch} className="relative">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Order Tracking */}
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/track">
                <Package2 className="h-5 w-5" />
                {hasActiveOrders && (
                  <Badge 
                    className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full p-0 text-xs" 
                    variant="secondary"
                  />
                )}
              </Link>
            </Button>
            
            {/* Account */}
            <Button variant="ghost" size="icon" asChild>
              <Link to="/auth" className="relative">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            
            {/* Cart */}
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {items.length > 0 && (
                  <Badge 
                    className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs" 
                    variant="destructive"
                  >
                    {items.length}
                  </Badge>
                )}
              </Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
        
        {/* Search Bar */}
        {searchOpen && (
          <div className="mt-4 animate-fade-in">
            <Input 
              className="w-full" 
              placeholder="Search for products..." 
              autoFocus
            />
          </div>
        )}
        
        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="mt-4 space-y-2 animate-fade-in">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to={category.path} 
                className="block py-2 px-4 hover:bg-accent/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link 
              to="/track"
              className="block py-2 px-4 hover:bg-accent/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Track Order
            </Link>
            <Link 
              to="/auth" 
              className="block py-2 px-4 hover:bg-accent/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In / Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
