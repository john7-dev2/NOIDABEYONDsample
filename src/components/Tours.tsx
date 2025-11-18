import { Compass, Users, Clock, Calendar } from 'lucide-react';

export default function Tours() {
  const tours = [
    {
      name: 'Spiritual City Tour',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 hours',
      groupSize: 'Up to 15',
      price: '$49',
      highlights: ['Sacred Temple', 'Heritage site visit', 'Traditional lunch', 'Spiritual guide'],
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      name: 'Food Lover\'s Journey',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5 hours',
      groupSize: 'Up to 12',
      price: '$39',
      highlights: ['Street food tour', '8+ local delicacies', 'Central market', 'Food expert guide'],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      name: 'Nature & Wildlife Escape',
      image: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8 hours',
      groupSize: 'Up to 20',
      price: '$59',
      highlights: ['Bird sanctuary', 'Botanical garden', 'Photography session', 'Packed lunch'],
      gradient: 'from-teal-500/20 to-cyan-500/20',
    },
    {
      name: 'Modern City Experience',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '7 hours',
      groupSize: 'Up to 15',
      price: '$55',
      highlights: ['Entertainment district', 'Mall shopping', 'Public transit tour', 'Fine dining'],
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
  ];

  return (
    <section id="tours" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Guided Experiences</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Curated Tours
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our expert-led tours for an immersive experience. All inclusive packages with hassle-free exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {tours.map((tour, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${tour.gradient} border border-white/10 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300`}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {tour.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-200 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Tour Highlights</div>
                  <div className="grid grid-cols-2 gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="text-xs text-gray-400">Starting from</div>
                    <div className="text-2xl font-bold text-yellow-400">{tour.price}</div>
                    <div className="text-xs text-gray-500">per person</div>
                  </div>
                  <button className="px-5 sm:px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 touch-manipulation">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-2xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <Compass size={32} className="text-yellow-400" />
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Custom Tours Available
                </h3>
              </div>
              <p className="text-gray-400 text-lg">
                Want a personalized experience? We can create custom itineraries based on your interests,
                schedule, and group size. Perfect for corporate outings and special occasions.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="flex items-center space-x-2 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300">
                <Calendar size={20} />
                <span>Plan Your Tour</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
