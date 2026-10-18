import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Star, Flame, ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';

export default function Home() {
  const featuredDishes = [
    {
      id: 1,
      name: 'Special Doro Wat',
      price: '$18.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      description: 'Slow-cooked spiced chicken stew served with authentic teff injera and hard-boiled egg.',
    },
    {
      id: 2,
      name: 'Gourmet Beef Tibs',
      price: '$21.00',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: 'Sizzling tender beef strips sauteed with onions, rosemary, garlic, and jalapeños.',
    },
    {
      id: 3,
      name: 'Veggie Beyaynetu Platter',
      price: '$16.50',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      description: 'Assorted vegan lentils, yellow split peas, collard greens, and cabbage over fresh injera.',
    },
  ];

  const categoryHighlights = [
    {
      title: 'Ethiopian Specialties',
      count: '12 Dishes',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Woodfired Pizza',
      count: '8 Varieties',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Artisan Burgers',
      count: '6 Burgers',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return ( 
    <div className="space-y-16 lg:space-y-24 pb-16 "> 
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. REASSURANCE BADGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-amber-500/10 border border-amber-200 p-6 sm:p-8 rounded-2xl">
          <div className="flex items-center gap-4 text-amber-950">
            <div className="p-3 bg-amber-600 text-white rounded-xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base">Fast Doorstep Delivery</h4>
              <p className="text-xs text-amber-900/70">Hot and fresh, delivered in 30 mins</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-amber-950">
            <div className="p-3 bg-amber-600 text-white rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base">100% Authentic Quality</h4>
              <p className="text-xs text-amber-900/70">Traditional spices & fresh produce</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-amber-950">
            <div className="p-3 bg-amber-600 text-white rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base">Open Every Day</h4>
              <p className="text-xs text-amber-900/70">Serving lunch, dinner & late snacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DISHES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>Chef Selections</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-amber-950">Most Popular Dishes</h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-800 transition-colors"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-amber-950/80 backdrop-blur-xs text-amber-300 font-bold text-xs px-3 py-1 rounded-full">
                  {dish.price}
                </span>
              </div>
              <div className="p-6 flex flex-col grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-bold text-lg text-amber-950">{dish.name}</h3>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{dish.rating}</span>
                    </div>
                  </div>
                  <p className="text-amber-900/70 text-xs sm:text-sm leading-relaxed mb-6">
                    {dish.description}
                  </p>
                </div>
                <Link
                  to="/menu"
                  className="w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-xl transition-colors text-xs uppercase tracking-wider"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED CATEGORIES PREVIEW */}
      <section className="bg-amber-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-amber-100">Explore Cuisine Types</h2>
            <p className="text-amber-200/70 text-sm mt-2">
              From rich traditional stews to modern international comfort foods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryHighlights.map((cat, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden h-64 group shadow-lg"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-amber-950/90 via-amber-950/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-1">
                    {cat.count}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">{cat.title}</h3>
                  <Link
                    to="/categories"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold hover:text-white transition-colors"
                  >
                    <span>Browse Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-amber-600 to-amber-700 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Ready to Experience Addis Flavors?</h2>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
              Order directly online for fast delivery or reserve a table for an authentic dining experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <Link
              to="/menu"
              className="bg-amber-950 hover:bg-amber-900 text-white font-medium px-8 py-3.5 rounded-xl text-center transition-all shadow-md"
            >
              Order Online
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-amber-50 text-amber-950 font-medium px-8 py-3.5 rounded-xl text-center transition-all shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}