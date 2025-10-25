import { Instagram, Twitter, Youtube, Music2, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative z-10 py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/solarmusicgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/solarmusicgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]"
              aria-label="Twitter/X"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com/@solarmusicgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/@solarmusicgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]"
              aria-label="TikTok"
            >
              <Music2 className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/solarmusicgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-[#FFD166] drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]">
            © 2025 Solar Music Group LTD.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
