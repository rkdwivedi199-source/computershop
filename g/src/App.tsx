/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = useMemo<Product[]>(() => {
    if (selectedCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-1">
        <Hero />

        <section className="py-20 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
                Inventory <span className="text-brand-primary">Control</span>
              </h2>
              <p className="text-white/40 font-mono text-sm uppercase tracking-widest">
                Browse our current stock of high-performance components.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest border transition-all ${
                    selectedCategory === category 
                      ? 'bg-brand-primary border-brand-primary text-bg-dark' 
                      : 'border-white/10 text-white/40 hover:border-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="py-20 bg-bg-card border-y border-white/5 tech-grid relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 border border-brand-primary/30 flex items-center justify-center text-brand-primary mb-6">
                  <span className="font-mono text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest">Global Sourcing</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  We source directly from manufacturers to ensure you get the latest revisions and guaranteed authenticity.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 border border-brand-primary/30 flex items-center justify-center text-brand-primary mb-6">
                  <span className="font-mono text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest">Quality Control</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  Every component undergoes rigorous testing before it reaches our inventory, ensuring zero-day reliability.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 border border-brand-primary/30 flex items-center justify-center text-brand-primary mb-6">
                  <span className="font-mono text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest">Expert Support</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  Our team of veteran builders is available 24/7 to help you troubleshoot your build or optimize performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}
