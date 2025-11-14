import { ChevronLeft, ChevronRight, BookmarkCheck } from 'lucide-react';
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
      description: 'Experience Noida without breaking the bank - insider money-saving tips.',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tags: ['Budget', 'Tips'],
    },
    {
      title: 'Monsoon in Noida',
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
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="inline-block mb-4">
              <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Resources</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Travel Guides
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Expert recommendations and detailed guides to help you plan the perfect visit.
            </p>
          </div>

          <div className="hidden md:flex space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 group"
            >
              <ChevronLeft className="text-white group-hover:text-black" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 group"
            >
              <ChevronRight className="text-white group-hover:text-black" size={24} />
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
                  <div
                    className="h-96 rounded-2xl relative overflow-hidden group cursor-pointer"
                    style={{ background: guide.image }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <BookmarkCheck className="text-white" size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {guide.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold">{guide.title}</h3>
                    <p className="text-lg text-gray-400 leading-relaxed">{guide.description}</p>
                    <button className="group flex items-center space-x-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300">
                      <span>Read Guide</span>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
