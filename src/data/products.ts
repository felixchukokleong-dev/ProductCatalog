export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categories = [
  'All',
  'Watches',
  'Handbags',
  'Jewelry',
  'Shoes',
  'Accessories',
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Royal Oak Chronograph',
    brand: 'Audemars Piguet',
    price: 42500,
    category: 'Watches',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=600&fit=crop',
    description: 'An iconic luxury timepiece featuring an octagonal bezel with visible screws, "Grande Tapisserie" dial pattern, and an integrated bracelet. The epitome of haute horlogerie.',
    rating: 4.9,
    inStock: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Birkin 30 Tote',
    brand: 'Hermès',
    price: 12800,
    category: 'Handbags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
    description: 'Handcrafted from the finest Togo calfskin leather, this legendary bag represents the pinnacle of artisanal craftsmanship. Each piece requires over 48 hours of meticulous hand-stitching.',
    rating: 5.0,
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
  {
    id: 3,
    name: 'Serpenti Diamond Necklace',
    brand: 'Bulgari',
    price: 28900,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c4?w=600&h=600&fit=crop',
    description: 'A stunning serpent-inspired necklace adorned with pavé diamonds and emerald eyes. Set in 18k white gold, this masterpiece embodies bold elegance and timeless sophistication.',
    rating: 4.8,
    inStock: true,
    isFeatured: true,
  },
  {
    id: 4,
    name: 'Classic Pump Stiletto',
    brand: 'Christian Louboutin',
    price: 1295,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=600&fit=crop',
    description: 'The iconic red-sole stiletto, crafted from patent leather with a 120mm heel. A symbol of power, confidence, and unparalleled style.',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    name: 'Nautilus 5711',
    brand: 'Patek Philippe',
    price: 68000,
    category: 'Watches',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=600&fit=crop',
    description: 'The most coveted sports watch in the world. Featuring a blue-black gradient dial, horizontal embossed pattern, and an ultra-thin self-winding movement.',
    rating: 5.0,
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
  {
    id: 6,
    name: 'Matelassé Chain Wallet',
    brand: 'Chanel',
    price: 3850,
    category: 'Handbags',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    description: 'Quilted lambskin leather with the iconic interlocking CC turn-lock and signature chain strap. A timeless accessory that transcends seasons.',
    rating: 4.9,
    inStock: true,
  },
  {
    id: 7,
    name: 'Love Bracelet',
    brand: 'Cartier',
    price: 7200,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    description: 'An iconic symbol of eternal love, this 18k yellow gold bracelet features the signature screw motif and is secured with a special screwdriver.',
    rating: 4.8,
    inStock: true,
    isFeatured: true,
  },
  {
    id: 8,
    name: 'Silk Twill Scarf',
    brand: 'Hermès',
    price: 480,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1601924921557-45e8e0e6685e?w=600&h=600&fit=crop',
    description: 'Hand-rolled edges on pure silk twill, featuring the iconic equestrian-inspired print. Each scarf is a wearable work of art.',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 9,
    name: 'Daytona Cosmograph',
    brand: 'Rolex',
    price: 34500,
    category: 'Watches',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&h=600&fit=crop',
    description: 'The ultimate chronograph, born for endurance racing. Features a monobloc Cerachrom bezel in black ceramic with tachymetric scale.',
    rating: 4.9,
    inStock: true,
    isNew: true,
  },
  {
    id: 10,
    name: 'Diamond Solitaire Ring',
    brand: 'Tiffany & Co.',
    price: 18500,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    description: 'The world\'s most iconic engagement ring. A brilliant-cut diamond set in a six-prong platinum setting, maximizing light and fire.',
    rating: 5.0,
    inStock: true,
  },
  {
    id: 11,
    name: 'Cashmere Overcoat',
    brand: 'Brunello Cucinelli',
    price: 5950,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&h=600&fit=crop',
    description: 'Luxuriously soft double-breasted overcoat crafted from the finest Mongolian cashmere. A testament to understated elegance and impeccable tailoring.',
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: 12,
    name: 'Velvet Oxford Shoes',
    brand: 'Berluti',
    price: 2100,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=600&fit=crop',
    description: 'Hand-painted Venezia leather oxford shoes with a wholecut construction. Each pair develops a unique patina over time, making it truly one-of-a-kind.',
    rating: 4.8,
    inStock: true,
  },
];
