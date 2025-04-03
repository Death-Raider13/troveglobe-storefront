
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const CraftsmanshipPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Our Craftsmanship
            </h1>
            
            <motion.p 
              className="text-lg text-gray-700 mb-10 text-center"
              {...fadeIn}
              transition={{ delay: 0.2, ...fadeIn.transition }}
            >
              At ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ, every piece tells a story of dedication, skill, and time-honored traditions.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                  alt="Artisan at work" 
                  className="w-full h-72 object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Handcrafted Excellence
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Each ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ piece is meticulously handcrafted by skilled artisans who have honed their craft over decades. 
                  No machines, just hands, needles, and the finest materials coming together to create wearable art.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our artisans take pride in their work, ensuring that every stitch is perfect and every pattern is precisely executed. 
                  This attention to detail is what sets our products apart and makes them truly special.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Our Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <span className="inline-block w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Material Selection</h3>
                  <p className="text-gray-600">We source only the finest natural fibers and materials, ensuring sustainability and quality in every product.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <span className="inline-block w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Design & Pattern</h3>
                  <p className="text-gray-600">Our designers create unique patterns that blend traditional techniques with contemporary aesthetics.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <span className="inline-block w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Handcrafting</h3>
                  <p className="text-gray-600">Our skilled artisans carefully create each piece by hand, putting hours of dedicated work into every product.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Meet Our Artisans
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Artisan Portrait" 
                    className="w-24 h-24 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Aisha Nwosu</h3>
                    <p className="text-sm text-gray-500 mb-2">Master Knitter, 15+ years experience</p>
                    <p className="text-gray-600">"Every piece I create carries a part of my soul and the traditions passed down through generations."</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Artisan Portrait" 
                    className="w-24 h-24 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Folake Adeyemi</h3>
                    <p className="text-sm text-gray-500 mb-2">Pattern Designer, 8+ years experience</p>
                    <p className="text-gray-600">"I blend traditional patterns with modern aesthetics to create pieces that tell stories across generations."</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Experience the Difference
              </h2>
              <p className="text-gray-700 mb-8">
                There's a noticeable difference in quality, feel, and longevity when you choose handcrafted items. 
                We invite you to experience the ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ difference for yourself.
              </p>
              <Link 
                to="/category/accessories" 
                className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Shop Our Collections
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

import { Link } from 'react-router-dom';

export default CraftsmanshipPage;
