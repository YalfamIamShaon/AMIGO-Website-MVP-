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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUhfp_PUnhVRgYNw0a7xfXCOkNqRg8cNW00oPBt__CF3gQfRYDl40_m8DuZTRlC8p2yzC0iNwx-SEUYy9glkLY8c9hadyBkNV4iuAPgocZu4xN6vV93AwG0DdSEhtkHT14Zv8apHVO7sOVT0ofG-YZ59fTUGFb4RU6yV2qq4OH7-iVzF4jIqKEFyWymRiIGhvhuzx4cb64zLEwlb4qExVF91tWRG8U1ap5aq4g_d2uAYppS4sqO0mrGtr75d19-q2cm7Ex_cR_LAM",
      desc: "Slow-cooked saffron basmati rice with organic marinade, spices & tender premium pieces.",
      originalPrice: 380,
      amigoPrice: 260,
      saves: 120,
      rating: "4.9",
      tags: ["Signature", "Slow-Cooked", "Indian Fusion"]
    },
    {
      id: "dumplings",
      name: "Steamed Veggie Momos",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp3IdT_-rBTFOoHxxvivwahDkkDvxu4fd98PZBR3DvIjaYuRnKTIeIQHZzV35NXNQFPFQOHnI0BtV-b0FG27XauryxiqBcP1jURp46sF8BlNDTNhhSoqQOMJDh8PlS4oyTIpUx4QLH9x64VtzaMtfnuPOmXAnrcZraSnlStKdkzQXzHRUmbuezuH0J2GdAJdPdiVQZJmhBDDM7rTn2IfCOnf7PzAprMcqPyb16Pr1w3KorQPrNSUQEZI_3Z0DpNKNW9VGa-j7SdUI",
      desc: "Delicate wrappers filled with finely minced garden-fresh carrots, cabbage, scallions & mushrooms.",
      originalPrice: 220,
      amigoPrice: 150,
      saves: 70,
      rating: "4.8",
      tags: ["Popular", "Vegan", "Himalayan Authentic"]
    },
    {
      id: "noodles",
      name: "Wok Noodles & Meatballs",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSmWZOyEh9zcvnA7J8fZHuLdrzl_5UCOGiUCUQ0S-o8Xr97LQrKEmR0Gs-GsRwOxljSH9S9P3E5SAadDZGkbsBowrUnbNbgFNkktlbxO5u4YrVRVnr5QZRSyYz92eJ5bT_GMMV_MHbAYPuiA2zPTgZhIaIJHx7N1o_7nZrRI4FHCrjOlAQ8m4AWEWbzXKVdBTxfvWZQJ0p5mEuOxmx23BOpoxttsOnRNwypbWYOjtvpKr4D3pVcF-zIRYze27xSyNgnNz7WYPxofk",
      desc: "Fired artisanal wheat noodles tossed with spicy sesame garlic paste and juicy tender meatballs.",
      originalPrice: 310,
      amigoPrice: 210,
      saves: 100,
      rating: "4.8",
      tags: ["Chef Special", "Spicy", "Hearty Meal"]
    }
  ];

  const faqs = [
    {
      q: "How does AMIGO guarantee 0% commission on orders?",
      a: "Unlike traditional food delivery apps that take up to 30% of each order from restaurant partners, AMIGO runs a direct-to-customer open marketplace. Restaurants list their food at their raw menu price, and customers pay a small flat convenience fee + delivery charges which go 100% directly to delivery dispatchers. No hidden inflation, no cuts from cooks."
    },
    {
      q: "Are the food partners licensed and health-department certified?",
      a: "Absolutely. Every partner listing on AMIGO is vetted with mandatory registration protocols, including local food board licenses and periodic kitchen inspections. We support real, professional local kitchens and certified home-chefs who adhere strictly to sanitization laws."
    },
    {
      q: "When will the iOS application be released?",
      a: "The iOS version is currently in final testing with our developer group. It is scheduled to launch on the Apple App Store very soon! You can click 'iOS App Coming Soon' on our banner to subscribe for launch updates."
    },
    {
      q: "I have a restaurant, how quickly can I start selling?",
      a: "Onboarding is incredibly rapid. Fill out our 'Quick Registration' form down below. Once our verification experts confirm your certification, your 0% commission storefront can go live within 2 hours!"
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
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero-top")}>
              <div className="h-10 w-10 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                <span className="font-extrabold text-xl font-mono">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-xl text-neutral-900 tracking-tight leading-none">AMIGO</span>
                <span className="text-[9px] font-mono font-bold text-green-700 tracking-wider uppercase mt-0.5">0% Commission App</span>
              </div>
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
                onClick={() => scrollToSection("bento-menu")}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Signature Dishes
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
                  onClick={() => scrollToSection("bento-menu")}
                  className="block w-full text-left py-2 font-medium text-neutral-700 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Signature Dishes
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

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-sans text-neutral-900 tracking-tight leading-none">
                  Fresh Food. <br />
                  <span className="text-orange-600">Fair Prices.</span> <br />
                  <span className="text-neutral-900">Zero Commissions.</span>
                </h1>
                <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  We are revolutionizing food tech. AMIGO connects you directly to professional, audited local kitchens with zero middleman markup. Enjoy larger portions and genuine pricing!
                </p>
              </div>

              {/* Value Proposition Callout Bar instead of Play Store rating and daily deliveries */}
              <div className="bg-orange-50/60 border border-orange-100 p-4 sm:p-5 rounded-2xl text-left max-w-xl mx-auto lg:mx-0 space-y-3">
                <div className="flex items-center space-x-2 text-rose-950">
                  <Percent className="h-5 w-5 stroke-[2.5px] text-orange-650 animate-pulse" />
                  <span className="font-bold text-sm tracking-tight">The Only 0% Commission Food App</span>
                </div>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Unlike traditional aggregators charging <span className="font-semibold text-rose-605">25% to 35% heavy commissions</span> on every order, AMIGO charges <span className="font-semibold text-green-700">0% commission</span>. Merchants pass these direct savings entirely to you, so customers get the absolute best prices.
                </p>
              </div>

              {/* ACTION CTAs as requested in the prompt */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" id="hero-button-group">
                {/* 1. Google Play Store button with real layout badge */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer group"
                  id="btn-play-store"
                >
                  <div className="text-orange-500">
                    <Smartphone className="h-6 w-6 stroke-[2.5px]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono uppercase text-neutral-400 leading-none">Get it on</p>
                    <p className="text-sm font-bold leading-tight font-sans tracking-tight">Google Play Store</p>
                  </div>
                </a>

                {/* 2. "IOS app coming soon" badge button requested by user */}
                <div
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-neutral-100 text-neutral-400 px-6 py-3 rounded-2xl border border-dashed border-neutral-300 relative group select-none"
                  id="btn-ios-soon"
                  title="We are preparing Apple iOS version - scheduled for launch next month"
                >
                  <div className="text-neutral-400">
                    <Compass className="h-6 w-6 stroke-[1.5px]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono uppercase text-neutral-400 leading-none">Stay tuned</p>
                    <p className="text-sm font-bold leading-tight font-sans tracking-tight text-neutral-500">iOS version coming soon</p>
                  </div>
                  {/* Small pulsing dot to signify ongoing developer testing */}
                  <span className="absolute top-2 right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                </div>

                {/* 3. Partner with Us CTA which links right down to local sign-up */}
                <button
                  onClick={() => scrollToSection("registration")}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 py-3 px-6 text-sm font-bold text-orange-600 hover:text-white bg-white hover:bg-orange-600 border border-orange-500 rounded-2xl transition-all shadow-xs cursor-pointer"
                  id="hero-partner-cta"
                >
                  <span>Restaurant Partner Registration</span>
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC37fc22zLXkzde2RjHepnJqPvRhBUYw3S2ljGVVj1BlXIWpPc7SXk6N_l6Dgj_vBDIpNHTEkR54N9eoYtHD2JpCXcDl7zfiZWXM5C9DM-Q6ahhjTi3YtEi3OqzcKWsCIEtwTrpEJ3ZCxGbemBqzQxRyQ7YZjweQ8fx0hFnEUZpSJP8R_JhjBIiGmqzl-eyx5u1dIDi9hgDNURGadDkffGYjumxA5OyVnFAM0z_fko5Eqw0RFNgdvpCiGrdksthwYCFeaVDCoglKW4"
                    alt="Authentic high-end curry rice flatlay spread"
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
                    <p className="text-neutral-300 text-xs">Direct Partner rate of ₹360 instead of standard aggregate rate ₹520.</p>
                  </div>
                </div>

                {/* Small floating order card for aesthetic live-view interaction */}
                <div className="absolute bottom-10 -right-6 md:-right-10 bg-white border border-neutral-100 p-4 rounded-2xl shadow-xl max-w-[200px] space-y-2.5 animate-bounce-subtle z-20">
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
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="px-3 py-1 rounded-full bg-green-50 text-green-800 text-[11px] uppercase tracking-widest font-mono font-bold">
              The Transparent Alternative
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-sans text-neutral-900 tracking-tight leading-none">
              Witness the Savings Interface
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Traditional aggregator applications introduce heavily inflated menu rates and customer convenience surcharges to pay for their massive technical overhead. Click on our partner recipes below to check the direct difference!
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
              <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100/60 flex items-start space-x-2 text-neutral-500 text-xs text-left">
                <Info className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                <span>Our comparison details represent real verified menu rates catalogued across leading Indian metropolises. Price differences could vary.</span>
              </div>
            </div>

            {/* Right comparison card metrics */}
            <div className="lg:col-span-7 bg-dashed rounded-3xl border-2 border-neutral-100 bg-[#FAF9F6] p-6 sm:p-8 flex flex-col justify-between" id="compare-card">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-sans text-neutral-900">
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
                <div className="flex items-center space-x-3 text-center sm:text-left">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <Percent className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Total Customer Cash Preserved</h4>
                    <p className="text-xs text-neutral-400">Keep up to ₹{foods[compareFood].saves} in your family budget</p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Saved On Order</span>
                  <div className="text-2xl font-black text-orange-600 font-mono">₹{foods[compareFood].saves}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - BENTO GRID & FEATURE SHOWCASE */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100" id="why-us">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-orange-100/60 text-orange-850 font-mono text-[10px] uppercase tracking-widest font-bold">
              Built on Modern Ethics & Tech
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-neutral-900 tracking-tight leading-none">
              Why APPYGO SERVICES PRIVATE LIMITED Created AMIGO
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              We stand apart from greedy corporate delivery portals by establishing an honest baseline model. Direct customer contact, zero commissions, and beautiful culinary standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="bento-reasons">
            {/* Card 1: 0% Host Fee */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-3xs flex flex-col justify-between hover:scale-[1.01] transition-transform group">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center transition-colors group-hover:bg-orange-650 group-hover:text-white">
                  <Percent className="h-6 w-6 stroke-[2.5px]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-neutral-950 font-sans">0% Platform Cut</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    We never take commission cuts from standard kitchen transactions. The owner keeps 100% of their kitchen profits.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-orange-600 space-x-1.5 cursor-pointer" onClick={() => scrollToSection("registration")}>
                <span>Claim store setup</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Card 2: No Hidden Markups */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-3xs flex flex-col justify-between hover:scale-[1.01] transition-transform group">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center transition-colors group-hover:bg-green-750 group-hover:text-white">
                  <ShieldCheck className="h-6 w-6 stroke-[2.5px]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-neutral-950 font-sans">No Hidden Fees</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Say goodbye to arbitrary 'handling adjustments'. Menu pricing maps perfectly to genuine restaurant bills without spikes.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-green-700 space-x-1.5 cursor-pointer" onClick={() => openLegalTab("about")}>
                <span>Learn our ethics</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Card 3: Live Direct Interaction */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-3xs flex flex-col justify-between hover:scale-[1.01] transition-transform group">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center transition-colors group-hover:bg-orange-600">
                  <MessageSquare className="h-6 w-6 stroke-[2px]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-neutral-950 font-sans">Direct Customer Touch</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Our interface connects restaurant owners and consumers directly. Coordinate orders, modify toppings, or text couriers without middleware filters.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-neutral-800 space-x-1.5 cursor-pointer" onClick={() => scrollToSection("faq")}>
                <span>Read coordination FAQ</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Card 4: High Growth potential */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-3xs flex flex-col justify-between hover:scale-[1.01] transition-transform group">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center transition-colors group-hover:bg-amber-600 group-hover:text-white">
                  <TrendingUp className="h-6 w-6 stroke-[2px]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-neutral-950 font-sans">Empowered Deliveries</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    By bypassing middle charges, our independent courier fleets earn up to 40% more relative wage payouts per hour. Honest work deserves fair reward.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-amber-700 space-x-1.5 cursor-pointer" onClick={() => scrollToSection("registration")}>
                <span>Onboard as outlet</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE PRODUCTS METICULOUS DISPLAY SECTION (with direct Hotlinks) */}
      <section className="py-20 bg-white" id="bento-menu">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                Curated Menu Signatures
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-sans text-neutral-900 tracking-tight leading-none">
                Gourmet Masterpieces Cooked Daily
              </h2>
              <p className="text-neutral-500 text-sm max-w-xl leading-relaxed">
                Taste the direct quality. Every dish is customized with certified fresh herbs, slow-steamed basmati rice, and homemade sauces. No mass compromises.
              </p>
            </div>
            <div className="shrink-0 flex items-center space-x-3">
              <span className="text-xs font-bold text-neutral-400">Order direct on Play Store app today!</span>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-neutral-900 text-white hover:bg-orange-600 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8" id="menu-cards-grid">
            {/* Dumplings Card */}
            <div className="group rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-3xs flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp3IdT_-rBTFOoHxxvivwahDkkDvxu4fd98PZBR3DvIjaYuRnKTIeIQHZzV35NXNQFPFQOHnI0BtV-b0FG27XauryxiqBcP1jURp46sF8BlNDTNhhSoqQOMJDh8PlS4oyTIpUx4QLH9x64VtzaMtfnuPOmXAnrcZraSnlStKdkzQXzHRUmbuezuH0J2GdAJdPdiVQZJmhBDDM7rTn2IfCOnf7PzAprMcqPyb16Pr1w3KorQPrNSUQEZI_3Z0DpNKNW9VGa-j7SdUI"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUhfp_PUnhVRgYNw0a7xfXCOkNqRg8cNW00oPBt__CF3gQfRYDl40_m8DuZTRlC8p2yzC0iNwx-SEUYy9glkLY8c9hadyBkNV4iuAPgocZu4xN6vV93AwG0DdSEhtkHT14Zv8apHVO7sOVT0ofG-YZ59fTUGFb4RU6yV2qq4OH7-iVzF4jIqKEFyWymRiIGhvhuzx4cb64zLEwlb4qExVF91tWRG8U1ap5aq4g_d2uAYppS4sqO0mrGtr75d19-q2cm7Ex_cR_LAM"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSmWZOyEh9zcvnA7J8fZHuLdrzl_5UCOGiUCUQ0S-o8Xr97LQrKEmR0Gs-GsRwOxljSH9S9P3E5SAadDZGkbsBowrUnbNbgFNkktlbxO5u4YrVRVnr5QZRSyYz92eJ5bT_GMMV_MHbAYPuiA2zPTgZhIaIJHx7N1o_7nZrRI4FHCrjOlAQ8m4AWEWbzXKVdBTxfvWZQJ0p5mEuOxmx23BOpoxttsOnRNwypbWYOjtvpKr4D3pVcF-zIRYze27xSyNgnNz7WYPxofk"
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
      </section>

      {/* MEET OUR PROFESSIONAL KITCHEN PARTNERS SECTION (Hotlink Chefs) */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden" id="chefs-spotlight">
        <div className="absolute inset-0 bg-neutral-950/20" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Image frame covering the Chefs */}
            <div className="lg:col-span-5 relative" id="chef-media-frame">
              <div className="relative mx-auto rounded-[30px] overflow-hidden shadow-2xl border-4 border-neutral-800 aspect-3/4 max-w-[340px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWsg-M8K8iqujdv_HcC3_GaJcc3ma05HVLw8_d2N68KRzEkuM73vmOWooy3_YJmJSbTL8MwwEndiIDP1xIyp2p9RQy-GwELMe6SxiE-KX7tRtLBBFCN5vJiM7qJV36NGBz9cpw444zrKFUiusaDkiNI5V_edUKi8g4Y1W-3COk2jgo7Evoub21LUkPLYFtADCY2aX2DcBpH8ZQXX9CiJsaG9mAC1Of-0ynb3CPzX6NWgCaUdViurjG8tOSIMoWoq37tjtI8uSh-QM"
                  alt="Verified Professional chefs preparing dishes in commercial hygienic kitchen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent flex flex-col justify-end p-6 space-y-1">
                  <p className="text-orange-500 font-mono text-[10px] uppercase tracking-wider font-bold">Kitchen Health Audited</p>
                  <h4 className="font-bold text-lg leading-tight">Masterchef S. Kapoor & Crew</h4>
                  <p className="text-neutral-400 text-xs">Vetted in 20+ safety inspections annually.</p>
                </div>
              </div>
              {/* Tag removed */}
            </div>

            {/* Copy detailing our sanitary standards and business philosophy */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 font-mono text-[10px] uppercase tracking-widest font-bold">
                  Championing Local Culinary Masters
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight leading-none">
                  Supporting Real kitchens, Delivering Pristine Sanitation.
                </h2>
                <p className="text-neutral-300 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Traditional aggregation models bully small creators with expensive marketing budgets, arbitrary penalties, and opaque telemetry metrics. At AMIGO, we trust our culinary artists. You get chef-level recipes cooked on demand with certified fresh oils, premium fresh meats, and flawless care.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-4 text-left max-w-xl md:max-w-none mx-auto">
                <div className="space-y-2">
                  <div className="h-8 w-8 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center font-bold font-mono text-sm">
                    01
                  </div>
                  <h4 className="font-bold text-sm">Superior Profits</h4>
                  <p className="text-xs text-neutral-400">By paying 0% backend commissions, kitchens invest more in super premium organic components.</p>
                </div>
                <div className="space-y-2 border-t sm:border-t-0 sm:border-x border-neutral-800 pt-4 sm:pt-0 sm:px-6">
                  <div className="h-8 w-8 rounded-full bg-green-700/20 text-green-500 flex items-center justify-center font-bold font-mono text-sm">
                    02
                  </div>
                  <h4 className="font-bold text-sm">Honest Operations</h4>
                  <p className="text-xs text-neutral-400">Direct integration gives restaurant managers instant dispatch coordinates and seamless customer queries.</p>
                </div>
                <div className="space-y-2 border-t sm:border-t-0 pt-4 sm:pt-0">
                  <div className="h-8 w-8 rounded-full bg-amber-600/20 text-amber-500 flex items-center justify-center font-bold font-mono text-sm">
                    03
                  </div>
                  <h4 className="font-bold text-sm">Safety Guarantee</h4>
                  <p className="text-xs text-neutral-400">We perform spontaneous random safety testing weekly to secure food health standards.</p>
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
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              {/* Badge removed */}
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-neutral-900 tracking-tight leading-none">
                Bring Your Dining Outlet Live on AMIGO
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Unlock direct customer ordering, higher per-ticket order volume, and transparent zero commission structures. Grow your business without bleeding commissions on every delivery order.
              </p>

              <div className="space-y-4 pt-4 border-t border-neutral-200 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                  <p className="text-xs text-neutral-600">
                    <strong>Zero hidden platform licensing.</strong> Launch your store with absolute peace of mind.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                  <p className="text-xs text-neutral-600">
                    <strong>Manage Menu Instantly.</strong> Real-time price edits, photo updates, and customized combos via our partner dashboard.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                  <p className="text-xs text-neutral-600">
                    <strong>Live Courier Matching.</strong> Access independent local dispatchers ready to deliver to food fans in your 7km zone.
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
            <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              Frequently Answered Inquiries
            </span>
            <h2 className="text-3xl font-bold font-sans text-neutral-900 tracking-tight">
              Curious About AMIGO?
            </h2>
            <p className="text-neutral-500 text-sm">
              Clear, transparent answers to help you navigate our zero commission ecosystem smoothly.
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
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero-top")}>
                <div className="h-9 w-9 rounded-lg bg-orange-600 flex items-center justify-center text-white">
                  <span className="font-black text-lg">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-black text-lg text-white leading-none">AMIGO</span>
                  <span className="text-[8px] font-mono font-bold text-green-500 uppercase tracking-wider mt-0.5">by APPYGO SERVICES</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Empowering localized food ecosystems with zero third-party commission penalties. Bringing gourmet standards directly to your table at the honest raw price.
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
                  <button onClick={() => scrollToSection("bento-menu")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Signature Culinary Menu
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
              <p className="text-xs text-neutral-400">Join our local community digest to get notified of newly listed 0% markup kitchens in your neighborhood.</p>
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
