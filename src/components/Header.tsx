"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { SafeAnimatePresence } from "./SafeAnimatePresence";
import { AmigoLogo } from "./AmigoLogo";
import { HelpCircle } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const isHomePage = !pathname || pathname === "/" || pathname === "" || pathname.endsWith("/index.html") || pathname.endsWith("/index.html/");

    if (isHomePage) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (typeof window !== "undefined") {
          window.history.pushState(null, "", `#${id}`);
        }
      } else {
        if (typeof window !== "undefined") {
          window.location.hash = id;
        }
      }
    } else {
      if (typeof window !== "undefined") {
        window.location.href = `/#${id}`;
      } else {
        router.push(`/#${id}`);
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    const isHomePage = !pathname || pathname === "/" || pathname === "" || pathname.endsWith("/index.html") || pathname.endsWith("/index.html/");

    if (isHomePage) {
      const el = document.getElementById("hero-top");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (typeof window !== "undefined") {
          window.history.pushState(null, "", "#hero-top");
        }
      } else {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else {
      if (typeof window !== "undefined") {
        window.location.href = "/";
      } else {
        router.push("/");
      }
    }
  };

  const navigateToPage = (path: string) => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      window.location.href = path;
    } else {
      router.push(path);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100" id="app-header">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <AmigoLogo size={42} showText={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            <button
              onClick={() => scrollToSection("benchmark-sandbox")}
              className="text-sm font-semibold text-orange-650 hover:text-orange-700 transition-colors cursor-pointer"
            >
              Savings Calculator
            </button>
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
              onClick={() => navigateToPage("/about/")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                pathname?.includes("/about") ? "text-orange-600 font-semibold" : "text-neutral-600 hover:text-neutral-900"
              }`}
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
      <SafeAnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("benchmark-sandbox")}
                className="block w-full text-left py-2 font-semibold text-orange-650 hover:text-orange-750 transition-colors cursor-pointer"
              >
                Savings Calculator
              </button>
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
                onClick={() => navigateToPage("/about/")}
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
      </SafeAnimatePresence>
    </header>
  );
}
