import { Clock, CheckCircle, TrendingUp, ExternalLink } from 'lucide-react';

export default function LatestNews() {
  const news = [
    {
      title: 'New Metro Extension Announced for Greater Noida West',
      excerpt: 'NMRC confirms 5 new stations connecting major residential areas by 2026.',
      time: '2 hours ago',
      verified: true,
      category: 'Infrastructure',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Weekend Traffic Advisory: Road Closures on Noida Expressway',
      excerpt: 'Major repairs scheduled from Friday 11 PM to Sunday 6 AM. Plan alternate routes.',
      time: '5 hours ago',
      verified: true,
      category: 'Traffic',
      gradient: 'from-red-500/20 to-orange-500/20',
    },
    {
      title: 'New Food Festival at DLF Mall This Weekend',
      excerpt: '50+ food stalls featuring local and international cuisines. Entry free.',
      time: '8 hours ago',
      verified: true,
      category: 'Events',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'Sector 62 Sees New Co-working Space Launch',
      excerpt: 'Modern facilities with 500+ desks, meeting rooms, and 24/7 access for freelancers.',
      time: '12 hours ago',
      verified: true,
      category: 'Business',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Air Quality Improvement: AQI Drops to Moderate Levels',
      excerpt: 'Recent rains and wind patterns bring relief. AQI recorded at 150 this morning.',
      time: '1 day ago',
      verified: true,
      category: 'Environment',
      gradient: 'from-teal-500/20 to-green-500/20',
    },
    {
      title: 'Tech Park in Sector 142 Opens 2000 New Positions',
      excerpt: 'Multiple MNCs hiring for IT, operations, and support roles. Walk-in interviews scheduled.',
      time: '1 day ago',
      verified: true,
      category: 'Jobs',
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
  ];

  return (
    <section id="news" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Live Updates</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Real-time updates from across Noida. All news verified by our team.
            </p>
          </div>

          <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300 group">
            <TrendingUp size={20} />
            <span className="font-semibold">View All</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${item.gradient} border border-white/10 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 cursor-pointer`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                  {item.verified && (
                    <div className="flex items-center space-x-1 text-green-400">
                      <CheckCircle size={16} />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Clock size={16} />
                    <span>{item.time}</span>
                  </div>
                  <ExternalLink size={16} className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300 mx-auto">
            <TrendingUp size={20} />
            <span className="font-semibold">View All News</span>
          </button>
        </div>
      </div>
    </section>
  );
}
