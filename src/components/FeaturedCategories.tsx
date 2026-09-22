import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeaturedCategoriesProps {
  onCategoryChange: (category: string) => void;
}

const featuredCategories = [
  {
    name: 'Timepieces',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop',
    category: 'Watches',
    count: '24 pieces',
  },
  {
    name: 'Leather Goods',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=800&fit=crop',
    category: 'Handbags',
    count: '18 pieces',
  },
  {
    name: 'Fine Jewelry',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
    category: 'Jewelry',
    count: '32 pieces',
  },
];

export default function FeaturedCategories({ onCategoryChange }: FeaturedCategoriesProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Explore</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          Shop by Category
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredCategories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            onClick={() => onCategoryChange(cat.category)}
            className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white/50 text-xs tracking-wider uppercase mb-1">{cat.count}</p>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">{cat.name}</h3>
              <div className="flex items-center gap-2 text-gold text-sm tracking-wider uppercase group-hover:gap-3 transition-all">
                <span>Explore</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
