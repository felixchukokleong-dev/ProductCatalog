import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, index, onSelect }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="product-card group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-luxury-dark rounded-lg">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden" onClick={() => onSelect(product)}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image w-full h-full object-cover"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm tracking-widest uppercase border border-white/50 px-4 py-2">
              Quick View
            </span>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-gold text-luxury-black text-xs font-bold px-3 py-1 tracking-wider uppercase">
              New
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 tracking-wider uppercase border border-white/20">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-red-400 hover:bg-white/20 transition-all duration-300">
          <Heart size={16} />
        </button>

        {/* Add to cart button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute bottom-3 right-3 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-luxury-black shadow-lg hover:bg-gold-light transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        >
          <ShoppingBag size={18} />
        </motion.button>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-2" onClick={() => onSelect(product)}>
        <p className="text-gold/80 text-xs tracking-widest uppercase">{product.brand}</p>
        <h3 className="text-white font-medium text-sm sm:text-base group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-white font-serif text-lg">{formatPrice(product.price)}</p>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-gold text-gold" />
            <span className="text-white/50 text-xs">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
