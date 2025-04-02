
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingBag, Search, Menu, X, User, Package2, ChevronDown } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { useOrderTracking } from '@/hooks/use-order-tracking';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';

const categories = [
  { name: "Women", path: "/category/women" },
  { name: "Men", path: "/category/men" },
  { name: "Accessories", path: "/category/accessories" },
  { name: "Sale", path: "/category/sale" },
];

const subcategories = {
  women: [
    { name: "Dresses", path: "/category/women/dresses" },
    { name: "Tops", path: "/category/women/tops" },
    { name: "Bottoms", path: "/category/women/bottoms" },
    { name: "Knitwear", path: "/category/women/knitwear" }
  ],
  men: [
    { name: "Shirts", path: "/category/men/shirts" },
    { name: "Pants", path: "/category/men/pants" },
    { name: "Outerwear", path: "/category/men/outerwear" },
    { name: "Knitwear", path: "/category/men/knitwear" }
  ],
  accessories: [
    { name: "Bags", path: "/category/accessories/bags" },
    { name: "Jewelry", path: "/category/accessories/jewelry" },
    { name: "Scarves", path: "/category/accessories/scarves" },
    { name: "Hats", path: "/category/accessories/hats" }
  ]
};

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
            <div className="hidden space-x-2 md:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Women</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[200px]">
                        {subcategories.women.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link 
                                to={item.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Men</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[200px]">
                        {subcategories.men.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link 
                                to={item.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[200px]">
                        {subcategories.accessories.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link 
                                to={item.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/category/sale" className="nav-link">
                      Sale
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
              <div key={category.name} className="space-y-2">
                <Link 
                  to={category.path} 
                  className="block py-2 px-4 hover:bg-accent/10 rounded-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
                {category.name !== "Sale" && subcategories[category.name.toLowerCase() as keyof typeof subcategories]?.map((subItem) => (
                  <Link 
                    key={subItem.name}
                    to={subItem.path}
                    className="block py-1 px-8 hover:bg-accent/10 rounded-md text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
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
