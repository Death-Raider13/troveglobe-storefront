
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
          
          {/* Categories Dropdown - Desktop */}
          {!isMobile && (
            <div className="hidden md:flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Categories <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Shop By Category</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <span>Women</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="w-48">
                        {subcategories.women.map((item) => (
                          <DropdownMenuItem key={item.name} asChild>
                            <Link to={item.path}>{item.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <span>Men</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="w-48">
                        {subcategories.men.map((item) => (
                          <DropdownMenuItem key={item.name} asChild>
                            <Link to={item.path}>{item.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <span>Accessories</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="w-48">
                        {subcategories.accessories.map((item) => (
                          <DropdownMenuItem key={item.name} asChild>
                            <Link to={item.path}>{item.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/category/sale">Sale</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
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
