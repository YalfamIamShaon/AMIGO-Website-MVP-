"use client";

import { usePathname, useRouter } from "next/navigation";
import { AmigoLogo } from "./AmigoLogo";
import { HelpCircle } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
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

  const handlePageNavigate = (path: string) => {
    if (typeof window !== "undefined") {
      window.location.href = path;
    } else {
      router.push(path);
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 py-16" id="app-footer">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand block */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
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
                <button onClick={() => scrollToSection("hero-top")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("benchmark-sandbox")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Savings Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("why-us")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Why Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors cursor-pointer text-left">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("registration")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Partner Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Legal resources */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Company Policies</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handlePageNavigate("/about/")} className={`transition-colors cursor-pointer text-left ${pathname?.includes("/about") ? "text-orange-500 font-semibold" : "hover:text-white"}`}>
                  About Our Mission & Story
                </button>
              </li>
              <li>
                <button onClick={() => handlePageNavigate("/terms/")} className={`transition-colors cursor-pointer text-left ${pathname?.includes("/terms") ? "text-orange-500 font-semibold" : "hover:text-white"}`}>
                  Terms & Conditions (T&C)
                </button>
              </li>
              <li>
                <button onClick={() => handlePageNavigate("/privacy/")} className={`transition-colors cursor-pointer text-left ${pathname?.includes("/privacy") ? "text-orange-500 font-semibold" : "hover:text-white"}`}>
                  Privacy Policy Rules
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter mock block */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Join Beta List</h4>
            <p className="text-xs text-neutral-400">Receive alerts whenever new 0% markup kitchens launch near you.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.target as HTMLFormElement;
                const phoneInput = target.elements.namedItem("phone") as HTMLInputElement;
                const phoneVal = phoneInput?.value || "";
                alert(`Successfully joined the beta list with WhatsApp number: ${phoneVal}! Redirecting to our WhatsApp group channel...`);
                if (typeof window !== "undefined") {
                  window.open("https://chat.whatsapp.com/GjNpt6iQp6t7F4gVOn3uR3", "_blank");
                }
              }}
              className="flex flex-col gap-2"
            >
              <div className="flex gap-2">
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="WhatsApp Number"
                  className="bg-neutral-900 border border-neutral-800 text-xs px-3 py-2 rounded-lg focus:outline-hidden focus:border-orange-500 w-full text-white placeholder-neutral-500"
                />
                <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0">
                  Join
                </button>
              </div>
              <a
                href="https://chat.whatsapp.com/GjNpt6iQp6t7F4gVOn3uR3"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-orange-500 hover:underline font-mono inline-flex items-center gap-1 mt-1"
              >
                Or click here to join WhatsApp group &rarr;
              </a>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} AMIGO (APPYGO SERVICES PRIVATE LIMITED). All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <button onClick={() => handlePageNavigate("/terms/")} className={`hover:text-neutral-300 ${pathname?.includes("/terms") ? "text-orange-500" : ""}`}>T&C Agreements</button>
            <button onClick={() => handlePageNavigate("/privacy/")} className={`hover:text-neutral-300 ${pathname?.includes("/privacy") ? "text-orange-500" : ""}`}>Privacy Clauses</button>
            <button onClick={() => handlePageNavigate("/about/")} className={`hover:text-neutral-300 ${pathname?.includes("/about") ? "text-orange-500" : ""}`}>About Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
