import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Star } from 'lucide-react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  const foods = [
    {
      id: 1,
      name: 'Special Doro Wat',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      description: 'Slow-cooked chicken stew with spices and boiled eggs.',
      price: '$18.99',
    },
    {
      id: 2,
      name: 'Gourmet Beef Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      description: 'Juicy artisan patty topped with sharp cheddar cheese.',
      price: '$12.99',
    },
    {
      id: 3,
      name: 'Stone-Baked Pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      description: 'Crispy dough with fresh mozzarella and basil leaves.',
      price: '$15.49',
    },
    {
      id: 4,
      name: 'Creamy Alfredo Pasta',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      description: 'Fettuccine in garlic parmesan sauce with herbs.',
      price: '$14.25',
    },
    {
      id: 5,
      name: 'Grilled Chicken Bowl',
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
      description: 'Tender chicken breast served over warm quinoa.',
      price: '$13.50',
    },
    {
      id: 6,
      name: 'Fresh Garden Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      description: 'Crispy greens, cherry tomatoes, and citrus dressing.',
      price: '$9.99',
    },
  ];

  return (
    <section className="bg-linear-to-b from-amber-50 to-orange-50/30 py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Hero Text Content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
              <span>Welcome to Addis Restaurant</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-amber-950 tracking-tight leading-tight mb-4">
              Delicious Food, <br className="hidden sm:inline" />
              Delivered to Your <span className="text-amber-600">Door.</span>
            </h1>

            {/* Description */}
            <p className="text-amber-900/80 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover fresh, authentic, and handcrafted culinary delights from Addis Restaurant. From rich traditional favorites to contemporary classics, we bring warmth to every meal.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-100/50 text-amber-950 font-medium border border-amber-300 px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xs hover:shadow-md active:scale-95"
              >
                <ShoppingCart className="w-4 h-4 text-amber-700" />
                <span>Order Now</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Food Swiper Carousel */}
          <div className="lg:col-span-7 w-full min-w-0">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="pb-12 pt-2 px-1 [&_.swiper-button-next]:text-amber-600 [&_.swiper-button-prev]:text-amber-600 [&_.swiper-pagination-bullet-active]:bg-amber-600"
            >
              {foods.map((food) => (
                <SwiperSlide key={food.id} className="h-auto">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 flex flex-col h-full group">
                    {/* Food Image Container */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 right-3 bg-amber-950/80 backdrop-blur-xs text-amber-300 font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
                        {food.price}
                      </span>
                    </div>

                    {/* Food Card Content */}
                    <div className="p-4 flex flex-col grow justify-between">
                      <div>
                        <h3 className="font-serif font-bold text-base text-amber-950 mb-1 group-hover:text-amber-600 transition-colors">
                          {food.name}
                        </h3>
                        <p className="text-amber-900/70 text-xs line-clamp-2 leading-snug">
                          {food.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-amber-50 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                          Fresh Daily
                        </span>
                        <Link
                          to="/menu"
                          className="text-xs font-bold text-amber-600 hover:text-amber-800 transition-colors inline-flex items-center gap-1"
                        >
                          Order <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}