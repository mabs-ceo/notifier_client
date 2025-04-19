import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="relative bg-gray-100 py-16 px-6 md:px-16 overflow-hidden" id='aboutus'>
 

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are brothers among you who aim to serve the Creator by helping the Ummah.  
          If there is any shortcoming, it is from us. If there is benefit, then it is from Allah ﷻ.
        </p>

       
      </motion.div>
     
      

    </section>
  );
}
