// Footer.tsx
import { Heart, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">✦</span>
              <span className="text-xl font-bold text-white">Veilverse</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Making meaningful connections through voice and video.
            </p>
            <div className="flex gap-4">
              <Twitter size={20} className="hover:text-purple-400 cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-pink-400 cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Product Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Features</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Support</li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Security</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2024 Veilverse. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> for meaningful connections
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;