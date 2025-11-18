import { Church, Utensils, ShoppingBag, Trees, Music, Camera, Mountain, Sparkles, Heart, ArrowRight, TrendingUp } from 'lucide-react';

export default function Categories() {
  const categories = [
    { 
      icon: Church, 
      name: 'Spiritual Sites', 
      count: '45+',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
    },
    { 
      icon: Utensils, 
      name: 'Food & Dining', 
      count: '120+',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
    },
    { 
      icon: ShoppingBag, 
      name: 'Shopping', 
      count: '80+',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    { 
      icon: Trees, 
      name: 'Parks & Nature', 
      count: '35+',
      gradient: 'from-teal-500 to-green-500',
      bgGradient: 'from-teal-500/10 to-green-500/10',
    },
    { 
      icon: Music, 
      name: 'Entertainment', 
      count: '60+',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
    },
    { 
      icon: Camera, 
      name: 'Photography Spots', 
      count: '50+',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
    },
    { 
      icon: Mountain, 
      name: 'Adventure', 
      count: '25+',
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-500/10 to-orange-500/10',
    },
    { 
      icon: Sparkles, 
      name: 'Unique Experiences', 
      count: '40+',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
    },
    { 
      icon: Heart, 
      name: 'Family Friendly', 
      count: '55+',
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-500/10 to-pink-500/10',
    },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 rounded-full px-5 py-2.5 mb-6 shadow-lg shadow-yellow-400/10">
            <TrendingUp size={18} className="text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold tracking-wide">Explore</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Browse by
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mt-2">
              Interest
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find exactly what you're looking for. From spiritual journeys to culinary adventures.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Decorative Circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Icon with Gradient Background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/50`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  
                  {/* Category Info */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">
                      {category.name}
                    </h3>
                    <ArrowRight 
                      size={20} 
                      className="text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </div>
                  
                  {/* Count Badge */}
                  <div className="inline-flex items-center space-x-1 px-3 py-1 bg-white/10 rounded-full">
                    <span className="text-sm font-semibold text-gray-300">
                      {category.count}
                    </span>
                    <span className="text-xs text-gray-400">places</span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            <span>View All Categories</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
