const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center  via-white to-blue-50 px-6">
      <div className="text-center max-w-4xl animate-fade-in">
        
        <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 font-medium">
          ✦ Veilverse ✦
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Match, Connect & Talk
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
            Audio, Video & Voice Calls
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover new people, match instantly and start conversations 
          through audio, video and voice calls on Veilverse.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="relative group px-8 py-4 rounded-full text-white text-lg font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 group-hover:scale-105 transition-transform duration-300"></div>
            <span className="relative">Get Started — It's Free</span>
          </button>

          <button className="relative group px-8 py-4 rounded-full text-gray-700 text-lg font-semibold overflow-hidden border-2 border-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-border">
            <div className="absolute inset-0 bg-white group-hover:bg-gray-50 transition-colors duration-300 rounded-full m-[2px]"></div>
            <span className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Download — Mobile App
            </span>
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
          <span>✨ 1M+ Downloads</span>
          <span>⭐ 4.8/5 Rating</span>
          <span>🔒 Secure & Private</span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;