import { Star, MapPin, Clock, Heart, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function FeaturedPlaces() {
  const [liked, setLiked] = useState<number[]>([]);

  const places = [
    {
      name: 'Sacred Temple',
      category: 'Spiritual',
      image: 'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      reviews: 2456,
      duration: '2-3 hours',
      description: 'Beautiful temple complex with serene atmosphere and spiritual programs.',
    },
    {
      name: 'Adventure Park',
      category: 'Entertainment',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      reviews: 5234,
      duration: 'Full day',
      description: 'Thrilling amusement park with rides, water attractions, and family fun.',
    },
    {
      name: 'Bird Sanctuary',
      category: 'Nature',
      image: 'https://images.pexels.com/photos/36762/scarlet-macaw-ara-macao-hybrid.jpg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      reviews: 1832,
      duration: '3-4 hours',
      description: 'Paradise for bird watchers with over 300 species in natural habitat.',
    },
    {
      name: 'Grand Shopping Mall',
      category: 'Shopping',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      reviews: 8921,
      duration: '4-5 hours',
      description: 'Massive shopping destination with international brands and dining.',
    },
    {
      name: 'Central Market',
      category: 'Local Experience',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      reviews: 6543,
      duration: '2-3 hours',
      description: 'Vibrant market with street food, shops, and authentic local atmosphere.',
    },
    {
      name: 'City Botanical Garden',
      category: 'Parks',
      image: 'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      reviews: 3421,
      duration: '2-3 hours',
      description: 'Sprawling green space perfect for picnics, walks, and nature photography.',
    },
  ];

  const toggleLike = (index: number) => {
    setLiked(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="places" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 rounded-full px-5 py-2.5 mb-6 shadow-lg shadow-yellow-400/10">
            <Sparkles size={18} className="text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-semibold tracking-wide">Top Picks</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Must-Visit
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mt-2">
              Places
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Handpicked destinations that showcase the best of the city's culture, entertainment, and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {places.map((place, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(index)}
                  className="absolute top-4 right-4 w-12 h-12 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-black/80 hover:scale-110 transition-all duration-300 border border-white/10"
                >
                  <Heart
                    size={22}
                    className={`transition-all duration-300 ${liked.includes(index) ? 'text-red-500 fill-red-500 scale-110' : 'text-white'}`}
                  />
                </button>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 backdrop-blur text-black text-xs font-bold rounded-full shadow-lg">
                    {place.category}
                  </span>
                </div>

                {/* Trending Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-1 px-3 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                    <TrendingUp size={14} className="text-green-400" />
                    <span className="text-xs font-semibold text-white">Trending</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {place.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {place.description}
                </p>

                {/* Stats Row */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-1">
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-white">{place.rating}</span>
                    <span className="text-gray-500 text-sm">({place.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Clock size={16} className="text-yellow-400" />
                    <span>{place.duration}</span>
                  </div>
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-between gap-2">
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors touch-manipulation min-h-[44px]">
                    <MapPin size={16} />
                    <span className="hidden sm:inline">View Map</span>
                    <span className="sm:hidden">Map</span>
                  </button>
                  <button className="px-4 sm:px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 touch-manipulation">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            <span>Explore All 150+ Places</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
