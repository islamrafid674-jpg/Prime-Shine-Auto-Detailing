import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl font-light">
            Ready to experience the ultimate detailing service? Contact us today to schedule your appointment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="flex items-start gap-6 group">
              <div className="bg-primary/10 p-4 rounded-2xl glass transition-transform group-hover:scale-110">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-white/60 text-lg mb-2">We're available to answer your questions.</p>
                <a href="tel:626-977-3458" className="text-2xl font-black text-white hover:text-white/70 transition-colors">
                  626-977-3458
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-primary/10 p-4 rounded-2xl glass transition-transform group-hover:scale-110">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Availability</h3>
                <p className="text-white/60 text-lg">Open Monday – Sunday</p>
                <p className="text-white/60 text-lg">8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-primary/10 p-4 rounded-2xl glass transition-transform group-hover:scale-110">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Location</h3>
                <p className="text-white/60 text-lg">Serving the Greater Area</p>
                <p className="text-white/60 text-lg">Mobile detailing available upon request.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white/80"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white/80"
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    id="vehicle"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                    placeholder="Vehicle"
                  />
                  <label
                    htmlFor="vehicle"
                    className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white/80"
                  >
                    Vehicle Make & Model
                  </label>
                </div>
                <div className="relative group">
                  <select
                    id="service"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white/50 focus:text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-black text-white/50">Select Service</option>
                    <option value="steam" className="bg-black text-white">Steam Cleaning</option>
                    <option value="stain" className="bg-black text-white">Stain Extraction</option>
                    <option value="paint" className="bg-black text-white">Paint Correction</option>
                    <option value="deep" className="bg-black text-white">Deep Detailing</option>
                  </select>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white/80"
                >
                  Additional Details
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-5 rounded-xl text-lg font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(53,141,196,0.4)]"
              >
                <Send className="w-5 h-5" />
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
