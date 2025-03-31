
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: "center 30%"
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Collection 2023</h1>
          <p className="text-lg mb-6">
            Discover our latest arrivals and elevate your style with our premium collection.
          </p>
          <div className="flex space-x-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/category/new-arrivals">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/category/sale">View Sale</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
