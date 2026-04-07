import { ShoppingCart, Cpu, Search, Menu } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
            <Cpu className="text-bg-dark w-5 h-5" />
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter uppercase">
            Forge<span className="text-brand-primary">Hardware</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
          <a href="#" className="hover:text-brand-primary transition-colors">Components</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Builds</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Support</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <Search className="w-5 h-5 text-white/60" />
          </button>
          <button 
            onClick={onCartClick}
            className="relative p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-white/60" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 w-4 h-4 bg-brand-primary text-bg-dark text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
          <button className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-white/60" />
          </button>
        </div>
      </div>
    </nav>
  );
}
