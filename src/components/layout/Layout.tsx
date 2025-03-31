
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartProvider } from '@/hooks/use-cart';

type LayoutProps = {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};
