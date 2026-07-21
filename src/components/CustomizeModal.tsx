import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Award, Flame, Star } from "lucide-react";
import { PizzaItem, PizzaSize } from "../types";
import { TOPPINGS_LIST } from "../data";

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pizza: PizzaItem | null;
  onAddToCart: (pizza: PizzaItem, size: PizzaSize, toppings: string[], customPrice: number) => void;
}

export default function CustomizeModal({
  isOpen,
  onClose,
  pizza,
  onAddToCart,
}: CustomizeModalProps) {
  const [size, setSize] = React.useState<PizzaSize>("Medium");
  const [crust, setCrust] = React.useState<string>("Hand-Tossed Classic");
  const [selectedToppings, setSelectedToppings] = React.useState<string[]>([]);

  // Reset local customization state when modal opens for a new pizza
  React.useEffect(() => {
    if (isOpen && pizza) {
      setSize("Large"); // Default to Large because 2-for-1 is typically best for Large pizzas!
      setSelectedToppings([]);
      setCrust("Hand-Tossed Classic");
    }
  }, [isOpen, pizza]);

  if (!pizza) return null;

  const crustOptions = [
    { name: "Hand-Tossed Classic", desc: "Our signature original golden sourdough recipe." },
    { name: "Thin & Crispy", desc: "Light, extra crispy, fire-baked texture." },
    { name: "Golden Deep Dish", desc: "Thick, buttery, caramelised cheese crust. (+$1.99)", extra: 1.99 },
    { name: "Gluten-Free Cauliflower", desc: "Perfectly balanced healthy option. (+$2.99)", extra: 2.99 }
  ];

  const handleToppingToggle = (topping: string) => {
    setSelectedToppings(prev =>
      prev.includes(topping)
        ? prev.filter(t => t !== topping)
        : [...prev, topping]
    );
  };

  // Live price calculation
  const getPizzaPrice = () => {
    const base = size === "Medium" ? pizza.basePriceMedium : pizza.basePriceLarge;
    const crustExtra = crustOptions.find(c => c.name === crust)?.extra || 0;
    // Let's charge $0.99 for each extra topping beyond the first 2 free toppings!
    const extraToppingPrice = Math.max(0, selectedToppings.length - 2) * 0.99;
    return base + crustExtra + extraToppingPrice;
  };

  const currentPrice = getPizzaPrice();

  const handleAddClick = () => {
    onAddToCart(pizza, size, selectedToppings, currentPrice);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative flex flex-col max-h-[90vh]"
              id="customize-modal-container"
            >
              {/* Header Image Cover */}
              <div className="relative h-44 md:h-56 bg-gray-100 flex-shrink-0">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all"
                  aria-label="Close configuration"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Tags overlay */}
                <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
                  {pizza.isHot && (
                    <span className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Flame className="h-3 w-3 fill-white" /> Spicy Hot
                    </span>
                  )}
                  {pizza.isBestSeller && (
                    <span className="bg-yellow-500 text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3 fill-black" /> Best Seller
                    </span>
                  )}
                  <span className="bg-maple-red text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                    2 For 1 Qualifying
                  </span>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-black text-deep-charcoal">
                    Configure {pizza.name}
                  </h3>
                  <p className="text-xs text-secondary font-sans leading-relaxed mt-1">
                    {pizza.description}
                  </p>
                </div>

                {/* 1. Size Selection */}
                <div className="space-y-3">
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider text-gray-400">
                    Step 1: Choose Size
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSize("Medium")}
                      className={`p-3.5 rounded-xl border-2 text-left transition-all relative cursor-pointer ${
                        size === "Medium"
                          ? "border-maple-red bg-red-50/40 text-deep-charcoal"
                          : "border-gray-200 hover:border-gray-300 text-secondary"
                      }`}
                    >
                      <span className="block font-display font-bold text-sm">Medium (12")</span>
                      <span className="block text-xs text-gray-500 mt-0.5">8 Slices. Perfect for 1-2 persons.</span>
                      <span className="absolute top-3.5 right-3.5 font-bold font-display text-xs text-maple-red">
                        ${pizza.basePriceMedium.toFixed(2)}
                      </span>
                    </button>

                    <button
                      onClick={() => setSize("Large")}
                      className={`p-3.5 rounded-xl border-2 text-left transition-all relative cursor-pointer ${
                        size === "Large"
                          ? "border-maple-red bg-red-50/40 text-deep-charcoal"
                          : "border-gray-200 hover:border-gray-300 text-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="block font-display font-bold text-sm">Large (14")</span>
                        <span className="bg-red-150 text-red-800 text-[8px] font-bold px-1.5 py-0.5 rounded-full">BEST VALUE</span>
                      </div>
                      <span className="block text-xs text-gray-500 mt-0.5">10 Slices. Great for sharing.</span>
                      <span className="absolute top-3.5 right-3.5 font-bold font-display text-xs text-maple-red">
                        ${pizza.basePriceLarge.toFixed(2)}
                      </span>
                    </button>
                  </div>
                </div>

                {/* 2. Crust selection */}
                <div className="space-y-3">
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider text-gray-400">
                    Step 2: Signature Crust
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {crustOptions.map((opt) => (
                      <button
                        key={opt.name}
                        onClick={() => setCrust(opt.name)}
                        className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex justify-between items-center ${
                          crust === opt.name
                            ? "border-maple-red bg-red-50/10 text-deep-charcoal font-semibold"
                            : "border-gray-200 hover:border-gray-300 text-secondary"
                        }`}
                      >
                        <div className="pr-2">
                          <span className="block text-xs font-bold font-display">{opt.name}</span>
                          <span className="block text-[10px] text-gray-400 font-sans mt-0.5">{opt.desc}</span>
                        </div>
                        {crust === opt.name && (
                          <div className="w-5 h-5 bg-maple-red rounded-full flex items-center justify-center text-white flex-shrink-0">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Extra Toppings */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-label text-xs font-bold uppercase tracking-wider text-gray-400">
                      Step 3: Extra Toppings
                    </h4>
                    <span className="text-[10px] bg-amber-50 text-amber-800 font-bold px-2 py-0.5 rounded-full border border-amber-100">
                      2 Toppings FREE, then $0.99 each
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {TOPPINGS_LIST.map((topping) => {
                      const isSelected = selectedToppings.includes(topping);
                      return (
                        <button
                          key={topping}
                          onClick={() => handleToppingToggle(topping)}
                          className={`p-2.5 text-xs text-left rounded-lg border flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? "border-maple-red bg-red-50/15 text-deep-charcoal font-bold"
                              : "border-gray-100 hover:border-gray-200 text-secondary"
                          }`}
                        >
                          <span className="truncate">{topping}</span>
                          <span className={`w-4.5 h-4.5 rounded flex items-center justify-center ${
                            isSelected ? "bg-maple-red text-white" : "bg-gray-100 border border-gray-200"
                          }`}>
                            {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sticky Footer */}
              <div className="p-5 border-t border-gray-100 bg-dough-cream flex items-center justify-between flex-shrink-0">
                <div className="space-y-0.5">
                  <span className="block text-[10px] text-gray-400 font-black uppercase">LIVE CONFIG COST</span>
                  <span className="font-display text-2xl font-black text-maple-red">
                    ${currentPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  id="add-customization-to-cart"
                  onClick={handleAddClick}
                  className="bg-maple-red hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Add Custom Slice Combo
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
