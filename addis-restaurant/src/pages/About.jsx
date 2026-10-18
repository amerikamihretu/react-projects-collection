import { Link } from 'react-router-dom';
import { Heart, Award, Users, Utensils, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Utensils className="w-6 h-6 text-amber-600" />,
      title: 'Authentic Heritage',
      description: 'We import traditional Ethiopian spices and grain to deliver rich, authentic regional flavors.',
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-600" />,
      title: 'Crafted with Passion',
      description: 'Every dish is cooked fresh daily with attention to quality, balance, and warmth.',
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: 'Premium Ingredients',
      description: 'We partner with local farmers to source fresh vegetables and prime cuts of meat daily.',
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: 'Community First',
      description: 'Providing a welcoming atmosphere where families and friends gather over communal food.',
    },
  ];

  return (
    <div className="py-12 space-y-16 lg:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-amber-950 leading-tight">
              Welcome to <span className="text-amber-600">Addis Restaurant</span>
            </h1>
            <p className="text-amber-900/80 text-base leading-relaxed">
              Founded with a passion for bringing people together through authentic Ethiopian culinary traditions, Addis Restaurant offers a blend of rich heritage and modern dining comfort.
            </p>
            <p className="text-amber-900/80 text-base leading-relaxed">
              From our signature slow-cooked Doro Wat to our hand-tossed artisan pizzas and burgers, we ensure every plate served tells a story of fresh ingredients and warmth.
            </p>
            <div className="pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md"
              >
                <span>View Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Addis Restaurant Dining"
                className="w-full h-105 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUES / BENEFITS */}
      <section className="bg-amber-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-amber-100">Why Choose Us?</h2>
            <p className="text-amber-200/70 text-sm mt-2">
              We hold ourselves to high standards across culinary craft and guest experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <div key={index} className="bg-amber-900/50 p-6 rounded-2xl border border-amber-800/60">
                <div className="p-3 bg-amber-950 rounded-xl inline-block mb-4">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-amber-100 mb-2">{val.title}</h3>
                <p className="text-amber-200/70 text-xs sm:text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8">
        <div className="bg-amber-100/60 border border-amber-200 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-amber-950 mb-3">Join Us at the Table</h2>
          <p className="text-amber-900/80 text-sm mb-6">
            Have questions or looking to book a party table? Reach out to our hospitality team today.
          </p>
          <Link
            to="/contact"
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-xl transition-all inline-block shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}