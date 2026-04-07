import { motion } from 'motion/react';
import { Plus, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative bg-bg-card border border-white/5 hover:border-brand-primary/30 transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden bg-bg-dark/50">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest border border-brand-primary/20 px-2 py-0.5">
            {product.category}
          </span>
          <span className="font-mono text-sm text-white/40">
            STOCK: {product.stock}
          </span>
        </div>

        <h3 className="text-xl font-bold uppercase tracking-tight mb-4 line-clamp-1">
          {product.name}
        </h3>

        <div className="space-y-2 mb-6">
          {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
            <div key={key} className="flex justify-between text-[11px] font-mono uppercase tracking-tighter">
              <span className="text-white/30">{key}</span>
              <span className="text-white/70">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-2xl font-bold font-mono">
            ${product.price.toLocaleString()}
          </span>
          <div className="flex gap-2">
            <button className="p-2 border border-white/10 hover:bg-white/5 transition-colors">
              <Info className="w-4 h-4 text-white/40" />
            </button>
            <button 
              onClick={() => onAddToCart(product)}
              className="p-2 bg-brand-primary text-bg-dark hover:bg-white transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hover overlay detail */}
      <div className="absolute inset-0 border-2 border-brand-primary opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity" />
    </motion.div>
  );
}
