import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import CustomizeModal from "./components/CustomizeModal";
import DealsTab from "./components/DealsTab";
import MenuTab from "./components/MenuTab";
import LocationsTab from "./components/LocationsTab";
import { CartItem, PizzaItem, SideItem, PromoDeal, PizzaSize } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = React.useState<"deals" | "menu" | "locations">("deals");
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [customizingPizza, setCustomizingPizza] = React.useState<PizzaItem | null>(null);

  // Cart Handlers
  const handleAddPizzaToCart = (
    pizza: PizzaItem,
    size: PizzaSize,
    toppings: string[],
    price: number
  ) => {
    const cartId = `${pizza.id}-${size}-${toppings.sort().join("-")}-${Date.now()}`;
    const newItem: CartItem = {
      cartId,
      itemId: pizza.id,
      type: "pizza",
      name: pizza.name,
      size,
      price,
      quantity: 1,
      image: pizza.image,
      toppings,
    };
    setCart((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleQuickAddPizza = (pizza: PizzaItem) => {
    // Quick Add defaults to a Large hand-tossed pizza with no extra toppings
    handleAddPizzaToCart(pizza, "Large", [], pizza.basePriceLarge);
  };

  const handleAddSideToCart = (side: SideItem) => {
    const cartId = `${side.id}-${Date.now()}`;
    const newItem: CartItem = {
      cartId,
      itemId: side.id,
      type: "side",
      name: side.name,
      price: side.price,
      quantity: 1,
      image: side.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDxw8vtzawWCXhzM3lpk7Oo-2NGHWdAOT7CPIIsWv5e44geaXXkEaI9tEJJkrhyq_VGGTo_51eEEdRfIDTBtfWIcS6dLsBRgKi4iI18hf0iYdiYR1R9cptgh6obNKPAy4hHVbQEkpsxQEB2ovhbBMJ8kTSbWuu07tdr9b81ONBgeXGAQsunntCdUlOwV1mmoYINzD9NIyfyvC-t-uUP3eigB7FTfEToKgdkL2LszzGMQEYNZdcPYNwFWg",
    };
    setCart((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleAddPromoToCart = (deal: PromoDeal) => {
    const cartId = `${deal.id}-${Date.now()}`;
    const newItem: CartItem = {
      cartId,
      itemId: deal.id,
      type: "deal",
      name: deal.name,
      price: deal.price,
      quantity: 1,
      image: deal.image,
      description: deal.description,
    };
    setCart((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-bg-gray flex flex-col justify-between" id="app-root-wrapper">
      {/* 1. Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* 2. Main Content Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-12 pt-28 pb-16">
        {activeTab === "deals" && (
          <DealsTab
            onOrderNow={() => setActiveTab("menu")}
            onAddPromoToCart={handleAddPromoToCart}
            onAddPizzaToCartDirect={handleQuickAddPizza}
          />
        )}
        {activeTab === "menu" && (
          <MenuTab
            onCustomizeClick={(pizza) => setCustomizingPizza(pizza)}
            onAddSideToCart={handleAddSideToCart}
            onQuickAddPizza={handleQuickAddPizza}
          />
        )}
        {activeTab === "locations" && <LocationsTab />}
      </main>

      {/* 3. Footer */}
      <Footer onNavClick={(tab) => setActiveTab(tab)} />

      {/* 4. Sliding Basket Drawer Overlay */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      {/* 5. Specialty Configurator Dialog */}
      <CustomizeModal
        isOpen={customizingPizza !== null}
        onClose={() => setCustomizingPizza(null)}
        pizza={customizingPizza}
        onAddToCart={handleAddPizzaToCart}
      />
    </div>
  );
}
