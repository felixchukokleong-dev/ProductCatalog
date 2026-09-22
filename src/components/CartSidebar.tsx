import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-luxury-dark z-50 flex flex-col border-l border-white/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-gold" />
                <h2 className="font-serif text-xl font-bold text-white">Shopping Bag</h2>
                <span className="text-white/40 text-sm">({totalItems})</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="text-white/10 mb-4" />
                  <p className="text-white/40 font-medium">Your bag is empty</p>
                  <p className="text-white/20 text-sm mt-2">Discover our luxury collection</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 text-gold text-sm tracking-wider uppercase hover:text-gold-light transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4"
                      >
                        {/* Image */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <p className="text-gold/80 text-xs tracking-wider uppercase">
                            {item.product.brand}
                          </p>
                          <p className="text-white text-sm font-medium truncate">
                            {item.product.name}
                          </p>
                          <p className="text-white font-serif text-sm mt-1">
                            {formatPrice(item.product.price)}
                          </p>

                          {/* Quantity controls */}
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center border border-white/10 rounded">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-8 text-center text-white text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-white/30 hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>

                        {/* Subtotal */}
                        <div className="text-right">
                          <p className="text-white font-serif text-sm">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Subtotal</span>
                  <span className="text-white font-serif text-lg">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Shipping</span>
                  <span className="text-gold text-sm">Complimentary</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-white font-serif text-xl">{formatPrice(totalPrice)}</span>
                </div>

                <button className="w-full bg-gold text-luxury-black py-4 font-semibold tracking-wider uppercase text-sm hover:bg-gold-light transition-colors">
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-white/40 text-sm hover:text-white/60 transition-colors"
                >
                  Clear Bag
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
