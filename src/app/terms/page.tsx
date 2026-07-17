"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LegalData } from "../../data/legalData";
import { FileText, Calendar, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  const { terms } = LegalData;
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
                <FileText className="h-4 w-4" />
                Agreements
              </span>
              <h1 className="text-3xl sm:text-4xl font-black font-heading text-neutral-900 tracking-tight">
                {terms.title}
              </h1>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                <Calendar className="h-3.5 w-3.5" />
                <span>Last Updated: {terms.lastUpdated}</span>
              </div>
            </div>

            {/* Warnings and Info box */}
            <div className="bg-orange-50/50 rounded-2xl p-4 sm:p-6 border border-orange-100/40 flex items-start gap-4">
              <ShieldAlert className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm text-neutral-700">
                <p className="font-bold">Please read carefully before using the AMIGO platform.</p>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  These agreements outline how our 0% commission structures, kitchen partner onboarding verification, pricing guarantees, and support frameworks function.
                </p>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {terms.sections.map((section, idx) => (
                <div key={idx} className="space-y-3 border-b border-neutral-50 pb-6 last:border-b-0 last:pb-0">
                  <h2 className="font-bold text-neutral-900 text-lg flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
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
