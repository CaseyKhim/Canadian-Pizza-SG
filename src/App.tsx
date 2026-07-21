import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Clock, ArrowRight, X } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import CustomizeModal from "./components/CustomizeModal";
import DealsTab from "./components/DealsTab";
import MenuTab from "./components/MenuTab";
import HeritageTab from "./components/HeritageTab";
import LocationsTab from "./components/LocationsTab";
import SubscribeBanner from "./components/SubscribeBanner";
import { CartItem, PizzaItem, SideItem, PromoDeal, PizzaSize, Order, OrderStatus } from "./types";
import OrderTracker from "./components/OrderTracker";
import ComparisonTab from "./components/ComparisonTab";

export default function App() {
  const [activeTab, setActiveTab] = React.useState<"deals" | "menu" | "heritage" | "locations" | "tracker" | "comparison">("deals");
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [customizingPizza, setCustomizingPizza] = React.useState<PizzaItem | null>(null);
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [toast, setToast] = React.useState<{ id: string; orderId: string; total: number } | null>(null);

  React.useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [toast]);


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

  const handlePlaceOrder = (
    items: CartItem[],
    subtotal: number,
    discount: number,
    taxes: number,
    deliveryFee: number,
    grandTotal: number,
    address: string,
    phone: string
  ) => {
    const newOrder: Order = {
      id: `#CAN-${Math.floor(1000 + Math.random() * 9000)}`,
      items: [...items],
      subtotal,
      discount,
      taxes,
      deliveryFee,
      grandTotal,
      address: address || "Takeout Pick-Up Counter",
      phone: phone || "+65 6788 2121",
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "Received",
      statusProgress: 5,
      estimatedMinutesLeft: 30
    };
    setOrders((prev) => [...prev, newOrder]);
    setActiveTab("tracker");
    setToast({
      id: Math.random().toString(),
      orderId: newOrder.id,
      total: grandTotal
    });
  };

  const handleUpdateOrderStatus = (orderId: string, status: OrderStatus, progress: number, minutesLeft: number) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? { ...o, status, statusProgress: progress, estimatedMinutesLeft: minutesLeft }
          : o
      )
    );
  };

  const handleAddDemoOrder = () => {
    const demoItems: CartItem[] = [
      {
        cartId: `demo-1-${Date.now()}`,
        itemId: "classic-super-cheese",
        type: "pizza",
        name: "Classic Super Cheese",
        size: "Large",
        price: 24.90,
        quantity: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxw8vtzawWCXhzM3lpk7Oo-2NGHWdAOT7CPIIsWv5e44geaXXkEaI9tEJJkrhyq_VGGTo_51eEEdRfIDTBtfWIcS6dLsBRgKi4iI18hf0iYdiYR1R9cptgh6obNKPAy4hHVbQEkpsxQEB2ovhbBMJ8kTSbWuu07tdr9b81ONBgeXGAQsunntCdUlOwV1mmoYINzD9NIyfyvC-t-uUP3eigB7FTfEToKgdkL2LszzGMQEYNZdcPYNwFWg"
      },
      {
        cartId: `demo-2-${Date.now()}`,
        itemId: "premium-canadian-classic",
        type: "pizza",
        name: "Premium Canadian Classic",
        size: "Large",
        price: 28.90,
        quantity: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxw8vtzawWCXhzM3lpk7Oo-2NGHWdAOT7CPIIsWv5e44geaXXkEaI9tEJJkrhyq_VGGTo_51eEEdRfIDTBtfWIcS6dLsBRgKi4iI18hf0iYdiYR1R9cptgh6obNKPAy4hHVbQEkpsxQEB2ovhbBMJ8kTSbWuu07tdr9b81ONBgeXGAQsunntCdUlOwV1mmoYINzD9NIyfyvC-t-uUP3eigB7FTfEToKgdkL2LszzGMQEYNZdcPYNwFWg"
      }
    ];
    const subtotal = 53.80;
    const discount = 24.90;
    const finalTotal = 28.90;
    const taxes = finalTotal * 0.09; // 9% GST
    const deliveryFee = 0; // free over $30
    const grandTotal = finalTotal + taxes + deliveryFee;

    handlePlaceOrder(
      demoItems,
      subtotal,
      discount,
      taxes,
      deliveryFee,
      grandTotal,
      "Tampines Central Mall #03-14, Singapore",
      "+65 9123 4567"
    );
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
        activeOrdersCount={orders.filter(o => o.status !== "Delivered").length}
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
        {activeTab === "heritage" && (
          <HeritageTab onOrderNow={() => setActiveTab("menu")} />
        )}
        {activeTab === "locations" && <LocationsTab />}
        {activeTab === "tracker" && (
          <OrderTracker
            orders={orders}
            onAddDemoOrder={handleAddDemoOrder}
            onUpdateOrderStatus={handleUpdateOrderStatus}
          />
        )}
        {activeTab === "comparison" && <ComparisonTab />}
      </main>

      {/* Subscription Banner */}
      {activeTab !== "heritage" && activeTab !== "tracker" && activeTab !== "comparison" && (
        <div className="px-4 md:px-12">
          <SubscribeBanner />
        </div>
      )}

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
        onPlaceOrder={handlePlaceOrder}
      />

      {/* 5. Specialty Configurator Dialog */}
      <CustomizeModal
        isOpen={customizingPizza !== null}
        onClose={() => setCustomizingPizza(null)}
        pizza={customizingPizza}
        onAddToCart={handleAddPizzaToCart}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white border border-gray-100 rounded-2xl shadow-xl p-4 flex items-start gap-3.5"
          >
            <div className="bg-success-green/10 text-success-green p-2 rounded-xl">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <h4 className="font-display font-black text-xs text-deep-charcoal uppercase tracking-wider flex items-center gap-1.5">
                Order Confirmed
                <span className="flex h-1.5 w-1.5 rounded-full bg-success-green animate-ping" />
              </h4>
              <p className="text-[11px] text-secondary font-sans leading-normal">
                Your order <span className="font-bold text-deep-charcoal">{toast.orderId}</span> has been created successfully. Total charged: ${toast.total.toFixed(2)}.
              </p>
              <div className="flex items-center gap-1 text-[10px] text-maple-red font-bold font-label uppercase pt-1">
                <span>Tracking radar activated</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
            <button
              onClick={() => setToast(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
