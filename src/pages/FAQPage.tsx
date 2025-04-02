
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full mb-8">
            <h2 className="text-2xl font-semibold mb-4">About Our Products</h2>
            
            <AccordionItem value="products-1">
              <AccordionTrigger>Are your products handmade?</AccordionTrigger>
              <AccordionContent>
                <p>Yes, all our products are handcrafted by skilled artisans. Each piece is made with care and attention to detail, ensuring high quality and uniqueness.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="products-2">
              <AccordionTrigger>What materials do you use in your products?</AccordionTrigger>
              <AccordionContent>
                <p>We use premium quality yarns, fabrics, and materials for all our products. This includes organic cotton, merino wool, cashmere, and other eco-friendly materials. We prioritize sustainability and ensure that all our materials are ethically sourced.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="products-3">
              <AccordionTrigger>Can I request custom designs?</AccordionTrigger>
              <AccordionContent>
                <p>Absolutely! We offer custom design services for most of our products. Please contact our customer service team with your specific requirements, and we'll work with you to create a unique piece tailored to your preferences.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="products-4">
              <AccordionTrigger>How do I care for my knitted items?</AccordionTrigger>
              <AccordionContent>
                <p>For best results, we recommend hand-washing your knitted items in cold water with a mild detergent. Lay flat to dry and store folded to maintain their shape. Each product comes with specific care instructions based on the materials used.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <Accordion type="single" collapsible className="w-full mb-8">
            <h2 className="text-2xl font-semibold mb-4">Orders & Shipping</h2>
            
            <AccordionItem value="orders-1">
              <AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
              <AccordionContent>
                <p>Delivery times depend on your location. Within Lagos, standard delivery takes 1-3 business days. Outside Lagos, it typically takes 3-5 business days. International orders may take 7-14 business days depending on the destination.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="orders-2">
              <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                <p>Yes, we ship to most countries worldwide. International shipping costs and delivery times vary depending on the destination. Please check our Shipping page for more details or contact our customer service team.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="orders-3">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                <p>Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website by visiting the "Track Order" page or clicking on the tracking link in your shipment confirmation email.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="orders-4">
              <AccordionTrigger>What if my order arrives damaged?</AccordionTrigger>
              <AccordionContent>
                <p>We're sorry to hear that! Please contact our customer service team within 48 hours of receiving your order and provide photos of the damaged item. We'll arrange a replacement or refund as soon as possible.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <Accordion type="single" collapsible className="w-full mb-8">
            <h2 className="text-2xl font-semibold mb-4">Returns & Exchanges</h2>
            
            <AccordionItem value="returns-1">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                <p>We offer a 30-day return policy for all unused items in their original condition and packaging. Custom-made items are non-returnable unless there's a defect in workmanship. Please visit our Returns page for detailed information.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="returns-2">
              <AccordionTrigger>How do I initiate a return?</AccordionTrigger>
              <AccordionContent>
                <p>To initiate a return, log into your account, find your order, and select the item(s) you wish to return. Fill out the return form, print the return label, and drop off the package at any designated return location.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="returns-3">
              <AccordionTrigger>Can I exchange an item for a different size or color?</AccordionTrigger>
              <AccordionContent>
                <p>Yes, exchanges are available for size and color variations of the same product, subject to availability. Please initiate an exchange request through your account or contact our customer service team for assistance.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="returns-4">
              <AccordionTrigger>Do I have to pay for return shipping?</AccordionTrigger>
              <AccordionContent>
                <p>For returns due to our error (wrong item, defective product, etc.), we cover the return shipping costs. For other returns, customers are responsible for return shipping fees unless stated otherwise during promotional periods.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <Accordion type="single" collapsible className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Payment & Security</h2>
            
            <AccordionItem value="payment-1">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                <p>We accept various payment methods including credit/debit cards (Visa, Mastercard), bank transfers, PayPal, and mobile payment options like Apple Pay and Google Pay. We also offer payment on delivery for eligible locations.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="payment-2">
              <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
              <AccordionContent>
                <p>Absolutely. We use industry-standard encryption and secure payment processors to ensure that your payment information is protected. We do not store your complete credit card details on our servers.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="payment-3">
              <AccordionTrigger>Do you offer installment payment options?</AccordionTrigger>
              <AccordionContent>
                <p>Yes, we offer installment payment options through select payment providers for orders above a certain amount. Available options will be displayed at checkout if your order qualifies.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="payment-4">
              <AccordionTrigger>When will my credit card be charged?</AccordionTrigger>
              <AccordionContent>
                <p>Your credit card will be charged immediately after you place your order and it has been confirmed. For pre-order or back-ordered items, your card may be charged when the item is ready to ship.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
