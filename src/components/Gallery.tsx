import { MapPin, Star } from 'lucide-react';

export default function Gallery() {
  const places = [
    {
      name: 'Sector 18 Market',
      category: 'Shopping & Food',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      rating: 4.5,
    },
    {
      name: 'Okhla Bird Sanctuary',
      category: 'Nature & Wildlife',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      rating: 4.7,
    },
    {
      name: 'Worlds of Wonder',
      category: 'Entertainment',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      rating: 4.3,
    },
    {
      name: 'DLF Mall of India',
      category: 'Shopping & Dining',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      rating: 4.6,
    },
    {
      name: 'ISKCON Temple',
      category: 'Spiritual',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      rating: 4.8,
    },
    {
      name: 'Botanical Garden',
      category: 'Parks & Recreation',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      rating: 4.4,
    },
    {
      name: 'Film City',
      category: 'Entertainment',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      rating: 4.2,
    },
    {
      name: 'Surajpur Wetland',
      category: 'Nature',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      rating: 4.5,
    },
    {
      name: 'The Great India Place',
      category: 'Shopping',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      rating: 4.4,
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Discover</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Explore Noida
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From hidden gems to popular landmarks, discover the best places our city has to offer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {places.map((place, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              } ${index === 4 ? 'col-span-2' : ''}`}
              style={{
                background: place.gradient,
                minHeight: index === 0 ? '400px' : '200px',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="text-yellow-400" size={16} />
                  <span className="text-xs font-semibold text-gray-300">{place.category}</span>
                </div>

                <h3 className={`font-bold text-white mb-2 ${index === 0 ? 'text-3xl' : 'text-lg'}`}>
                  {place.name}
                </h3>

                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-sm font-semibold text-white">{place.rating}</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MapPin className="text-black" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-2xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Found a hidden gem?
              </h3>
              <p className="text-gray-400 text-lg">
                Share your favorite spots with the community using #NoidaBeyond
              </p>
            </div>
            <button className="flex-shrink-0 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
              Submit Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
