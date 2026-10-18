// src/components/Header.jsx
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { User, ShoppingCart, Menu, X, Utensils } from "lucide-react";
import { CartContext } from "../context/CartContext";
import ToggleTheme from "./ToggleTheme";
import SearchBar from "./SearchBar";

export default function Header({ searchTerm, setSearchTerm }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItemCount } = useContext(CartContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-amber-950/95 backdrop-blur-md text-amber-50 border-b border-amber-800/40 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-amber-50 shadow-md group-hover:bg-amber-500 transition-colors">
            <Utensils className="w-5 h-5" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-wide text-amber-400 group-hover:text-amber-300 transition-colors">
            Addis Restaurant
          </span>
        </Link>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 mr-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-amber-400 ${
                  isActive
                    ? "text-amber-400 font-semibold border-b-2 border-amber-400 pb-1"
                    : "text-amber-100/90"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions Section */}
        <div className="flex items-center space-x-5">
          <NavLink
            to="/user"
            className={({ isActive }) =>
              `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? "bg-amber-400 text-amber-950 shadow-md scale-105"
                  : "bg-amber-600 text-amber-50 hover:bg-amber-500 hover:scale-105"
              }`
            }
          >
            <User className="w-5 h-5" />
          </NavLink>
          <ToggleTheme />
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative p-2 transition-colors ${
                isActive
                  ? "text-amber-400"
                  : "text-amber-200 hover:text-amber-400"
              }`
            }
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-6 h-6" />

            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse border-2 border-amber-950">
                {cartItemCount}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-amber-200 hover:text-amber-400 hover:bg-amber-900/50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-amber-950 border-b border-amber-800/40 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-amber-900/60 text-amber-400 font-semibold"
                    : "text-amber-100/90 hover:bg-amber-900/30 hover:text-amber-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
