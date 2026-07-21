import React from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

interface NavbarProps {
  activeTab: "deals" | "menu" | "heritage" | "locations";
  setActiveTab: (tab: "deals" | "menu" | "heritage" | "locations") => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  cartCount,
  onCartClick,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (tab: "deals" | "menu" | "heritage" | "locations") => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-12 py-3.5">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => handleNavClick("deals")} 
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo-container"
        >
          <img 
            alt="Canadian 2 for 1 Pizza Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGRqB_D1lQuJdOMzZycFyzk57yxq-lKftA1AJNy1IFcmKG04JmuraCBUAIG_QGcm7AhciuMMODjtIuHjc4QX_EFXrXFS6kuhosWGoknNa8LUeRJcdwVG82VdTVGkds-1mGUb7E_q6fLjtzb-ZThPkotJwEKOwg0dPkNhFyPpV9dNwa8ZO6ma-g2PUc51YDgX5rt9l-zx_ambDRV9Xd1roRmd9ENA6Ev4kqW7IrYuGrpiQuocs1B8jStQ"
          />
          <span className="font-display text-lg md:text-2xl font-black text-maple-red tracking-tighter">
            Canadian <span className="text-deep-charcoal">2 for 1</span> Pizza
          </span>
        </div>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex items-center gap-8 font-label text-[14px] font-semibold tracking-wide">
          <button 
            id="nav-btn-deals"
            onClick={() => handleNavClick("deals")}
            className={`transition-all pb-1 border-b-2 hover:text-maple-red ${
              activeTab === "deals" 
                ? "border-maple-red text-maple-red" 
                : "border-transparent text-secondary hover:border-gray-200"
            }`}
          >
            DEALS
          </button>
          <button 
            id="nav-btn-menu"
            onClick={() => handleNavClick("menu")}
            className={`transition-all pb-1 border-b-2 hover:text-maple-red ${
              activeTab === "menu" 
                ? "border-maple-red text-maple-red" 
                : "border-transparent text-secondary hover:border-gray-200"
            }`}
          >
            MENU
          </button>
          <button 
            id="nav-btn-heritage"
            onClick={() => handleNavClick("heritage")}
            className={`transition-all pb-1 border-b-2 hover:text-maple-red ${
              activeTab === "heritage" 
                ? "border-maple-red text-maple-red" 
                : "border-transparent text-secondary hover:border-gray-200"
            }`}
          >
            HERITAGE
          </button>
          <button 
            id="nav-btn-locations"
            onClick={() => handleNavClick("locations")}
            className={`transition-all pb-1 border-b-2 hover:text-maple-red ${
              activeTab === "locations" 
                ? "border-maple-red text-maple-red" 
                : "border-transparent text-secondary hover:border-gray-200"
            }`}
          >
            LOCATIONS
          </button>
        </div>

        {/* Action button & Shopping Cart */}
        <div className="flex items-center gap-3 md:gap-5">
          <button 
            id="nav-cart-trigger"
            onClick={onCartClick}
            className="relative p-2.5 text-deep-charcoal hover:text-maple-red hover:bg-gray-50 rounded-full transition-all duration-200 active:scale-95"
            aria-label="View Shopping Cart"
          >
            <ShoppingCart className="h-6.5 w-6.5 stroke-[2]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-maple-red text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            id="nav-cta-order-now"
            onClick={() => handleNavClick("menu")}
            className="hidden md:block bg-maple-red hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-label text-[14px] font-bold tracking-wider hover:shadow-md transition-all active:scale-95 cursor-pointer uppercase"
          >
            Order Now
          </button>

          {/* Mobile hamburger menu */}
          <button 
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-deep-charcoal hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4 animate-fadeIn">
          <button 
            onClick={() => handleNavClick("deals")}
            className={`text-left font-label text-[15px] font-bold py-2 ${
              activeTab === "deals" ? "text-maple-red" : "text-deep-charcoal"
            }`}
          >
            Deals & Specials
          </button>
          <button 
            onClick={() => handleNavClick("menu")}
            className={`text-left font-label text-[15px] font-bold py-2 ${
              activeTab === "menu" ? "text-maple-red" : "text-deep-charcoal"
            }`}
          >
            Explore Menu
          </button>
          <button 
            onClick={() => handleNavClick("heritage")}
            className={`text-left font-label text-[15px] font-bold py-2 ${
              activeTab === "heritage" ? "text-maple-red" : "text-deep-charcoal"
            }`}
          >
            Our Heritage
          </button>
          <button 
            onClick={() => handleNavClick("locations")}
            className={`text-left font-label text-[15px] font-bold py-2 ${
              activeTab === "locations" ? "text-maple-red" : "text-deep-charcoal"
            }`}
          >
            Locations & Hours
          </button>
          <button 
            onClick={() => handleNavClick("menu")}
            className="w-full bg-maple-red text-white text-center py-3 rounded-xl font-label text-[15px] font-bold tracking-wider uppercase mt-2 shadow-sm"
          >
            Order Now
          </button>
        </div>
      )}
    </header>
  );
}
