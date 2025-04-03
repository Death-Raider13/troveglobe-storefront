
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, Globe, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const SustainabilityPage = () => {
  const iconProps = { 
    className: "h-12 w-12 mb-4 text-purple-600", 
    strokeWidth: 1.5 
  };
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Our Sustainability Efforts
            </h1>
            
            <motion.p 
              className="text-lg text-gray-700 mb-10 text-center"
              {...fadeIn}
              transition={{ delay: 0.2, ...fadeIn.transition }}
            >
              At ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ, we're committed to creating beautiful products while respecting our planet and supporting our communities.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                  alt="Sustainable materials" 
                  className="w-full h-72 object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Our Sustainability Vision
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We believe that beautiful products shouldn't come at the expense of our planet. Our sustainability journey is built on three pillars: 
                  environmentally friendly materials, ethical production practices, and community support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As we grow, we continuously look for ways to reduce our environmental footprint, improve working conditions for our artisans, 
                  and contribute positively to the communities we touch.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Our Sustainable Practices
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Leaf {...iconProps} />
                  <h3 className="text-xl font-semibold mb-2">Eco-Friendly Materials</h3>
                  <p className="text-gray-600">
                    We use organic cotton, natural dyes, and recycled materials whenever possible. 
                    Our packaging is plastic-free and fully recyclable.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Heart {...iconProps} />
                  <h3 className="text-xl font-semibold mb-2">Ethical Production</h3>
                  <p className="text-gray-600">
                    We ensure fair wages and safe working conditions for all our artisans. 
                    We're committed to transparency throughout our supply chain.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Recycle {...iconProps} />
                  <h3 className="text-xl font-semibold mb-2">Zero-Waste Initiative</h3>
                  <p className="text-gray-600">
                    Our zero-waste initiative turns fabric scraps into new products, reducing textile waste and creating unique pieces.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Globe {...iconProps} />
                  <h3 className="text-xl font-semibold mb-2">Carbon Footprint Reduction</h3>
                  <p className="text-gray-600">
                    We offset our carbon footprint by planting trees and investing in renewable energy projects.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Our Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="block text-4xl font-bold text-purple-600">85%</span>
                  <p className="text-gray-600">Reduction in plastic use since 2022</p>
                </div>
                
                <div>
                  <span className="block text-4xl font-bold text-purple-600">100+</span>
                  <p className="text-gray-600">Local artisans employed full-time</p>
                </div>
                
                <div>
                  <span className="block text-4xl font-bold text-purple-600">1,500</span>
                  <p className="text-gray-600">Trees planted through our offset program</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Looking Ahead
              </h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-purple-600 mr-4" />
                  <h3 className="text-xl font-semibold">Our Future Goals</h3>
                </div>
                
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-purple-100 rounded-full flex-shrink-0 mr-3 mt-1"></span>
                    <span>Achieve 100% sustainable material usage across all products by 2026</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-purple-100 rounded-full flex-shrink-0 mr-3 mt-1"></span>
                    <span>Expand our artisan training program to support 250+ creators by 2027</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-purple-100 rounded-full flex-shrink-0 mr-3 mt-1"></span>
                    <span>Develop a comprehensive product take-back and recycling program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-purple-100 rounded-full flex-shrink-0 mr-3 mt-1"></span>
                    <span>Become a certified B Corporation by 2025</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Join Us on This Journey
              </h2>
              <p className="text-gray-700 mb-8">
                Sustainability is a continuous journey, not a destination. By choosing ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ products,
                you're supporting our mission to create beautiful, ethical products that respect our planet.
              </p>
              <Link 
                to="/category/accessories" 
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
              >
                Shop Our Sustainable Collection
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default SustainabilityPage;
