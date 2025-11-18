import { ChevronLeft, ChevronRight, BookmarkCheck, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Guides() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const guides = [
    {
      title: 'Best Weekend Getaways',
      description: 'Perfect 2-day itineraries for couples, families, and solo travelers.',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tags: ['Travel', 'Itineraries'],
    },
    {
      title: 'Top 10 Restaurants',
      description: 'From street food to fine dining - the ultimate food lover\'s guide.',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tags: ['Food', 'Dining'],
    },
    {
      title: 'Photography Guide',
      description: 'Best spots and golden hours for stunning Instagram-worthy shots.',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tags: ['Photography', 'Visual'],
    },
    {
      title: 'Family-Friendly Activities',
      description: 'Entertainment, parks, and experiences perfect for all ages.',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      tags: ['Family', 'Kids'],
    },
    {
      title: 'Budget Travel Tips',
      description: 'Experience the city without breaking the bank - insider money-saving tips.',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tags: ['Budget', 'Tips'],
    },
    {
      title: 'Monsoon Adventures',
      description: 'Best places to visit and things to do during the rainy season.',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      tags: ['Seasonal', 'Weather'],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % guides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + guides.length) % guides.length);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 rounded-full px-5 py-2.5 mb-6 shadow-lg shadow-yellow-400/10">
              <Sparkles size={18} className="text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">Resources</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Travel
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mt-2">
                Guides
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Expert recommendations and detailed guides to help you plan the perfect visit.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:border-yellow-400 transition-all duration-300 group"
            >
              <ChevronLeft className="text-white group-hover:text-black transition-colors" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:border-yellow-400 transition-all duration-300 group"
            >
              <ChevronRight className="text-white group-hover:text-black transition-colors" size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {guides.map((guide, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Guide Image Card */}
                  <div
                    className="h-96 rounded-3xl relative overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
                    style={{ background: guide.image }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                    
                    {/* Bookmark Icon */}
                    <div className="absolute top-6 right-6">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-yellow-400/30 transition-all duration-300">
                        <BookmarkCheck className="text-white" size={26} />
                      </div>
                    </div>

                    {/* Decorative Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Guide Content */}
                  <div className="space-y-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {guide.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 text-yellow-400 text-sm font-semibold rounded-full hover:border-yellow-400/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {guide.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {guide.description}
                    </p>
                    
                    {/* CTA Button */}
                    <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
                      <span>Read Guide</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2 md:hidden">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="text-white" size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="text-white" size={20} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {guides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-yellow-400' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
