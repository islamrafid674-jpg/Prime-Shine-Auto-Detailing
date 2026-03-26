import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center bg-black">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 w-full h-[140%]"
      >
        <img
          src="https://www.superiorcarwashsupply.com/images/640/Blog/luxury%20car%20detailing.png"
          alt="Luxury car detail"
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white uppercase text-glow">
          Precision.<br />
          <span className="text-primary">Perfection.</span><br />
          Protection.
        </h2>
      </motion.div>
    </section>
  );
}
