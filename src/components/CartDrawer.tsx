import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, ShoppingBag, Plus, Minus, CheckCircle } from "lucide-react";
import { CartItem, Order } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (cartId: string, delta: number) => void;
  removeFromCart: (cartId: string) => void;
  clearCart: () => void;
  onPlaceOrder?: (
    items: CartItem[],
    subtotal: number,
    discount: number,
    taxes: number,
    deliveryFee: number,
    grandTotal: number,
    address: string,
    phone: string
  ) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeFromCart,
  clearCart,
  onPlaceOrder,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);
  const [orderCompleted, setOrderCompleted] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");


  // 2-for-1 Discount Calculator
  // Rules: Pizzas are paired. For every pair, the cheaper pizza is FREE (100% discount).
  // We sort all pizzas in the cart by price descending to pair them up optimally.
  const getCartTotals = () => {
    let subtotal = 0;
    let pizzaDiscount = 0;
    const appliedDiscounts: { name: string; saved: number }[] = [];

    // Separate pizzas and non-pizzas
    const pizzasInCart: { cartId: string; name: string; price: number; quantity: number }[] = [];
    let otherTotal = 0;

    cart.forEach((item) => {
      if (item.type === "pizza") {
        // Expand by quantity to easily pair individual items
        for (let i = 0; i < item.quantity; i++) {
          pizzasInCart.push({
            cartId: item.cartId,
            name: `${item.name} (${item.size})`,
            price: item.price,
            quantity: 1,
          });
        }
      } else {
        otherTotal += item.price * item.quantity;
      }
    });

    // Sort pizzas by price descending
    pizzasInCart.sort((a, b) => b.price - a.price);

    // Pair pizzas: index 0 (charges) + index 1 (free), index 2 (charges) + index 3 (free), etc.
    pizzasInCart.forEach((pizza, index) => {
      subtotal += pizza.price;
      if (index % 2 === 1) {
        // Cheaper item of the pair is free
        pizzaDiscount += pizza.price;
        appliedDiscounts.push({
          name: pizza.name,
          saved: pizza.price,
        });
      }
    });

    const totalBeforeDiscount = subtotal + otherTotal;
    const finalTotal = totalBeforeDiscount - pizzaDiscount;
    const taxes = finalTotal * 0.09; // Singapore 9% GST
    const deliveryFee = finalTotal > 30 ? 0 : 3.99;
    const grandTotal = finalTotal + taxes + deliveryFee;

    return {
      subtotal: totalBeforeDiscount,
      pizzaDiscount,
      appliedDiscounts,
      taxes,
      deliveryFee,
      grandTotal,
    };
  };

  const { subtotal, pizzaDiscount, appliedDiscounts, taxes, deliveryFee, grandTotal } = getCartTotals();

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsCheckingOut(true);

    // Simulate cooking & delivery network delays
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderCompleted(true);
      if (onPlaceOrder) {
        onPlaceOrder(
          cart,
          subtotal,
          pizzaDiscount,
          taxes,
          deliveryFee,
          grandTotal,
          address,
          phone
        );
      }
    }, 2000);
  };

  const handleReset = () => {
    clearCart();
    setOrderCompleted(false);
    setIsCheckingOut(false);
    setAddress("");
    setPhone("");
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
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col h-full overflow-hidden"
            id="cart-drawer-panel"
          >
            {/* Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-dough-cream">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-maple-red" />
                <h2 className="font-display text-lg font-black text-deep-charcoal">
                  Your Basket
                </h2>
              </div>
              <button
                id="cart-close-btn"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-gray-200 text-secondary transition-all"
              >
                <X className="h-5.5 w-5.5" />
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-5">
              {orderCompleted ? (
                /* Success screen */
                <div className="flex flex-col items-center justify-center text-center h-full py-10" id="order-success-screen">
                  <motion.div
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="h-16 w-16 text-success-green mb-4 stroke-[1.5]" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-deep-charcoal mb-2">
                    Order Received!
                  </h3>
                  <p className="text-sm text-secondary font-sans max-w-xs mb-6">
                    Our pizzaiolos are tossing your dough right now! Your hot 2-for-1 pizza meal is being prepared with high-vitality premium ingredients.
                  </p>
                  <div className="bg-dough-cream border border-orange-100 rounded-xl p-4 w-full text-left space-y-2.5 mb-6 text-xs text-secondary font-sans">
                    <p><strong>Deliver To:</strong> {address || "Takeout Pick-Up Counter"}</p>
                    <p><strong>Mobile Contact:</strong> {phone || "N/A"}</p>
                    <p><strong>Estimated Arrival:</strong> 25 - 35 mins</p>
                    <p><strong>Paid Total:</strong> ${grandTotal.toFixed(2)} (GST Included)</p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="w-full bg-maple-red hover:bg-primary-dark text-white py-3.5 rounded-xl font-label text-sm font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    Back to Ordering
                  </button>
                </div>
              ) : cart.length === 0 ? (
                /* Empty Cart */
                <div className="flex flex-col items-center justify-center text-center h-full py-20 text-gray-400">
                  <ShoppingBag className="h-14 w-14 mb-3 text-gray-300 stroke-[1.2]" />
                  <p className="font-display font-semibold text-deep-charcoal text-base mb-1">
                    Your basket is empty
                  </p>
                  <p className="text-xs text-gray-500 max-w-xs mb-6">
                    Add handcrafted pizzas to see our signature 2-for-1 discount applied live!
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-deep-charcoal hover:bg-black text-white px-6 py-2.5 rounded-lg font-label text-xs font-bold uppercase transition-all"
                  >
                    Explore Menu
                  </button>
                </div>
              ) : (
                /* Cart Items List */
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Selected Items
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-xs font-bold text-maple-red hover:underline flex items-center gap-1"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="space-y-3.5">
                    {cart.map((item) => (
                      <motion.div
                        key={item.cartId}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex gap-3 relative overflow-hidden"
                      >
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover bg-gray-200 border border-gray-200"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-sm font-bold text-deep-charcoal truncate">
                            {item.name}
                          </h4>
                          {item.size && (
                            <p className="text-[11px] font-bold text-gray-400 uppercase">
                              Size: {item.size}
                            </p>
                          )}
                          {item.toppings && item.toppings.length > 0 && (
                            <p className="text-[11px] text-secondary font-sans truncate">
                              + {item.toppings.join(", ")}
                            </p>
                          )}
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-sm font-bold text-maple-red font-display">
                              ${item.price.toFixed(2)}
                            </span>

                            {/* Qty selectors */}
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-1 py-0.5">
                              <button
                                onClick={() => updateQuantity(item.cartId, -1)}
                                className="p-1 hover:bg-gray-100 rounded text-gray-500 transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="text-xs font-bold px-1.5 text-deep-charcoal">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.cartId, 1)}
                                className="p-1 hover:bg-gray-100 rounded text-gray-500 transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-red-600 p-1 rounded-full transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* 2-for-1 discount visualization */}
                  {appliedDiscounts.length > 0 && (
                    <div className="bg-red-50 border border-red-100 rounded-xl p-3.5 space-y-2 mt-4 animate-pulse">
                      <div className="flex items-center gap-2 text-maple-red font-bold text-xs uppercase tracking-wider">
                        <span className="text-base">🍁</span>
                        <span>Canadian 2-for-1 Applied!</span>
                      </div>
                      <p className="text-[11px] text-red-800 font-sans leading-relaxed">
                        Pizzas have been grouped in pairs. The second pizza in each pair is completely free!
                      </p>
                      <div className="space-y-1 mt-1 text-xs text-red-900 font-sans">
                        {appliedDiscounts.map((discount, i) => (
                          <div key={i} className="flex justify-between font-medium">
                            <span>🎁 {discount.name}</span>
                            <span className="font-bold">-${discount.saved.toFixed(2)} (FREE)</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-red-100 flex justify-between text-xs font-black text-red-950">
                        <span>Total 2-for-1 Savings:</span>
                        <span>-${pizzaDiscount.toFixed(2)}</span>
                      </div>
                    </div>
                  )}

                  {/* Order Address and Contact form */}
                  <form onSubmit={handleCheckoutSubmit} className="pt-4 border-t border-gray-100 space-y-3">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Delivery Information
                    </h4>
                    <div>
                      <label className="block text-[11px] font-bold text-secondary mb-1">
                        DELIVERY ADDRESS (OR ENTER "PICKUP")
                      </label>
                      <input
                        required
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. 4 Tampines Central 5, Singapore"
                        className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-maple-red font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-secondary mb-1">
                        MOBILE NUMBER
                      </label>
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +65 6788 2121"
                        className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-maple-red font-sans"
                      />
                    </div>

                    {/* Cost Summary */}
                    <div className="pt-4 space-y-2.5 text-xs text-secondary font-sans border-t border-gray-100">
                      <div className="flex justify-between">
                        <span>Subtotal (before discount)</span>
                        <span className="font-semibold">${subtotal.toFixed(2)}</span>
                      </div>
                      {pizzaDiscount > 0 && (
                        <div className="flex justify-between text-success-green font-bold">
                          <span>2-for-1 Discount</span>
                          <span>-${pizzaDiscount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Singapore GST (9%)</span>
                        <span>${taxes.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span>
                          {deliveryFee === 0 ? (
                            <span className="text-success-green font-bold uppercase">FREE (Over $30)</span>
                          ) : (
                            `$${deliveryFee.toFixed(2)}`
                          )}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-gray-100 flex justify-between items-end">
                        <span className="font-display text-sm font-black text-deep-charcoal">Grand Total</span>
                        <span className="font-display text-lg font-black text-maple-red">
                          ${grandTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isCheckingOut}
                      className={`w-full text-white py-3.5 rounded-xl font-label text-xs font-bold tracking-wider uppercase mt-4 transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                        isCheckingOut ? "bg-gray-400 cursor-not-allowed" : "bg-maple-red hover:bg-primary-dark"
                      }`}
                    >
                      {isCheckingOut ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing Order...
                        </>
                      ) : (
                        `Send 2-for-1 Pizza Order`
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
