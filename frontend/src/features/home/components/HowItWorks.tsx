// HowItWorks.tsx
import { UserPlus, MessageCircle, VideoIcon, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Create Profile",
      description: "Sign up in seconds and tell us about your interests"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Get Matched",
      description: "Our smart algorithm finds your perfect matches"
    },
    {
      icon: <VideoIcon className="w-8 h-8" />,
      title: "Start Talking",
      description: "Connect via voice, video, or text instantly"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Build Connections",
      description: "Grow meaningful relationships over time"
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 mb-4">
            HOW IT WORKS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start connecting in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
              four simple steps
            </span>
          </h3>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Lines (desktop only) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Video Preview */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-600/20"></div>
          <img 
            src="/api/placeholder/1200/400" 
            alt="Video chat preview" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-purple-600 ml-1"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;