"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { SafeAnimatePresence } from "./components/SafeAnimatePresence";
import {
  Smartphone,
  Store,
  Compass,
  ArrowRight,
  ShieldCheck,
  Percent,
  TrendingUp,
  MessageSquare,
  Users,
  Check,
  Plus,
  Play,
  Heart,
  ChevronRight,
  HelpCircle,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Star,
  Info,
  DollarSign,
  X
} from "lucide-react";
import PartnerForm from "./components/PartnerForm";
import { AmigoLogo } from "./components/AmigoLogo";
import Header from "./components/Header";
import Footer from "./components/Footer";

const getPricingDetails = (itemPrice: number) => {
  const commissionMarkup = Math.round(itemPrice * 0.3);
  const convenienceFee = 30;
  const rainFee = 29;
  const deliveryFee = 35;
  const traditionalTotal = itemPrice + commissionMarkup + convenienceFee + rainFee + deliveryFee;
  const amigoTotal = itemPrice + 2;
  const saves = traditionalTotal - amigoTotal;
  return {
    traditional: {
      itemPrice,
      commissionMarkup,
      convenienceFee,
      rainFee,
      deliveryFee,
      total: traditionalTotal,
    },
    amigo: {
      itemPrice,
      platformCharge: 2,
      deliveryFee: 0,
      total: amigoTotal,
    },
    saves,
  };
};

export default function App() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showBetaPopup, setShowBetaPopup] = useState(false);

  // Active Food Compare Index:
  const [compareFood, setCompareFood] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleHashChange = () => {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    // First visit check for Beta list popup
    const seen = localStorage.getItem("amigo_beta_popup_seen");
    if (!seen) {
      const timer = setTimeout(() => {
        setShowBetaPopup(true);
      }, 1500); // Trigger after a brief natural delay
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
        clearTimeout(timer);
      };
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Food Dataset
  const foods = [
    {
      id: "biryani",
      name: "Fresh Dum Biryani",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&h=600&q=80",
      desc: "Aromatic saffron basmati rice layered with traditional spices and tender premium cuts.",
      originalPrice: 380,
      amigoPrice: 260,
      saves: 120,
      rating: "4.9",
      tags: ["Slow-Cooked", "Authentic"]
    },
    {
      id: "dumplings",
      name: "Steamed Veggie Momos",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&h=600&q=80",
      desc: "Delicate steamed wraps filled with finely minced garden-fresh greens and mountain herbs.",
      originalPrice: 220,
      amigoPrice: 150,
      saves: 70,
      rating: "4.8",
      tags: ["Vegan", "Popular"]
    },
    {
      id: "noodles",
      name: "Wok Noodles & Meatballs",
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&h=600&q=80",
      desc: "Wok-fired wheat noodles tossed in savory sesame chili garlic sauce with house-made meatballs.",
      originalPrice: 310,
      amigoPrice: 210,
      saves: 100,
      rating: "4.8",
      tags: ["Spicy", "Wok-Fired"]
    }
  ];

  const faqs = [
    {
      q: "How does AMIGO offer 0% commission?",
      a: "By removing middleman markups. Kitchens set their exact menu prices, and customer fees go entirely to support delivery riders. Pure pricing, zero commissions."
    },
    {
      q: "Are the kitchen partners licensed and verified?",
      a: "Yes. Every kitchen is vetted with valid local food licenses. We only support clean, verified neighborhood culinary creators who follow strict hygiene protocols."
    },
    {
      q: "When will the iOS app be released?",
      a: "The iOS version is in final testing and launches on the App Store next month. Subscribe to our banner to receive launch notifications instantly."
    },
    {
      q: "I run a kitchen, how can I start selling?",
      a: "Very quickly. Just submit the Onboarding form below. Once your details are confirmed, your storefront will go live within 2 hours."
    }
  ];

  const openLegalTab = (tab: "about" | "terms" | "privacy") => {
    router.push(`/${tab}`);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-[#FAF9F6] text-neutral-800 min-h-screen font-sans antialiased selection:bg-orange-500 selection:text-white" id="main-app-container">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 md:py-24 scroll-mt-24" id="hero-top">
        {/* Soft background glow circles */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-2 w-96 h-96 rounded-full bg-green-100/30 blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and Badges */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-neutral-900 tracking-tight leading-tight">
                  Fresh Food. <br />
                  <span className="text-orange-600">Fair Prices.</span> <br />
                  <span className="text-neutral-900">Zero Commissions.</span>
                </h1>
                <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  More for Your Plate. None for Middlemen. Order your favorite restaurant dishes and home-cooked meals for less with Amigo.
                </p>
              </div>

              {/* ACTION CTAs as requested in the prompt */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5" id="hero-button-group">
                {/* 1. Google Play Store button with real layout badge */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-3 bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer group"
                  id="btn-play-store"
                >
                  <div className="shrink-0">
                    <AmigoLogo size={24} />
                  </div>
                  <div className="text-left font-sans">
                    <p className="text-[9px] font-mono uppercase text-neutral-400 leading-none">Get it on</p>
                    <p className="text-xs font-bold leading-tight tracking-tight mt-0.5">Google Play Store</p>
                  </div>
                </a>

                {/* 2. "IOS app coming soon" badge button requested by user */}
                <div
                  className="flex items-center justify-center space-x-3 bg-neutral-100 text-neutral-400 px-5 py-3 rounded-2xl border border-dashed border-neutral-200 relative group select-none"
                  id="btn-ios-soon"
                  title="We are preparing Apple iOS version - scheduled for launch next month"
                >
                  <Compass className="h-5 w-5 text-neutral-400 shrink-0" />
                  <div className="text-left font-sans">
                    <p className="text-[9px] font-mono uppercase text-neutral-400 leading-none">Stay tuned</p>
                    <p className="text-xs font-semibold leading-tight text-neutral-500 mt-0.5">iOS App Coming Soon</p>
                  </div>
                </div>

                {/* 3. Partner with Us CTA which links right down to local sign-up */}
                <button
                  onClick={() => scrollToSection("registration")}
                  className="flex items-center justify-center space-x-2 py-3 px-5 text-xs font-bold text-orange-600 hover:text-white bg-white hover:bg-orange-600 border border-orange-200 rounded-2xl transition-all shadow-3xs cursor-pointer"
                  id="hero-partner-cta"
                >
                  <span>Partner Registration</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Stunning flat lay Indian spread image */}
            <div className="lg:col-span-5 relative" id="hero-media-container">
              {/* Image Frame styled like a sleek smartphone mockups or organic border canvas */}
              <div className="relative mx-auto max-w-sm sm:max-w-md bg-white rounded-[40px] p-4 shadow-2xl border-4 border-neutral-100 hover:scale-[1.02] transition-transform duration-500">
                <div className="rounded-[32px] overflow-hidden aspect-square relative bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&h=800&q=80"
                    alt="Savoring crispy delicious South Indian Medu Vada platter"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating price comparison overlay card with amigo logo */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center justify-between z-10">
                    <div className="flex items-center space-x-3">
                      <div className="p-1 rounded-xl bg-orange-50">
                        <AmigoLogo size={24} />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-orange-650 uppercase tracking-widest font-mono">Savoring Medu Vada</p>
                        <p className="text-xs font-extrabold text-neutral-900 mt-0.5">Neighborhood Price</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-neutral-400 line-through font-mono font-medium">Other Apps: ₹180</p>
                      <p className="text-sm font-black text-orange-600 font-mono leading-none mt-0.5">Amigo: ₹120</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENCHMARK / SAVE INTERACTIVE PLATFORM SIMULATOR */}
      <section className="bg-white border-y border-neutral-100 py-16 scroll-mt-24" id="benchmark-sandbox">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-900 tracking-tight">
              Don't believe us? See for yourself
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              Other apps charge restaurants up to 35%. We charge 0%. So food costs almost what it does offline
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch" id="compare-grid">
            {/* Left selector menu with gorgeous dishes */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">Select Recipe Sample</span>

              <div className="space-y-3">
                {foods.map((food, i) => {
                  const pricing = getPricingDetails(food.amigoPrice);
                  return (
                    <button
                      key={food.id}
                      onClick={() => setCompareFood(i)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center space-x-4 cursor-pointer ${
                        compareFood === i
                          ? "border-orange-500 bg-orange-50/20 shadow-xs"
                          : "border-neutral-100 bg-neutral-50/30 hover:bg-neutral-50"
                      }`}
                    >
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-sm text-neutral-900">{food.name}</span>
                          <span className="text-xs font-mono font-semibold text-green-700 bg-green-100/50 px-2 py-0.5 rounded-full">
                            Save ₹{pricing.saves}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 line-clamp-1">{food.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Sub-note */}
              <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100/60 flex items-start gap-2.5 text-neutral-500 text-xs text-left">
                <Info className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                <span>Comparing average menu rates across premium delivery platforms. Individual savings may vary.</span>
              </div>
            </div>

            {/* Right comparison card metrics */}
            <div className="lg:col-span-7 bg-dashed rounded-3xl border-2 border-neutral-100 bg-[#FAF9F6] p-6 sm:p-8 flex flex-col justify-between" id="compare-card">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-neutral-900">
                      {foods[compareFood].name} Comparison
                    </h3>
                    <p className="text-xs text-neutral-500">How commissions inflate daily customer spending</p>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-white px-3 py-1 rounded-full border border-neutral-100 shadow-3xs">
                    <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-neutral-800">{foods[compareFood].rating} User Rating</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {/* Traditional app breakdown */}
                  {(() => {
                    const pricing = getPricingDetails(foods[compareFood].amigoPrice);
                    return (
                      <>
                        <div className="bg-rose-50/50 border border-rose-100/60 rounded-2xl p-5 space-y-3 relative overflow-hidden">
                          <span className="absolute top-2 right-2 text-[10px] font-mono font-bold text-rose-700 bg-rose-100/60 px-2 py-0.5 rounded-full">
                            You know who
                          </span>
                          <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">Estimated Receipt</p>
                          <div className="space-y-1.5 pt-1">
                            <div className="flex justify-between text-xs text-neutral-600">
                              <span>Original Item Price:</span>
                              <span>₹{pricing.traditional.itemPrice}</span>
                            </div>
                            <div className="flex justify-between text-xs text-neutral-600">
                              <span>Commission Markup (30%):</span>
                              <span>₹{pricing.traditional.commissionMarkup}</span>
                            </div>
                            <div className="flex justify-between text-xs text-neutral-600">
                              <span>Convenience & Platform Fee:</span>
                              <span>₹{pricing.traditional.convenienceFee}</span>
                            </div>
                            <div className="flex justify-between text-xs text-neutral-600">
                              <span>Rain Fee:</span>
                              <span>₹{pricing.traditional.rainFee}</span>
                            </div>
                            <div className="flex justify-between text-xs text-neutral-600">
                              <span>Delivery Fee:</span>
                              <span>₹{pricing.traditional.deliveryFee}</span>
                            </div>
                            <div className="border-t border-rose-200/50 pt-2 flex justify-between font-bold text-sm text-neutral-800">
                              <span>Final Price:</span>
                              <span className="text-rose-700">₹{pricing.traditional.total}</span>
                            </div>
                          </div>
                        </div>

                        {/* AMIGO app breakdown */}
                        <div className="bg-green-50/50 border border-green-100/60 rounded-2xl p-5 space-y-3 relative overflow-hidden">
                          <span className="absolute top-2 right-2 text-[10px] font-mono font-bold text-green-850 bg-green-100/60 px-2 py-0.5 rounded-full">
                            Amigo
                          </span>
                          <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">Estimated Receipt</p>
                          <div className="space-y-1.5 pt-1">
                            <div className="flex justify-between text-xs text-neutral-600">
                              <span>Genuine Restaurant Price:</span>
                              <span>₹{pricing.amigo.itemPrice}</span>
                            </div>
                            <div className="flex justify-between text-xs text-green-700 font-semibold">
                              <span>Host Commission (0%):</span>
                              <span>₹0</span>
                            </div>
                            <div className="flex justify-between text-xs text-neutral-600">
                              <span>Platform Charge:</span>
                              <span>₹{pricing.amigo.platformCharge}</span>
                            </div>
                            <div className="flex justify-between text-xs text-neutral-600">
                              <span>Delivery Fee:</span>
                              <span className="text-green-700 font-bold">Free</span>
                            </div>
                            <div className="border-t border-green-200/50 pt-2 flex justify-between font-bold text-sm text-neutral-800">
                              <span>Final Price:</span>
                              <span className="text-green-800">₹{pricing.amigo.total}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Total Saves highlighting */}
              {(() => {
                const pricing = getPricingDetails(foods[compareFood].amigoPrice);
                return (
                  <div className="mt-6 bg-white border border-neutral-100 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                        <Percent className="h-5 w-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-heading text-neutral-900">Total Savings</h4>
                        <p className="text-xs text-neutral-500 font-normal leading-relaxed">Keep up to ₹{pricing.saves} in your family budget.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                      <div className="text-center sm:text-right">
                        <span className="text-xs font-heading font-bold text-neutral-400 uppercase tracking-wider block">Saved on Order</span>
                        <div className="text-3xl font-bold text-orange-600 font-heading tracking-tight leading-none mt-1">₹{pricing.saves}</div>
                      </div>
                      <a
                        href="https://play.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-6 py-3 font-bold text-white bg-orange-650 hover:bg-orange-700 rounded-xl shadow-xs hover:shadow-md transition-all scale-100 active:scale-95 cursor-pointer text-center text-sm inline-flex items-center justify-center"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - ADVANCED FEATURE GRID */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 scroll-mt-24" id="why-us">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-4 mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-900 tracking-tight">
              Why Choose AMIGO
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              We ditch sneaky middleman fees to bring you closer to local food spots.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" id="bento-reasons">
            {/* Card 1: 0% Platform Cut & No Hidden Fees */}
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-3xs hover:shadow-md hover:scale-[1.01] transition-all flex flex-col h-full duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Traditional Indian kitchen cooking representing 0% cuts and fees"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-orange-650 text-white font-bold font-heading uppercase text-[10px] tracking-wider px-3 py-1 rounded-full shadow-sm animate-pulse">
                  Empathetic Baseline
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-neutral-950 font-heading tracking-tight text-left">0% Cut. Period</h3>
                  <p className="text-neutral-500 font-normal text-xs leading-relaxed text-left font-sans">
                    We take zero commissions from our local kitchen friends. No marked-up menu rates or hidden platform fees - just fresh food at the exact price the kitchen wants.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection("registration")}
                  className="w-fit flex items-center text-xs font-semibold text-orange-650 hover:text-orange-700 transition-colors cursor-pointer pt-2 group/btn"
                >
                  <span className="font-semibold">Set up your kitchen</span>
                  <ChevronRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Direct Customer Touch with Affordable Prices */}
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-3xs hover:shadow-md hover:scale-[1.01] transition-all flex flex-col h-full duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Local Indian kitchen partner quality samosas served with fresh herbs"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-green-700 text-white font-bold font-heading uppercase text-[10px] tracking-wider px-3 py-1 rounded-full shadow-sm animate-pulse">
                  Direct Trust
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-neutral-950 font-heading tracking-tight text-left">Direct to the Spot</h3>
                  <p className="text-neutral-500 font-normal text-xs leading-relaxed text-left font-sans">
                    Chat directly with the local restaurant cooking your food. Customize your order, throw in some extra spice, and coordinate deliveries smoothly - all without a robotic support team in your way.
                  </p>
                </div>
                <button
                  onClick={() => openLegalTab("about")}
                  className="w-fit flex items-center text-xs font-semibold text-green-700 hover:text-green-800 transition-colors cursor-pointer pt-2 group/btn"
                >
                  <span className="font-semibold">See how we do it</span>
                  <ChevronRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Meals for Zoomers & Professionals */}
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-3xs hover:shadow-md hover:scale-[1.01] transition-all flex flex-col h-full duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Young modern Indian consumers and students sharing meals and hanging out"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white font-bold font-heading uppercase text-[10px] tracking-wider px-3 py-1 rounded-full shadow-sm animate-pulse">
                  Culinary Freedom
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-neutral-950 font-heading tracking-tight text-left">Built for Busy Days</h3>
                  <p className="text-neutral-500 font-normal text-xs leading-relaxed text-left font-sans">
                    Fresh, budget-friendly food tailored for crazy work hours and intense study cycles. Get slow-cooked comfort delivered hot without stretching your wallet
                  </p>
                </div>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit flex items-center text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer pt-2 group/btn animate-pulse"
                >
                  <span className="font-semibold">Get the app now</span>
                  <ChevronRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gourmet masterpieces section removed */}
      <div className="hidden">

          <div className="grid md:grid-cols-3 gap-8" id="menu-cards-grid">
            {/* Dumplings Card */}
            <div className="group rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-3xs flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Veggie Dumplings Momos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-mono font-bold text-orange-600">
                  ₹150 Menu Rate
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-neutral-950">Aroma Steamed Momos</h3>
                    <span className="flex items-center text-xs font-semibold text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                      4.8★
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Thin delicate wrappers encapsulating cabbage, carrot sprouts, authentic ginger-garlic extracts, served with fresh tandoor dipping sauces.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-200/40 text-xs">
                  <span className="text-neutral-400">Preparation Time: <strong className="text-neutral-700 font-mono">15m</strong></span>
                  <button
                    onClick={() => scrollToSection("registration")}
                    className="text-orange-600 font-bold hover:underline cursor-pointer flex items-center space-x-1"
                  >
                    <span>Check delivery zones</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Biryani Card */}
            <div className="group rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-3xs flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Authentic Dum Biryani"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-mono font-bold text-orange-600">
                  ₹260 Menu Rate
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-neutral-950">Grand Indian Royal Biryani</h3>
                    <span className="flex items-center text-xs font-semibold text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                      4.9★
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Long grain aromatic basmati rice layered with homemade masala, slow simmered over traditional tandoor fire. Includes cooling cucumber yogurt.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-200/40 text-xs">
                  <span className="text-neutral-400">Preparation Time: <strong className="text-neutral-700 font-mono">22m</strong></span>
                  <button
                    onClick={() => scrollToSection("registration")}
                    className="text-orange-600 font-bold hover:underline cursor-pointer flex items-center space-x-1"
                  >
                    <span>Check delivery zones</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Noodles & Meatballs Card */}
            <div className="group rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-3xs flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Wok Noodles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-mono font-bold text-orange-600">
                  ₹210 Menu Rate
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-neutral-950">Spicy Garlic Meatball Noodles</h3>
                    <span className="flex items-center text-xs font-semibold text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                      4.8★
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Fresh wok-fired artisan hand-pulled noodles, glazed in robust garlic chili oil, garnished with organic mushrooms & savory chicken balls.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-200/40 text-xs">
                  <span className="text-neutral-400">Preparation Time: <strong className="text-neutral-700 font-mono">18m</strong></span>
                  <button
                    onClick={() => scrollToSection("registration")}
                    className="text-orange-600 font-bold hover:underline cursor-pointer flex items-center space-x-1"
                  >
                    <span>Check delivery zones</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* MEET OUR KITCHEN PARTNERS & WOMEN ENTREPRENEURS SECTION */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden" id="chefs-spotlight">
        <div className="absolute inset-0 bg-neutral-950/20" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Image frame covering the Chefs */}
            <div className="lg:col-span-5 relative" id="chef-media-frame">
              <div className="relative mx-auto rounded-[30px] overflow-hidden shadow-2xl border-4 border-neutral-800 aspect-3/4 max-w-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1595273670150-db0d3bf36b5a?auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Passionate female home chef entrepreneur Aisha Sharma in her verified clean kitchen studio"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent flex flex-col justify-end p-6 space-y-1">
                  <p className="text-orange-500 font-heading font-bold text-[10px] uppercase tracking-wider">Verified Home Chef Studio</p>
                  <h4 className="font-bold font-heading text-lg leading-tight">Aisha Sharma & Local Chefs</h4>
                  <p className="text-neutral-400 font-normal text-xs">Earning 100% of standard ticket sales.</p>
                </div>
              </div>
            </div>

            {/* Copy detailing our standard and women business empowerment philosophy */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight text-white">
                  Helping Women Build Through Food
                </h2>
                <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
                  Turn your home kitchen into your own food shop. Sell fresh, home-cooked meals to nearby customers, grow at your pace, and keep every rupee you earn.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-4 text-center sm:text-left max-w-xl md:max-w-none mx-auto">
                <div className="flex flex-col items-center sm:items-start space-y-2">
                  <div className="h-8 w-8 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center font-bold font-heading text-xs uppercase tracking-wider shrink-0">
                    01
                  </div>
                  <h4 className="font-bold font-heading text-sm text-neutral-100">Start Free</h4>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed font-sans">Launch your custom digital store in minutes with absolutely zero setup fees or hidden risks.</p>
                </div>
                <div className="flex flex-col items-center sm:items-start space-y-2 border-t sm:border-t-0 sm:border-x border-neutral-800 pt-4 sm:pt-0 sm:px-6">
                  <div className="h-8 w-8 rounded-full bg-green-700/20 text-green-500 flex items-center justify-center font-bold font-heading text-xs uppercase tracking-wider shrink-0">
                    02
                  </div>
                  <h4 className="font-bold font-heading text-sm text-neutral-100">Cook With Confidence</h4>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed font-sans">We help you maintain professional kitchen standards so your neighbors order with peace of mind.</p>
                </div>
                <div className="flex flex-col items-center sm:items-start space-y-2 border-t sm:border-t-0 pt-4 sm:pt-0">
                  <div className="h-8 w-8 rounded-full bg-amber-600/20 text-amber-500 flex items-center justify-center font-bold font-heading text-xs uppercase tracking-wider shrink-0">
                    03
                  </div>
                  <h4 className="font-bold font-heading text-sm text-neutral-100">No Commission, Period</h4>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed font-sans">Keep 100% of your earnings. No aggregators taking deep cuts of your hard work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK REGISTRATION SECTION (Form requested) */}
      <section className="py-20 bg-neutral-100 scroll-mt-24" id="registration">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy block explaining why to register */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-900 tracking-tight leading-tight">
                Bring Your Dining Outlet Live on AMIGO
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 font-sans">
                Keep the menu control, decide pricing, run deals. Zero commission means your hard-earned money stays with your kitchen.
              </p>

              <div className="space-y-3.5 pt-6 border-t border-neutral-200 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    <strong>Zero Setup Fees.</strong> Onboard your kitchen with 0 setup charges, 0 upfront risk, and complete financial freedom.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    <strong>Full Price Control.</strong> Set your exact menu rates. We take 0% commission, so your menu price reflects your true offline value.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    <strong>Reliable Delivery Partners.</strong> Access independent hyperlocal dispatch networks to deliver hot and fresh within your zone.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive validated quick partner form */}
            <div className="lg:col-span-7">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION FAQ SECTION */}
      <section className="py-20 bg-white scroll-mt-24" id="faq">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold font-heading text-neutral-900 tracking-tight">
              Got questions about the good stuff?
            </h2>
            <p className="text-neutral-500 text-sm font-sans">
              We don’t do hidden platform fees or corporate fluff. Just the facts on how we help you spend smarter on the neighborhood food you love.
            </p>
          </div>

          <div className="space-y-4" id="faq-accordion-group">
            {faqs.map((faq, index) => {
              const worksActive = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-300 transition-colors bg-neutral-50/20"
                >
                  <button
                    onClick={() => setActiveFaq(worksActive ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between text-neutral-900 focus:outline-hidden cursor-pointer"
                    id={`faq-btn-${index}`}
                  >
                    <span className="font-bold text-sm sm:text-base leading-tight pr-4">{faq.q}</span>
                    <span className="text-neutral-400 shrink-0">
                      {worksActive ? (
                        <ChevronUp className="h-5 w-5 text-orange-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <SafeAnimatePresence initial={false}>
                    {worksActive && (
                      <motion.div
                        key={`faq-answer-${faq.q}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </SafeAnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOINLIST BETA VERSION ACCESS POPUP */}
      <SafeAnimatePresence>
        {showBetaPopup && (
          <motion.div
            key="beta-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 max-w-lg w-full flex flex-col relative"
            >
              {/* Top brand gradient strip */}
              <div className="h-2.5 bg-gradient-to-r from-orange-500 to-[#FF00D4]"></div>

              {/* Close Button */}
              <button
                onClick={() => {
                  localStorage.setItem("amigo_beta_popup_seen", "true");
                  setShowBetaPopup(false);
                }}
                className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-700 p-1.5 bg-neutral-50 hover:bg-neutral-100 rounded-full transition-all cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="p-6 sm:p-8 space-y-6">
                {/* Header info */}
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] uppercase tracking-wider font-mono font-bold inline-block">
                    Joinlist Beta Active
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-neutral-900 tracking-tight text-left">
                    Joinlist Beta Version
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm font-sans leading-relaxed text-left">
                    Experience the 0% commission food delivery revolution first. Get direct pricing from home kitchens without middleman markups.
                  </p>
                </div>

                {/* Live Areas badge group */}
                <div className="space-y-3 bg-[#FAF9F6] p-4 rounded-2xl border border-neutral-100/70 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700 font-sans">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
                    <span>Now Live in These Areas:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Jadabpur", "Baghajatin", "Patuli", "Garia", "Southern Avenue", "Golpark"].map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold shadow-3xs flex items-center gap-1 font-sans"
                      >
                        <Check className="h-3.5 w-3.5 text-green-600 stroke-[3px]" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href="https://chat.whatsapp.com/GjNpt6iQp6t7F4gVOn3uR3"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      localStorage.setItem("amigo_beta_popup_seen", "true");
                      setShowBetaPopup(false);
                    }}
                    className="w-full sm:flex-1 py-3 px-5 font-bold text-white bg-green-650 hover:bg-green-700 rounded-xl shadow-md transition-all scale-100 active:scale-95 text-center text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Smartphone className="h-4 w-4 shrink-0" />
                    <span>Join Beta via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      localStorage.setItem("amigo_beta_popup_seen", "true");
                      setShowBetaPopup(false);
                    }}
                    className="w-full sm:w-auto py-3 px-5 font-bold text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50 rounded-xl text-center text-sm transition-all cursor-pointer"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </SafeAnimatePresence>

      <Footer />
    </div>
  );
}
