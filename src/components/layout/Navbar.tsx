
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingBag, Search, Menu, X, User, Package2, ChevronDown, Home } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { useOrderTracking } from '@/hooks/use-order-tracking';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

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

  const categoryColors = {
    Women: "from-pink-500 to-rose-400",
    Men: "from-blue-500 to-cyan-400",
    Accessories: "from-purple-500 to-violet-400",
    Sale: "from-red-500 to-orange-400"
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-background shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Categories on the left */}
          <div className="flex items-center space-x-4">
            {/* Home button */}
            <Button variant="ghost" size="icon" asChild className="text-primary hover:text-primary/80">
              <Link to="/">
                <Home className="h-5 w-5" />
              </Link>
            </Button>
            
            {/* Categories dropdown */}
            <div className="hidden md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 transition-all duration-300">
                    Categories <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-2">
                  <DropdownMenuLabel className="text-center font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Shop By Category
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {categories.map((category) => (
                      category.name === "Sale" ? (
                        <DropdownMenuItem key={category.name} asChild className="my-1 rounded-md bg-gradient-to-r from-red-500/10 to-orange-500/10 hover:from-red-500/20 hover:to-orange-500/20">
                          <Link to={category.path} className="w-full px-2 py-1 font-medium text-red-600">
                            {category.name}
                          </Link>
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuSub key={category.name}>
                          <DropdownMenuSubTrigger className={`my-1 rounded-md bg-gradient-to-r ${categoryColors[category.name as keyof typeof categoryColors]}/10 hover:${categoryColors[category.name as keyof typeof categoryColors]}/20`}>
                            <span className={`font-medium bg-gradient-to-r ${categoryColors[category.name as keyof typeof categoryColors]} bg-clip-text text-transparent`}>{category.name}</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent className="w-48 p-2">
                            {subcategories[category.name.toLowerCase() as keyof typeof subcategories].map((subItem) => (
                              <DropdownMenuItem key={subItem.name} asChild className="my-1 rounded-md hover:bg-accent/20">
                                <Link to={subItem.path} className="w-full px-2 py-1">
                                  {subItem.name}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      )
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ
          </Link>
          
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
            <Link
              to="/"
              className="flex items-center py-2 px-4 hover:bg-accent/10 rounded-md font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <Link 
                  to={category.path} 
                  className={`block py-2 px-4 hover:bg-accent/10 rounded-md font-medium bg-gradient-to-r ${categoryColors[category.name as keyof typeof categoryColors]}/10`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={`bg-gradient-to-r ${categoryColors[category.name as keyof typeof categoryColors]} bg-clip-text text-transparent`}>
                    {category.name}
                  </span>
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
              to="/shipping"
              className="block py-2 px-4 hover:bg-accent/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shipping & Returns
            </Link>
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
