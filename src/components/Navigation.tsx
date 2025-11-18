import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Places', href: '#places' },
    { name: 'Tours', href: '#tours' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-black/98 backdrop-blur-xl shadow-lg shadow-black/50' : 'bg-black/95 backdrop-blur-md'
    } border-b border-yellow-400/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group" onClick={handleLinkClick}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-black font-bold text-sm sm:text-base">CT</span>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              CITY<span className="text-yellow-400">TOURS</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#tours"
              className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105"
            >
              Book a Tour
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-x-[-50%] translate-y-[-50%]' : 'rotate-0 translate-x-[-50%] translate-y-[-8px]'
              }`} />
              <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100 translate-x-[-50%] translate-y-[-50%]'
              }`} />
              <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? '-rotate-45 translate-x-[-50%] translate-y-[-50%]' : 'rotate-0 translate-x-[-50%] translate-y-[6px]'
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-16 sm:top-20 bottom-0 z-[99] bg-black backdrop-blur-xl animate-fade-in">
          <div className="h-full overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6 py-8 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-xl font-bold text-white hover:text-yellow-400 active:text-yellow-400 transition-all duration-200 py-5 px-5 rounded-xl hover:bg-white/10 active:bg-white/15 border-b border-white/10"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#tours"
                onClick={handleLinkClick}
                className="block w-full px-6 py-5 mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-xl shadow-lg shadow-yellow-400/30 active:scale-95 transition-all duration-300 text-center"
              >
                Book a Tour
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
