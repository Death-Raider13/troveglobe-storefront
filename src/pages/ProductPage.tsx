import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { toast } from '@/components/ui/use-toast';
import { getProductById, getFeaturedProducts } from '@/data/products';
import { ProductGrid } from '@/components/products/ProductGrid';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const product = productId ? getProductById(productId) : undefined;
  const relatedProducts = getFeaturedProducts(4);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity > 1 ? 'items' : 'item'} added to your cart.`,
    });
  };
  
  const actualPrice = product.discount > 0 
    ? product.price * (1 - product.discount / 100) 
    : product.price;
  
  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString('en-NG')}`;
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              {product.discount > 0 ? (
                <>
                  <span className="text-2xl font-bold text-destructive">{formatPrice(actualPrice)}</span>
                  <span className="ml-2 text-muted-foreground line-through">{formatPrice(product.price)}</span>
                  <span className="ml-2 bg-destructive/10 text-destructive px-2 py-1 text-xs font-semibold rounded">
                    {product.discount}% OFF
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
              )}
            </div>
            
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            {/* Product Specifications */}
            <div className="mb-6 p-4 bg-muted/30 rounded-lg">
              <h3 className="font-medium mb-3">Product Specifications</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Size:</span>
                  <span className="ml-2 font-medium">Medium</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Color:</span>
                  <span className="ml-2 font-medium">Blue</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Material:</span>
                  <span className="ml-2 font-medium">Cotton</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Condition:</span>
                  <span className="ml-2 font-medium">New</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="ml-2 font-medium">0.5 kg</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Dimensions:</span>
                  <span className="ml-2 font-medium">30x25x5 cm</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  -
                </Button>
                <span className="px-4 py-2 border rounded-md min-w-[40px] text-center">
                  {quantity}
                </span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            <Button 
              className="w-full" 
              size="lg" 
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
            
            <div className="mt-8 border-t pt-6">
              <h3 className="font-medium mb-2">Product Details</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
                <li>In stock: {product.inStock ? 'Yes' : 'No'}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
