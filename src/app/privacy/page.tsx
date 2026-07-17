"use client";

import { motion } from "motion/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LegalData } from "../../data/legalData";
import { Shield, Calendar, KeyRound } from "lucide-react";

export default function PrivacyPage() {
  const { privacy } = LegalData;

  return (
    <div className="bg-[#FAF9F6] text-neutral-800 min-h-screen font-sans antialiased selection:bg-orange-500 selection:text-white flex flex-col justify-between">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow py-12 sm:py-20">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-100 shadow-xl space-y-8"
          >
            {/* Header / Intro */}
            <div className="border-b border-neutral-100 pb-6 space-y-3">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Shield className="h-4 w-4" />
                Data Protection
              </span>
              <h1 className="text-3xl sm:text-4xl font-black font-heading text-neutral-900 tracking-tight">
                {privacy.title}
              </h1>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                <Calendar className="h-3.5 w-3.5" />
                <span>Last Updated: {privacy.lastUpdated}</span>
              </div>
            </div>

            {/* Info Notice Box */}
            <div className="bg-emerald-50/55 rounded-2xl p-4 sm:p-6 border border-emerald-100/40 flex items-start gap-4">
              <KeyRound className="h-6 w-6 text-emerald-700 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm text-neutral-700">
                <p className="font-bold text-emerald-950">We protect your privacy like an AMIGO.</p>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  We guarantee we NEVER lease, sell, or disclose your user demographics, preferences, or operational location telemetry to any third-party advertisers. All records remain fully secure.
                </p>
              </div>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {privacy.sections.map((section, idx) => (
                <div key={idx} className="space-y-3 border-b border-neutral-50 pb-6 last:border-b-0 last:pb-0">
                  <h2 className="font-bold text-neutral-900 text-lg flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    {section.heading}
                  </h2>
                  <div className="space-y-3 pl-4">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-neutral-600 text-xs sm:text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
