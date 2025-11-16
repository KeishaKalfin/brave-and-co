// Complete BRAVE Product Catalog
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  details: string[];
  category: string;
  stripePriceId?: string;
}

export const products: Record<string, Product> = {
  // BRV Clutch Collection
  "1": {
    id: "1",
    name: "BRV Clutch - Black",
    price: 285,
    image: "/images/products/brv-clutch-black.jpg",
    images: ["/images/products/brv-clutch-black.jpg"],
    description: "Our signature BRV clutch in premium black leather. Handcrafted with meticulous attention to detail, featuring premium hardware and a sleek, modern design that's perfect for any occasion.",
    details: [
      "Handcrafted premium leather",
      "Premium metal hardware", 
      "Interior card slots",
      "Dimensions: 8\" x 5\" x 2\"",
      "Made in USA"
    ],
    category: "clutches",
    stripePriceId: "price_1SU8JZKJcXfzZs7deTgNi0YG"
  },
  "2": {
    id: "2",
    name: "VAMP Mix - Tobacco",
    price: 325,
    image: "/images/products/vamp-mix-tobacco.jpg",
    images: ["/images/products/vamp-mix-tobacco.jpg"],
    description: "The VAMP Mix in rich tobacco leather combines traditional craftsmanship with contemporary style. This versatile piece features mixed textures and premium materials.",
    details: [
      "Premium tobacco leather",
      "Mixed texture design",
      "Adjustable strap",
      "Multiple compartments",
      "Hand-finished edges"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JbKJcXfzZs7dpcgEkKga"
  },
  "3": {
    id: "3",
    name: "Adinkra Bag - Bison",
    price: 275,
    image: "/images/products/adinkra-bison.jpg",
    images: ["/images/products/adinkra-bison.jpg"],
    description: "The Adinkra Bag in premium bison leather. A unique bag featuring traditional Adinkra symbols combined with premium leather craftsmanship and modern functionality.",
    details: [
      "Premium bison leather",
      "Traditional Adinkra symbols",
      "Spacious interior",
      "Premium hardware",
      "Hand-finished edges"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JgKJcXfzZs7dr0dv4NNq"
  },
  "4": {
    id: "4",
    name: "Mudcloth Tote - Black",
    price: 265,
    image: "/images/products/mudcloth-detail.jpg",
    images: ["/images/products/mudcloth-detail.jpg"],
    description: "The Mudcloth Tote in black with premium leather accents. A unique tote featuring traditional mudcloth patterns combined with premium leather craftsmanship.",
    details: [
      "Traditional mudcloth patterns",
      "Premium leather accents",
      "Spacious interior",
      "Durable construction",
      "Cultural heritage design"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JfKJcXfzZs7dhjzpLLhb"
  },
  "5": {
    id: "5",
    name: "BRV Clutch - Neon Orange",
    price: 285,
    image: "/images/products/brv-clutch-neon-orange.jpg",
    images: ["/images/products/brv-clutch-neon-orange.jpg"],
    description: "Our signature BRV clutch in vibrant neon orange leather. Handcrafted with meticulous attention to detail, featuring premium hardware and a bold, modern design.",
    details: [
      "Vibrant neon orange leather",
      "Premium metal hardware",
      "Interior card slots",
      "Dimensions: 8\" x 5\" x 2\"",
      "Made in USA"
    ],
    category: "clutches",
    stripePriceId: "price_1SU8JaKJcXfzZs7da1mka9gb"
  },
  "6": {
    id: "6",
    name: "BRV Clutch - Tobacco",
    price: 285,
    image: "/images/products/brv-clutch-tobacco.jpg",
    images: ["/images/products/brv-clutch-tobacco.jpg"],
    description: "Our signature BRV clutch in rich tobacco leather. Handcrafted with meticulous attention to detail, featuring premium hardware and a sophisticated design.",
    details: [
      "Rich tobacco leather",
      "Premium metal hardware",
      "Interior card slots",
      "Dimensions: 8\" x 5\" x 2\"",
      "Made in USA"
    ],
    category: "clutches",
    stripePriceId: "price_1SU8JZKJcXfzZs7dRKKhJQAX"
  },
  "7": {
    id: "7",
    name: "BRV Clutch - Red",
    price: 285,
    image: "/images/products/brv-clutch-red.jpg",
    images: ["/images/products/brv-clutch-red.jpg"],
    description: "Our signature BRV clutch in vibrant red leather. Handcrafted with meticulous attention to detail, featuring premium hardware and a bold, confident design.",
    details: [
      "Vibrant red leather",
      "Premium metal hardware",
      "Interior card slots",
      "Dimensions: 8\" x 5\" x 2\"",
      "Made in USA"
    ],
    category: "clutches",
    stripePriceId: "price_1SU8JaKJcXfzZs7d2Xrm6GwX"
  },
  "8": {
    id: "8",
    name: "BRV Clutch - White",
    price: 285,
    image: "/images/products/brv-clutch-white.jpg",
    images: ["/images/products/brv-clutch-white.jpg"],
    description: "Our signature BRV clutch in pristine white leather. Handcrafted with meticulous attention to detail, featuring premium hardware and a clean, elegant design.",
    details: [
      "Pristine white leather",
      "Premium metal hardware",
      "Interior card slots",
      "Dimensions: 8\" x 5\" x 2\"",
      "Made in USA"
    ],
    category: "clutches",
    stripePriceId: "price_1SU8JaKJcXfzZs7d2Xrm6GwX"
  },
  "9": {
    id: "9",
    name: "VAMP Bag - Black",
    price: 325,
    image: "/images/products/vamp-bag-black.jpg",
    images: ["/images/products/vamp-bag-black.jpg"],
    description: "The VAMP bag in premium black leather combines traditional craftsmanship with contemporary style. This versatile piece features mixed textures and premium materials.",
    details: [
      "Premium black leather",
      "Mixed texture design",
      "Adjustable strap",
      "Multiple compartments",
      "Hand-finished edges"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JbKJcXfzZs7dAvnlxZCS"
  },
  "10": {
    id: "10",
    name: "VAMP Bag - Clay",
    price: 325,
    image: "/images/products/vamp-bag-clay.jpg",
    images: ["/images/products/vamp-bag-clay.jpg"],
    description: "The VAMP bag in beautiful clay leather combines traditional craftsmanship with contemporary style. This versatile piece features mixed textures and premium materials.",
    details: [
      "Beautiful clay leather",
      "Mixed texture design",
      "Adjustable strap",
      "Multiple compartments",
      "Hand-finished edges"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JcKJcXfzZs7duz5ZkPCv"
  },
  "11": {
    id: "11",
    name: "VAMP Bag - Jade",
    price: 325,
    image: "/images/products/vamp-bag-jade.jpg",
    images: ["/images/products/vamp-bag-jade.jpg"],
    description: "The VAMP bag in stunning jade leather combines traditional craftsmanship with contemporary style. This versatile piece features mixed textures and premium materials.",
    details: [
      "Stunning jade leather",
      "Mixed texture design",
      "Adjustable strap",
      "Multiple compartments",
      "Hand-finished edges"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JcKJcXfzZs7dqvfqEca0"
  },
  "12": {
    id: "12",
    name: "Large Pecos Bag - Red",
    price: 385,
    image: "/images/products/large-pecos-bag-red.jpg",
    images: ["/images/products/large-pecos-bag-red.jpg"],
    description: "The Large Pecos Bag in vibrant red leather. A spacious everyday carry tote crafted from premium leather with hand-finished edges and premium hardware.",
    details: [
      "Vibrant red leather",
      "Spacious interior",
      "Hand-finished edges",
      "Premium hardware",
      "Everyday carry design"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JdKJcXfzZs7dMnW1G8pg"
  },
  "13": {
    id: "13",
    name: "Large Pecos Bag - White",
    price: 385,
    image: "/images/products/large-pecos-bag-white.jpg",
    images: ["/images/products/large-pecos-bag-white.jpg"],
    description: "The Large Pecos Bag in pristine white leather. A spacious everyday carry tote crafted from premium leather with hand-finished edges and premium hardware.",
    details: [
      "Pristine white leather",
      "Spacious interior",
      "Hand-finished edges",
      "Premium hardware",
      "Everyday carry design"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JdKJcXfzZs7dMrvOfIKV"
  },
  "14": {
    id: "14",
    name: "Medium Zip Pouch - Black",
    price: 185,
    image: "/images/products/med-zip-black.jpg",
    images: ["/images/products/med-zip-black.jpg"],
    description: "The Medium Zip Pouch in classic black leather. A minimalist zip pouch perfect for organizing your essentials, crafted from premium leather with smooth zipper closure.",
    details: [
      "Classic black leather",
      "Minimalist design",
      "Smooth zipper closure",
      "Perfect for essentials",
      "Premium leather craft"
    ],
    category: "accessories",
    stripePriceId: "price_1SU8JdKJcXfzZs7diupxJRt9"
  },
  "15": {
    id: "15",
    name: "Medium Zip Pouch - Brown",
    price: 185,
    image: "/images/products/med-zip-brown.jpg",
    images: ["/images/products/med-zip-brown.jpg"],
    description: "The Medium Zip Pouch in rich brown leather. A minimalist zip pouch perfect for organizing your essentials, crafted from premium leather with smooth zipper closure.",
    details: [
      "Rich brown leather",
      "Minimalist design",
      "Smooth zipper closure",
      "Perfect for essentials",
      "Premium leather craft"
    ],
    category: "accessories",
    stripePriceId: "price_1SU8JeKJcXfzZs7dtx6x1PYT"
  },
  "16": {
    id: "16",
    name: "Medium Zip Pouch - Grey",
    price: 185,
    image: "/images/products/med-zip-grey.jpg",
    images: ["/images/products/med-zip-grey.jpg"],
    description: "The Medium Zip Pouch in sophisticated grey leather. A minimalist zip pouch perfect for organizing your essentials, crafted from premium leather with smooth zipper closure.",
    details: [
      "Sophisticated grey leather",
      "Minimalist design",
      "Smooth zipper closure",
      "Perfect for essentials",
      "Premium leather craft"
    ],
    category: "accessories",
    stripePriceId: "price_1SU8JeKJcXfzZs7dR6VoByLD"
  },
  "17": {
    id: "17",
    name: "Large Zip Pouch - Bison",
    price: 225,
    image: "/images/products/large-zip-bison.jpg",
    images: ["/images/products/large-zip-bison.jpg"],
    description: "The Large Zip Pouch in premium bison leather. A spacious zip pouch perfect for organizing larger items, crafted from premium bison leather with smooth zipper closure and wrist strap.",
    details: [
      "Premium bison leather",
      "Spacious interior",
      "Smooth zipper closure",
      "Wrist strap included",
      "Premium leather craft"
    ],
    category: "accessories",
    stripePriceId: "price_1SU8JfKJcXfzZs7dadnh2BXK"
  },
  "18": {
    id: "18",
    name: "Drip-Drop Tote - White/Black",
    price: 295,
    image: "/images/products/drip-drop-white-black.jpg",
    images: ["/images/products/drip-drop-white-black.jpg"],
    description: "The Drip-Drop Tote in white and black leather. A contemporary tote featuring unique design elements and premium leather construction.",
    details: [
      "White and black leather",
      "Contemporary design",
      "Unique drip-drop elements",
      "Premium leather construction",
      "Modern functionality"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JgKJcXfzZs7d680M16rY"
  },
  "19": {
    id: "19",
    name: "Fringe 4 Dayz Clutch",
    price: 315,
    image: "/images/products/fringe-4-dayz-clutch.jpg",
    images: ["/images/products/fringe-4-dayz-clutch.jpg"],
    description: "The Fringe 4 Dayz Clutch featuring premium leather with distinctive fringe detailing. A statement piece that combines traditional craftsmanship with modern design.",
    details: [
      "Premium leather construction",
      "Distinctive fringe detailing",
      "Statement piece design",
      "Traditional craftsmanship",
      "Modern functionality"
    ],
    category: "clutches",
    stripePriceId: "price_1SU8JgKJcXfzZs7dKC6c3PDw"
  },
  "20": {
    id: "20",
    name: "The BRAVE Bag - Black Deerskin",
    price: 345,
    image: "/images/products/the-brave-bag-black-deerskin.jpg",
    images: ["/images/products/the-brave-bag-black-deerskin.jpg"],
    description: "The BRAVE Bag in premium black deerskin. Our flagship bag crafted from the finest deerskin leather with meticulous attention to detail and premium hardware.",
    details: [
      "Premium black deerskin",
      "Flagship BRAVE design",
      "Finest leather craftsmanship",
      "Meticulous attention to detail",
      "Premium hardware throughout"
    ],
    category: "bags",
    stripePriceId: "price_1SU8JhKJcXfzZs7dH4QBwelH"
  },
  "21": {
    id: "21",
    name: "BRV Wallet",
    price: 125,
    image: "/images/products/brv-wallet.jpg",
    images: ["/images/products/brv-wallet.jpg"],
    description: "The BRV Wallet in premium leather. A minimalist wallet crafted from premium leather with multiple card slots and bill compartment, perfect for everyday carry.",
    details: [
      "Premium leather construction",
      "Minimalist design",
      "Multiple card slots",
      "Bill compartment",
      "Perfect everyday carry"
    ],
    category: "wallets",
    stripePriceId: "price_1SU8JhKJcXfzZs7dpEMmIcTk"
  },
  "22": {
    id: "22",
    name: "BRV Cardholder",
    price: 85,
    image: "/images/products/brv-cardholder.jpg",
    images: ["/images/products/brv-cardholder.jpg"],
    description: "The BRV Cardholder in premium leather. A sleek cardholder crafted from premium leather with multiple card slots, perfect for the minimalist carry.",
    details: [
      "Premium leather construction",
      "Sleek minimalist design",
      "Multiple card slots",
      "Compact size",
      "Perfect minimalist carry"
    ],
    category: "wallets",
    stripePriceId: "price_1SU8JiKJcXfzZs7dEGRBy51s"
  },
  "23": {
    id: "23",
    name: "BRV Necklace",
    price: 65,
    image: "/images/products/necklace.jpg",
    images: ["/images/products/necklace.jpg"],
    description: "The BRV Necklace featuring premium leather and metal accents. A unique accessory that complements our leather goods collection with distinctive BRAVE styling.",
    details: [
      "Premium leather and metal",
      "Unique accessory design",
      "Complements BRAVE collection",
      "Distinctive BRAVE styling",
      "Quality craftsmanship"
    ],
    category: "accessories",
    stripePriceId: "price_1SU8JiKJcXfzZs7dSBz8Ak02"
  }
};

export const getProductsByCategory = (category: string) => {
  return Object.values(products).filter(product => product.category === category);
};

export const getAllProducts = () => {
  return Object.values(products);
};

export const getProductById = (id: string) => {
  return products[id];
};