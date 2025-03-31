
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "A timeless wardrobe essential. This premium cotton t-shirt offers both comfort and style for everyday wear.",
    price: 29.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "men",
    inStock: true
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    description: "These modern slim fit jeans combine style and comfort with premium stretch denim.",
    price: 59.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "men",
    inStock: true
  },
  {
    id: "3",
    name: "Floral Summer Dress",
    description: "A lightweight floral dress perfect for warm summer days. Features a flattering silhouette and breathable fabric.",
    price: 49.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "women",
    inStock: true
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    description: "This stylish leather crossbody bag offers both functionality and fashion with multiple compartments and adjustable strap.",
    price: 79.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    inStock: true
  },
  {
    id: "5",
    name: "Oversized Knit Sweater",
    description: "Stay warm and stylish with this oversized knit sweater. Perfect for layering during cooler months.",
    price: 69.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "women",
    inStock: true
  },
  {
    id: "6",
    name: "Classic Watch",
    description: "A timeless accessory with premium materials and precision movement. Elevate any outfit with this sophisticated watch.",
    price: 129.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    inStock: true
  },
  {
    id: "7",
    name: "Running Shoes",
    description: "Engineered for performance and comfort, these running shoes feature responsive cushioning and breathable materials.",
    price: 89.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "men",
    inStock: true
  },
  {
    id: "8",
    name: "Linen Blazer",
    description: "A lightweight linen blazer perfect for summer events. Features a tailored fit and premium construction.",
    price: 119.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "men",
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'sale') {
    return products.filter(product => product.discount > 0);
  }
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (count: number = 4): Product[] => {
  // Simply return first 'count' products for demo
  return products.slice(0, count);
};
