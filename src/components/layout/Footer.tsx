
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, HelpCircle, Truck, Package2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ</h3>
            <p className="text-primary-foreground/80 text-sm">
              Discover the latest trends and timeless classics in our curated collection of handcrafted knitted items and accessories.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/women" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/category/men" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/category/sale" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground">
                  FAQ
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <Link to="/shipping" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Shipping & Returns
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Package2 className="h-4 w-4" />
                <Link to="/track" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* FAQ Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-primary-foreground/30">
                <AccordionTrigger className="text-sm text-primary-foreground/90 hover:text-primary-foreground py-2">
                  How long will shipping take?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-primary-foreground/80">
                  Standard delivery takes 1-3 business days within Lagos and 3-5 business days nationwide.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-primary-foreground/30">
                <AccordionTrigger className="text-sm text-primary-foreground/90 hover:text-primary-foreground py-2">
                  Do you offer international shipping?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-primary-foreground/80">
                  Yes, we ship worldwide. International delivery typically takes 7-14 business days.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-primary-foreground/30">
                <AccordionTrigger className="text-sm text-primary-foreground/90 hover:text-primary-foreground py-2">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-primary-foreground/80">
                  We offer a 30-day return policy for unused items in original condition. Custom orders are non-returnable.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b-0 border-primary-foreground/30">
                <AccordionTrigger className="text-sm text-primary-foreground/90 hover:text-primary-foreground py-2">
                  Can I modify or cancel my order?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-primary-foreground/80">
                  Orders can be modified or canceled within 1 hour of placement. Contact our customer service immediately.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-2">
              <Link to="/faq" className="text-xs text-primary-foreground/80 hover:text-primary-foreground hover:underline">
                View all FAQs →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 pt-8 border-t border-primary-foreground/20">
          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 text-sm mb-2">
              Subscribe to receive updates on new arrivals and special offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="rounded-l-md border-0 bg-primary-foreground text-primary py-2 px-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-accent-foreground rounded-r-md px-3 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="md:col-span-2 md:text-right">
            <p className="text-sm text-primary-foreground/60">
              © {year} ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ. All rights reserved.
            </p>
            <div className="mt-2 space-x-4 text-xs text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-primary-foreground">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
