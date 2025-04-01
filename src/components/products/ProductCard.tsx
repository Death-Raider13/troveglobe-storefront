
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { toast } from '@/components/ui/use-toast';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString('en-NG')}`;
  };
  
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-card-img h-64 w-full object-cover rounded-t-md"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-semibold rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <div className="flex items-center mt-1">
            {product.discount > 0 ? (
              <>
                <span className="font-bold text-destructive">{formatPrice(product.price * (1 - product.discount / 100))}</span>
                <span className="ml-2 text-muted-foreground line-through text-sm">{formatPrice(product.price)}</span>
              </>
            ) : (
              <span className="font-bold">{formatPrice(product.price)}</span>
            )}
          </div>
          
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button 
              className="w-full" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
