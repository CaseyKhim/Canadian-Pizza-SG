import React from "react";
import { motion } from "motion/react";
import { Sparkles, Heart, Star, Check, Send } from "lucide-react";

interface HeritageTabProps {
  onOrderNow: () => void;
}

export default function HeritageTab({ onOrderNow }: HeritageTabProps) {
  const [emailInput, setEmailInput] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn pb-16">
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

      {/* 2. Split Layout: Left Content, Right Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Content (Left Column) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Sourdough & Dairy Vitality Section */}
          <section className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xs space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-black text-maple-red uppercase tracking-widest font-label block">DOUGH VITALITY</span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-deep-charcoal leading-tight uppercase">
                36-Hour Sourdough & Rich Dairy Vitality
              </h2>
              <p className="text-sm text-secondary font-sans leading-relaxed">
                The secret to our gold-standard crisp is in the fermentation. We age our proprietary dough for exactly 36 hours, developing complex flavor notes and a light, digestible texture. 
              </p>
              <p className="text-sm text-secondary font-sans leading-relaxed">
                Every pizza is topped with fresh 100% real Canadian mozzarella cheese made from local dairy farms, paired with sliced ingredients prepared fresh daily.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-deep-charcoal font-display">
                <div className="flex items-center gap-2 bg-dough-cream/40 p-2.5 rounded-xl text-[11px]">
                  <span className="text-xl">🌾</span> 100% Sourdough Base
                </div>
                <div className="flex items-center gap-2 bg-dough-cream/40 p-2.5 rounded-xl text-[11px]">
                  <span className="text-xl">🥛</span> Real Canadian Mozzarella
                </div>
              </div>
            </div>

            <div className="h-56 md:h-64 rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxw8vtzawWCXhzM3lpk7Oo-2NGHWdAOT7CPIIsWv5e44geaXXkEaI9tEJJkrhyq_VGGTo_51eEEdRfIDTBtfWIcS6dLsBRgKi4iI18hf0iYdiYR1R9cptgh6obNKPAy4hHVbQEkpsxQEB2ovhbBMJ8kTSbWuu07tdr9b81ONBgeXGAQsunntCdUlOwV1mmoYINzD9NIyfyvC-t-uUP3eigB7FTfEToKgdkL2LszzGMQEYNZdcPYNwFWg" 
                alt="Handcrafting sourdough pizza crust" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          {/* Deep-Dive Story Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3">
              <div className="w-9 h-9 bg-dough-cream flex items-center justify-center rounded-xl text-md">🍁</div>
              <h3 className="font-display font-black text-sm text-deep-charcoal uppercase">Proudly Canadian</h3>
              <p className="text-[11px] text-secondary leading-relaxed font-sans">
                We operate in deep collaboration with Canadian farmers. From the wheat fields of Saskatchewan to local Ontario dairy cooperations, we keep our supply lines strictly Canadian.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3">
              <div className="w-9 h-9 bg-dough-cream flex items-center justify-center rounded-xl text-md">🪵</div>
              <h3 className="font-display font-black text-sm text-deep-charcoal uppercase">Fired with Precision</h3>
              <p className="text-[11px] text-secondary leading-relaxed font-sans">
                Our multi-deck ovens are engineered for thermodynamic consistency. We flash-bake each pizza at exactly 500°F (260°C) to lock in sourdough moisture while creating our signature cornicione.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3">
              <div className="w-9 h-9 bg-dough-cream flex items-center justify-center rounded-xl text-md">❤️</div>
              <h3 className="font-display font-black text-sm text-deep-charcoal uppercase">Community First</h3>
              <p className="text-[11px] text-secondary leading-relaxed font-sans">
                Pizza is meant to be shared. That's why we founded the Canadian Slice Club to give back to schools, junior hockey clubs, and local communities, bringing everyone around a shared pie.
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar (Right Column) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          {/* Ready to Order Card */}
          <div className="bg-deep-charcoal text-white rounded-2xl p-6 border border-gray-850 space-y-4 shadow-sm">
            <span className="text-[10px] font-black text-maple-red uppercase tracking-wider font-label block">TASTE THE HERITAGE</span>
            <h3 className="font-display text-lg font-black uppercase leading-tight">
              Ready to Order Your 2-for-1 Handcrafted Pies?
            </h3>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Order any large or medium handcrafted sourdough pizza today, and get a second one of equal or lesser value absolutely free.
            </p>
            <button
              onClick={onOrderNow}
              className="w-full bg-maple-red hover:bg-primary-dark text-white py-3 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 text-center block cursor-pointer shadow-md"
            >
              Explore Menu & Order Now
            </button>
          </div>

          {/* Subscribe for Secret Coupons Card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4 shadow-xs">
            <span className="text-[10px] font-black text-maple-red uppercase tracking-wider font-label block">NEVER MISS A SLICE</span>
            <h3 className="font-display text-lg font-black text-deep-charcoal uppercase leading-tight">
              Subscribe for Secret 2-for-1 Coupon Slices
            </h3>
            <p className="text-xs text-secondary font-sans leading-relaxed">
              Be the first to receive secret mid-week 2-for-1 discount coupons, free delivery codes, and invitations to pilot tasting events across Singapore.
            </p>

            {subscribed ? (
              <div className="bg-success-green/10 border border-success-green/20 p-3 rounded-xl text-[11px] font-semibold text-success-green flex items-center justify-center gap-2 animate-fadeIn">
                <Check className="h-4 w-4 shrink-0" /> Welcome to the Club! Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input 
                  required
                  type="email" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address" 
                  className="w-full bg-gray-50 border border-gray-200 text-xs px-3 py-2.5 rounded-xl focus:outline-none focus:border-maple-red text-deep-charcoal font-sans"
                />
                <button 
                  type="submit"
                  className="w-full bg-deep-charcoal hover:bg-maple-red text-white py-2.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" /> Join Club
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
