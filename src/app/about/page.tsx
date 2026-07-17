"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LegalData } from "../../data/legalData";
import { Heart, Users, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const { about } = LegalData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-[#FAF9F6] text-neutral-800 min-h-screen font-sans antialiased selection:bg-orange-500 selection:text-white flex flex-col justify-between">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow py-12 sm:py-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Header intro */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full">
                AMIGO Core Values
              </span>
              <h1 className="text-3xl sm:text-5xl font-black font-heading text-neutral-900 tracking-tight leading-none">
                {about.title}
              </h1>
              <p className="text-neutral-600 text-sm sm:text-lg leading-relaxed font-sans">
                {about.tagline}
              </p>
            </div>

            {/* Brand Hero image frame */}
            <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&h=800&q=80"
                alt="AMIGO Core Values & Authentic Ingredients"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex items-end p-6 sm:p-8">
                <p className="text-white text-xs sm:text-sm font-mono tracking-wide">
                  Our values guide every order — direct, safe, honest. Supporting local kitchens daily.
                </p>
              </div>
            </div>

            {/* Stats Block */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-orange-50/40 p-6 sm:p-8 rounded-3xl border border-orange-100/50">
              {about.stats.map((stat, i) => (
                <div key={i} className="text-center space-y-1.5">
                  <div className="text-3xl sm:text-4xl font-black text-orange-600 font-mono">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500 font-semibold tracking-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Our Mission & History Row */}
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-100 hover:shadow-lg transition-all duration-300 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 flex items-center gap-2.5">
                  <Heart className="h-6 w-6 text-orange-600 fill-orange-50" />
                  Our True Mission
                </h2>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {about.mission}
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-100 hover:shadow-lg transition-all duration-300 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 flex items-center gap-2.5">
                  <Users className="h-6 w-6 text-green-700" />
                  The Story Behind AMIGO
                </h2>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {about.history}
                </p>
              </div>
            </div>

            {/* Core Features Grid */}
            <div className="space-y-6 pt-6 border-t border-neutral-200">
              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
                  How We Stand Out
                </h2>
                <p className="text-neutral-500 text-xs sm:text-sm">
                  We are rewriting the standard food aggregator commission blueprints.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {about.features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl space-y-3 border border-neutral-100 hover:border-orange-500/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 text-neutral-900 font-bold text-sm">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0" />
                      <span>{feature.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
