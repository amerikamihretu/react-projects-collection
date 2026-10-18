import { Link } from 'react-router-dom';
import { UtensilsCrossed, Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100/80  pt-16 pb-8 border-t border-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-900/80">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-amber-600 text-white p-2 rounded-xl">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-amber-50 leading-none">
                  Addis
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-400">
                  Restaurant
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-amber-200/70">
              Bringing authentic Ethiopian dining to your table. Experience fresh ingredients, rich traditions, and unforgettable flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-amber-50 mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'Menu', 'Categories', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-base font-bold text-amber-50 mb-4">Opening Hours</h4>
            <ul className="space-y-2.5 text-xs text-amber-200/70">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-100">Mon - Fri:</p>
                  <p>11:00 AM – 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-100">Sat - Sun:</p>
                  <p>10:00 AM – 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-bold text-amber-50 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-xs text-amber-200/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>123 Bole Road, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+251 91 123 4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>info@addisrestaurant.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/60 gap-4">
          <p>© {new Date().getFullYear()} Addis Restaurant. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>for authentic flavor lovers.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}