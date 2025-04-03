'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Local Farms',
    description: 'We source our ingredients from local organic farms within a 50-mile radius.',
    icon: '🌱',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
    color: 'from-green-100 to-green-50',
    fact: 'Our farmers use sustainable practices that reduce water usage by 40%'
  },
  {
    id: 2,
    title: 'Harvest',
    description: 'Ingredients are harvested at peak ripeness for maximum flavor and nutrition.',
    icon: '✂️',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    color: 'from-yellow-100 to-yellow-50',
    fact: 'We harvest within 24 hours of your order to ensure maximum freshness'
  },
  {
    id: 3,
    title: 'Transport',
    description: 'Quick and efficient transport to maintain freshness and quality.',
    icon: '🚚',
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-100 to-blue-50',
    fact: 'Our electric delivery vehicles reduce carbon emissions by 90%'
  },
  {
    id: 4,
    title: 'Preparation',
    description: 'Expert chefs prepare your meal with care and attention to detail.',
    icon: '👨‍🍳',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
    color: 'from-red-100 to-red-50',
    fact: 'Our chefs have an average of 15 years of experience in plant-based cuisine'
  },
  {
    id: 5,
    title: 'Your Plate',
    description: 'Fresh, delicious meals ready to enjoy.',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-100 to-purple-50',
    fact: 'Each dish is crafted to provide a perfect balance of flavors and nutrients'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 section-title"
        >
          Our Farm-to-Table Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`process-card bg-gradient-to-br ${step.color} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="relative h-48">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 text-4xl">{step.icon}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className="fun-fact p-4 bg-white/50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Fun Fact:</span> {step.fact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}