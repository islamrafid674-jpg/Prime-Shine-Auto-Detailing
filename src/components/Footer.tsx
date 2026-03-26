import { Instagram } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 pb-32 md:pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="flex items-center mb-4">
            <img src="https://i.imgur.com/2pi8E67.png" alt="Prime Shine Logo" className="h-28 md:h-40 w-auto object-contain" referrerPolicy="no-referrer" />
          </span>
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Prime Shine Auto Detailing. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/primeshineautodetailngllc/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.tiktok.com/@primeshinedetailinglp?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <TikTokIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
