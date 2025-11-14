import { Calendar, MapPin, Clock, Share2, ExternalLink } from 'lucide-react';

export default function Events() {
  const events = [
    {
      date: { day: '18', month: 'Nov' },
      title: 'Tech Expo 2024 - Greater Noida',
      location: 'India Expo Centre',
      time: '10:00 AM - 6:00 PM',
      description: 'Largest tech showcase featuring AI, robotics, and startup innovations.',
      type: 'Technology',
      color: 'blue',
    },
    {
      date: { day: '22', month: 'Nov' },
      title: 'Weekend Food Carnival',
      location: 'DLF Mall of India',
      time: '12:00 PM - 10:00 PM',
      description: 'Street food from across India. Live music and entertainment for families.',
      type: 'Food & Entertainment',
      color: 'green',
    },
    {
      date: { day: '25', month: 'Nov' },
      title: 'Airport Emergency Mock Drill',
      location: 'Noida International Airport',
      time: '6:00 AM - 8:00 AM',
      description: 'Full-scale emergency preparedness exercise. Expect temporary restrictions.',
      type: 'Emergency Drill',
      color: 'red',
    },
    {
      date: { day: '30', month: 'Nov' },
      title: 'Startup Networking Meetup',
      location: '91springboard, Sector 62',
      time: '5:00 PM - 8:00 PM',
      description: 'Connect with entrepreneurs, investors, and industry leaders.',
      type: 'Networking',
      color: 'purple',
    },
    {
      date: { day: '02', month: 'Dec' },
      title: 'Yoga & Wellness Workshop',
      location: 'Sector 18 Market',
      time: '7:00 AM - 9:00 AM',
      description: 'Free community yoga session followed by health awareness talks.',
      type: 'Health & Wellness',
      color: 'teal',
    },
    {
      date: { day: '05', month: 'Dec' },
      title: 'Christmas Shopping Festival',
      location: 'Gardens Galleria Mall',
      time: '11:00 AM - 11:00 PM',
      description: 'Biggest discounts of the season. Santa meet & greet for kids.',
      type: 'Shopping',
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      blue: { bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
      green: { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', text: 'text-green-400' },
      red: { bg: 'from-red-500/20 to-orange-500/20', border: 'border-red-500/30', text: 'text-red-400' },
      purple: { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30', text: 'text-purple-400' },
      teal: { bg: 'from-teal-500/20 to-cyan-500/20', border: 'border-teal-500/30', text: 'text-teal-400' },
      pink: { bg: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', text: 'text-pink-400' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">What's Happening</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Never miss out on what's happening in your city. From tech expos to food festivals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const colors = getColorClasses(event.color);
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10 p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="bg-yellow-400 text-black rounded-lg p-2">
                        <div className="text-2xl font-bold leading-none">{event.date.day}</div>
                        <div className="text-xs font-semibold uppercase">{event.date.month}</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <span className={`inline-block px-3 py-1 ${colors.text} bg-white/10 backdrop-blur text-xs font-semibold rounded-full mb-2`}>
                        {event.type}
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <MapPin size={16} className="text-yellow-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Clock size={16} className="text-yellow-400" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-semibold">
                      <ExternalLink size={16} />
                      <span>View Details</span>
                    </button>
                    <button className="p-2 bg-white/10 backdrop-blur rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            <Calendar size={20} />
            <span>View Full Calendar</span>
          </button>
        </div>
      </div>
    </section>
  );
}
