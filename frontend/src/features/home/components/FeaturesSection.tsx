// FeaturesSection.tsx
import { Mic, Video, Heart, Globe, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Calls",
      description: "Crystal clear voice calls with people who share your interests"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Chat",
      description: "Face-to-face conversations with HD video quality"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Instant Matching",
      description: "Smart algorithm that connects you with compatible people"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Community",
      description: "Connect with people from around the world"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description: "Your privacy and safety are our top priority"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Instant connections with minimal lag"
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 mb-4">
            FEATURES
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500">
              connect meaningfully
            </span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veilverse offers a complete suite of features designed to help you build genuine connections
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-[2px]"></div>
              
              {/* Content */}
              <div className="relative bg-white rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">10M+</div>
            <div className="text-sm text-gray-500">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-yellow-500">50M+</div>
            <div className="text-sm text-gray-500">Daily Matches</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">100+</div>
            <div className="text-sm text-gray-500">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">4.8★</div>
            <div className="text-sm text-gray-500">App Store Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;