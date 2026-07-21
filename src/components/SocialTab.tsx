import React from "react";
import { DiscussionEmbed, CommentCount } from "disqus-react";
import { MessageSquare, Users, Sparkles, Heart, HelpCircle, ShieldCheck } from "lucide-react";

export default function SocialTab() {
  const article = {
    url: window.location.href || "https://canadian-pizza-sg-social.com",
    id: "canadian-pizza-sg-social-forum-main",
    title: "Canadian Pizza Singapore Social Community"
  };

  const disqusShortname = "sguv";
  const disqusConfig = {
    url: article.url,
    identifier: article.id,
    title: article.title,
    language: "en"
  };

  return (
    <div className="space-y-12 pb-24 animate-fadeIn">
      {/* 1. Header & Intro */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-maple-red/10 text-maple-red px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider font-label">
          <Users className="h-3.5 w-3.5" /> Community Hub
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-deep-charcoal tracking-tight uppercase leading-none">
          Slice Club <span className="text-maple-red">Social</span>
        </h1>
        <p className="text-sm md:text-base text-secondary font-sans leading-relaxed max-w-lg mx-auto">
          Share your favorite sourdough pizza pairings, coordinate gathering orders, or leave feedback for our culinary team.
        </p>
      </section>

      {/* 2. Bento Grid: Stats and Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Forum Stat Box */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <div className="bg-maple-red/10 text-maple-red p-2.5 rounded-2xl w-fit">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h3 className="font-display font-black text-md text-deep-charcoal uppercase tracking-tight">
              Community Feed
            </h3>
            <p className="text-xs text-secondary font-sans leading-normal">
              Join the official conversation! Discuss our Singapore-exclusive crusts, local deals, and customized topping menus.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-sans">
            <span>Disqus Live Thread</span>
            <span className="font-bold text-maple-red flex items-center gap-1.5 uppercase font-label">
              <CommentCount
                shortname={disqusShortname}
                config={disqusConfig}
              >
                Comments
              </CommentCount>
            </span>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 space-y-3 shadow-xs md:col-span-2">
          <div className="bg-emerald-50 text-emerald-700 p-2.5 rounded-2xl w-fit">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="font-display font-black text-md text-deep-charcoal uppercase tracking-tight">
            Slice Code of Conduct
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-secondary leading-relaxed">
            <ul className="list-disc pl-4 space-y-1">
              <li><strong className="text-deep-charcoal font-medium">Keep it Crisp:</strong> Be respectful, positive, and constructive in all discussions.</li>
              <li><strong className="text-deep-charcoal font-medium">Pizza Passion:</strong> Focus chats on gourmet doughs, local spots, or culinary suggestions.</li>
            </ul>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong className="text-deep-charcoal font-medium">Spam-Free Zone:</strong> Do not post referral codes, advertisements, or external promotions.</li>
              <li><strong className="text-deep-charcoal font-medium">Moderated Forum:</strong> Posts violate terms will be handled immediately by moderators.</li>
            </ul>
          </div>
        </div>

      </div>

      {/* 3. Disqus Forum Container */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-md">
        <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4.5 w-4.5 text-maple-red" />
            <h2 className="font-display font-black text-md md:text-lg text-deep-charcoal uppercase tracking-tight">
              Interactive Discussion
            </h2>
          </div>
          <span className="bg-emerald-50 text-emerald-800 text-[9px] font-black font-label px-2.5 py-1 rounded-full uppercase tracking-wider">
            Live Chat
          </span>
        </div>

        {/* Disqus Embed Element */}
        <div className="min-h-[300px]">
          <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </div>

      {/* 4. Help / Callout Box */}
      <div className="max-w-2xl mx-auto bg-dough-cream/30 border border-orange-100/40 rounded-3xl p-6 flex items-start gap-4">
        <div className="bg-orange-100 text-orange-800 p-2 rounded-xl shrink-0">
          <HelpCircle className="h-4 w-4" />
        </div>
        <div className="space-y-1.5 text-xs text-secondary font-sans leading-relaxed">
          <h4 className="font-display font-black uppercase text-deep-charcoal text-[11px] tracking-wider">
            Can't see the comment forum?
          </h4>
          <p>
            Make sure to allow script execution, disable aggressive ad-blocking, or verify you are viewing this applet in a compatible browser context.
          </p>
        </div>
      </div>
    </div>
  );
}
