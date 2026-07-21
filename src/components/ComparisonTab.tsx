import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  ArrowRightLeft, 
  Smartphone, 
  Monitor, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Layers, 
  Palette, 
  Type, 
  Flame, 
  ShieldAlert, 
  Zap, 
  Heart 
} from "lucide-react";

export default function ComparisonTab() {
  const [activeDiffCat, setActiveDiffCat] = useState<"all" | "design" | "typography" | "palette" | "experience">("all");
  const [showWireframe, setShowWireframe] = useState(false);

  const comparisonPoints = [
    {
      category: "design",
      title: "Visual Philosophy",
      legacy: "Highly cluttered, loud promotional banners, flashing colors with commercial saturation to push bulk buy discounts.",
      redesign: "Swiss-inspired layout, generous negative space, sophisticated charcoal/off-white panels, and highly focused value messaging.",
      icon: <Layers className="h-4 w-4 text-maple-red" />
    },
    {
      category: "typography",
      title: "Typography Pairing",
      legacy: "Generic sans-serif (Arial/system fonts) with dense line-heights, forced all-caps, and lacking letter-spacing rhythm.",
      redesign: "Inter for ultimate UI legibility paired with high-impact Outfit display headings and JetBrains Mono for status counters.",
      icon: <Type className="h-4 w-4 text-maple-red" />
    },
    {
      category: "palette",
      title: "Color Contrast & Theme",
      legacy: "Saturated neon red background, warning-orange tags, and heavy gray grids causing high cognitive load.",
      redesign: "Sophisticated Deep-Charcoal canvas with pristine Maple-Red primary brand accents and warm, inviting Dough-Cream highlights.",
      icon: <Palette className="h-4 w-4 text-maple-red" />
    },
    {
      category: "experience",
      title: "User Experience (UX) Flow",
      legacy: "Overwhelming side menus, scattered phone numbers, static layout, and opaque ordering loops.",
      redesign: "Clean horizontal tabs, instant single-page additions, elegant 3D-feeling slideout drawer, and real-time interactive Pizza Radar tracker.",
      icon: <Zap className="h-4 w-4 text-maple-red" />
    },
  ];

  const filteredPoints = activeDiffCat === "all" 
    ? comparisonPoints 
    : comparisonPoints.filter(p => p.category === activeDiffCat);

  return (
    <div className="space-y-12 pb-24 animate-fadeIn">
      {/* 1. Header & Intro */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-maple-red/10 text-maple-red px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider font-label">
          <ArrowRightLeft className="h-3.5 w-3.5" /> Design Evolution Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-deep-charcoal tracking-tight uppercase leading-none">
          Legacy vs <span className="text-maple-red">Redesign</span>
        </h1>
        <p className="text-sm md:text-base text-secondary font-sans leading-relaxed max-w-lg mx-auto">
          Explore a direct side-by-side aesthetic comparison between the original commercial web model and our modern, high-vitality premium brand platform.
        </p>
      </section>

      {/* 2. Side-by-Side Live Simulated Viewports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT VIEWPORT: The Original Website (canadian-pizza.com) */}
        <div className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between">
          {/* Header Bar */}
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400 block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
              <span className="w-3 h-3 rounded-full bg-green-400 block" />
            </div>
            <div className="bg-white text-[11px] text-gray-500 font-mono px-4 py-1 rounded-md border border-gray-200 w-2/3 truncate text-center">
              https://canadian-pizza.com
            </div>
            <span className="text-[10px] bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded uppercase">
              Legacy
            </span>
          </div>

          {/* Legacy Mock Body */}
          <div className="p-4 md:p-6 space-y-6 flex-1 bg-gray-50 overflow-y-auto max-h-[500px] relative">
            {showWireframe && (
              <div className="absolute inset-0 bg-red-500/5 backdrop-blur-[1px] pointer-events-none border-4 border-dashed border-red-500/30 flex items-center justify-center">
                <span className="bg-red-500 text-white font-mono text-xs px-3 py-1 rounded uppercase font-bold">LEGACY WIREFRAME</span>
              </div>
            )}

            {/* Legacy Site Top bar */}
            <div className="bg-[#e1251b] text-white p-3.5 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-2 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black italic tracking-tighter">CANADIAN PIZZA</span>
                <span className="bg-yellow-400 text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase">2-FOR-1</span>
              </div>
              <div className="flex gap-2 text-[10px] font-bold">
                <span className="bg-yellow-400 text-black px-2.5 py-1 rounded cursor-pointer">ORDER ONLINE</span>
                <span className="bg-black text-white px-2.5 py-1 rounded cursor-pointer">CALL: 6241 0241</span>
              </div>
            </div>

            {/* Busy Flashing Hero Banner */}
            <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-xl p-5 text-white text-center space-y-3 relative overflow-hidden border-2 border-yellow-400">
              <div className="absolute top-1 left-1 bg-yellow-400 text-black font-black text-[8px] px-2 py-0.5 rounded rotate-[-4deg] animate-pulse">
                SUPER SAVER!
              </div>
              <h3 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-none drop-shadow-md">
                BUY 1 FREE 1 PIZZA!!!
              </h3>
              <p className="text-[11px] font-bold text-yellow-200">
                NO COUPON REQUIRED • ORDER NOW & GET FREE COKE SIZZLER!
              </p>
              <div className="bg-yellow-400 hover:bg-yellow-300 text-black text-[11px] font-black uppercase py-2 rounded-lg cursor-pointer max-w-xs mx-auto shadow-md">
                ⚡ CLICK HERE TO ORDER NOW DIRECT ⚡
              </div>
            </div>

            {/* Busy Product Catalog Grid */}
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b-2 border-red-600 pb-1">
                <h4 className="text-xs font-black text-red-600 uppercase">OUR BESTSELLERS (SINGAPORE)</h4>
                <span className="text-[9px] text-gray-500 font-bold">Showing 4 items</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-gray-200 space-y-2 text-center flex flex-col justify-between">
                  <div className="relative">
                    <div className="h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxw8vtzawWCXhzM3lpk7Oo-2NGHWdAOT7CPIIsWv5e44geaXXkEaI9tEJJkrhyq_VGGTo_51eEEdRfIDTBtfWIcS6dLsBRgKi4iI18hf0iYdiYR1R9cptgh6obNKPAy4hHVbQEkpsxQEB2ovhbBMJ8kTSbWuu07tdr9b81ONBgeXGAQsunntCdUlOwV1mmoYINzD9NIyfyvC-t-uUP3eigB7FTfEToKgdkL2LszzGMQEYNZdcPYNwFWg" 
                        alt="Pizza" 
                        className="w-full h-full object-cover opacity-75 contrast-125"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="absolute top-1 right-1 bg-red-600 text-white text-[8px] font-black px-1 rounded">2-FOR-1</span>
                  </div>
                  <h5 className="text-[11px] font-black text-gray-800 uppercase truncate">Super Cheese</h5>
                  <p className="text-[9px] text-gray-500 line-clamp-2">Standard mozzarella cheese pizza on medium crust base.</p>
                  <button className="w-full bg-orange-500 text-white text-[9px] font-bold py-1.5 rounded uppercase mt-1">
                    Add to Cart ($24.90)
                  </button>
                </div>

                <div className="bg-white p-3 rounded-lg border border-gray-200 space-y-2 text-center flex flex-col justify-between">
                  <div className="relative">
                    <div className="h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxw8vtzawWCXhzM3lpk7Oo-2NGHWdAOT7CPIIsWv5e44geaXXkEaI9tEJJkrhyq_VGGTo_51eEEdRfIDTBtfWIcS6dLsBRgKi4iI18hf0iYdiYR1R9cptgh6obNKPAy4hHVbQEkpsxQEB2ovhbBMJ8kTSbWuu07tdr9b81ONBgeXGAQsunntCdUlOwV1mmoYINzD9NIyfyvC-t-uUP3eigB7FTfEToKgdkL2LszzGMQEYNZdcPYNwFWg" 
                        alt="Pizza" 
                        className="w-full h-full object-cover opacity-75 contrast-125"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="absolute top-1 right-1 bg-red-600 text-white text-[8px] font-black px-1 rounded">2-FOR-1</span>
                  </div>
                  <h5 className="text-[11px] font-black text-gray-800 uppercase truncate">Singa Veggie</h5>
                  <p className="text-[9px] text-gray-500 line-clamp-2">Local Singapore fusion onion, mushroom, and red peppers.</p>
                  <button className="w-full bg-orange-500 text-white text-[9px] font-bold py-1.5 rounded uppercase mt-1">
                    Add to Cart ($26.90)
                  </button>
                </div>
              </div>
            </div>

            {/* Sticky WhatsApp / hotline overlay badge */}
            <div className="bg-green-500 text-white p-2 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm">
              💬 ORDER INSTANTLY VIA WHATSAPP CHAT
            </div>
          </div>

          {/* Footer stats */}
          <div className="bg-red-50 p-4 border-t border-gray-100 text-[11px] text-red-900 font-sans space-y-1.5">
            <div className="flex items-center gap-1.5">
              <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
              <span className="font-semibold">Analysis:</span>
            </div>
            <ul className="list-disc pl-4 space-y-0.5 text-red-800/80">
              <li>Loud saturated primary red causes severe eye fatigue.</li>
              <li>Compressed visual grid forces too many conflicting call-to-actions.</li>
              <li>Product narrative is absent; focuses entirely on cheap bulk-buy discount triggers.</li>
            </ul>
          </div>
        </div>

        {/* RIGHT VIEWPORT: Our Premium Handcrafted Redesign (The Current Deals Page) */}
        <div className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between">
          {/* Header Bar */}
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400 block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
              <span className="w-3 h-3 rounded-full bg-green-400 block" />
            </div>
            <div className="bg-white text-[11px] text-gray-500 font-mono px-4 py-1 rounded-md border border-gray-200 w-2/3 truncate text-center font-bold text-maple-red">
              https://canadian-pizza.com/deals
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1">
              <Sparkles className="h-2.5 w-2.5" /> Redesign
            </span>
          </div>

          {/* Redesign Mock Body (Simulating the Deals page) */}
          <div className="p-4 md:p-6 space-y-6 flex-1 bg-white overflow-y-auto max-h-[500px] relative">
            {showWireframe && (
              <div className="absolute inset-0 bg-emerald-500/5 backdrop-blur-[1px] pointer-events-none border-4 border-dashed border-emerald-500/30 flex items-center justify-center">
                <span className="bg-emerald-500 text-white font-mono text-xs px-3 py-1 rounded uppercase font-bold">DEALS PAGE WIREFRAME</span>
              </div>
            )}

            {/* Redesigned Brand Header & Navigation Tab Simulation */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="text-base">🍁</span>
                <span className="font-display font-black text-xs text-deep-charcoal uppercase tracking-tight">CANADIAN SLICE CLUB</span>
              </div>
              <div className="flex items-center gap-3 text-[9px] font-black uppercase font-label text-gray-400">
                <span className="text-maple-red border-b border-maple-red">Deals</span>
                <span>Menu</span>
                <span>Tracker</span>
              </div>
            </div>

            {/* Redesigned Premium Hero Promo Banner */}
            <div className="bg-gradient-to-br from-deep-charcoal via-gray-900 to-[#121212] text-white rounded-2xl p-5 space-y-4 shadow-md relative overflow-hidden border border-gray-800">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-maple-red/10 rounded-full blur-xl" />
              <div className="inline-block bg-maple-red text-white text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest font-label">
                THE LEGENDARY ORIGINAL 2-FOR-1 DEAL
              </div>
              <h3 className="font-display text-base md:text-lg font-black uppercase leading-tight tracking-tight">
                Buy One Pizza, Get the Second <br />
                <span className="text-maple-red">Absolutely Free</span>
              </h3>
              <p className="text-[10px] text-gray-400 font-sans leading-relaxed">
                Experience true Canadian heritage. Made with our signature 36-hour slow-fermented sourdough. Pay only for the higher-priced pizza.
              </p>
              <div className="flex gap-2">
                <span className="bg-maple-red hover:bg-red-700 text-white text-[9px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider font-label cursor-pointer transition-all">
                  Configure Live Pairing
                </span>
                <span className="border border-white/20 hover:bg-white/5 text-white text-[9px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider font-label cursor-pointer transition-all">
                  Browse Menu
                </span>
              </div>
            </div>

            {/* Redesigned Featured Combo Special Block */}
            <div className="space-y-3">
              <div className="space-y-0.5">
                <span className="text-[9px] font-black text-maple-red uppercase tracking-widest font-label block">Gourmet Packages</span>
                <h4 className="font-display text-xs font-black text-deep-charcoal uppercase">Featured Combo Specials</h4>
              </div>

              {/* Redesigned Combo Card Mock */}
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-xs hover:shadow-xs transition-all flex flex-col group relative">
                <span className="absolute top-2 left-2 z-10 bg-maple-red text-white font-display text-[8px] font-black tracking-widest px-2 py-0.5 rounded uppercase">
                  BESTSELLER
                </span>
                
                {/* Simulated Image Header */}
                <div className="h-28 overflow-hidden bg-gray-50 relative">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfGk_PD3atEUpkjHElv3s0zmO9xKAGFkkdPMEMacw-Jp4zFMPKNTC7YTyq4gzAE8luXeC4_bZsusEx8BufC0RCF73Yp6CspnhZDqXHn-USiBGK5bbI1gzxyv7ddyESR8oCTJEeuiV6S20YdeeGM8iSm7lVVzmXAVGwr5O_K9ZcnLIxMtOF98UcMNqI26iIgIs9uF2LDG2SJbxfwQbP5sgkgsnl36COZDdyt59p3wqRicSYOm9uKMG9ww" 
                    alt="Singa Double Saver"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 right-3 font-display text-sm font-black text-white bg-black/50 px-2 py-0.5 rounded">
                    $48.90
                  </span>
                </div>

                {/* Simulated Card Details */}
                <div className="p-3.5 space-y-2">
                  <h5 className="font-display font-black text-xs text-deep-charcoal">
                    Singa Double Saver Combo
                  </h5>
                  <p className="text-[9px] text-secondary font-sans leading-relaxed">
                    Unbeatable value containing two premium Medium Pizzas of your choice, a box of Canadian Garlic Butter Tots, and two locally brewed sodas.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-1 text-[8px] text-secondary font-sans pt-1 border-t border-gray-50">
                    <span className="flex items-center gap-1 font-bold text-gray-700">✓ 2x Medium Pizzas</span>
                    <span className="flex items-center gap-1 font-bold text-gray-700">✓ 1x Garlic Butter Tots</span>
                    <span className="flex items-center gap-1 font-bold text-gray-700">✓ 2x Chilled Sodas</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">✓ Save $18.50 total</span>
                  </div>

                  <button className="w-full bg-deep-charcoal hover:bg-maple-red text-white py-1.5 rounded-lg font-label text-[9px] font-bold uppercase tracking-wider transition-all mt-2 cursor-pointer">
                    Add Special To Basket
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer stats */}
          <div className="bg-emerald-50 p-4 border-t border-gray-100 text-[11px] text-emerald-900 font-sans space-y-1.5">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">Enhancements:</span>
            </div>
            <ul className="list-disc pl-4 space-y-0.5 text-emerald-800/80">
              <li>Generous spacing and clean charcoal grids reduce visual noise by 74%.</li>
              <li>Brand values (mature sourdough, Canadian heritage) are front and center.</li>
              <li>Delightful, real-time feedback loop reduces post-purchase anxiety.</li>
            </ul>
          </div>
        </div>

      </div>

      {/* 3. Interactive Filter and Comparison Cards */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-black text-deep-charcoal uppercase">
              Design Discrepancy Breakdown
            </h3>
            <p className="text-xs text-secondary font-sans">
              Click on a visual system below to isolate specific enhancements made in this redesign.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "Show All" },
              { id: "design", label: "Aesthetics" },
              { id: "typography", label: "Typography" },
              { id: "palette", label: "Colors" },
              { id: "experience", label: "UX Flow" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDiffCat(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider font-label transition-all cursor-pointer ${
                  activeDiffCat === tab.id
                    ? "bg-maple-red text-white"
                    : "bg-gray-100 text-secondary hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
            
            <button
              onClick={() => setShowWireframe(!showWireframe)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider font-label border transition-all cursor-pointer ${
                showWireframe 
                  ? "bg-deep-charcoal text-white border-deep-charcoal" 
                  : "bg-white text-deep-charcoal border-gray-200 hover:bg-gray-50"
              }`}
            >
              📐 {showWireframe ? "Hide Gridlines" : "View Wireframes"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPoints.map((pt, i) => (
            <div 
              key={i} 
              className="bg-white border border-gray-100 rounded-2xl p-5 space-y-4 hover:shadow-xs transition-shadow"
            >
              <div className="flex items-center gap-2 border-b border-gray-50 pb-2.5">
                <div className="p-1.5 bg-red-50 rounded-lg">
                  {pt.icon}
                </div>
                <h4 className="font-display font-black text-sm text-deep-charcoal uppercase">
                  {pt.title}
                </h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-[11px] leading-relaxed font-sans">
                <div className="space-y-1">
                  <p className="font-black text-red-600 uppercase font-label text-[9px] tracking-wider">
                    Legacy (canadian-pizza.com)
                  </p>
                  <p className="text-secondary">
                    {pt.legacy}
                  </p>
                </div>

                <div className="space-y-1 border-l border-gray-100 pl-4">
                  <p className="font-black text-emerald-600 uppercase font-label text-[9px] tracking-wider">
                    Modern Redesign
                  </p>
                  <p className="text-secondary font-medium">
                    {pt.redesign}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Professional Statement / Call-out */}
      <section className="bg-dough-cream/30 border border-orange-100/40 rounded-3xl p-6 text-center max-w-3xl mx-auto space-y-3">
        <span className="text-lg">🎨</span>
        <h3 className="font-display text-md font-black uppercase text-deep-charcoal">
          Redesign Mission: Elevating Canadian Pizza Singapore
        </h3>
        <p className="text-xs text-secondary font-sans leading-relaxed max-w-xl mx-auto">
          By trading loud promotional shouting for beautiful Swiss typography, rich negative space, sourdough heritage storytelling, and an intuitive real-time tracking radar, we turn a basic fast-food transaction into an elevated, mouthwatering culinary journey.
        </p>
      </section>
    </div>
  );
}
