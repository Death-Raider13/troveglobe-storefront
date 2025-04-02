
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { CategorySection } from '@/components/home/CategorySection';
import { ProductGrid } from '@/components/products/ProductGrid';
import { MissionVisionSection } from '@/components/home/MissionVisionSection';
import { getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <ProductGrid products={featuredProducts} title="Featured Products" />
      
      {/* Newsletter Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-6 max-w-md mx-auto">
            Subscribe to get special offers, free giveaways, and new arrivals notifications.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 rounded-l-md border-0 py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground rounded-r-md px-6 py-3 text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision Section */}
      <MissionVisionSection />
    </Layout>
  );
};

export default Index;
