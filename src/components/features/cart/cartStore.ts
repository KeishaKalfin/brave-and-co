import { createSignal, createEffect } from 'solid-js';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const [cartItems, setCartItems] = createSignal<CartItem[]>([]);
const [isCartOpen, setIsCartOpen] = createSignal(false);

// Load cart from localStorage on mount
createEffect(() => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('brave-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }
});

// Save cart to localStorage whenever it changes
createEffect(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('brave-cart', JSON.stringify(cartItems()));
  }
});

export const addToCart = (item: Omit<CartItem, 'quantity'>) => {
  const currentItems = cartItems();
  const existingItem = currentItems.find(i => i.id === item.id);
  
  if (existingItem) {
    setCartItems(currentItems.map(i => 
      i.id === item.id 
        ? { ...i, quantity: i.quantity + 1 }
        : i
    ));
  } else {
    setCartItems([...currentItems, { ...item, quantity: 1 }]);
  }
};

export const removeFromCart = (id: string) => {
  setCartItems(cartItems().filter(item => item.id !== id));
};

export const updateQuantity = (id: string, quantity: number) => {
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }
  
  setCartItems(cartItems().map(item => 
    item.id === id ? { ...item, quantity } : item
  ));
};

export const clearCart = () => {
  setCartItems([]);
};

export const getCartTotal = () => {
  return cartItems().reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartItemCount = () => {
  return cartItems().reduce((total, item) => total + item.quantity, 0);
};

export { cartItems, isCartOpen, setIsCartOpen };