
import React from 'react';

export const MissionVisionSection = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ, our mission is to provide high-quality, handcrafted products that blend traditional craftsmanship with contemporary design. We strive to create unique, sustainable pieces that celebrate the art of knitting while supporting local artisans and communities.
            </p>
            <p className="text-gray-700">
              We believe in fair trade practices, ensuring that every item in our collection not only brings joy to our customers but also contributes positively to the lives of the skilled artisans who create them.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              We envision a world where handcrafted quality is valued over mass production, where each piece tells a story, and where traditional skills are preserved and celebrated in contemporary contexts.
            </p>
            <p className="text-gray-700">
              As we grow, we aim to expand our community of artisans, increase sustainable practices throughout our supply chain, and continue to innovate in the world of handcrafted fashion and accessories, making unique pieces accessible to discerning customers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
