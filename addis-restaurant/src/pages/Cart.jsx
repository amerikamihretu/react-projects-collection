// src/pages/Cart.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../context/CartContext';
import { Plus, Minus, Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
    cartItemCount,
  } = useContext(CartContext);

  // Empty Cart View
  if (cart.length === 0) {
    return (
      <div className=" flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-800">
            <ShoppingCart className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-amber-950 mb-2">
            Your Cart is Empty
          </h2>
          <p className="text-amber-800/80 mb-8">
            You haven't added any Ethiopian delicacies to your order yet.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 bg-amber-800 hover:bg-amber-900 text-amber-50 px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Our Menu</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-200/60">
          <h1 className="text-3xl font-serif font-bold text-amber-950">Your Order</h1>
          <span className="text-sm font-semibold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Scrollable Cart Item List */}
          <div className="lg:col-span-2 space-y-4 max-h-150 overflow-y-auto pr-2">
            {cart.map((item) => {
              // Property fallback handles whatever property name your dish object uses
              const imageUrl = item.image || item.img || item.imageTag || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-100 flex items-center space-x-4"
                >
                  {/* Unsplash Image */}
                  <img
                    src={imageUrl}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl shrink-0 bg-amber-100"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-amber-950 text-base sm:text-lg truncate">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-amber-700/60 hover:text-red-600 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-amber-800 mt-1">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      {/* Plus / Minus Buttons */}
                      <div className="flex items-center border border-amber-200 rounded-lg overflow-hidden bg-amber-50/50">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-1.5 text-amber-800 hover:bg-amber-200/50 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-amber-950">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="p-1.5 text-amber-800 hover:bg-amber-200/50 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Line Item Subtotal */}
                      <span className="font-bold text-amber-950 text-base">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Checkout Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 h-fit space-y-6">
            <h2 className="text-xl font-bold text-amber-950 pb-3 border-b border-amber-100">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-amber-800">
                <span>Items Subtotal</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-amber-800">
                <span>Estimated Tax (15%)</span>
                <span className="font-semibold">${(cartTotal * 0.15).toFixed(2)}</span>
              </div>
              <div className="pt-3 border-t border-amber-100 flex justify-between font-bold text-amber-950 text-lg">
                <span>Total</span>
                <span>${(cartTotal * 1.15).toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout">
              <button className="w-full bg-amber-800 hover:bg-amber-900 text-amber-50 py-3.5 rounded-xl font-bold transition-colors shadow-sm">
                Proceed to Checkout
              </button>
            </Link>

            <Link
              to="/menu"
              className="block text-center text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors"
            >
              ← Add more items from Menu
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}