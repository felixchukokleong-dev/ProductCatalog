import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import FeaturedCategories from './components/FeaturedCategories';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { products, Product, categories } from './data/products';
import { SlidersHorizontal } from 'lucide-react';

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  const productsRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products
    .filter((p) => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
    });

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    scrollToProducts();
  };

  return (
    <div className="min-h-screen bg-luxury-black">
      <Navbar onCategoryChange={handleCategoryChange} activeCategory={activeCategory} />
      <CartSidebar />
      <ProductDetail
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Hero */}
      <Hero onShopNow={scrollToProducts} />

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Featured Categories */}
      <FeaturedCategories onCategoryChange={handleCategoryChange} />

      {/* Products Section */}
      <section ref={productsRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Collection</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {activeCategory === 'All' ? 'All Pieces' : activeCategory}
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold text-luxury-black font-semibold'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-white/40" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-white/60 text-sm border-none focus:outline-none cursor-pointer"
            >
              <option value="featured" className="bg-luxury-dark">Featured</option>
              <option value="newest" className="bg-luxury-dark">Newest</option>
              <option value="price-asc" className="bg-luxury-dark">Price: Low to High</option>
              <option value="price-desc" className="bg-luxury-dark">Price: High to Low</option>
              <option value="rating" className="bg-luxury-dark">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">No products found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-gold text-sm tracking-wider uppercase hover:text-gold-light transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </section>

      {/* Luxury Promise Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-dark/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: '✦', title: 'Authenticated', desc: 'Every piece verified by experts' },
            { icon: '◈', title: 'White Glove', desc: 'Complimentary luxury delivery' },
            { icon: '❖', title: 'Secure', desc: 'Bank-level encryption & protection' },
            { icon: '✧', title: 'Concierge', desc: '24/7 personal shopping assistance' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-gold text-2xl mb-3">{item.icon}</div>
              <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-1">{item.title}</h4>
              <p className="text-white/40 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
