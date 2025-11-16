import { Show } from 'solid-js';
import type { JSX } from 'solid-js';
import { cartItems, setIsCartOpen } from './cartStore';

export default function CartButton(): JSX.Element {
  const itemCount = () => cartItems().reduce((total, item) => total + item.quantity, 0);
  
  return (
    <button 
      onClick={() => setIsCartOpen(true)}
      class="text-gray-900 hover:text-gray-600 transition-colors relative"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
      </svg>
      <Show when={itemCount() > 0}>
        <span class="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount()}
        </span>
      </Show>
    </button>
  );
}