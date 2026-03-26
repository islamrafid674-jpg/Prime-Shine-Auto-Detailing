import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Anderson",
    vehicle: "Porsche 911 GT3",
    text: "Absolutely phenomenal service. The paint correction brought my 911 back to showroom condition. The attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    vehicle: "Range Rover Velar",
    text: "I had tough coffee stains in the interior, and they completely vanished. The steam cleaning left the car smelling brand new.",
    rating: 5,
  },
  {
    name: "David Chen",
    vehicle: "Tesla Model S Plaid",
    text: "Professional, punctual, and perfectionists. The ceramic coating they applied makes washing the car a breeze now. Highly recommend.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    vehicle: "BMW M4 Competition",
    text: "They treat every car like it's their own. The deep detailing service exceeded all my expectations. Worth every penny.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-black relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-white/[0.02] to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Don't just take our word for it. Hear from our satisfied clients.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-12 no-scrollbar snap-x snap-mandatory px-4 md:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-3xl w-[85vw] md:w-auto md:min-w-[400px] snap-center flex-shrink-0 relative group hover:bg-white/[0.05] transition-colors"
            >
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 text-white/10 group-hover:text-white/20 transition-colors" />

              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-light italic">
                "{testimonial.text}"
              </p>

              <div className="mt-auto">
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                <p className="text-white/50 text-sm">{testimonial.vehicle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
