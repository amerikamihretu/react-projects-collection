import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      id: 'ethiopian',
      name: 'Ethiopian Food',
      count: '12 Items',
      description: 'Rich, flavorful stews cooked with traditional berbere spices, served with fresh teff injera.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'burgers',
      name: 'Artisan Burgers',
      count: '6 Items',
      description: 'Grilled beef patties served on brioche buns with gourmet toppings and house sauces.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'pizza',
      name: 'Stone-Baked Pizza',
      count: '8 Items',
      description: 'Hand-tossed artisan dough topped with rich tomato marinara and fresh mozzarella.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'pasta',
      name: 'Italian Pasta',
      count: '5 Items',
      description: 'Fresh fettuccine and penne pasta prepared with rich Alfredo and marinara sauces.',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'salads',
      name: 'Fresh Salads',
      count: '4 Items',
      description: 'Crisp green salads with garden-fresh veggies, avocado, and house citrus vinaigrettes.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'drinks',
      name: 'Drinks & Beverages',
      count: '7 Items',
      description: 'Traditional spiced Ethiopian coffee, house honey wine, fresh juices, and soft drinks.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />
            <span>Food Directory</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-amber-950 mb-3">Food Categories</h1>
          <p className="text-amber-900/70 text-sm sm:text-base">
            Browse through our wide variety of dishes separated by culinary style and course.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-amber-950/80 backdrop-blur-xs text-amber-300 font-bold text-xs px-3 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-amber-950 mb-2 group-hover:text-amber-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-amber-900/70 text-xs sm:text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-between w-full bg-amber-50 hover:bg-amber-100/80 text-amber-950 font-semibold px-4 py-2.5 rounded-xl transition-colors text-xs uppercase tracking-wider"
                >
                  <span>Explore Dishes</span>
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}