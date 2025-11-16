import Stripe from 'stripe';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env') });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// BRAVE Product Catalog with pricing
const braveProducts = [
  {
    name: "BRV Clutch - Black",
    description: "Our signature BRV clutch in premium black leather. Handcrafted with meticulous attention to detail, featuring premium hardware and a sleek, modern design.",
    price: 28500, // $285 in cents
    images: ["https://localhost:3000/images/products/brv-clutch-black.jpg"],
    category: "clutches"
  },
  {
    name: "BRV Clutch - Tobacco",
    description: "Our signature BRV clutch in rich tobacco leather. Handcrafted with meticulous attention to detail, featuring premium hardware and a sleek, modern design.",
    price: 28500,
    images: ["https://localhost:3000/images/products/brv-clutch-tobacco.jpg"],
    category: "clutches"
  },
  {
    name: "BRV Clutch - Red",
    description: "Our signature BRV clutch in vibrant red leather. Handcrafted with meticulous attention to detail, featuring premium hardware and a sleek, modern design.",
    price: 28500,
    images: ["https://localhost:3000/images/products/brv-clutch-red.jpg"],
    category: "clutches"
  },
  {
    name: "BRV Clutch - White",
    description: "Our signature BRV clutch in pristine white leather. Handcrafted with meticulous attention to detail, featuring premium hardware and a sleek, modern design.",
    price: 28500,
    images: ["https://localhost:3000/images/products/brv-clutch-white.jpg"],
    category: "clutches"
  },
  {
    name: "VAMP Mix - Tobacco",
    description: "The VAMP Mix in rich tobacco leather combines traditional craftsmanship with contemporary style. This versatile piece features mixed textures and premium materials.",
    price: 32500, // $325 in cents
    images: ["https://localhost:3000/images/products/vamp-mix-tobacco.jpg"],
    category: "bags"
  },
  {
    name: "VAMP Bag - Black",
    description: "The VAMP bag in premium black leather combines traditional craftsmanship with contemporary style. This versatile piece features mixed textures and premium materials.",
    price: 32500,
    images: ["https://localhost:3000/images/products/vamp-bag-black.jpg"],
    category: "bags"
  },
  {
    name: "VAMP Bag - Clay",
    description: "The VAMP bag in beautiful clay leather combines traditional craftsmanship with contemporary style. This versatile piece features mixed textures and premium materials.",
    price: 32500,
    images: ["https://localhost:3000/images/products/vamp-bag-clay.jpg"],
    category: "bags"
  },
  {
    name: "VAMP Bag - Jade",
    description: "The VAMP bag in stunning jade leather combines traditional craftsmanship with contemporary style. This versatile piece features mixed textures and premium materials.",
    price: 32500,
    images: ["https://localhost:3000/images/products/vamp-bag-jade.jpg"],
    category: "bags"
  },
  {
    name: "Large Pecos Bag - Red",
    description: "The Large Pecos Bag in vibrant red leather. A spacious everyday carry tote crafted from premium bison leather with hand-finished edges and premium hardware.",
    price: 38500, // $385 in cents
    images: ["https://localhost:3000/images/products/large-pecos-bag-red.jpg"],
    category: "bags"
  },
  {
    name: "Large Pecos Bag - White",
    description: "The Large Pecos Bag in pristine white leather. A spacious everyday carry tote crafted from premium leather with hand-finished edges and premium hardware.",
    price: 38500,
    images: ["https://localhost:3000/images/products/large-pecos-bag-white.jpg"],
    category: "bags"
  },
  {
    name: "Medium Zip Pouch - Black",
    description: "The Medium Zip Pouch in classic black leather. A minimalist zip pouch perfect for organizing your essentials, crafted from premium leather with smooth zipper closure.",
    price: 18500, // $185 in cents
    images: ["https://localhost:3000/images/products/medium-zip-pouch-black.jpg"],
    category: "accessories"
  },
  {
    name: "Medium Zip Pouch - Brown",
    description: "The Medium Zip Pouch in rich brown leather. A minimalist zip pouch perfect for organizing your essentials, crafted from premium leather with smooth zipper closure.",
    price: 18500,
    images: ["https://localhost:3000/images/products/medium-zip-pouch-brown.jpg"],
    category: "accessories"
  },
  {
    name: "Medium Zip Pouch - Grey",
    description: "The Medium Zip Pouch in sophisticated grey leather. A minimalist zip pouch perfect for organizing your essentials, crafted from premium leather with smooth zipper closure.",
    price: 18500,
    images: ["https://localhost:3000/images/products/medium-zip-pouch-grey.jpg"],
    category: "accessories"
  },
  {
    name: "Large Zip Pouch - Bison",
    description: "The Large Zip Pouch in premium bison leather. A spacious zip pouch perfect for organizing larger items, crafted from premium bison leather with smooth zipper closure and wrist strap.",
    price: 22500, // $225 in cents
    images: ["https://localhost:3000/images/products/large-zip-pouch-bison.jpg"],
    category: "accessories"
  },
  {
    name: "Mudcloth Tote - Black",
    description: "The Mudcloth Tote in black with premium leather accents. A unique tote featuring traditional mudcloth patterns combined with premium leather craftsmanship.",
    price: 26500, // $265 in cents
    images: ["https://localhost:3000/images/products/mudcloth-tote-black.jpg"],
    category: "bags"
  },
  {
    name: "Drip-Drop Tote - White/Black",
    description: "The Drip-Drop Tote in white and black leather. A contemporary tote featuring unique design elements and premium leather construction.",
    price: 29500, // $295 in cents
    images: ["https://localhost:3000/images/products/drip-drop-tote-white-black.jpg"],
    category: "bags"
  },
  {
    name: "Fringe 4 Dayz Clutch",
    description: "The Fringe 4 Dayz Clutch featuring premium leather with distinctive fringe detailing. A statement piece that combines traditional craftsmanship with modern design.",
    price: 31500, // $315 in cents
    images: ["https://localhost:3000/images/products/fringe-4-dayz-clutch.jpg"],
    category: "clutches"
  },
  {
    name: "Adinkra Bag - Bison",
    description: "The Adinkra Bag in premium bison leather. A unique bag featuring traditional Adinkra symbols combined with premium leather craftsmanship and modern functionality.",
    price: 27500, // $275 in cents
    images: ["https://localhost:3000/images/products/adinkra-bag-bison.jpg"],
    category: "bags"
  },
  {
    name: "The BRAVE Bag - Black Deerskin",
    description: "The BRAVE Bag in premium black deerskin. Our flagship bag crafted from the finest deerskin leather with meticulous attention to detail and premium hardware.",
    price: 34500, // $345 in cents
    images: ["https://localhost:3000/images/products/the-brave-bag-black-deerskin.jpg"],
    category: "bags"
  },
  {
    name: "BRV Wallet",
    description: "The BRV Wallet in premium leather. A minimalist wallet crafted from premium leather with multiple card slots and bill compartment, perfect for everyday carry.",
    price: 12500, // $125 in cents
    images: ["https://localhost:3000/images/products/brv-wallet.jpg"],
    category: "wallets"
  },
  {
    name: "BRV Cardholder",
    description: "The BRV Cardholder in premium leather. A sleek cardholder crafted from premium leather with multiple card slots, perfect for the minimalist carry.",
    price: 8500, // $85 in cents
    images: ["https://localhost:3000/images/products/brv-cardholder.jpg"],
    category: "wallets"
  },
  {
    name: "BRV Necklace",
    description: "The BRV Necklace featuring premium leather and metal accents. A unique accessory that complements our leather goods collection with distinctive BRAVE styling.",
    price: 6500, // $65 in cents
    images: ["https://localhost:3000/images/products/brv-necklace.jpg"],
    category: "accessories"
  }
];

async function createStripeProducts() {
  console.log('🚀 Starting BRAVE product creation in Stripe...');
  
  const createdProducts = [];
  
  for (const product of braveProducts) {
    try {
      // Create the product
      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        images: product.images,
        metadata: {
          category: product.category,
          brand: 'BRAVE'
        }
      });
      
      // Create the price
      const stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: 'usd',
        metadata: {
          category: product.category
        }
      });
      
      createdProducts.push({
        name: product.name,
        productId: stripeProduct.id,
        priceId: stripePrice.id,
        price: `$${(product.price / 100).toFixed(2)}`
      });
      
      console.log(`✅ Created: ${product.name} - $${(product.price / 100).toFixed(2)}`);
      
    } catch (error) {
      console.error(`❌ Failed to create ${product.name}:`, error.message);
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`Created ${createdProducts.length} products successfully`);
  console.log('\nProduct IDs for your database:');
  createdProducts.forEach(product => {
    console.log(`${product.name}:`);
    console.log(`  Product ID: ${product.productId}`);
    console.log(`  Price ID: ${product.priceId}`);
    console.log('');
  });
  
  return createdProducts;
}

// Run the script
if (process.argv[2] === 'create') {
  createStripeProducts()
    .then(() => {
      console.log('🎉 All BRAVE products created successfully!');
      process.exit(0);
    })
    .catch(error => {
      console.error('💥 Error creating products:', error);
      process.exit(1);
    });
}

export { createStripeProducts, braveProducts };