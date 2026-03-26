import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 glass border-t border-white/10 flex gap-4"
    >
      <a
        href="tel:626-977-3458"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold active:scale-95 transition-transform shadow-[0_0_20px_rgba(53,141,196,0.4)]"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a
        href="https://wa.me/16269773458"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold active:scale-95 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.3)]"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </motion.div>
  );
}
