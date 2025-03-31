
import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getProductsByCategory } from '@/data/products';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = getProductsByCategory(category || '');
  
  // Capitalize category name for display
  const categoryName = category 
    ? category.charAt(0).toUpperCase() + category.slice(1) 
    : '';
  
  const title = category === 'sale' ? 'Sale Items' : `${categoryName} Collection`;
  
  return (
    <Layout>
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium mb-2">No products found</h2>
            <p className="text-muted-foreground">
              We couldn't find any products in this category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
