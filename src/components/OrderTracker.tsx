import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Pizza, 
  CheckCircle2, 
  Truck, 
  ChefHat, 
  Clock, 
  Flame, 
  Play, 
  Pause, 
  MapPin, 
  Phone, 
  ShoppingBag, 
  PlusCircle, 
  HelpCircle,
  Sparkles
} from "lucide-react";
import { Order, OrderStatus } from "../types";

interface OrderTrackerProps {
  orders: Order[];
  onAddDemoOrder?: () => void;
  onUpdateOrderStatus?: (orderId: string, status: OrderStatus, progress: number, minutesLeft: number) => void;
}

export default function OrderTracker({ 
  orders, 
  onAddDemoOrder,
  onUpdateOrderStatus 
}: OrderTrackerProps) {
  const [activeOrderId, setActiveOrderId] = useState<string>("");
  const [isAutoSimulating, setIsAutoSimulating] = useState(true);

  // Auto-select the first order if none is selected
  useEffect(() => {
    if (orders.length > 0 && !activeOrderId) {
      setActiveOrderId(orders[orders.length - 1].id);
    }
  }, [orders, activeOrderId]);

  // Handle active order status simulation updates
  useEffect(() => {
    if (!isAutoSimulating || !activeOrderId || !onUpdateOrderStatus) return;

    const activeOrder = orders.find(o => o.id === activeOrderId);
    if (!activeOrder || activeOrder.status === "Delivered") return;

    const interval = setInterval(() => {
      let nextStatus: OrderStatus = activeOrder.status;
      let nextProgress = activeOrder.statusProgress;
      let nextMinutes = activeOrder.estimatedMinutesLeft;

      if (activeOrder.status === "Received") {
        nextStatus = "Preparing";
        nextProgress = 25;
        nextMinutes = 25;
      } else if (activeOrder.status === "Preparing") {
        nextStatus = "Baking";
        nextProgress = 50;
        nextMinutes = 18;
      } else if (activeOrder.status === "Baking") {
        nextStatus = "Out for Delivery";
        nextProgress = 75;
        nextMinutes = 10;
      } else if (activeOrder.status === "Out for Delivery") {
        nextStatus = "Delivered";
        nextProgress = 100;
        nextMinutes = 0;
      }

      onUpdateOrderStatus(activeOrderId, nextStatus, nextProgress, nextMinutes);
    }, 12000); // Progress stage every 12 seconds in auto simulation

    return () => clearInterval(interval);
  }, [orders, activeOrderId, isAutoSimulating, onUpdateOrderStatus]);

  const activeOrder = orders.find((o) => o.id === activeOrderId) || orders[orders.length - 1];

  const forceNextStage = () => {
    if (!activeOrder || !onUpdateOrderStatus) return;
    let nextStatus: OrderStatus = activeOrder.status;
    let nextProgress = activeOrder.statusProgress;
    let nextMinutes = activeOrder.estimatedMinutesLeft;

    if (activeOrder.status === "Received") {
      nextStatus = "Preparing";
      nextProgress = 25;
      nextMinutes = 25;
    } else if (activeOrder.status === "Preparing") {
      nextStatus = "Baking";
      nextProgress = 50;
      nextMinutes = 18;
    } else if (activeOrder.status === "Baking") {
      nextStatus = "Out for Delivery";
      nextProgress = 75;
      nextMinutes = 10;
    } else if (activeOrder.status === "Out for Delivery") {
      nextStatus = "Delivered";
      nextProgress = 100;
      nextMinutes = 0;
    } else if (activeOrder.status === "Delivered") {
      // Loop back for easy demo testing
      nextStatus = "Received";
      nextProgress = 5;
      nextMinutes = 30;
    }

    onUpdateOrderStatus(activeOrder.id, nextStatus, nextProgress, nextMinutes);
  };

  const getStageInfo = (status: OrderStatus) => {
    switch (status) {
      case "Received":
        return {
          title: "Order Received",
          desc: "Our team has accepted your order and is verifying details.",
          tip: "Fun Fact: Our dough ages for exactly 36 hours before we toss it!",
          icon: <CheckCircle2 className="h-6 w-6 text-blue-600 animate-pulse" />
        };
      case "Preparing":
        return {
          title: "Preparing Dough & Toppings",
          desc: "Our pizzaiolos are hand-stretching your high-vitality sourdough crust.",
          tip: "Dough Vitality: Stretching by hand preserves the carbon dioxide bubbles for a puffy, crisp rim.",
          icon: <ChefHat className="h-6 w-6 text-orange-500 animate-bounce" />
        };
      case "Baking":
        return {
          title: "Blister-Baking in Progress",
          desc: "Your pizzas are baking in our thermodynamic deck oven at exactly 500°F (260°C).",
          tip: "High Heat Secret: Rapid deck-firing locks in internal crust moisture while blister-charring the outside.",
          icon: <Flame className="h-6 w-6 text-red-500 animate-pulse" />
        };
      case "Out for Delivery":
        return {
          title: "Out for Hot Delivery",
          desc: "Our delivery rider is speeding to your location with thermal-locked bags.",
          tip: "Hot Guarantee: We package with active heat traps to ensure your 2-for-1 pairs arrive sizzling.",
          icon: <Truck className="h-6 w-6 text-yellow-600 animate-bounce" />
        };
      case "Delivered":
        return {
          title: "Delivered & Sizzling!",
          desc: "Your Canadian 2-for-1 pizzas have arrived. Bon Appétit!",
          tip: "Share the Love: Snap a picture and tag us on Instagram to claim next week's club points!",
          icon: <Pizza className="h-6 w-6 text-success-green animate-pulse" />
        };
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto" id="order-tracker-view">
      {/* 1. Header Area */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-black text-maple-red uppercase tracking-widest font-label block">Real-time Tracker</span>
        <h2 className="font-display text-2xl md:text-3xl font-black text-deep-charcoal">
          Canadian Slice Club Pizza Radar
        </h2>
        <p className="text-sm text-secondary font-sans">
          Follow your hot gourmet 2-for-1 pizza creations from our Singapore deck-ovens directly to your doorstep.
        </p>
      </div>

      {orders.length === 0 ? (
        /* Empty / No Active Orders State */
        <div className="bg-white rounded-3xl p-12 border border-gray-100 text-center max-w-2xl mx-auto shadow-xs space-y-6">
          <div className="w-16 h-16 bg-dough-cream rounded-full flex items-center justify-center mx-auto text-3xl">
            📡
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-xl font-bold text-deep-charcoal">No Active Orders Found</h3>
            <p className="text-xs text-secondary font-sans max-w-md mx-auto leading-relaxed">
              You haven't placed an order in this session yet, or your previous orders are complete. Build a custom 2-for-1 pizza in our menu or spin up a simulated test order below to try the tracker.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {onAddDemoOrder && (
              <button
                onClick={onAddDemoOrder}
                className="bg-deep-charcoal hover:bg-black text-white px-6 py-3 rounded-xl font-label text-xs font-bold uppercase tracking-wider transition-all active:scale-95 flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <PlusCircle className="h-4 w-4" /> Simulate Demo Order
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Tracker Interface */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Order list & Simulator Controls */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs space-y-4">
              <h3 className="font-label text-[11px] font-black text-gray-400 uppercase tracking-widest">
                Active Orders ({orders.length})
              </h3>
              <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                {orders.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => setActiveOrderId(o.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex justify-between items-center ${
                      activeOrderId === o.id
                        ? "border-maple-red bg-red-50/40 ring-1 ring-maple-red/20"
                        : "border-gray-100 bg-white hover:border-gray-200"
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <p className="text-xs font-black text-deep-charcoal font-display">
                        {o.id}
                      </p>
                      <p className="text-[10px] text-secondary font-sans truncate">
                        {o.items.length} item{o.items.length !== 1 ? "s" : ""} • ${o.grandTotal.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1 shrink-0">
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                        o.status === "Delivered"
                          ? "bg-success-green/10 text-success-green"
                          : o.status === "Out for Delivery"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-50 text-maple-red"
                      }`}>
                        {o.status}
                      </span>
                      <span className="text-[9px] text-gray-400 font-sans">
                        {o.createdAt}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulation Controller Panel */}
            <div className="bg-deep-charcoal text-white rounded-2xl p-5 space-y-4 shadow-sm border border-gray-800">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-maple-red uppercase tracking-wider font-label">
                  Simulation Deck
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </div>
              <h4 className="font-display font-bold text-sm">Control Real-time Progress</h4>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                Test the order cycle dynamically! You can let the auto-simulation handle transitions every 12s, or manual-trigger with the fast button.
              </p>
              
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => setIsAutoSimulating(!isAutoSimulating)}
                  className={`px-3 py-2 rounded-lg font-label text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                    isAutoSimulating 
                      ? "bg-maple-red/20 text-maple-red border border-maple-red/40" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-750 border border-gray-700"
                  }`}
                >
                  {isAutoSimulating ? (
                    <>
                      <Pause className="h-3 w-3" /> Auto: ON
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3" /> Auto: OFF
                    </>
                  )}
                </button>
                
                <button
                  onClick={forceNextStage}
                  disabled={!activeOrder}
                  className="bg-white hover:bg-gray-100 text-deep-charcoal px-3 py-2 rounded-lg font-label text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95 disabled:opacity-50"
                >
                  Fast Tick ➔
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Tracking Progress Details & Visual Pipeline */}
          {activeOrder && (
            <div className="lg:col-span-8 space-y-6">
              
              {/* Active Radar Status Screen */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xs space-y-6">
                
                {/* Header detail */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-gray-400 uppercase font-label">TRACKING PIPELINE</span>
                      <span className="text-xs font-bold text-maple-red font-display bg-red-50 px-2 py-0.5 rounded-md">
                        {activeOrder.id}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-black text-deep-charcoal">
                      Estimated Arrival: {activeOrder.estimatedMinutesLeft > 0 ? `${activeOrder.estimatedMinutesLeft} mins` : "Delivered"}
                    </h3>
                  </div>

                  <div className="text-xs text-secondary font-sans text-right">
                    <p><strong>Ordered at:</strong> {activeOrder.createdAt}</p>
                    <p><strong>Status:</strong> <span className="font-bold text-maple-red">{activeOrder.status}</span></p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 bg-maple-red rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${activeOrder.statusProgress}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                  <div className="grid grid-cols-5 text-center text-[10px] font-black uppercase tracking-wider text-gray-400 font-label">
                    <span className={activeOrder.statusProgress >= 5 ? "text-maple-red" : ""}>Received</span>
                    <span className={activeOrder.statusProgress >= 25 ? "text-maple-red" : ""}>Preparing</span>
                    <span className={activeOrder.statusProgress >= 50 ? "text-maple-red" : ""}>Baking</span>
                    <span className={activeOrder.statusProgress >= 75 ? "text-maple-red" : ""}>Delivery</span>
                    <span className={activeOrder.statusProgress >= 100 ? "text-success-green" : ""}>Enjoy</span>
                  </div>
                </div>

                {/* Main animated stage info card */}
                <div className="bg-dough-cream/40 rounded-2xl p-5 border border-orange-100/40 flex flex-col sm:flex-row items-start gap-4 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs shrink-0">
                    {getStageInfo(activeOrder.status)?.icon}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-display font-black text-sm text-deep-charcoal uppercase flex items-center gap-1.5">
                      {getStageInfo(activeOrder.status)?.title}
                      {activeOrder.status !== "Delivered" && (
                        <span className="inline-flex h-2 w-2 rounded-full bg-maple-red animate-ping" />
                      )}
                    </h4>
                    <p className="text-xs text-secondary leading-relaxed font-sans">
                      {getStageInfo(activeOrder.status)?.desc}
                    </p>
                    <div className="bg-white/80 rounded-lg p-2.5 border border-orange-50 text-[11px] text-maple-red italic font-sans flex items-start gap-1.5 mt-2">
                      <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber-500 mt-0.5" />
                      <span>{getStageInfo(activeOrder.status)?.tip}</span>
                    </div>
                  </div>
                </div>

                {/* Delivery details and item listing breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-gray-100">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Delivery Details
                    </h4>
                    <div className="space-y-2 text-xs text-secondary font-sans">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-maple-red shrink-0" />
                        <span>{activeOrder.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-maple-red shrink-0" />
                        <span>{activeOrder.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Item Breakdown
                    </h4>
                    <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                      {activeOrder.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-start text-xs text-secondary font-sans border-b border-gray-50 pb-1">
                          <span className="font-medium">
                            {item.quantity}x {item.name} {item.size ? `(${item.size})` : ""}
                          </span>
                          <span className="font-semibold text-deep-charcoal">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-100 text-xs font-bold text-deep-charcoal font-display">
                      <span>Total Paid:</span>
                      <span className="text-maple-red">${activeOrder.grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
