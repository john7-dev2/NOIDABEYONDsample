import { Award, MapPin, Users, ThumbsUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Handpicked recommendations by locals who know Noida inside out.',
    },
    {
      icon: Award,
      title: 'Verified Reviews',
      description: 'Authentic ratings and reviews from real visitors and residents.',
    },
    {
      icon: Users,
      title: 'Community Curated',
      description: 'Discover hidden gems shared by fellow travelers and locals.',
    },
    {
      icon: ThumbsUp,
      title: 'Trusted Guides',
      description: 'Professional tour guides and detailed itineraries for every interest.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Your Gateway to Noida
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From ancient temples to modern entertainment hubs, we help you discover the best
            experiences in Noida, Greater Noida, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                  <Icon className="text-yellow-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-2xl p-8 sm:p-12">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold mb-6">Why Choose Us</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Whether you're a tourist, new resident, or lifelong local, we make it easy to explore
              Noida's rich cultural heritage, vibrant food scene, entertainment options, and natural beauty.
              Every recommendation is personally tested and reviewed by our team.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From weekend getaways to daily dining spots, spiritual journeys to adventure activities,
              NoidaBeyond is your trusted companion for discovering experiences that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
