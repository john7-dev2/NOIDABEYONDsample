import { Church, Utensils, ShoppingBag, Trees, Music, Camera, Mountain, Sparkles, Heart } from 'lucide-react';

export default function Categories() {
  const categories = [
    { icon: Church, name: 'Spiritual Sites', color: 'from-orange-500/20 to-red-600/20', border: 'orange-500/30' },
    { icon: Utensils, name: 'Food & Dining', color: 'from-green-500/20 to-emerald-600/20', border: 'green-500/30' },
    { icon: ShoppingBag, name: 'Shopping', color: 'from-blue-500/20 to-cyan-600/20', border: 'blue-500/30' },
    { icon: Trees, name: 'Parks & Nature', color: 'from-teal-500/20 to-green-600/20', border: 'teal-500/30' },
    { icon: Music, name: 'Entertainment', color: 'from-pink-500/20 to-rose-600/20', border: 'pink-500/30' },
    { icon: Camera, name: 'Photography Spots', color: 'from-yellow-500/20 to-orange-600/20', border: 'yellow-500/30' },
    { icon: Mountain, name: 'Adventure', color: 'from-red-500/20 to-orange-600/20', border: 'red-500/30' },
    { icon: Sparkles, name: 'Unique Experiences', color: 'from-cyan-500/20 to-blue-600/20', border: 'cyan-500/30' },
    { icon: Heart, name: 'Family Friendly', color: 'from-rose-500/20 to-pink-600/20', border: 'rose-500/30' },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Explore</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Browse by Interest
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find exactly what you're looking for. From spiritual journeys to culinary adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${category.color} border border-${category.border} rounded-xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                    <Icon className="text-yellow-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
