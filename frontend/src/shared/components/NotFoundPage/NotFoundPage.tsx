// NotFoundPage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Heart, MessageCircle, Users, Sparkles } from 'lucide-react';

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-yellow-50 overflow-hidden flex items-center justify-center px-4 sm:px-6">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,182,193,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Floating icons */}
        <Heart className="absolute top-40 left-[15%] text-pink-300/30 w-12 h-12 animate-float-slow" />
        <MessageCircle className="absolute bottom-40 right-[15%] text-rose-300/30 w-12 h-12 animate-float-slower" />
        <Users className="absolute top-60 right-[20%] text-yellow-300/30 w-12 h-12 animate-spin-slow" />
      </div>

      {/* Main Content Card */}
      <div className="relative max-w-5xl w-full mx-auto">
        
        {/* Glass Card with 3D effect */}
        <div 
          className="relative backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50 transform transition-all duration-300 hover:shadow-3xl"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
          }}
        >
          
          {/* Decorative top gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Side - 3D Illustration */}
            <div className="relative h-80 lg:h-96">
              
              {/* Main 404 Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 blur-3xl opacity-20 animate-pulse-slow"></div>
                  
                  <div className="relative">
                    
                    <div className="absolute top-0 left-0 text-9xl md:text-9xl lg:text-[12rem] font-black text-pink-200/50 transform translate-x-4 translate-y-4 select-none">
                      404
                    </div>
                    
                    <div className="absolute top-0 left-0 text-9xl md:text-9xl lg:text-[12rem] font-black text-rose-200/50 transform translate-x-2 translate-y-2 select-none">
                      404
                    </div>
                    
                    <div className="relative text-9xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 select-none animate-gradient-x">
                      404
                    </div>
                  </div>
                  
                  <Sparkles className="absolute -top-10 -right-10 w-12 h-12 text-pink-400/50 animate-spin-slow" />
                  <Sparkles className="absolute -bottom-10 -left-10 w-12 h-12 text-yellow-400/50 animate-spin-slow" />
                </div>
              </div>
              
              <div className="absolute top-10 right-10 w-16 h-16 bg-pink-400/20 rounded-2xl rotate-12 animate-float"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-rose-400/20 rounded-full animate-float-delayed"></div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-yellow-400/20 rounded-lg -rotate-12 animate-float-slow"></div>
            </div>
            
            {/* Right Side - Content */}
            <div className="text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 via-rose-400/10 to-yellow-500/10 border border-pink-200/50 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 animate-pulse"></span>
                <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500">
                  Error 404 • Page Not Found
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Oops! You've 
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500">
                  drifted away
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                The page you're looking for seems to have wandered off. 
                But don't worry, we'll help you find your way back!
              </p>

              {/* Search */}
              <div className="relative max-w-md mx-auto lg:mx-0 group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 rounded-full blur-sm group-hover:blur-md transition-all duration-300 opacity-50"></div>
                <div className="relative flex items-center bg-white rounded-full shadow-lg">
                  <Search className="absolute left-4 text-gray-400" size={20} />
                  <input 
                    type="text"
                    placeholder="Search for help..."
                    className="w-full py-4 pl-12 pr-4 bg-transparent rounded-full outline-none text-gray-700 placeholder-gray-400"
                  />
                  <button className="absolute right-2 px-4 py-2 bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    Go
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">

                <Link to="/" className="w-full sm:w-auto">
                  <button className="group relative w-full sm:w-auto px-8 py-3 rounded-full text-white font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 group-hover:scale-105 transition-transform duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <Home size={18} />
                      Back to Home
                    </span>
                  </button>
                </Link>

                <button 
                  onClick={() => window.history.back()}
                  className="group relative w-full sm:w-auto px-8 py-3 rounded-full text-gray-700 font-semibold overflow-hidden border-2 border-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 bg-clip-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-white group-hover:bg-gray-50 transition-colors duration-300 rounded-full m-[2px]"></div>
                  <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 bg-clip-text text-transparent">
                    <ArrowLeft size={18} />
                    Go Back
                  </span>
                </button>

              </div>

            </div>
          </div>

        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            Need immediate assistance? 
            <Link to="/support" className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 font-semibold">
              Contact Support
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;