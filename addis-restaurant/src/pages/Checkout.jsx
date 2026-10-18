// src/pages/Checkout.jsx

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ArrowLeft, CreditCard } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();

  const { cart, cartTotal, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const tax = cartTotal * 0.15;
  const total = cartTotal + tax;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      customer: formData,
      items: cart,
      subtotal: cartTotal,
      tax: tax,
      total: total,
    };

    console.log("Order to send to database:", order);

    // Later:
    // send `order` to your backend/database

    alert("Order placed successfully!");
    clearCart();
    setFormData({
      name: "",
      phone: "",
      address: "",
      paymentMethod: "Cash on Delivery",
    });
    navigate("/");
  };

    return (
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page title */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-amber-950">
              Checkout
            </h1>

            <p className="text-amber-800/80 mt-2">
              Enter your information to complete your order.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-amber-100 space-y-6"
            >
              <h2 className="text-xl font-bold text-amber-950">
                Customer Information
              </h2>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full border border-amber-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full border border-amber-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">
                  Delivery Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Enter your delivery address"
                  className="w-full border border-amber-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-600 resize-none"
                />
              </div>

              {/* Payment */}
              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">
                  Payment Method
                </label>

                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full border border-amber-200 rounded-xl px-4 py-3 outline-none"
                >
                  <option>Cash on Delivery</option>
                  <option>Telebirr</option>
                  <option>Card</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-amber-800 hover:bg-amber-900 text-amber-50 py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Place Order
              </button>
            </form>

            {/* Order summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 h-fit">
              <h2 className="text-xl font-bold text-amber-950 pb-4 border-b border-amber-100">
                Order Summary
              </h2>

              <div className="space-y-4 mt-5">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4 text-sm"
                  >
                    <div>
                      <p className="font-semibold text-amber-950">{item.name}</p>

                      <p className="text-amber-700">Qty: {item.quantity}</p>
                    </div>

                    <span className="font-semibold text-amber-950">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-amber-100 mt-5 pt-5 space-y-3">
                <div className="flex justify-between text-sm text-amber-800">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm text-amber-800">
                  <span>Tax (15%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg font-bold text-amber-950 border-t border-amber-100 pt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/cart"
                className="flex items-center justify-center gap-2 mt-6 text-sm font-semibold text-amber-800 hover:text-amber-950"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

