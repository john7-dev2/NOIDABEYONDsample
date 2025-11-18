import { MapPin, Star, Sparkles, ArrowRight, TrendingUp } from 'lucide-react';

export default function Gallery() {
  const places = [
    {
      name: 'Central Market',
      category: 'Shopping & Food',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      rating: 4.5,
    },
    {
      name: 'Bird Sanctuary',
      category: 'Nature & Wildlife',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      rating: 4.7,
    },
    {
      name: 'Adventure Park',
      category: 'Entertainment',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      rating: 4.3,
    },
    {
      name: 'Grand Shopping Mall',
      category: 'Shopping & Dining',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      rating: 4.6,
    },
    {
      name: 'Sacred Temple',
      category: 'Spiritual',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      rating: 4.8,
    },
    {
      name: 'City Botanical Garden',
      category: 'Parks & Recreation',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      rating: 4.4,
    },
    {
      name: 'Entertainment District',
      category: 'Entertainment',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      rating: 4.2,
    },
    {
      name: 'Riverside Wetland',
      category: 'Nature',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      rating: 4.5,
    },
    {
      name: 'City Plaza',
      category: 'Shopping',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      rating: 4.4,
    },
  ];

  return (
    <section id="gallery" className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 rounded-full px-5 py-2.5 mb-6 shadow-lg shadow-yellow-400/10">
            <Sparkles size={18} className="text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-semibold tracking-wide">Discover</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Explore Your
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mt-2">
              City
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From hidden gems to popular landmarks, discover the best places our city has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {places.map((place, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 border border-white/10 hover:border-yellow-400/50 ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              } ${index === 4 ? 'sm:col-span-2' : ''}`}
              style={{
                background: place.gradient,
                minHeight: index === 0 ? '400px' : '200px',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Category Badge */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1 px-3 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                    <MapPin className="text-yellow-400" size={14} />
                    <span className="text-xs font-semibold text-white">{place.category}</span>
                  </div>
                </div>

                {/* Place Name */}
                <h3 className={`font-black text-white mb-3 group-hover:text-yellow-400 transition-colors ${index === 0 ? 'text-4xl' : 'text-xl'}`}>
                  {place.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 px-3 py-1.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/20">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <span className="text-sm font-bold text-white">{place.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 px-3 py-1.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/20">
                    <TrendingUp className="text-green-400" size={14} />
                    <span className="text-xs font-semibold text-white">Hot</span>
                  </div>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="text-black" size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-black" size={24} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Found a hidden gem?
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Share your favorite spots with the community using <span className="text-yellow-400 font-bold">#CityTours</span>
              </p>
            </div>
            <button className="group flex-shrink-0 inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              <span>Submit Your Spot</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
