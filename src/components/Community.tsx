import { MessageCircle, Instagram, Send, Users } from 'lucide-react';

export default function Community() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join the NoidaBeyond Community
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Be part of 80.9K+ residents staying informed, connected, and empowered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="text-green-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">WhatsApp Groups</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Real-time updates, emergency alerts, and community discussions. Join sector-wise groups.
              </p>
              <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors duration-300 flex items-center justify-center space-x-2">
                <MessageCircle size={20} />
                <span>Join WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                <Instagram className="text-pink-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Instagram</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Follow @noidabeyond for visual stories, polls, and daily updates from around the city.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center space-x-2">
                <Instagram size={20} />
                <span>Follow on Instagram</span>
              </button>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                <Send className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Telegram</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Instant notifications, document sharing, and organized channels for different topics.
              </p>
              <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Send size={20} />
                <span>Join Telegram</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5 border border-yellow-400/30 rounded-2xl p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full -ml-32 -mb-32" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-black" size={40} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Use #NoidaBeyond
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Share your stories, events, recommendations, or concerns with the community.
              Tag us or use our hashtag to get featured on our platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-black/40 backdrop-blur border border-yellow-400/30 rounded-lg px-6 py-3">
                <span className="text-yellow-400 font-mono">#NoidaBeyond</span>
              </div>
              <div className="bg-black/40 backdrop-blur border border-yellow-400/30 rounded-lg px-6 py-3">
                <span className="text-yellow-400 font-mono">@noidabeyond</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
