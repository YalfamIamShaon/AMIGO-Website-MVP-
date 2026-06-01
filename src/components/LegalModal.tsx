import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, FileText, Shield, Info, Heart, Users, MapPin, Coffee, CheckCircle2 } from "lucide-react";
import { LegalData } from "../data/legalData";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: "about" | "terms" | "privacy";
}

export default function LegalModal({ isOpen, onClose, initialTab }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<"about" | "terms" | "privacy">(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialTab]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs cursor-pointer"
            id="modal-backdrop"
          />

          {/* Modal Card CONTAINER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-4xl max-h-[85vh] md:max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col z-10"
            id="legal-modal-card"
          >
            {/* Header tab buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-neutral-100 bg-neutral-50/50 p-4 sm:px-6">
              <div className="flex items-center space-x-2 pb-3 sm:pb-0">
                <span className="h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
                <span className="font-mono text-xs text-neutral-500 font-semibold tracking-wider uppercase">
                  FreshBite Hub
                </span>
              </div>

              {/* Close Button Mobile/Desktop absolute-style */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:static p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
                aria-label="Close modal"
                id="close-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* TAB SELECTOR */}
            <div className="flex border-b border-neutral-100 bg-white" id="legal-tab-bar">
              <button
                onClick={() => setActiveTab("about")}
                className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 py-4 px-3 sm:px-6 font-medium text-sm border-b-2 transition-all ${
                  activeTab === "about"
                    ? "border-orange-600 text-orange-600 bg-orange-50/30"
                    : "border-transparent text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50/50"
                }`}
                id="tab-btn-about"
              >
                <Info className="h-4 w-4" />
                <span>About Us</span>
              </button>

              <button
                onClick={() => setActiveTab("terms")}
                className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 py-4 px-3 sm:px-6 font-medium text-sm border-b-2 transition-all ${
                  activeTab === "terms"
                    ? "border-orange-600 text-orange-600 bg-orange-50/30"
                    : "border-transparent text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50/50"
                }`}
                id="tab-btn-terms"
              >
                <FileText className="h-4 w-4" />
                <span>Terms of Service</span>
              </button>

              <button
                onClick={() => setActiveTab("privacy")}
                className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 py-4 px-3 sm:px-6 font-medium text-sm border-b-2 transition-all ${
                  activeTab === "privacy"
                    ? "border-orange-600 text-orange-600 bg-orange-50/30"
                    : "border-transparent text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50/50"
                }`}
                id="tab-btn-privacy"
              >
                <Shield className="h-4 w-4" />
                <span>Privacy Policy</span>
              </button>
            </div>

            {/* SCROLLABLE RICH CONTENT CONTAINER */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8" id="modal-scroll-content">
              {activeTab === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                  id="about-tab-content"
                >
                  <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900 tracking-tight">
                      {LegalData.about.title}
                    </h2>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                      {LegalData.about.tagline}
                    </p>
                  </div>

                  {/* Brand Image frame */}
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3v0_R7VKeFBpgbgbeb9CT85zTy1KLoM2cCf9EF4M6peRxx2PM51mZgzCYBkdwoOMbE9uW8ofl0r1Nompd6d9SQPjhXkZHkWPfuJ3ok1_WZxTb-Ps7clABXqrBlo2sn-CyMpcbQW27tXkmcwcB55U2b_kKlGo5SKUrfZodU62KyXb6gKccGGhuDI_6HhMjp9PkM70QhWX8RXEmxlGM6HH5RrjWVB_qShy0ZtFnEQx8_zeTBHQ-tNVSrR2OB87Z3AWzUts-KByvGHU"
                      alt="FreshBite Team Collaboration"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex items-end p-4">
                      <p className="text-white text-xs font-mono">
                        Our values guide every order — direct, safe, honest.
                      </p>
                    </div>
                  </div>

                  {/* Stats Block */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-orange-50/50 p-6 rounded-2xl border border-orange-100/30">
                    {LegalData.about.stats.map((stat, i) => (
                      <div key={i} className="text-center space-y-1">
                        <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 font-mono">
                          {stat.number}
                        </div>
                        <div className="text-xs text-neutral-500 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Our Mission & Values */}
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                        <Heart className="h-5 w-5 text-orange-600 fill-orange-50" />
                        Our True Mission
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {LegalData.about.mission}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                        <Users className="h-5 w-5 text-green-700" />
                        The Story Behind FreshBite
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {LegalData.about.history}
                      </p>
                    </div>
                  </div>

                  {/* Core Features */}
                  <div className="space-y-4 pt-4 border-t border-neutral-100">
                    <h3 className="text-lg font-bold text-neutral-900">How We Stand Out</h3>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {LegalData.about.features.map((feature, i) => (
                        <div key={i} className="bg-neutral-50 p-4 rounded-xl space-y-2 border border-neutral-100 hover:border-orange-200/50 transition-colors">
                          <div className="flex items-center space-x-2 text-green-700 font-semibold text-sm">
                            <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                            <span>{feature.title}</span>
                          </div>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "terms" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  id="terms-tab-content"
                >
                  <div className="border-b border-neutral-100 pb-4">
                    <h2 className="text-2xl font-bold text-neutral-900">{LegalData.terms.title}</h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Last Updated: {LegalData.terms.lastUpdated}
                    </p>
                  </div>

                  <div className="space-y-6 text-neutral-600 text-sm leading-relaxed">
                    {LegalData.terms.sections.map((section, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="font-bold text-neutral-900 text-base">{section.heading}</h3>
                        {section.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-neutral-600">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "privacy" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  id="privacy-tab-content"
                >
                  <div className="border-b border-neutral-100 pb-4">
                    <h2 className="text-2xl font-bold text-neutral-900">{LegalData.privacy.title}</h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Last Updated: {LegalData.privacy.lastUpdated}
                    </p>
                  </div>

                  <div className="space-y-6 text-neutral-600 text-sm leading-relaxed">
                    {LegalData.privacy.sections.map((section, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="font-bold text-neutral-900 text-base">{section.heading}</h3>
                        {section.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-neutral-600">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer containing brand and confirm button */}
            <div className="border-t border-neutral-100 bg-neutral-50/50 p-4 flex justify-between items-center px-6">
              <span className="text-xs text-neutral-400 font-mono">
                FreshBite Tech Solutions Ltd.
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-orange-600 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
                id="modal-got-it-btn"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
