import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-white/5">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Stay Connected</p>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            Join the Inner Circle
          </h3>
          <p className="text-white/50 text-sm mb-8">
            Receive exclusive previews, private event invitations, and early access to new arrivals.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-luxury-dark border border-white/10 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors text-sm"
            />
            <button className="bg-gold text-luxury-black px-6 py-3 font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Bestsellers', 'Watches', 'Jewelry', 'Handbags'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-4">Services</h4>
            <ul className="space-y-3">
              {['Personal Styling', 'Gift Cards', 'Repairs', 'Authentication', 'Concierge'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-4">About</h4>
            <ul className="space-y-3">
              {['Our Story', 'Craftsmanship', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-4">Connect</h4>
            <ul className="space-y-3">
              {['Contact Us', 'FAQ', 'Shipping', 'Returns', 'Size Guide'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold shimmer-text">AURUM</span>
            <span className="text-white/20 text-sm ml-2">© 2026 All rights reserved</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
