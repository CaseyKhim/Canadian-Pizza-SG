import React from "react";
import { Check, Send } from "lucide-react";

export default function SubscribeBanner() {
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
    <section className="bg-deep-charcoal text-white rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6 my-8 border border-gray-800">
      <span className="text-xs font-black text-maple-red uppercase tracking-widest font-label block">NEVER MISS A SLICE</span>
      <h3 className="font-display text-2xl md:text-3xl font-black uppercase">
        Subscribe for Secret 2-for-1 Coupon Slices
      </h3>
      <p className="text-xs text-gray-400 font-sans max-w-md mx-auto leading-relaxed">
        Be the first to receive secret mid-week 2-for-1 discount coupons, free delivery codes, and invitations to pilot tasting events across Singapore.
      </p>

      {subscribed ? (
        <div className="bg-success-green/20 border border-success-green/40 p-4 rounded-xl text-xs font-semibold max-w-sm mx-auto text-success-green flex items-center justify-center gap-2 animate-fadeIn">
          <Check className="h-4 w-4" /> Welcome to the Canadian Slice Club! Check your inbox soon.
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input 
            required
            type="email" 
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Enter your email address" 
            className="flex-1 bg-gray-800/80 border border-gray-700 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-maple-red text-white font-sans"
          />
          <button 
            type="submit"
            className="bg-maple-red hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-label text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
          >
            <Send className="h-3.5 w-3.5" /> Join Club
          </button>
        </form>
      )}
    </section>
  );
}
