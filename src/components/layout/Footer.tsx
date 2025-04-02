
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  HelpCircle, 
  Truck, 
  Package2, 
  Mail, 
  PhoneCall, 
  MapPin,
  Linkedin,
  Youtube,
  MessageCircle
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
            
            {/* Enhanced Social Media Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                      className="bg-[#3b5998] text-white p-2 rounded-full hover:bg-[#3b5998]/80 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#FFDC80] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                      className="bg-[#1DA1F2] text-white p-2 rounded-full hover:bg-[#1DA1F2]/80 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                      className="bg-[#0077B5] text-white p-2 rounded-full hover:bg-[#0077B5]/80 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                      className="bg-[#FF0000] text-white p-2 rounded-full hover:bg-[#FF0000]/80 transition-colors">
                      <Youtube className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Watch our YouTube channel</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
          
          {/* Enhanced Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                      <Mail className="h-4 w-4" />
                      Email Us
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Get in Touch</h4>
                      <p className="text-sm text-muted-foreground">Our team is ready to assist you!</p>
                      <div className="flex justify-between items-center">
                        <p>customer@knittedgourmet.com</p>
                        <a 
                          href="mailto:customer@knittedgourmet.com" 
                          className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs"
                        >
                          Send Email
                        </a>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </li>
              <li>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                      <PhoneCall className="h-4 w-4" />
                      Call Us
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Customer Service</h4>
                      <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am-5pm</p>
                      <div className="flex justify-between items-center">
                        <p>+234 703 123 4567</p>
                        <a 
                          href="tel:+2347031234567" 
                          className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs"
                        >
                          Call Now
                        </a>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </li>
              <li>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                      <MapPin className="h-4 w-4" />
                      Visit Us
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Our Store</h4>
                      <p className="text-sm text-muted-foreground">Come visit our physical location!</p>
                      <p>No. 3 Taofeek Abolaji Street,<br/>Ilasamaja, Lagos</p>
                      <a 
                        href="https://maps.google.com/?q=Ilasamaja,Lagos" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs"
                      >
                        View on Map
                      </a>
                    </div>
                  </PopoverContent>
                </Popover>
              </li>
              <li>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                      <MessageCircle className="h-4 w-4" />
                      Live Chat
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Chat Support</h4>
                      <p className="text-sm text-muted-foreground">Chat with our support team</p>
                      <button className="w-full bg-primary text-primary-foreground px-3 py-1 rounded text-xs">
                        Start Chat Session
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
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
