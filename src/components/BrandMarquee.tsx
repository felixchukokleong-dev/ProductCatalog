import { motion } from 'framer-motion';

const brands = [
  'ROLEX', 'HERMÈS', 'CARTIER', 'CHANEL', 'PATEK PHILIPPE',
  'BULGARI', 'TIFFANY & CO.', 'LOUIS VUITTON', 'DIOR', 'AUDEMARS PIGUET',
];

export default function BrandMarquee() {
  return (
    <section className="py-12 border-y border-white/5 overflow-hidden bg-luxury-dark/50">
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex items-center gap-12 whitespace-nowrap"
      >
        {[...brands, ...brands].map((brand, index) => (
          <span
            key={index}
            className="text-white/15 text-sm sm:text-base tracking-[0.3em] font-medium"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
