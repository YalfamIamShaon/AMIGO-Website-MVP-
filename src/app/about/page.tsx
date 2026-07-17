"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { 
  Heart, 
  Users, 
  Sparkles, 
  TrendingDown, 
  Utensils, 
  Layers, 
  Apple, 
  TrendingUp, 
  BadgeHelp,
  ArrowRight,
  Smile,
  ShieldCheck
} from "lucide-react";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const scrollToHeroTop = () => {
    const el = document.getElementById("hero-top");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToPartnerRegistration = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/#registration";
    }
  };

  return (
    <div className="bg-[#FAF9F6] text-neutral-800 min-h-screen font-sans antialiased selection:bg-orange-500 selection:text-white flex flex-col justify-between" id="about-page-container">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow py-12 sm:py-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Main Card container */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-100 shadow-xl space-y-12"
          >
            {/* Header section */}
            <div className="border-b border-neutral-100 pb-8 text-center space-y-4">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Smile className="h-4 w-4" />
                Who We Are
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight">
                About Us
              </h1>
              <p className="text-lg sm:text-xl font-bold text-orange-600 tracking-tight">
                Your Ultimate Food Buddy.
              </p>
            </div>

            {/* Introduction paragraphs */}
            <div className="space-y-6 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong>AMIGO</strong>, we believe that great food should be effortless, accessible, and savoured by <strong>anyone, anytime, anywhere</strong>. We aren’t just delivering food, we are here to revolutionize the way you dine, turning every meal into an unforgettable experience.
              </p>
              <p>
                Driven by a passion for exceptional service, we go above and beyond to make your dining <strong>seamless, enjoyable yet affordable</strong>. With our intuitive App, efficient delivery network, and an endless variety of culinary choices, all you have to do is sit back, relax, and let us handle the rest.
              </p>
            </div>

            {/* Why Choose AMIGO? */}
            <div className="bg-[#FAF9F6] p-6 sm:p-8 rounded-2xl border border-neutral-100 space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 flex items-center gap-2">
                  <span className="text-orange-600">★</span> Why Choose AMIGO?
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600">
                  We understand that you need convenience without compromising on quality. That’s why we’ve built a platform that adapts to your lifestyle:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm space-y-2">
                  <div className="text-orange-600 font-bold text-xs sm:text-sm flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-600"></span>
                    Craving a Gourmet Masterpiece?
                  </div>
                  <p className="text-xs text-neutral-600">We’ll bring the finest dining straight to your door.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm space-y-2">
                  <div className="text-orange-600 font-bold text-xs sm:text-sm flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-600"></span>
                    Need Comforting Classics?
                  </div>
                  <p className="text-xs text-neutral-600">Your favourite local soul foods are just a tap away.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm space-y-2">
                  <div className="text-orange-600 font-bold text-xs sm:text-sm flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-600"></span>
                    Exploring Regional Delicacies?
                  </div>
                  <p className="text-xs text-neutral-600">Taste authentic flavours from across the map.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm space-y-2">
                  <div className="text-orange-600 font-bold text-xs sm:text-sm flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-600"></span>
                    Committed to a Healthy Lifestyle & Homely Flavours?
                  </div>
                  <p className="text-xs text-neutral-600">Explore our sustainable, meal options designed for your busy life.</p>
                </div>
              </div>
            </div>

            {/* Our Partners, Your Tastemakers */}
            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <h2 className="text-lg sm:text-xl font-extrabold text-neutral-900">
                Our Partners, Your Tastemakers
              </h2>
              <p>
                We collaborate with a diverse range of premier food merchants, whom we proudly call our <strong>Partners</strong>. They are culinary experts who understand that every customer has a unique palate and specific dietary preferences. Together, we ensure that your meal is prepared exactly the way you like it.
              </p>
            </div>

            {/* Proper Meals, Proper Deals Callout */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-black italic">
                &quot;Proper Meals, Proper Deals.&quot;
              </h3>
              <p className="text-xs sm:text-sm font-medium opacity-95">
                What are you waiting for? Step into an extraordinary culinary journey with <strong>AMIGO</strong>, where <strong>every single bite is a pure delight</strong>.
              </p>
              <div className="pt-2">
                <a 
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-orange-600 hover:bg-orange-50 transition-colors px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-md inline-flex items-center gap-2 cursor-pointer inline-flex"
                >
                  [Order Now]
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Did you know ? */}
            <div className="border-t border-neutral-100 pt-8 space-y-4">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full inline-flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                Did you know ?
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900">
                Food is the ultimate connector.
              </h2>
              <div className="text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  No matter who we are, what we do, or where we come from, our lives revolve around a simple, four-letter word: <strong>FOOD</strong>.
                </p>
                <p>
                  At <strong>AMIGO</strong>, our commitment goes far beyond just satisfying your hunger. We are on a mission to build community, foster real connections, and bring people closer together. After all, the old saying is true, <em><strong>&quot;the best way to anyone&apos;s heart is through their stomach&quot;</strong></em>.
                </p>
              </div>
            </div>

            {/* Redefining the Food Delivery Game */}
            <div className="border-t border-neutral-100 pt-8 space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900">
                Redefining the Food Delivery Game
              </h2>
              <div className="text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p className="font-semibold text-neutral-900">
                  Let’s be honest: the current online food delivery model is broken.
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Skyrocketing prices</strong> have made every day ordering unsustainable.
                  </li>
                  <li>
                    <strong>Misleading discounts</strong> look good on paper but don&apos;t actually save you money.
                  </li>
                  <li>
                    <strong>Local merchants are bleeding</strong>, struggling with high commission fees that eat away their hard work.
                  </li>
                </ul>
                <p className="font-bold text-neutral-900 pt-2">
                  We are here to change that.
                </p>
                <p>
                  AMIGO is stepping in to clean up the clutter, ruling out the friction points that frustrate both hungry customers and passionate kitchen partners. We are shaking up the ecosystem through constant innovation and a commitment to doing things right.
                </p>

                {/* At AMIGO list block */}
                <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200/50 space-y-3 my-4">
                  <p className="font-bold text-neutral-900">At AMIGO:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Convenience</strong> meets <strong>Quality</strong>.
                    </li>
                    <li>
                      <strong>Business</strong> meets <strong>Equality</strong>.
                    </li>
                    <li>
                      <strong>Solutions</strong> are found in <strong>Quantity</strong>.
                    </li>
                  </ul>
                </div>

                <p>
                  We are destined to stay ahead of the curve, proving that a food delivery network can be fair, affordable, and incredibly delicious all at once.
                </p>
              </div>
            </div>

            {/* Why AMIGO ? */}
            <div className="border-t border-neutral-100 pt-8 space-y-6" id="why-amigo-difference-section">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">
                  Why AMIGO ?
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-neutral-900 pt-2">
                  Experience the AMIGO Difference.
                </h2>
              </div>
              
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                In Spanish, &quot;Amigo&quot; translates to <strong>Friend</strong>, and we take that literally. We’ve built a <strong>trusted food and meal delivery platform</strong> that genuinely cares for the two heartbeats of our ecosystem: <em><strong>the people who love to eat</strong></em>, and <em><strong>the people who love to cook</strong></em>.
              </p>

              {/* 🍽️ For Our Foodies (The Customers) */}
              <div className="bg-orange-50/40 p-6 sm:p-8 rounded-2xl border border-orange-100/50 space-y-4">
                <div className="space-y-1">
                  <span className="text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                    🍽️ For Our Foodies (The Customers)
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-orange-600">
                    Instant Cravings & Homely Meals, All in One Place.
                  </p>
                </div>
                
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">
                  Whether you need a quick bite right now or want to plan your meals, be it lunch or dinner, we have you covered. We cater to everyone - busy students, working professionals, elderly parents, and everyone in between.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-600 mt-1 shrink-0">✔</span>
                    <div>
                      <strong>Discover Local Delights:</strong> From hidden neighbourhood gems and local home cooks to the most popular restaurants in the city, your next great meal is just a click away.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-600 mt-1 shrink-0">✔</span>
                    <div>
                      <strong>Flexible Meal Subscriptions:</strong> Take the stress out of daily dining. Pre-order your lunches and dinners based on your exact budget, schedule, and culinary preferences. You get the exactly feel of being cooked at our home kitchen.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-600 mt-1 shrink-0">✔</span>
                    <div>
                      <strong>Total Convenience:</strong> You choose the place, the date, and the time. We make sure it arrives fresh and on schedule.
                    </div>
                  </li>
                </ul>
              </div>

              {/* 🤝 For Our Creators (The Partners) */}
              <div className="bg-emerald-50/40 p-6 sm:p-8 rounded-2xl border border-emerald-100/50 space-y-4">
                <div className="space-y-1">
                  <span className="text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                    🤝 For Our Creators (The Partners)
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-emerald-800">
                    Fair, Transparent, and Built for Growth.
                  </p>
                </div>

                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">
                  Whether you run a bustling Restaurant, a QSR, a catering service, or are a talented local home cook, there is a place for you under the AMIGO umbrella. You aren&apos;t just a merchant to us - you are a partner.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 mt-1 shrink-0">✔</span>
                    <div>
                      <strong>Zero Hidden Fees:</strong> Say goodbye to sky-high commissions, surprise charges, and bleeding margins. We believe in 100% transparent pricing so you know exactly what you earn.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 mt-1 shrink-0">✔</span>
                    <div>
                      <strong>Grow Your Traffic:</strong> Tap into our expansive network of hungry customers and leverage our platform to double your business traffic. Enroll yourself in <strong>both our restaurant section</strong> and <strong>meal section</strong> to experience <strong>2x visibility</strong>.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 mt-1 shrink-0">✔</span>
                    <div>
                      <strong>Empowering Local Business and Local Home Chefs:</strong> We are for everyone and want to grow with everyone. We are deeply committed to supporting, promoting, and scaling small local businesses.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom join callout block */}
            <div className="border-t border-neutral-100 pt-8 text-center space-y-4">
              <p className="text-base sm:text-lg font-black text-neutral-900">
                Join AMIGO today. Try us, then trust us, and let&apos;s grow together.
              </p>
              <div className="pt-2">
                <button 
                  onClick={scrollToPartnerRegistration}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Copyright block */}
            <div className="border-t border-neutral-100 pt-6 text-center text-xs text-neutral-400 font-mono">
              <p>© 2026 Appygo Services Private Limited. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
