import { motion } from 'motion/react';
import { Sparkles, Droplets, Paintbrush, Car } from 'lucide-react';

const services = [
  {
    title: "Steam Cleaning",
    description: "Deep sanitization for interiors, eliminating 99.9% of bacteria and odors.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://s23226.pcdn.co/wp-content/uploads/2020/04/ChrisRiley-SteamCleaning.jpg",
    colSpan: "md:col-span-2 lg:col-span-1",
    rowSpan: "lg:row-span-2",
  },
  {
    title: "Stain Extraction",
    description: "Remove tough stains & odors from upholstery and carpets.",
    icon: <Droplets className="w-8 h-8" />,
    image: "https://cdn.shopify.com/s/files/1/1581/3643/files/A_Guide_for_Combatting_Stubborn_Stains_for_Auto_Detailers_4.jpg?v=1737650035",
    colSpan: "md:col-span-1",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Paint Correction",
    description: "Restore shine & remove scratches, swirls, and oxidation.",
    icon: <Paintbrush className="w-8 h-8" />,
    image: "https://static.vecteezy.com/system/resources/thumbnails/003/582/909/small/car-detailing-male-mechanic-holding-car-polishing-machine-auto-industry-car-polishing-and-painting-and-repair-shop-free-photo.jpg",
    colSpan: "md:col-span-1",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Deep Detailing",
    description: "Full interior & exterior transformation for a showroom finish.",
    icon: <Car className="w-8 h-8" />,
    image: "https://cdn.shopify.com/s/files/1/0797/2968/8869/files/ROuxmtrwMpGAtaOSA5bmGOWdH8fcDipRjm9a6MSu.png?v=1708952008&width=1620&height=1080",
    colSpan: "md:col-span-2",
    rowSpan: "lg:row-span-1",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 md:mb-6">
            Premium <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light mb-6 md:mb-0">
            We don't just wash cars. We restore, protect, and elevate your vehicle to its absolute best condition.
          </p>
          <div className="md:hidden flex items-center gap-2 text-white/40 text-sm font-medium uppercase tracking-wider">
            <span className="w-8 h-px bg-white/20" />
            Swipe to explore
            <span className="w-8 h-px bg-white/20" />
          </div>
        </motion.div>

        {/* Desktop Bento Grid / Mobile Horizontal Scroll */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl glass-card flex-shrink-0 w-[85vw] md:w-auto snap-center ${service.colSpan} ${service.rowSpan} min-h-[400px] flex flex-col justify-end p-8`}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
              </div>

              <div className="relative z-10 transform transition-transform duration-500 lg:group-hover:-translate-y-4">
                <div className="text-primary mb-4 md:mb-6 bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border border-primary/20">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/80 md:text-white/60 font-light leading-relaxed lg:opacity-0 transform lg:translate-y-4 transition-all duration-500 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
