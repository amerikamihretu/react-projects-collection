
// src/components/SearchBar.jsx

import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full max-w-md mr-1.5">
      <input
        type="text"
        placeholder="Search menu..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-full border border-amber-200 bg-white py-2.5 pl-4 pr-10 text-sm text-black outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
      />

      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-800"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
}
