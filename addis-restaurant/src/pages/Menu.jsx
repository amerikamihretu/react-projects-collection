// src/pages/Menu.jsx
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CheckCircle2, Info, ShoppingCart, X } from "lucide-react";

// Unsplash food images mapped to menu data
const menuDishes = [
  {
    id: "1",
    name: "Doro Wat Special",
    price: 18.99,
    description:
      "Slow-cooked spicy chicken stew with tender drumsticks, boiled egg, and fresh homemade injera.",
    category: "Main Dish",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Special Kitfo",
    price: 21.5,
    description:
      "Freshly minced prime lean beef seasoned with spiced butter (niter kibbeh) and mitmita pepper.",
    category: "Main Dish",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Beyaynetu (Veggie Platter)",
    price: 16.0,
    description:
      "Colorful platter of spicy red lentils, yellow split peas, collard greens, and cabbage stew.",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Beef Tibs",
    price: 19.5,
    description:
      "Sautéed beef strips cooked with onions, garlic, jalapeños, and Ethiopian herbal butter.",
    category: "Main Dish",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    name: "Shiro Wat",
    price: 14.5,
    description:
      "Rich ground chickpea stew cooked with garlic, ginger, and aromatic traditional spices.",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    name: "Ethiopian Coffee Ceremony",
    price: 8.0,
    description:
      "Freshly roasted Arabica coffee beans brewed in a traditional clay pot (jebena).",
    category: "Beverage",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Menu({ searchTerm }) {
  // Consuming context directly via useContext
  const { addToCart } = useContext(CartContext);

  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (dish) => {
    const added = addToCart(dish);

    setToastMessage(
      added
        ? {
            type: "success",
            message: `${dish.name} added to cart`,
          }
        : {
            type: "info",
            message: `${dish.name} is already in your cart`,
          },
    );

    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const filteredDishes = menuDishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="relative py-12">
      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 rounded-lg border border-gray-200 bg-white shadow-lg">
          {/* Toast Content */}
          <div className="flex items-center gap-3 px-4 py-3">
            {/* Status Icon */}
            {toastMessage.type === "success" ? (
              <CheckCircle2 className="shrink-0 text-green-500" size={22} />
            ) : (
              <Info className="shrink-0 text-amber-500" size={22} />
            )}

            {/* Message */}
            <span className="grow text-sm font-medium text-gray-700">
              {toastMessage.message}
            </span>

            {/* Close Button */}
            <button
              onClick={() => setToastMessage(null)}
              className="shrink-0 text-gray-400 transition-colors hover:text-gray-700"
              aria-label="Close notification"
            >
              <X size={18} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-gray-100">
            <div
              className={`h-full ${
                toastMessage.type === "success"
                  ? "bg-green-500"
                  : "bg-amber-500"
              } toast-progress`}
            />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="mb-3 font-serif text-4xl font-bold text-amber-950">
            Our Menu
          </h1>

          <p className="text-sm text-amber-800/80 sm:text-base">
            Authentic Ethiopian flavors crafted with traditional spices and
            fresh ingredients.
          </p>
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish) => {
            const imageUrl = dish.image;

            return (
              <div
                key={dish.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Image Section */}
                <div className="relative h-52 w-full bg-amber-100">
                  <img
                    src={imageUrl}
                    alt={dish.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80";
                    }}
                  />

                  <span className="absolute right-3 top-3 rounded-full bg-amber-950/80 px-3 py-1 text-xs font-medium text-amber-300 backdrop-blur-sm">
                    {dish.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold text-amber-950">
                      {dish.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-amber-800/80">
                      {dish.description}
                    </p>
                  </div>

                  {/* Price & Action Button */}
                  <div className="mt-6 flex items-center justify-between border-t border-amber-50 pt-4">
                    <span className="text-xl font-bold text-amber-950">
                      ${dish.price.toFixed(2)}
                    </span>

                    <button
                      onClick={() => handleAddToCart(dish)}
                      className="inline-flex items-center space-x-2 rounded-xl bg-amber-800 px-4 py-2.5 text-sm font-semibold text-amber-50 shadow-sm transition-colors hover:bg-amber-900 active:scale-95"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}