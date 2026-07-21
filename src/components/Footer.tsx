import React from "react";
import { Share2, MessageCircle, Instagram, MapPin } from "lucide-react";

interface FooterProps {
  onNavClick: (tab: "deals" | "menu" | "heritage" | "locations") => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  return (
    <footer className="w-full bg-deep-charcoal text-white py-12 px-4 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Brand details */}
        <div className="space-y-4 max-w-md">
          <span 
            onClick={() => onNavClick("deals")}
            className="font-display text-2xl md:text-3xl font-black text-white cursor-pointer tracking-tighter block"
          >
            Canadian <span className="text-maple-red">2 for 1</span> Pizza
          </span>
          <p className="text-gray-400 font-sans text-sm leading-relaxed">
            Bringing families and friends together through the love of hot, fresh gourmet pizzas and the legendary 2 for 1 deal since 1994.
          </p>
          <div className="flex gap-3 pt-1">
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-maple-red transition-all flex items-center justify-center text-gray-300 hover:text-white"
              aria-label="Share page"
            >
              <Share2 className="h-4.5 w-4.5" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-maple-red transition-all flex items-center justify-center text-gray-300 hover:text-white"
              aria-label="Customer feedback chat"
            >
              <MessageCircle className="h-4.5 w-4.5" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-maple-red transition-all flex items-center justify-center text-gray-300 hover:text-white"
              aria-label="Instagram page"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Support & Legal Links - Flatter & Neater */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 pt-2">
          <div className="space-y-3">
            <h4 className="font-label text-[12px] font-bold uppercase tracking-widest text-gray-400">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-sans">
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-label text-[12px] font-bold uppercase tracking-widest text-gray-400">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-sans">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs font-sans">
          © {new Date().getFullYear()} Canadian 2 for 1 Pizza. All rights reserved. Registered trademark of Canadian 2 for 1 Pizza Inc.
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-400 font-sans bg-gray-900 px-3 py-1.5 rounded-lg">
          <MapPin className="h-3.5 w-3.5 text-maple-red" />
          <span>Canada Edition</span>
        </div>
      </div>
    </footer>
  );
}
