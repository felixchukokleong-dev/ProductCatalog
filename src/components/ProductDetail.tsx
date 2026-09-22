import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Heart, Shield, Truck, RotateCcw } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetail({ product, isOpen, onClose }: ProductDetailProps) {
  const { addToCart } = useCart();

  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-luxury-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto md:h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-gold text-luxury-black text-xs font-bold px-3 py-1 tracking-wider uppercase">
                    New Arrival
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-center">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">{product.brand}</p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-white/20'}
                      />
                    ))}
                  </div>
                  <span className="text-white/50 text-sm">{product.rating} / 5.0</span>
                </div>

                {/* Price */}
                <p className="font-serif text-3xl font-bold text-white mb-6">
                  {formatPrice(product.price)}
                </p>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-8 text-sm">
                  {product.description}
                </p>

                {/* Actions */}
                <div className="flex gap-3 mb-8">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => addToCart(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gold text-luxury-black py-4 font-semibold tracking-wider uppercase text-sm hover:bg-gold-light transition-colors"
                  >
                    <ShoppingBag size={18} />
                    Add to Bag
                  </motion.button>
                  <button className="w-14 h-14 border border-white/20 rounded flex items-center justify-center text-white/70 hover:text-red-400 hover:border-red-400 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-white/50 text-sm">
                    <Shield size={16} className="text-gold" />
                    <span>Authenticated & Certified</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-sm">
                    <Truck size={16} className="text-gold" />
                    <span>Complimentary White-Glove Delivery</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-sm">
                    <RotateCcw size={16} className="text-gold" />
                    <span>30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
