import React, { useState } from "react";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";



type UserProfile = {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  image: string;
  gender: string;
};

const mockUsers: UserProfile[] = [
  {
    id: 1,
    name: "Courtney",
    age: 25,
    location: "San Francisco, CA",
    gender: "Straight",
    bio: "Adventure seeker, music lover, and fitness enthusiast. Working in tech and exploring new places whenever I can. Let’s chat and share new experiences!",
    interests: ["Fitness", "Travel", "Music", "Nature"],
    image: "https://i.pinimg.com/1200x/09/ab/fd/09abfd5c30d59165e99b94fd382a7596.jpg",
    // image: "https://i.pinimg.com/736x/b5/52/4a/b5524aebf16102b40bcf88d5c96bb042.jpg",

  },
  {
    id: 2,
    name: "Alex",
    age: 27,
    location: "New York, USA",
    gender: "Straight",
    bio: "Tech geek, coffee lover & startup enthusiast. Always building something new and meeting amazing people.",
    interests: ["Coding", "Startup", "Coffee"],
  // image: "https://i.pinimg.com/736x/60/2f/c2/602fc2acafa29c0c936e79b07b637567.jpg",
  image: "https://i.pinimg.com/736x/eb/27/61/eb27619c4d22cf8960c2a6a267dbfc67.jpg",

  },
];

const Explore: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const user = mockUsers[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mockUsers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mockUsers.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#fdf2f8] to-[#fff7ed] p-6">
      
      <div className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex overflow-hidden">

        {/* LEFT ARROW */}
        <button
          onClick={handlePrev}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition"
        >
          <ArrowLeft size={20} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={handleNext}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition"
        >
          <ArrowRight size={20} />
        </button>

        {/* LEFT IMAGE SECTION */}
        <div className="w-1/2 relative p-6 cursor-drag">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-orange-300">
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Swipe Buttons */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
            <button className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-pink-500 text-2xl hover:scale-105 transition">
              ❤️
            </button>
            <button className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-orange-500 text-2xl hover:scale-105 transition">
              ✖
            </button>
          </div>
        </div>

        {/* RIGHT DETAILS SECTION */}
        <div className="w-1/2 p-8 flex flex-col justify-between">
          
          <div>
            {/* NAME */}
            <h2 className="text-4xl font-bold text-gray-900">
              {user.name},{" "}
              <span className="text-orange-500">{user.age}</span>
            </h2>

            {/* GENDER */}
            <div className="mt-4">
              <span className="px-4 py-1 border border-orange-300 text-orange-500 rounded-full text-sm font-medium">
                {user.gender}
              </span>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-2 text-gray-400 mt-4">
              <MapPin size={18} />
              <span>{user.location}</span>
            </div>

            {/* DIVIDER */}
            <hr className="my-5 border-gray-200" />

            {/* INTERESTS */}
            <div className="flex flex-wrap gap-3">
              {user.interests.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-100 to-orange-100 text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* BIO */}
            <p className="text-gray-500 mt-6 leading-relaxed text-lg">
              {user.bio}
            </p>
          </div>

          {/* CTA BUTTON */}
          <button className="mt-6 w-[220px] self-end bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            It’s a Match!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;