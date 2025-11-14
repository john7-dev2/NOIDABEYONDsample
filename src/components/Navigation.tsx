import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Places', href: '#places' },
    { name: 'Tours', href: '#tours' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <span className="text-black font-bold text-sm">NB</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              NOIDA<span className="text-yellow-400">BEYOND</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#tours"
              className="px-4 py-2 bg-yellow-400 text-black font-semibold text-sm rounded hover:bg-yellow-300 transition-all duration-200"
            >
              Book a Tour
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-yellow-400/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#tours"
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-2 bg-yellow-400 text-black font-semibold text-sm rounded hover:bg-yellow-300 transition-all duration-200 text-center"
            >
              Book a Tour
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
