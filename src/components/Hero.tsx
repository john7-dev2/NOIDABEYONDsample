import { ChevronRight, MapPin, Star, Compass, Search, TrendingUp, Users, Award, Sparkles, Play } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [searchFocused, setSearchFocused] = useState(false);

  const popularSearches = ['Temples', 'Food Tours', 'Nature Spots', 'Shopping'];
  const featuredCategories = [
    { icon: MapPin, label: 'Places', count: '150+', color: 'from-blue-500 to-cyan-500' },
    { icon: Compass, label: 'Tours', count: '50+', color: 'from-purple-500 to-pink-500' },
    { icon: Users, label: 'Guides', count: '25+', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Badge with Animation */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 rounded-full px-5 py-2.5 shadow-lg shadow-yellow-400/10">
              <Sparkles size={18} className="text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">Discover Hidden Gems in Your City</span>
              <TrendingUp size={16} className="text-yellow-400" />
            </div>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight px-4">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-fade-in">
              Explore Your City
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-fade-in delay-200 mt-2">
              Like Never Before
            </span>
          </h1>

          <p className="text-center text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-300 px-4">
            Curated tours, authentic experiences, and the best places to visit. 
            <span className="text-yellow-400 font-semibold"> Join 10,000+ explorers</span> discovering amazing destinations.
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-3xl mx-auto mb-8 px-4 animate-fade-in delay-400">
            <div className={`relative group ${searchFocused ? 'scale-105' : ''} transition-transform duration-300`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center flex-1">
                  <div className="pl-4 sm:pl-6 pr-3 sm:pr-4 py-4 sm:py-0">
                    <Search className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search places, tours..."
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="flex-1 py-4 sm:py-5 px-2 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg"
                  />
                </div>
                <button className="m-2 px-6 sm:px-8 py-3 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 touch-manipulation">
                  Search
                </button>
              </div>
            </div>
            
            {/* Popular Searches */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 flex-wrap px-2">
              <span className="text-xs sm:text-sm text-gray-400">Popular:</span>
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="px-3 sm:px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/50 rounded-full text-xs sm:text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 touch-manipulation"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4 animate-fade-in delay-500">
            <a
              href="#places"
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center space-x-2">
                <MapPin size={20} />
                <span>Explore Places</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a
              href="#tours"
              className="group flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl border-2 border-white/20 hover:border-yellow-400/50 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              <span>Watch Video Tour</span>
            </a>
          </div>

          {/* Stats Cards with Modern Design */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 animate-fade-in delay-600">
            {featuredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex items-baseline space-x-2 mb-2">
                      <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {category.count}
                      </div>
                      <TrendingUp size={20} className="text-green-400" />
                    </div>
                    <div className="text-gray-300 font-medium">{category.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 flex-wrap px-4 animate-fade-in delay-700">
            <div className="flex items-center space-x-2 text-gray-400">
              <Star className="text-yellow-400 fill-yellow-400" size={18} />
              <span className="text-xs sm:text-sm"><span className="text-white font-bold">4.8/5</span> Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Users className="text-yellow-400" size={18} />
              <span className="text-xs sm:text-sm"><span className="text-white font-bold">10K+</span> Happy Users</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Award className="text-yellow-400" size={18} />
              <span className="text-xs sm:text-sm"><span className="text-white font-bold">Verified</span> Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 border-2 border-yellow-400/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-16 h-16 border-2 border-purple-400/20 rounded-lg animate-float-delayed hidden lg:block" />
    </section>
  );
}
