import { Instagram, MessageCircle, Send, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Explore: ['Top Places', 'Guided Tours', 'Food & Dining', 'Shopping', 'Nature & Parks'],
    Company: ['About Us', 'Contact', 'Partner With Us', 'Careers', 'Privacy Policy'],
    Resources: ['Travel Guides', 'Submit a Place', 'Become a Tour Guide', 'FAQ', 'Blog'],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-black font-bold text-lg">CT</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                CITY<span className="text-yellow-400">TOURS</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your ultimate travel companion for discovering the best places, tours, and experiences
              in your city and beyond.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/sampleapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-pink-500 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-green-500 transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
              >
                <Send size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 CityTours. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
