import React from "react";
import { motion } from "motion/react";
import { Sparkles, Heart, Star, Check } from "lucide-react";

interface HeritageTabProps {
  onOrderNow: () => void;
}

export default function HeritageTab({ onOrderNow }: HeritageTabProps) {
  return (
    <div className="space-y-16 animate-fadeIn">
      {/* 1. Immersive Hero / Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-maple-red/10 text-maple-red px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider font-label">
          <Sparkles className="h-3.5 w-3.5" /> Our Legacy & Craft
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-deep-charcoal tracking-tight uppercase leading-none">
          Handcrafted <br />
          <span className="text-maple-red">Heritage</span>
        </h1>
        <p className="text-sm md:text-base text-secondary font-sans leading-relaxed max-w-lg mx-auto">
          Since 1994, our culinary pursuit has been defined by three key values: uncompromising dough maturation, local farm collaborations, and the ultimate sharing economy of the 2-for-1 deal.
        </p>
      </section>

      {/* 2. Main Storytelling - 36-Hour Sourdough & Rich Dairy Vitality */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs">
        <div className="space-y-5">
          <span className="text-xs font-black text-maple-red uppercase tracking-widest font-label block">DOUGH VITALITY</span>
          <h2 className="font-display text-2xl md:text-4xl font-black text-deep-charcoal leading-tight uppercase">
            36-Hour Sourdough & Rich Dairy Vitality
          </h2>
          <p className="text-sm text-secondary font-sans leading-relaxed">
            The secret to our gold-standard crisp is in the fermentation. We age our proprietary dough for exactly 36 hours, developing complex flavor notes and a light, digestible texture. 
          </p>
          <p className="text-sm text-secondary font-sans leading-relaxed">
            Every pizza is topped with fresh 100% real Canadian mozzarella cheese made from local dairy farms, paired with sliced ingredients prepared fresh daily.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-bold text-deep-charcoal font-display">
            <div className="flex items-center gap-2 bg-dough-cream/40 p-3 rounded-xl">
              <span className="text-xl">🌾</span> 100% Sourdough Base
            </div>
            <div className="flex items-center gap-2 bg-dough-cream/40 p-3 rounded-xl">
              <span className="text-xl">🥛</span> Real Canadian Mozzarella
            </div>
          </div>
        </div>

        <div className="h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxw8vtzawWCXhzM3lpk7Oo-2NGHWdAOT7CPIIsWv5e44geaXXkEaI9tEJJkrhyq_VGGTo_51eEEdRfIDTBtfWIcS6dLsBRgKi4iI18hf0iYdiYR1R9cptgh6obNKPAy4hHVbQEkpsxQEB2ovhbBMJ8kTSbWuu07tdr9b81ONBgeXGAQsunntCdUlOwV1mmoYINzD9NIyfyvC-t-uUP3eigB7FTfEToKgdkL2LszzGMQEYNZdcPYNwFWg" 
            alt="Handcrafting sourdough pizza crust" 
            className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 3. Deep-Dive Story Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 bg-dough-cream flex items-center justify-center rounded-xl text-lg">🍁</div>
          <h3 className="font-display font-black text-lg text-deep-charcoal uppercase">Proudly Canadian</h3>
          <p className="text-xs text-secondary leading-relaxed font-sans">
            We operate in deep collaboration with Canadian farmers. From the wheat fields of Saskatchewan to local Ontario dairy cooperations, we keep our supply lines strictly Canadian.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 bg-dough-cream flex items-center justify-center rounded-xl text-lg">🪵</div>
          <h3 className="font-display font-black text-lg text-deep-charcoal uppercase">Fired with Precision</h3>
          <p className="text-xs text-secondary leading-relaxed font-sans">
            Our multi-deck ovens are engineered for thermodynamic consistency. We flash-bake each pizza at exactly 500°F (260°C) to lock in natural sourdough moisture while creating our signature bubbly, blistered cornicione.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 bg-dough-cream flex items-center justify-center rounded-xl text-lg">❤️</div>
          <h3 className="font-display font-black text-lg text-deep-charcoal uppercase">Community First</h3>
          <p className="text-xs text-secondary leading-relaxed font-sans">
            Pizza is meant to be shared. That's why we founded the Canadian Slice Club to give back to schools, junior hockey clubs, and local communities, bringing everyone around a shared pie.
          </p>
        </div>
      </section>

      {/* 4. Call-to-action */}
      <section className="bg-deep-charcoal text-white rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6">
        <span className="text-xs font-black text-maple-red uppercase tracking-widest font-label">TASTE THE HERITAGE</span>
        <h3 className="font-display text-2xl md:text-3xl font-black uppercase">
          Ready to Order Your 2-for-1 Handcrafted Pies?
        </h3>
        <p className="text-xs text-gray-400 font-sans max-w-md mx-auto leading-relaxed">
          Order any large or medium handcrafted sourdough pizza today, and get a second one of equal or lesser value absolutely free.
        </p>
        <button
          onClick={onOrderNow}
          className="bg-maple-red hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-label text-sm font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 inline-block cursor-pointer shadow-md"
        >
          Explore Menu & Order Now
        </button>
      </section>
    </div>
  );
}
