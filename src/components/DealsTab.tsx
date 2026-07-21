import React from "react";
import { motion } from "motion/react";
import { Flame, Star, ShoppingBag, Clock, Heart, Sparkles, Check } from "lucide-react";
import { PromoDeal, PizzaItem } from "../types";
import { PROMO_DEALS, PIZZAS } from "../data";

interface DealsTabProps {
  onOrderNow: () => void;
  onAddPromoToCart: (deal: PromoDeal) => void;
  onAddPizzaToCartDirect: (pizza: PizzaItem) => void;
}

export default function DealsTab({
  onOrderNow,
  onAddPromoToCart,
  onAddPizzaToCartDirect,
}: DealsTabProps) {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Promo Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-charcoal via-gray-900 to-[#121212] text-white rounded-3xl p-6 md:p-14 shadow-xl">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20 md:opacity-100 bg-cover bg-center" 
             style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfGk_PD3atEUpkjHElv3s0zmO9xKAGFkkdPMEMacw-Jp4zFMPKNTC7YTyq4gzAE8luXeC4_bZsusEx8BufC0RCF73Yp6CspnhZDqXHn-USiBGK5bbI1gzxyv7ddyESR8oCTJEeuiV6S20YdeeGM8iSm7lVVzmXAVGwr5O_K9ZcnLIxMtOF98UcMNqI26iIgIs9uF2LDG2SJbxfwQbP5sgkgsnl36COZDdyt59p3wqRicSYOm9uKMG9ww')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal via-deep-charcoal/90 to-transparent" />

        <div className="relative z-10 max-w-xl md:max-w-2xl space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-maple-red/25 border border-maple-red/50 text-maple-red text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full"
          >
            <Sparkles className="h-3.5 w-3.5 fill-maple-red animate-spin" /> THE LEGENDARY ORIGINAL 2-FOR-1 DEAL
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase"
          >
            Buy One Pizza,<br />Get the Second<br /><span className="text-maple-red">Absolutely Free</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 font-sans leading-relaxed max-w-lg"
          >
            Experience true Canadian pizza heritage. Two fresh handcrafted pizzas made with 36-hour slow-fermented sourdough. Pay only for the higher-priced one, the second is our treat.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={onOrderNow}
              className="bg-maple-red hover:bg-primary-dark text-white font-label text-sm font-bold tracking-wider px-8 py-3.5 rounded-full uppercase transition-all shadow-lg shadow-red-900/30 active:scale-95 cursor-pointer"
            >
              Configure Live Pairing
            </button>
            <button
              onClick={onOrderNow}
              className="border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-label text-sm font-bold tracking-wider px-8 py-3.5 rounded-full uppercase transition-all active:scale-95 cursor-pointer"
            >
              Browse Full Menu
            </button>
          </motion.div>
        </div>

        {/* Small ribbon accent */}
        <div className="absolute bottom-4 right-6 hidden md:flex items-center gap-2 bg-black/40 text-xs text-gray-400 font-sans px-3.5 py-1.5 rounded-lg backdrop-blur-xs">
          <Clock className="h-3.5 w-3.5 text-maple-red" />
          <span>Limited Time Ontario Promotion</span>
        </div>
      </section>

      {/* 2. Hot Deals Bento Grid */}
      <section className="space-y-6">
        <div className="text-center md:text-left space-y-1">
          <span className="text-xs font-black text-maple-red uppercase tracking-widest font-label block">Gourmet Packages</span>
          <h2 className="font-display text-2xl md:text-3xl font-black text-deep-charcoal">
            Featured Combo Specials
          </h2>
          <p className="text-sm text-secondary font-sans max-w-xl">
            Saves you up to 35% on complete meals compared to individual item ordering. Add with a single click.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMO_DEALS.map((deal) => (
            <div 
              key={deal.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group relative"
              id={`promo-card-${deal.id}`}
            >
              {deal.badge && (
                <span className="absolute top-4 left-4 z-10 bg-maple-red text-white font-display text-[9px] font-black tracking-widest px-2.5 py-1 rounded-md shadow-md uppercase">
                  {deal.badge}
                </span>
              )}

              {/* Cover Image */}
              <div className="h-44 md:h-48 overflow-hidden bg-gray-50 relative">
                <img 
                  src={deal.image} 
                  alt={deal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-4 font-display text-xl font-black text-white">
                  ${deal.price.toFixed(2)}
                </span>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-black text-deep-charcoal group-hover:text-maple-red transition-colors">
                    {deal.name}
                  </h3>
                  <p className="text-xs text-secondary font-sans leading-relaxed">
                    {deal.description}
                  </p>
                  
                  {/* Bullet list of inclusions */}
                  {deal.includes && (
                    <ul className="pt-2.5 space-y-1.5 border-t border-gray-100">
                      {deal.includes.map((inc, i) => (
                        <li key={i} className="text-xs text-secondary flex items-center gap-2 font-sans">
                          <Check className="h-3.5 w-3.5 text-success-green stroke-[3] flex-shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button
                  onClick={() => onAddPromoToCart(deal)}
                  className="w-full bg-deep-charcoal hover:bg-maple-red text-white py-2.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer mt-4"
                >
                  <ShoppingBag className="h-4 w-4" /> Add Special To Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
