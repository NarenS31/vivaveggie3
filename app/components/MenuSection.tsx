'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Garden Fresh Salad',
    description: 'Mixed greens, cherry tomatoes, cucumber, and house vinaigrette',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: '2',
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with wild mushrooms and truffle oil',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan']
  },
  {
    id: '3',
    name: 'Spicy Tofu Bowl',
    description: 'Crispy tofu, brown rice, and seasonal vegetables with spicy sauce',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Spicy']
  },
  {
    id: '4',
    name: 'Quinoa Power Bowl',
    description: 'Quinoa, roasted vegetables, avocado, and tahini dressing',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: '5',
    name: 'Veggie Burger',
    description: 'House-made black bean patty with all the fixings',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan']
  },
  {
    id: '6',
    name: 'Cauliflower Wings',
    description: 'Crispy cauliflower with your choice of sauce',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: '7',
    name: 'Pasta Primavera',
    description: 'Fresh pasta with seasonal vegetables in garlic sauce',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian']
  },
  {
    id: '8',
    name: 'Stuffed Bell Peppers',
    description: 'Bell peppers stuffed with quinoa, black beans, and spices',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: '9',
    name: 'Veggie Tacos',
    description: 'Three soft tacos with grilled vegetables and avocado crema',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan']
  },
  {
    id: '10',
    name: 'Sweet Potato Curry',
    description: 'Creamy coconut curry with sweet potatoes and chickpeas',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Spicy']
  },
  {
    id: '11',
    name: 'Mediterranean Bowl',
    description: 'Falafel, hummus, tabbouleh, and fresh vegetables',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1559847844-1ff4d5b9fddd?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: '12',
    name: 'Veggie Pizza',
    description: 'Thin crust pizza with seasonal vegetables and vegan cheese',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian']
  }
];

export default function MenuSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'Vegan', 'Vegetarian', 'Gluten-Free', 'Spicy'];

  const filteredItems = menuItems.filter(item => 
    activeFilter === 'All' || item.tags.includes(activeFilter)
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 section-title">
          Our Menu
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={parseInt(item.id) <= 6}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="flex gap-2">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}