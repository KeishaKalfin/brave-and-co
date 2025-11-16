import { Show } from 'solid-js';
import type { JSX } from 'solid-js';
import { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } from './cartStore';

export default function CartFlyout(): JSX.Element {
  const handleCheckout = () => {
    // Implement checkout logic here
    window.location.href = '/checkout';
  };

  return (
    <Show when={isCartOpen()} keyed>
      <div class="fixed inset-0 z-50 overflow-hidden">
        <div class="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />
        <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
          <div class="flex flex-col h-full">
            <div class="flex items-center justify-between p-6 border-b">
              <h2 class="text-lg font-semibold">Shopping Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                class="text-gray-400 hover:text-gray-600"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div class="flex-1 overflow-y-auto p-6">
              <Show
                when={cartItems().length > 0}
                keyed
                fallback={
                  <div class="text-center py-8">
                    <p class="text-gray-500">Your cart is empty</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      class="mt-4 text-black font-medium hover:underline"
                    >
                      Continue Shopping
                    </button>
                  </div>
                }
              >
                <div class="space-y-6">
                  {cartItems().map((item) => (
                    <div class="flex items-center space-x-4 py-4 border-b">
                      <img
                        src={item.image}
                        alt={item.name}
                        class="w-16 h-16 object-cover"
                      />
                      <div class="flex-1">
                        <h3 class="font-medium text-gray-900">{item.name}</h3>
                        <p class="text-sm text-gray-500">${item.price}</p>
                        <div class="flex items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            class="px-2 py-1 border rounded"
                          >
                            -
                          </button>
                          <span class="mx-3">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            class="px-2 py-1 border rounded"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            class="ml-4 text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div class="text-right">
                        <p class="font-medium">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Show>
            </div>
            
            <Show when={cartItems().length > 0} keyed>
              <div class="border-t p-6">
                <div class="flex justify-between items-center mb-4">
                  <span class="text-lg font-semibold">Total</span>
                  <span class="text-lg font-bold">${getCartTotal()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  class="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </Show>
  );
}