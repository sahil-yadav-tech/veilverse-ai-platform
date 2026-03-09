// Testimonials.tsx
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Premium User",
      image: "/api/placeholder/60/60",
      content: "I've met amazing people on Veilverse. The video quality is fantastic and the matching algorithm really works!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Verified User",
      image: "/api/placeholder/60/60",
      content: "Finally an app that focuses on real connections. The voice calls are crystal clear and I love the privacy features.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Community Member",
      image: "/api/placeholder/60/60",
      content: "Veilverse helped me find friends across the globe. The interface is beautiful and so easy to use!",
      rating: 5
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500 mb-4">
            TESTIMONIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by users
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-500">
              worldwide
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 p-[2px]">
                  <div className="w-full h-full rounded-full bg-white p-[2px]">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-100 to-rose-100"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;