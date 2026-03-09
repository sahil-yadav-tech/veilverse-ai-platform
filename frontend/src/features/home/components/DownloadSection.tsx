// DownloadSection.tsx
import { Apple, Chrome, Smartphone } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to start your journey?
        </h2>
        <p className="text-xl mb-10 text-white/90">
          Join millions of users who have already found meaningful connections on Veilverse
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="group flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
            <Apple size={24} className="group-hover:rotate-12 transition-transform" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-lg">App Store</div>
            </div>
          </button>
          
          <button className="group flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300">
            <Smartphone size={24} className="group-hover:rotate-12 transition-transform" />
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-lg">Google Play</div>
            </div>
          </button>
        </div>
        
        <div className="flex items-center justify-center gap-8 text-sm text-white/80">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            Free to download
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            No credit card
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;