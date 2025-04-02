
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Truck, RotateCw, Package2 } from 'lucide-react';

const ShippingPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Shipping & Returns</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-accent/10 p-6 rounded-lg text-center">
            <Truck className="mx-auto h-12 w-12 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Free Shipping</h2>
            <p className="text-muted-foreground">Free shipping on all orders over ₦20,000 within Nigeria</p>
          </div>
          
          <div className="bg-accent/10 p-6 rounded-lg text-center">
            <Package2 className="mx-auto h-12 w-12 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Same-Day Dispatch</h2>
            <p className="text-muted-foreground">Orders placed before 12 PM are shipped the same day</p>
          </div>
          
          <div className="bg-accent/10 p-6 rounded-lg text-center">
            <RotateCw className="mx-auto h-12 w-12 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Easy Returns</h2>
            <p className="text-muted-foreground">30-day return policy for all unused items</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">For delivery within Lagos:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Standard Delivery: 1-3 business days</li>
                    <li>Express Delivery: Same day (for orders placed before 12 PM)</li>
                  </ul>
                  <p className="mb-2">For delivery outside Lagos:</p>
                  <ul className="list-disc pl-5">
                    <li>Standard Delivery: 3-5 business days</li>
                    <li>Express Delivery: 1-2 business days</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What are the shipping costs?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Our shipping rates are as follows:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Within Lagos: ₦1,500 (Free for orders above ₦20,000)</li>
                    <li>Outside Lagos: ₦2,500 (Free for orders above ₦30,000)</li>
                    <li>Express Delivery: Additional ₦1,000</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  <p>Yes, we do ship internationally. International shipping costs vary depending on the destination and weight of the package. Please contact our customer service for a quote before placing an international order.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I pick up my order in-store?</AccordionTrigger>
                <AccordionContent>
                  <p>Yes, you can pick up your order at our store located at No 3 Taofeek Abolaji Street, Ilasamaja. Select "Store Pickup" during checkout and you'll receive a notification when your order is ready for collection.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Returns & Exchanges</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  <p>We offer a 30-day return policy for all unused items in their original condition and packaging. Custom-made items are non-returnable unless there's a defect in workmanship.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I initiate a return?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">To initiate a return:</p>
                  <ol className="list-decimal pl-5">
                    <li className="mb-2">Log into your account and find your order</li>
                    <li className="mb-2">Select the item(s) you wish to return</li>
                    <li className="mb-2">Fill out the return form with your reason for returning</li>
                    <li className="mb-2">Print the return label and attach it to your package</li>
                    <li>Drop off the package at any designated return location</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How long does it take to process a refund?</AccordionTrigger>
                <AccordionContent>
                  <p>Once we receive your return, it takes 3-5 business days to inspect the item and process your refund. The time it takes for the refund to appear in your account depends on your payment method and financial institution, typically 5-10 business days.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Are there any items that cannot be returned?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">The following items cannot be returned:</p>
                  <ul className="list-disc pl-5">
                    <li>Custom or personalized orders</li>
                    <li>Intimate items (for hygiene reasons)</li>
                    <li>Discounted items marked as "Final Sale"</li>
                    <li>Gift cards</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPage;
