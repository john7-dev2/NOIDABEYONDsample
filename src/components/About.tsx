import { Award, MapPin, Users, ThumbsUp, Sparkles, Target, Shield, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Handpicked recommendations by locals who know the city inside out.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Award,
      title: 'Verified Reviews',
      description: 'Authentic ratings and reviews from real visitors and residents.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: Users,
      title: 'Community Curated',
      description: 'Discover hidden gems shared by fellow travelers and locals.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
    },
    {
      icon: ThumbsUp,
      title: 'Trusted Guides',
      description: 'Professional tour guides and detailed itineraries for every interest.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
    },
  ];

  const stats = [
    { icon: Target, value: '99%', label: 'Satisfaction Rate', color: 'text-green-400' },
    { icon: Shield, value: '100%', label: 'Verified Places', color: 'text-blue-400' },
    { icon: Zap, value: '24/7', label: 'Support Available', color: 'text-purple-400' },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 rounded-full px-5 py-2.5 mb-6 shadow-lg shadow-yellow-400/10">
            <Sparkles size={18} className="text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-semibold tracking-wide">About Us</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Gateway to
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mt-2">
              Adventure
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From ancient temples to modern entertainment hubs, we help you discover the best
            experiences in your city and beyond. <span className="text-yellow-400 font-semibold">Trusted by thousands.</span>
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-400/20"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative">
                  {/* Icon with Gradient */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <div className={`text-4xl font-black ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={stat.color} size={28} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us - Enhanced Card */}
        <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <Sparkles className="text-black" size={24} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose Us
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're a tourist, new resident, or lifelong local, we make it easy to explore
                the city's rich cultural heritage, vibrant food scene, entertainment options, and natural beauty.
                <span className="text-yellow-400 font-semibold"> Every recommendation is personally tested and reviewed by our team.</span>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From weekend getaways to daily dining spots, spiritual journeys to adventure activities,
                CityTours is your trusted companion for discovering experiences that matter.
              </p>
              
              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Get Started Today</span>
                  <Sparkles size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
