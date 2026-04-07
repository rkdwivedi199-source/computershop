import { Cpu, Github, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-white/5 pt-20 pb-10 tech-grid">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
                <Cpu className="text-bg-dark w-5 h-5" />
              </div>
              <span className="font-mono font-bold text-xl tracking-tighter uppercase">
                Forge<span className="text-brand-primary">Hardware</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-xs">
              The ultimate destination for premium PC components. Built by enthusiasts, for enthusiasts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/10 hover:border-brand-primary/50 transition-colors">
                <Twitter className="w-4 h-4 text-white/60" />
              </a>
              <a href="#" className="p-2 border border-white/10 hover:border-brand-primary/50 transition-colors">
                <Instagram className="w-4 h-4 text-white/60" />
              </a>
              <a href="#" className="p-2 border border-white/10 hover:border-brand-primary/50 transition-colors">
                <Github className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs text-brand-primary mb-6">Components</h4>
            <ul className="space-y-4 text-sm text-white/40 font-medium uppercase tracking-tighter">
              <li><a href="#" className="hover:text-white transition-colors">Processors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Graphics Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Memory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Storage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs text-brand-primary mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/40 font-medium uppercase tracking-tighter">
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs text-brand-primary mb-6">Newsletter</h4>
            <p className="text-xs text-white/40 mb-6 uppercase tracking-widest leading-relaxed">
              Get notified about new drops and restocks.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="flex-1 bg-bg-dark border border-white/10 px-4 py-3 text-xs font-mono focus:outline-none focus:border-brand-primary transition-colors"
              />
              <button className="bg-brand-primary text-bg-dark p-3 hover:bg-white transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
          <p>© 2026 FORGE HARDWARE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
