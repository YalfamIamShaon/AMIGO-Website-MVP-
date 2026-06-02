import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  DollarSign
} from "lucide-react";
import LegalModal from "./components/LegalModal";
import PartnerForm from "./components/PartnerForm";
import { AmigoLogo } from "./components/AmigoLogo";

export default function App() {
  const [legalOpen, setLegalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"about" | "terms" | "privacy">("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Active Food Compare Index:
  const [compareFood, setCompareFood] = useState(0);

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
    setModalTab(tab);
    setLegalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#FAF9F6] text-neutral-800 min-h-screen font-sans antialiased selection:bg-orange-500 selection:text-white" id="main-app-container">
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100" id="app-header">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero-top")}>
              <AmigoLogo size={42} showText={true} />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
              <button
                onClick={() => scrollToSection("hero-top")}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("benchmark-sandbox")}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Savings Simulator
              </button>
              <button
                onClick={() => openLegalTab("about")}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("registration")}
                className="px-5 py-2.5 text-xs font-bold text-neutral-800 hover:text-orange-600 bg-neutral-100 hover:bg-neutral-200/60 rounded-xl transition-all cursor-pointer"
                id="header-partner-shortcut-btn"
              >
                Partner Registration
              </button>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-xs hover:shadow-md transition-all scale-100 active:scale-95 cursor-pointer inline-flex items-center justify-center"
                id="header-cta"
              >
                Download AMIGO App
              </a>
            </div>

            {/* Mobile burger toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
                aria-label="Toggle menu"
                id="burger-toggle"
              >
                <div className="space-y-1.5 w-6">
                  <span className={`block h-0.5 w-full bg-neutral-800 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-0.5 w-full bg-neutral-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-full bg-neutral-800 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
              id="mobile-nav-panel"
            >
              <div className="px-4 py-6 space-y-4">
                <button
                  onClick={() => scrollToSection("hero-top")}
                  className="block w-full text-left py-2 font-medium text-neutral-700 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="block w-full text-left py-2 font-medium text-neutral-700 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Why Us
                </button>
                <button
                  onClick={() => scrollToSection("benchmark-sandbox")}
                  className="block w-full text-left py-2 font-medium text-neutral-700 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Savings Simulator
                </button>
                <button
                  onClick={() => openLegalTab("about")}
                  className="block w-full text-left py-2 font-medium text-neutral-700 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block w-full text-left py-2 font-medium text-neutral-700 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  FAQ
                </button>

                <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
                  <button
                    onClick={() => scrollToSection("registration")}
                    className="w-full text-center py-3 text-sm font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-all cursor-pointer"
                  >
                    Quick Registration
                  </button>
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center py-3 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-all cursor-pointer block"
                  >
                    Download AMIGO App
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 md:py-24" id="hero-top">
        {/* Soft background glow circles */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-2 w-96 h-96 rounded-full bg-green-100/30 blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and Badges */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600 animate-pulse" />
                  <span>Now live in Southern Avenue only</span>
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
                  <span>0% Commission Ever</span>
                </span>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-neutral-900 tracking-tight leading-tight">
                  Fresh Food. <br />
                  <span className="text-orange-600">Fair Prices.</span> <br />
                  <span className="text-neutral-900">Zero Commissions.</span>
                </h1>
                <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  No middleman markups. Just honest neighborhood home-kitchens cooking fresh on-demand. Get larger portions and true menu pricing.
                </p>
              </div>

              {/* Value Proposition Callout Bar instead of Play Store rating and daily deliveries */}
              <div className="bg-orange-50/60 border border-orange-100/60 p-5 rounded-2xl text-left max-w-xl mx-auto lg:mx-0 space-y-2.5 shadow-3xs">
                <div className="flex items-center gap-2 text-neutral-900">
                  <Percent className="h-4 w-4 stroke-[2.5px] text-orange-650 animate-pulse" />
                  <span className="font-bold text-xs tracking-wider uppercase font-mono text-orange-855">0% Commission, Real Value</span>
                </div>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Traditional delivery platforms charge kitchens up to <span className="font-semibold text-rose-700">35% commission</span>. AMIGO takes <span className="font-semibold text-green-700">0%</span>, allowing creators to pass 100% of those savings directly to your plate.
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
                  {/* Small pulsing dot to signify ongoing developer testing */}
                  <span className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                  </span>
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
              {/* Outer circular badge overlay */}
              <div className="absolute -top-4 -left-4 z-20 bg-green-700 text-white rounded-full p-3.5 shadow-xl border-4 border-white flex flex-col items-center justify-center w-24 h-24 transform -rotate-12">
                <span className="text-xs font-black uppercase text-center tracking-tight leading-none">ZERO</span>
                <span className="text-[9px] font-mono mt-0.5 text-center text-green-100 uppercase tracking-tight leading-none">Commssion</span>
              </div>

              {/* Image Frame styled like a sleek smartphone mockups or organic border canvas */}
              <div className="relative mx-auto max-w-sm sm:max-w-md bg-white rounded-[40px] p-4 shadow-2xl border-4 border-neutral-100 hover:scale-[1.02] transition-transform duration-500">
                <div className="rounded-[32px] overflow-hidden aspect-square relative bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&h=800&q=80"
                    alt="Authentic gourmet Indian delicacies platter"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex flex-col justify-end p-6 space-y-2">
                    <div className="flex space-x-1 text-amber-500">
                      <Star className="h-4 w-4 fill-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500" />
                      <Star className="h-4 w-4 fill-amber-500" />
                    </div>
                    <h3 className="text-white font-sans text-xl font-bold leading-tight">Heritage Feast Platter</h3>
                    <p className="text-neutral-300 text-xs text-left">Direct Partner price of ₹360. No aggregator markups.</p>
                  </div>
                </div>

                {/* Small floating order card for aesthetic live-view interaction */}
                <div className="hidden sm:block absolute bottom-10 -right-6 md:-right-10 bg-white border border-neutral-100 p-4 rounded-2xl shadow-xl max-w-[200px] space-y-2.5 animate-bounce-subtle z-20">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">Live Delivery Tracker</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-1 rounded-lg bg-orange-50">
                      <Clock className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-neutral-900 leading-none">Delivered Warm</p>
                      <p className="text-[9px] text-neutral-400 font-mono mt-0.5">Estimated time: 24 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENCHMARK / SAVE INTERACTIVE PLATFORM SIMULATOR */}
      <section className="bg-white border-y border-neutral-100 py-16" id="benchmark-sandbox">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
            <span className="px-3 py-1 rounded-full bg-green-50 text-green-800 text-[10px] uppercase tracking-wider font-mono font-bold">
              Transparent Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-900 tracking-tight">
              Compare Your Real Savings
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              Standard delivery apps inflate menu charges to pay for platform overheads. Select a dish below to experience pure, transparent pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch" id="compare-grid">
            {/* Left selector menu with gorgeous dishes */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">Select Recipe Sample</span>

              <div className="space-y-3">
                {foods.map((food, i) => (
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
                          Save ₹{food.saves}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 line-clamp-1">{food.desc}</p>
                    </div>
                  </button>
                ))}
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
                  <div className="bg-rose-50/50 border border-rose-100/60 rounded-2xl p-5 space-y-3 relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-[10px] font-mono font-bold text-rose-700 bg-rose-100/60 px-2 py-0.5 rounded-full">
                      Traditional App
                    </span>
                    <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">Estimated Receipt</p>
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs text-neutral-600">
                        <span>Original Item Price:</span>
                        <span>₹{foods[compareFood].amigoPrice}</span>
                      </div>
                      <div className="flex justify-between text-xs text-neutral-600">
                        <span>Commission Markup (30%):</span>
                        <span>₹{Math.round(foods[compareFood].amigoPrice * 0.3)}</span>
                      </div>
                      <div className="flex justify-between text-xs text-neutral-600">
                        <span>Convenience & Platform Fee:</span>
                        <span>₹45</span>
                      </div>
                      <div className="flex justify-between text-xs text-neutral-600">
                        <span>Couriers Wages (aggregated):</span>
                        <span>₹35</span>
                      </div>
                      <div className="border-t border-rose-200/50 pt-2 flex justify-between font-bold text-sm text-neutral-800">
                        <span>Final Price:</span>
                        <span className="text-rose-700">₹{foods[compareFood].originalPrice}</span>
                      </div>
                    </div>
                  </div>

                  {/* AMIGO app breakdown */}
                  <div className="bg-green-50/50 border border-green-100/60 rounded-2xl p-5 space-y-3 relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-[10px] font-mono font-bold text-green-850 bg-green-100/60 px-2 py-0.5 rounded-full">
                      AMIGO Direct
                    </span>
                    <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">Estimated Receipt</p>
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs text-neutral-600">
                        <span>Genuine Restaurant Price:</span>
                        <span>₹{foods[compareFood].amigoPrice}</span>
                      </div>
                      <div className="flex justify-between text-xs text-green-700 font-semibold">
                        <span>Host Commission (0%):</span>
                        <span>₹0</span>
                      </div>
                      <div className="flex justify-between text-xs text-neutral-600">
                        <span>Direct Platform Maintenance:</span>
                        <span>₹0</span>
                      </div>
                      <div className="flex justify-between text-xs text-neutral-600">
                        <span>Direct Courier Wage (100% dispatcher):</span>
                        <span>₹35</span>
                      </div>
                      <div className="border-t border-green-200/50 pt-2 flex justify-between font-bold text-sm text-neutral-800">
                        <span>Final Price:</span>
                        <span className="text-green-800">₹{foods[compareFood].amigoPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Saves highlighting */}
              <div className="mt-6 bg-white border border-neutral-100 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Percent className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-neutral-900">Cash Saved on This Meal</h4>
                    <p className="text-xs text-neutral-500 font-normal leading-relaxed">Keep up to ₹{foods[compareFood].saves} in your family budget.</p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-xs font-heading font-bold text-neutral-400 uppercase tracking-wider block">Saved on Order</span>
                  <div className="text-3xl font-bold text-[#ae0000] font-heading tracking-tight leading-none mt-1">₹{foods[compareFood].saves}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - ADVANCED FEATURE GRID */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100" id="why-us">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-4 mb-14">
            <span className="px-3 py-1 rounded-full bg-orange-100/70 text-orange-900 font-heading font-bold uppercase tracking-wider text-[10px]">
              Our Ethical Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-900 tracking-tight">
              Why Choose AMIGO
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              We eliminate platform commissions to build an honest culinary network connecting hungry neighbors directly to home-kitchens.
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
                <div className="absolute top-4 left-4 bg-[#ae0000] text-white font-bold font-heading uppercase text-[10px] tracking-wider px-3 py-1 rounded-full shadow-sm animate-pulse">
                  Empathetic Baseline
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-neutral-950 font-heading tracking-tight text-left">0% Commission, Period</h3>
                  <p className="text-neutral-500 font-normal text-xs leading-relaxed text-left">
                    Zero cuts taken from independent kitchen partners. No menu rate manipulation—just pure prices that show deep empathy for cooks and families.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection("registration")}
                  className="w-fit flex items-center text-xs font-semibold text-orange-650 hover:text-orange-700 transition-colors cursor-pointer pt-2 group/btn"
                >
                  <span className="font-semibold">Claim store setup</span>
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
                  <h3 className="text-lg font-bold text-neutral-950 font-heading tracking-tight text-left">Direct Connections</h3>
                  <p className="text-neutral-500 font-normal text-xs leading-relaxed text-left">
                    Communicate straight with independent venues. Personalise your orders, coordinate deliveries smoothly, and pay raw menu rates.
                  </p>
                </div>
                <button
                  onClick={() => openLegalTab("about")}
                  className="w-fit flex items-center text-xs font-semibold text-green-700 hover:text-green-800 transition-colors cursor-pointer pt-2 group/btn"
                >
                  <span className="font-semibold">Learn our ethics</span>
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
                  <h3 className="text-lg font-bold text-neutral-950 font-heading tracking-tight text-left">Crafted for Modern Life</h3>
                  <p className="text-neutral-500 font-normal text-xs leading-relaxed text-left">
                    Budget-friendly, high-quality cooking tailored for intense schedules and busy study cycles. Wholesome ingredients prepared with deep love.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection("registration")}
                  className="w-fit flex items-center text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer pt-2 group/btn"
                >
                  <span className="font-semibold">Onboard as outlet</span>
                  <ChevronRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
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
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&h=800&q=80"
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
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 font-heading font-bold text-[10px] uppercase tracking-wider">
                  Neighborhood Empowerment
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight text-white">
                  Supporting Women Entrepreneurs & Local Kitchens
                </h2>
                <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Take full control of your culinary potential. Aggregators squeeze local cooks with massive cuts. AMIGO champions your talent. Launch your online storefront with zero entry cost and retain 100% of your earnings.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-4 text-center sm:text-left max-w-xl md:max-w-none mx-auto">
                <div className="flex flex-col items-center sm:items-start space-y-2">
                  <div className="h-8 w-8 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center font-bold font-heading text-xs uppercase tracking-wider shrink-0">
                    01
                  </div>
                  <h4 className="font-bold font-heading text-sm text-neutral-100">Zero Upfront Cost</h4>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed">Launch a premium storefront. Absolutely zero software registration or setup fees.</p>
                </div>
                <div className="flex flex-col items-center sm:items-start space-y-2 border-t sm:border-t-0 sm:border-x border-neutral-800 pt-4 sm:pt-0 sm:px-6">
                  <div className="h-8 w-8 rounded-full bg-green-700/20 text-green-500 flex items-center justify-center font-bold font-heading text-xs uppercase tracking-wider shrink-0">
                    02
                  </div>
                  <h4 className="font-bold font-heading text-sm text-neutral-100">Pure Hygiene</h4>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed">Guided by safety regulations to guarantee clean, wholesome preparation.</p>
                </div>
                <div className="flex flex-col items-center sm:items-start space-y-2 border-t sm:border-t-0 pt-4 sm:pt-0">
                  <div className="h-8 w-8 rounded-full bg-amber-600/20 text-amber-500 flex items-center justify-center font-bold font-heading text-xs uppercase tracking-wider shrink-0">
                    03
                  </div>
                  <h4 className="font-bold font-heading text-sm text-neutral-100">Retain 100% Sales</h4>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed">Avoid platform penalties and reinvest your earnings into fresh premium spices and produce.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK REGISTRATION SECTION (Form requested) */}
      <section className="py-20 bg-neutral-100" id="registration">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy block explaining why to register */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-900 tracking-tight leading-tight">
                Bring Your Dining Outlet Live on AMIGO
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                Enjoy direct-to-customer ordering, improved margins, and transparent zero commission structures. Grow sustainably without bleeding commissions.
              </p>

              <div className="space-y-3.5 pt-6 border-t border-neutral-200 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    <strong>Zero Setup Fees.</strong> Onboard your kitchen with 0 setup charges or upfront risk.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    <strong>Direct Price Control.</strong> Edit dishes, set menu prices, and design combos instantly.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    <strong>Hyperlocal Logistics.</strong> Access independent couriers to deliver efficiently inside your zone.
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
      <section className="py-20 bg-white" id="faq">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest flex items-center justify-center gap-1.5 font-sans">
              <HelpCircle className="h-4 w-4" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-neutral-900 tracking-tight">
              Curious About AMIGO?
            </h2>
            <p className="text-neutral-500 text-sm">
              Clear, transparent answers about our commission-free neighborhood ecosystem.
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

                  <AnimatePresence initial={false}>
                    {worksActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 py-16" id="app-footer">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand block */}
            <div className="space-y-4">
              <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero-top")}>
                <AmigoLogo size={38} showText={true} textColor="text-white" />
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Empowering neighborhood kitchens with 0% commissions. Enjoy premium quality food delivered at its real, honest price.
              </p>
            </div>

            {/* Platform links */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">The Platform</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => scrollToSection("why-us")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Why Choose AMIGO
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("benchmark-sandbox")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Savings Simulator Platform
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("registration")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Outlet Register Sandbox
                  </button>
                </li>
                <li>
                  <a href="https://play.google.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-left block">
                    Android Play Store
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal resources */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Company Policies</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => openLegalTab("about")} className="hover:text-white transition-colors cursor-pointer text-left font-semibold">
                    About Our Mission & Story
                  </button>
                </li>
                <li>
                  <button onClick={() => openLegalTab("terms")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Terms & Conditions (T&C)
                  </button>
                </li>
                <li>
                  <button onClick={() => openLegalTab("privacy")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Privacy Policy Rules
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Help & Support FAQs
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter mock block */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Neighborhood Alerts</h4>
              <p className="text-xs text-neutral-400">Receive alerts whenever new 0% markup kitchens launch near you.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Successfully subscribed to neighborhood alerts!"); }} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="bg-neutral-900 border border-neutral-800 text-xs px-3 py-2 rounded-lg focus:outline-hidden focus:border-orange-500 w-full text-white placeholder-neutral-500"
                />
                <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
            <div>
              &copy; {new Date().getFullYear()} AMIGO (APPYGO SERVICES PRIVATE LIMITED). All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <button onClick={() => openLegalTab("terms")} className="hover:text-neutral-300">T&C Agreements</button>
              <button onClick={() => openLegalTab("privacy")} className="hover:text-neutral-300">Privacy Clauses</button>
              <button onClick={() => openLegalTab("about")} className="hover:text-neutral-300">About Us</button>
            </div>
          </div>
        </div>
      </footer>

      {/* LEGAL DIALOG POPUP SYSTEM */}
      <LegalModal
        isOpen={legalOpen}
        onClose={() => setLegalOpen(false)}
        initialTab={modalTab}
      />
    </div>
  );
}
