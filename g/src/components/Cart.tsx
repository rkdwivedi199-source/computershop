import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-bg-card border-l border-white/10 z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-brand-primary" />
                <h2 className="text-xl font-bold uppercase tracking-widest">Your Cart</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/30 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="font-mono uppercase tracking-widest text-sm">Cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 bg-bg-dark border border-white/5 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold uppercase text-sm mb-1 tracking-tight">{item.name}</h3>
                      <p className="font-mono text-brand-primary text-xs mb-3">${item.price.toLocaleString()}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-white/10">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-white/5 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-mono text-xs">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-white/5 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-white/20 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-white/10 bg-bg-dark/50">
              <div className="flex justify-between items-end mb-6">
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Subtotal</span>
                <span className="text-3xl font-bold font-mono text-brand-primary">${total.toLocaleString()}</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full py-4 bg-brand-primary text-bg-dark font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Checkout System
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
