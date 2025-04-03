'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  {
    title: '11.6 miles',
    subtitle: 'Average Distance',
    description: 'Average distance to our ingredient sources',
    icon: '📍'
  },
  {
    title: '92/100',
    subtitle: 'Sustainability Score',
    description: 'Our comprehensive sustainability rating',
    icon: '🌱'
  }
];

const impacts = [
  {
    title: '1.2 tons',
    subtitle: 'CO₂ Reduction',
    description: 'Yearly carbon footprint reduction',
    icon: '🌍'
  },
  {
    title: '24,500 gallons',
    subtitle: 'Water Saved',
    description: 'Annual water conservation',
    icon: '💧'
  },
  {
    title: '15+ acres',
    subtitle: 'Land Preserved',
    description: 'Protected agricultural land',
    icon: '🌳'
  }
];

const philosophies = [
  {
    title: 'Local First',
    description: 'We source 90% of our ingredients from within 50 miles of our restaurant, reducing food miles and supporting our local farming community.',
    icon: '🏡'
  },
  {
    title: 'Sustainable Practices',
    description: 'We partner exclusively with farms using regenerative agriculture practices, organic methods, and responsible resource management.',
    icon: '♻️'
  },
  {
    title: 'Transparency',
    description: 'We provide full visibility into our supply chain, including farm practices, harvest dates, and transportation methods for each ingredient we use.',
    icon: '🔍'
  }
];

export default function SustainabilitySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#dcfce7]">
      <div className="container mx-auto px-4">
        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border border-[#22c55e]/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{stat.icon}</span>
                <div>
                  <h3 className="text-3xl font-bold text-[#22c55e]">{stat.title}</h3>
                  <p className="text-[#16a34a] font-medium">{stat.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Environmental Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#22c55e]">Environmental Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border border-[#22c55e]/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{impact.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-[#22c55e]">{impact.title}</h3>
                    <p className="text-[#16a34a] font-medium">{impact.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sourcing Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#22c55e]">Our Sourcing Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border border-[#22c55e]/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{philosophy.icon}</span>
                  <h3 className="text-2xl font-bold text-[#22c55e]">{philosophy.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{philosophy.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 