import { Mail, MessageCircle, Instagram, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about tours, places, or partnerships? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get Connected</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@example.com"
                  className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur border border-white/10 rounded-lg hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <Mail className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-400 text-sm">contact@example.com</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur border border-white/10 rounded-lg hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center group-hover:bg-green-400/20 transition-colors">
                    <MessageCircle className="text-green-400" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">WhatsApp</div>
                    <div className="text-gray-400 text-sm">Direct message for quick response</div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/sampleapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur border border-white/10 rounded-lg hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-pink-400/10 rounded-lg flex items-center justify-center group-hover:bg-pink-400/20 transition-colors">
                    <Instagram className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Instagram</div>
                    <div className="text-gray-400 text-sm">@sampleapp</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur border border-white/10 rounded-lg hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                    <Send className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Telegram</div>
                    <div className="text-gray-400 text-sm">Join our channel</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3">For Tour Operators & Businesses</h4>
              <p className="text-gray-400 mb-4">
                Want to list your tours, restaurants, or attractions? Partner with us to reach
                thousands of travelers exploring Noida.
              </p>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Phone size={16} />
                <span className="text-sm font-semibold">Response within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all text-white resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <MapPin size={20} className="text-yellow-400" />
            <span>Serving your city and surrounding areas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
