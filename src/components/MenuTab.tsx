import React from "react";
import { Search, Flame, Star, ShoppingBag, SlidersHorizontal, Info } from "lucide-react";
import { PizzaItem, SideItem, PizzaType } from "../types";
import { PIZZAS, SIDES } from "../data";

interface MenuTabProps {
  onCustomizeClick: (pizza: PizzaItem) => void;
  onAddSideToCart: (side: SideItem) => void;
  onQuickAddPizza: (pizza: PizzaItem) => void;
}

export default function MenuTab({
  onCustomizeClick,
  onAddSideToCart,
  onQuickAddPizza,
}: MenuTabProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<"pizzas" | "sides" | "drinks">("pizzas");
  const [pizzaTypeFilter, setPizzaTypeFilter] = React.useState<"All" | PizzaType>("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filtering pizzas
  const filteredPizzas = PIZZAS.filter((pizza) => {
    const matchesSearch = pizza.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pizza.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = pizzaTypeFilter === "All" || pizza.type === pizzaTypeFilter;
    return matchesSearch && matchesType;
  });

  // Filtering sides
  const filteredSides = SIDES.filter((side) => {
    const matchesSearch = side.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          side.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = side.category === "Sides";
    return matchesSearch && matchesCategory;
  });

  // Filtering drinks
  const filteredDrinks = SIDES.filter((side) => {
    const matchesSearch = side.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          side.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = side.category === "Drinks";
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-10 pb-20">
      {/* Promo banner alerting users about the 2-for-1 mechanism */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-maple-red/15 flex items-center justify-center text-maple-red font-bold text-xl flex-shrink-0">
            🍁
          </div>
          <div>
            <h4 className="font-display font-black text-sm text-red-950 uppercase">
              Activate the 2-for-1 Engine Live!
            </h4>
            <p className="text-xs text-red-800 font-sans leading-relaxed">
              Add any two pizzas of the same size to your basket. The system automatically discounts the cheaper of the two to <strong>$0.00 (FREE)</strong>. No coupon code required!
            </p>
          </div>
        </div>
        <div className="text-xs font-bold text-maple-red bg-white border border-red-200 px-3 py-1.5 rounded-lg whitespace-nowrap">
          Any Pizzas • Medium or Large
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs space-y-4 md:space-y-0 md:flex md:items-center md:justify-between gap-6">
        {/* Category toggles */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setSelectedCategory("pizzas"); setSearchQuery(""); }}
            className={`px-5 py-2.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === "pizzas"
                ? "bg-deep-charcoal text-white"
                : "bg-gray-50 text-secondary hover:bg-gray-100"
            }`}
          >
            Specialty Pizzas
          </button>
          <button
            onClick={() => { setSelectedCategory("sides"); setSearchQuery(""); }}
            className={`px-5 py-2.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === "sides"
                ? "bg-deep-charcoal text-white"
                : "bg-gray-50 text-secondary hover:bg-gray-100"
            }`}
          >
            Signature Sides
          </button>
          <button
            onClick={() => { setSelectedCategory("drinks"); setSearchQuery(""); }}
            className={`px-5 py-2.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === "drinks"
                ? "bg-deep-charcoal text-white"
                : "bg-gray-50 text-secondary hover:bg-gray-100"
            }`}
          >
            Cold Drinks
          </button>
        </div>

        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${
              selectedCategory === "pizzas" 
                ? "pizzas (e.g. Pepperoni, Chicken)" 
                : selectedCategory === "sides" 
                ? "sides (e.g. Garlic Bread, Wings)..." 
                : "drinks (e.g. Coca-Cola, Sprite)..."
            }`}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-maple-red font-sans"
          />
        </div>
      </div>

      {/* Specialty Pizzas View */}
      {selectedCategory === "pizzas" && (
        <div className="space-y-8">
          {/* Sub-filters for Pizza Types */}
          <div className="flex flex-wrap gap-2 items-center text-xs font-label">
            <span className="text-gray-400 font-bold uppercase tracking-wider mr-2">Filter Crust Mix:</span>
            {["All", "Classic", "Premium"].map((type) => (
              <button
                key={type}
                onClick={() => setPizzaTypeFilter(type as any)}
                className={`px-4 py-1.5 rounded-full border transition-all cursor-pointer ${
                  pizzaTypeFilter === type
                    ? "border-maple-red bg-red-50/20 text-maple-red font-bold"
                    : "border-gray-200 hover:border-gray-300 text-secondary"
                }`}
              >
                {type} Slices
              </button>
            ))}
          </div>

          {/* Grid list of pizzas */}
          {filteredPizzas.length === 0 ? (
            <div className="text-center py-16 text-gray-400 font-sans text-xs">
              No handcrafted pizzas match your current search query.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPizzas.map((pizza) => (
                <div
                  key={pizza.id}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group relative"
                  id={`menu-pizza-card-${pizza.id}`}
                >
                  {/* Photo cover */}
                  <div className="h-48 md:h-52 bg-gray-50 overflow-hidden relative">
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 bg-black/60 text-white font-display text-[10px] font-bold px-2.5 py-1 rounded-md">
                      Medium: ${pizza.basePriceMedium.toFixed(2)} • Large: ${pizza.basePriceLarge.toFixed(2)}
                    </span>
                  </div>

                  {/* Pizza Card details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start">
                        <h3 className="font-display text-base font-black text-deep-charcoal group-hover:text-maple-red transition-colors">
                          {pizza.name}
                        </h3>
                        {pizza.isHot && (
                          <span className="text-orange-600 bg-orange-50 text-[9px] font-black uppercase px-2 py-0.5 rounded">
                            Spicy
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-secondary font-sans leading-relaxed min-h-[50px]">
                        {pizza.description}
                      </p>

                      {/* Display custom tags */}
                      {pizza.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {pizza.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-dough-cream text-amber-900 text-[9px] font-bold px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-50">
                      <button
                        onClick={() => onCustomizeClick(pizza)}
                        className="bg-gray-100 hover:bg-gray-250 text-deep-charcoal py-2 rounded-xl font-label text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                      >
                        <SlidersHorizontal className="h-3 w-3" /> Customize
                      </button>
                      <button
                        onClick={() => onQuickAddPizza(pizza)}
                        className="bg-maple-red hover:bg-primary-dark text-white py-2 rounded-xl font-label text-xs font-bold uppercase transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                      >
                        <ShoppingBag className="h-3 w-3" /> Quick Large
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sides View */}
      {selectedCategory === "sides" && (
        <div>
          {filteredSides.length === 0 ? (
            <div className="text-center py-16 text-gray-400 font-sans text-xs">
              No matching sides found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSides.map((side) => (
                <div
                  key={side.id}
                  className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all relative"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                        {side.category}
                      </span>
                      <span className="font-display font-black text-maple-red text-sm">
                        ${side.price.toFixed(2)}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-black text-deep-charcoal">
                      {side.name}
                    </h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      {side.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onAddSideToCart(side)}
                    className="w-full bg-deep-charcoal hover:bg-maple-red text-white py-2.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all duration-200 mt-4 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Add to Basket
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Cold Drinks View */}
      {selectedCategory === "drinks" && (
        <div>
          {filteredDrinks.length === 0 ? (
            <div className="text-center py-16 text-gray-400 font-sans text-xs">
              No matching cold drinks found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrinks.map((side) => (
                <div
                  key={side.id}
                  className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all relative"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                        {side.category}
                      </span>
                      <span className="font-display font-black text-maple-red text-sm">
                        ${side.price.toFixed(2)}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-black text-deep-charcoal">
                      {side.name}
                    </h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      {side.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onAddSideToCart(side)}
                    className="w-full bg-deep-charcoal hover:bg-maple-red text-white py-2.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all duration-200 mt-4 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Add to Basket
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
