import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export default function Hero({ onShopNow }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1920&h=1080&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-luxury-black/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/80 via-transparent to-luxury-black/80" />
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Curated Luxury Collection 2026
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
        >
          <span className="text-white">Where </span>
          <span className="italic shimmer-text">Elegance</span>
          <br />
          <span className="text-white">Meets </span>
          <span className="italic shimmer-text">Excellence</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Discover an exquisite collection of the world's finest luxury goods, 
          handpicked for the discerning connoisseur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onShopNow}
            className="group flex items-center gap-3 bg-gold text-luxury-black px-8 py-4 font-semibold tracking-wider uppercase text-sm hover:bg-gold-light transition-all duration-300"
          >
            Shop Collection
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-3 border border-white/20 text-white px-8 py-4 font-medium tracking-wider uppercase text-sm hover:border-gold hover:text-gold transition-all duration-300">
            View Lookbook
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-gold">50+</p>
            <p className="text-white/40 text-xs tracking-wider uppercase mt-1">Brands</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-gold">100%</p>
            <p className="text-white/40 text-xs tracking-wider uppercase mt-1">Authentic</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-gold">24/7</p>
            <p className="text-white/40 text-xs tracking-wider uppercase mt-1">Concierge</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
