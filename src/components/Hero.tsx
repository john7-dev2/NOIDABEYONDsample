import { ChevronRight, MapPin, Star, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Noida skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/40 rounded-full px-4 py-2 mb-8">
            <Compass size={16} className="text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Discover Hidden Gems in Noida</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Explore Noida Like <br />
            <span className="text-yellow-400">Never Before</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
            Curated tours, authentic experiences, and the best places to visit in Noida, Greater Noida & beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#places"
              className="group flex items-center justify-center space-x-2 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              <MapPin size={20} />
              <span>Browse Places</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#tours"
              className="group flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Compass size={20} />
              <span>Guided Tours</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-3xl font-bold text-yellow-400">150+</div>
              </div>
              <div className="text-gray-300">Places to Visit</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
              </div>
              <div className="text-gray-300">Curated Tours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-2">
                <Star size={28} className="text-yellow-400 fill-yellow-400" />
                <div className="text-3xl font-bold text-yellow-400">4.8</div>
              </div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
