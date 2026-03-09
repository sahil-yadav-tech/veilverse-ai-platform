import React from "react";
import { ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 border-2 ">
      <div className=" px-6 h-16 flex items-center justify-between px-6 h-16 flex items-center justify-between max-w-7xl mx-auto">

        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl text-[#fe5f40]">✦</span>
          <span className="text-lg font-semibold">VeilVesrse</span>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">

          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Explore
            <ChevronDown size={16} />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Solutions
            <ChevronDown size={16} />
          </div>

          <div className="cursor-pointer hover:text-black">
            FAQ
          </div>

          <div className="cursor-pointer hover:text-black">
            Support
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* <span className="text-sm cursor-pointer hover:text-black">
            signIn
          </span> */}

          <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-900 transition">
             signIn
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Header;