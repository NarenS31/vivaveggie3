'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=2000&q=80"
          alt="Fresh vegetables and fruits"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 font-cursive text-8xl font-bold text-white md:text-9xl">
            VivaVeggie
          </h1>
          <p className="mb-12 text-2xl text-white/90 md:text-3xl">
            Experience the freshest plant-based cuisine, where farm-to-table meets culinary excellence
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#22c55e] text-white px-8 py-4 rounded-full font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#16a34a]"
            >
              View Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-600"
            >
              Book a Table
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
