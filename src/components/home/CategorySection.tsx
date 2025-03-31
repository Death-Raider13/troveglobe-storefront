
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  image: string;
  path: string;
}

const categories: Category[] = [
  {
    id: "women",
    name: "Women",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80",
    path: "/category/women"
  },
  {
    id: "men",
    name: "Men",
    image: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    path: "/category/men"
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    path: "/category/accessories"
  },
  {
    id: "crochet-bags",
    name: "Crochet Bags and Purses",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=876&q=80",
    path: "/category/crochet-bags"
  },
  {
    id: "confectionaries",
    name: "Confectionaries",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    path: "/category/confectionaries"
  },
  {
    id: "personalized-clothing",
    name: "Personalized Clothing",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    path: "/category/personalized-clothing"
  }
];

export const CategorySection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={category.path} 
            className="relative overflow-hidden rounded-lg shadow-md group h-80"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              <span className="text-white/80 text-sm mt-2 group-hover:underline">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
