
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MissionVisionSection = () => {
  const [hoverMission, setHoverMission] = useState(false);
  const [hoverVision, setHoverVision] = useState(false);
  
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className={`rounded-lg shadow-lg p-8 transition-all duration-300 ${
              hoverMission ? 'bg-gradient-to-br from-blue-50 to-indigo-50 scale-[1.02]' : 'bg-white'
            }`}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setHoverMission(true)}
            onMouseLeave={() => setHoverMission(false)}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Our Mission</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ, our mission is to provide high-quality, handcrafted products that blend traditional craftsmanship with contemporary design. We strive to create unique, sustainable pieces that celebrate the art of knitting while supporting local artisans and communities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in fair trade practices, ensuring that every item in our collection not only brings joy to our customers but also contributes positively to the lives of the skilled artisans who create them.
            </p>
            
            <motion.div 
              className="mt-6 flex items-center text-primary hover:text-primary/80 font-medium cursor-pointer group"
              whileHover={{ x: 5 }}
              as={Link}
              to="/craftsmanship"
            >
              Learn more about our craftsmanship
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={`rounded-lg shadow-lg p-8 transition-all duration-300 ${
              hoverVision ? 'bg-gradient-to-br from-purple-50 to-pink-50 scale-[1.02]' : 'bg-white'
            }`}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setHoverVision(true)}
            onMouseLeave={() => setHoverVision(false)}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Our Vision</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We envision a world where handcrafted quality is valued over mass production, where each piece tells a story, and where traditional skills are preserved and celebrated in contemporary contexts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As we grow, we aim to expand our community of artisans, increase sustainable practices throughout our supply chain, and continue to innovate in the world of handcrafted fashion and accessories, making unique pieces accessible to discerning customers worldwide.
            </p>
            
            <motion.div 
              className="mt-6 flex items-center text-purple-600 hover:text-purple-500 font-medium cursor-pointer group"
              whileHover={{ x: 5 }}
              as={Link}
              to="/sustainability"
            >
              Discover our sustainability efforts
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
