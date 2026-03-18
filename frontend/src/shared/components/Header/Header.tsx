import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl text-[#fe5f40]">✦</span>
          <Link to="/" className="text-lg font-semibold text-black">
            VeilVerse
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-black">

          <Link to="/explore" className="hover:underline">
            Explore
          </Link>

          <Link to="/solutions" className="flex items-center gap-1 hover:underline">
            Solutions
            <ChevronDown size={16} />
          </Link>

          <Link to="/faq" className="hover:underline">
            FAQ
          </Link>

          <Link to="/support" className="hover:underline">
            Support
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <Link to="/login">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
              Sign In
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Header;