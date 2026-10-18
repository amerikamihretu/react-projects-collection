import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message && formData.phone) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-serif font-bold text-amber-950 mb-3">Contact Us</h1>
          <p className="text-amber-900/70 text-sm sm:text-base">
            Have questions, feedback, or want to reserve a table? Send us a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-amber-100 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-amber-950 mb-6">Send Us a Message</h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been sent successfully. We will contact you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-amber-950 mb-1.5 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-amber-50/30 border border-amber-200 rounded-xl text-sm text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-950 mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 bg-amber-50/30 border border-amber-200 rounded-xl text-sm text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-950 mb-1.5 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+251 91 123 4567"
                  className="w-full px-4 py-2.5 bg-amber-50/30 border border-amber-200 rounded-xl text-sm text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-950 mb-1.5 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2.5 bg-amber-50/30 border border-amber-200 rounded-xl text-sm text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-xl transition-all shadow-md active:scale-95 text-xs uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          </div>

          {/* RIGHT: Info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Card */}
            <div className="bg-amber-950 text-white p-8 rounded-3xl space-y-6">
              <h2 className="text-xl font-serif font-bold text-amber-100">Restaurant Info</h2>

              <ul className="space-y-4 text-xs sm:text-sm text-amber-200/80">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>123 Bole Road, Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>+251 91 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>info@addisrestaurant.com</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-amber-900">
                <h3 className="font-bold text-amber-100 mb-2 flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Opening Hours</span>
                </h3>
                <div className="text-xs text-amber-200/70 space-y-1">
                  <p>Monday – Friday: 11:00 AM – 10:00 PM</p>
                  <p>Saturday – Sunday: 10:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-amber-100/50 border border-amber-200 rounded-3xl p-6 h-56 flex flex-col items-center justify-center text-center">
              <MapPin className="w-8 h-8 text-amber-600 mb-2" />
              <h4 className="font-bold text-amber-950 text-sm">Map Location</h4>
              <p className="text-xs text-amber-900/60 max-w-xs mt-1">
                Located in central Addis Ababa on Bole Road, 5 minutes from the airport.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}