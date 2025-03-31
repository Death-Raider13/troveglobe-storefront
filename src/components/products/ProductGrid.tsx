
import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
