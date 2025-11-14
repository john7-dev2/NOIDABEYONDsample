import { Star, MapPin, Clock, Heart } from 'lucide-react';
import { useState } from 'react';

export default function FeaturedPlaces() {
  const [liked, setLiked] = useState<number[]>([]);

  const places = [
    {
      name: 'ISKCON Temple',
      category: 'Spiritual',
      image: 'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      reviews: 2456,
      duration: '2-3 hours',
      description: 'Beautiful temple complex with serene atmosphere and spiritual programs.',
    },
    {
      name: 'Worlds of Wonder',
      category: 'Entertainment',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      reviews: 5234,
      duration: 'Full day',
      description: 'Thrilling amusement park with rides, water attractions, and family fun.',
    },
    {
      name: 'Okhla Bird Sanctuary',
      category: 'Nature',
      image: 'https://images.pexels.com/photos/36762/scarlet-macaw-ara-macao-hybrid.jpg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      reviews: 1832,
      duration: '3-4 hours',
      description: 'Paradise for bird watchers with over 300 species in natural habitat.',
    },
    {
      name: 'DLF Mall of India',
      category: 'Shopping',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      reviews: 8921,
      duration: '4-5 hours',
      description: 'Massive shopping destination with international brands and dining.',
    },
    {
      name: 'Sector 18 Market',
      category: 'Local Experience',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      reviews: 6543,
      duration: '2-3 hours',
      description: 'Vibrant market with street food, shops, and authentic local atmosphere.',
    },
    {
      name: 'Botanical Garden',
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
    <section id="places" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Top Picks</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Must-Visit Places
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Handpicked destinations that showcase the best of Noida's culture, entertainment, and natural beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <button
                  onClick={() => toggleLike(index)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <Heart
                    size={20}
                    className={liked.includes(index) ? 'text-red-500 fill-red-500' : 'text-white'}
                  />
                </button>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-400/90 backdrop-blur text-black text-xs font-semibold rounded-full">
                    {place.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {place.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {place.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-white">{place.rating}</span>
                    <span className="text-gray-500 text-sm">({place.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Clock size={16} />
                    <span>{place.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <MapPin size={16} className="text-yellow-400" />
                    <span>View on Map</span>
                  </div>
                  <button className="px-4 py-2 bg-yellow-400 text-black text-sm font-semibold rounded-lg hover:bg-yellow-300 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300 font-semibold">
            Explore All 150+ Places
          </button>
        </div>
      </div>
    </section>
  );
}
