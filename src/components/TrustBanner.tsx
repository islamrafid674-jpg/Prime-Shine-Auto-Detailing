import { motion } from 'motion/react';

export function TrustBanner() {
  const items = [
    "Premium Service",
    "7 Days Open",
    "Professional Results",
    "High-End Detailing",
    "Steam Cleaning",
    "Paint Correction",
    "Stain Extraction",
  ];

  return (
    <div className="w-full bg-white/5 border-y border-white/10 py-6 overflow-hidden flex whitespace-nowrap relative z-20">
      <motion.div
        className="flex gap-16 items-center pr-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <span className="text-white/60 font-bold tracking-widest uppercase text-sm md:text-base">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
