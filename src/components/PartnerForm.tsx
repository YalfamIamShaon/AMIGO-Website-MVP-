import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Store, User, Phone, Mail, MapPin, DollarSign, ArrowRight, Check, X, Building, Loader2, Sparkles, Smartphone, ShieldCheck } from "lucide-react";

export default function PartnerForm() {
  const [form, setForm] = useState({
    restaurantName: "",
    contactName: "",
    phone: "",
    fssai: "",
    city: "",
    cuisine: "indian",
    experience: "new",
    businessType: "restaurant",
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [regId, setRegId] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!form.restaurantName.trim()) return showError("Please enter your Restaurant Name");
    if (!form.contactName.trim()) return showError("Please enter Contact Name");
    if (!form.phone.trim() || form.phone.length < 8) return showError("Please enter a valid Phone Number");
    if (!form.fssai.trim()) return showError("Please enter your FSSAI Number (mandatory)");
    if (!form.city.trim()) return showError("Please enter your City");
    if (!form.consent) return showError("Please agree to our Partner Privacy Consent Rules");

    setErrorText("");
    setLoading(true);

    // Simulate Server-side verification pipeline with 0% mock wait
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const generatedCode = "AMIGO-" + Math.floor(100000 + Math.random() * 900000);
      setRegId(generatedCode);
    }, 1200);
  };

  const showError = (msg: string) => {
    setErrorText(msg);
    // Auto clear error after 4 seconds
    setTimeout(() => setErrorText(""), 4000);
  };

  const resetForm = () => {
    setForm({
      restaurantName: "",
      contactName: "",
      phone: "",
      fssai: "",
      city: "",
      cuisine: "indian",
      experience: "new",
      businessType: "restaurant",
      consent: false
    });
    setSubmitted(false);
    setRegId("");
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-100 shadow-xl overflow-hidden" id="partner-registration-card">
      <div className="bg-neutral-900 px-6 py-8 sm:px-8 text-white relative">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Store className="h-40 w-40 transform rotate-12" />
        </div>
        <div className="relative z-10 space-y-2">
          <span className="px-3 py-1 rounded-full bg-orange-600 font-mono text-[10px] uppercase tracking-widest text-white inline-block">
            Instant Signup
          </span>
          <h3 className="text-2xl font-bold font-sans tracking-tight">
            Partner Quick Registration
          </h3>
          <p className="text-neutral-400 text-xs">
            Submit your details in 30 seconds and activate your 0% commission store.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5"
              id="registration-inner-form"
            >
              {/* Restaurant Name */}
              <div className="space-y-1">
                <label className="block text-xs font-bold font-heading text-neutral-600 uppercase tracking-wider">
                  Restaurant Name *
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <Store className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    value={form.restaurantName}
                    onChange={(e) => setForm({ ...form, restaurantName: e.target.value })}
                    placeholder="e.g., Spicy Tandoor Hub"
                    className="block w-full pl-10 pr-3 py-3 text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl transition-all text-sm outline-hidden"
                    id="reg-input-restname"
                  />
                </div>
              </div>

              {/* Contact Name & Phone Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold font-heading text-neutral-600 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <div className="relative rounded-xl shadow-xs">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      value={form.contactName}
                      onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                      placeholder="Your First & Last Name"
                      className="block w-full pl-10 pr-3 py-3 text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl transition-all text-sm outline-hidden"
                      id="reg-input-fullname"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold font-heading text-neutral-600 uppercase tracking-wider">
                    Phone number *
                  </label>
                  <div className="relative rounded-xl shadow-xs">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g., +91 98765 43210"
                      className="block w-full pl-10 pr-3 py-3 text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl transition-all text-sm outline-hidden"
                      id="reg-input-phone"
                    />
                  </div>
                </div>
              </div>

              {/* FSSAI & City Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold font-heading text-neutral-600 uppercase tracking-wider">
                    FSSAI Number *
                  </label>
                  <div className="relative rounded-xl shadow-xs">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      maxLength={14}
                      value={form.fssai}
                      onChange={(e) => setForm({ ...form, fssai: e.target.value.replace(/\D/g, "") })}
                      placeholder="14-digit License No."
                      className="block w-full pl-10 pr-3 py-3 text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl transition-all text-sm outline-hidden"
                      id="reg-input-fssai"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold font-heading text-neutral-600 uppercase tracking-wider">
                    City *
                  </label>
                  <div className="relative rounded-xl shadow-xs">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="e.g., New Delhi"
                      className="block w-full pl-10 pr-3 py-3 text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl transition-all text-sm outline-hidden"
                      id="reg-input-city"
                    />
                  </div>
                </div>
              </div>

              {/* Select Options Columns */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold font-heading text-neutral-600 uppercase tracking-wider">
                    Primary Cuisine
                  </label>
                  <select
                    value={form.cuisine}
                    onChange={(e) => setForm({ ...form, cuisine: e.target.value })}
                    className="block w-full px-3 py-3 text-neutral-800 bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl transition-all text-sm outline-hidden"
                    id="reg-input-cuisine"
                  >
                    <option value="indian">Indian & Curry Spread</option>
                    <option value="biryani">Biryani & Kebabs</option>
                    <option value="dumplings">Momos & Dumplings</option>
                    <option value="noodles">Chinese & Noodles</option>
                    <option value="healthy">Salads / Healthy Bowls</option>
                    <option value="multi">Multi-Cuisine / Café</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold font-heading text-neutral-600 uppercase tracking-wider">
                    Business Type *
                  </label>
                  <select
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="block w-full px-3 py-3 text-neutral-800 bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl transition-all text-sm outline-hidden"
                    id="reg-input-business-type"
                  >
                    <option value="restaurant">Restaurant</option>
                    <option value="meals">Meals</option>
                    <option value="both">Both (Restaurant & Meals)</option>
                  </select>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="reg-consent-chk"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 text-orange-600 border-neutral-300 rounded-sm focus:ring-orange-500 cursor-pointer"
                />
                <label htmlFor="reg-consent-chk" className="text-xs text-neutral-500 select-none cursor-pointer leading-relaxed">
                  I consent to sharing my kitchen details. I certify under penalties of food ordinance that my kitchen is certified by local health departments.
                </label>
              </div>

              {/* Error Flash */}
              <AnimatePresence>
                {errorText && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-rose-600 text-xs font-semibold bg-rose-50/50 border border-rose-100 rounded-lg p-3 flex items-center space-x-2"
                    id="form-error-panel"
                  >
                    <X className="h-4 w-4 shrink-0" />
                    <span>{errorText}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 py-4 px-6 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-300 rounded-xl shadow-md transition-all active:scale-98 cursor-pointer group"
                id="form-submit-cta"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Validating credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Partner Application</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 space-y-6"
              id="registration-success-panel"
            >
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                <Check className="h-8 w-8 stroke-[3px]" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-neutral-900">Application Submitted!</h4>
                <p className="text-sm text-neutral-500 max-w-sm mx-auto">
                  A verification expert from our onboarding team will contact you at <span className="font-semibold text-neutral-800">{form.phone}</span> within 2 hours.
                </p>
              </div>

              {/* Dynamic code box */}
              <div className="bg-neutral-50 border border-neutral-100 p-4 rounded-2xl max-w-xs mx-auto space-y-1">
                <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest font-mono">
                  Your Reference ID
                </div>
                <div className="text-xl font-mono font-bold text-neutral-900 tracking-wider">
                  {regId}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 text-xs font-semibold text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50 rounded-xl transition-all cursor-pointer"
                  id="reset-form-btn"
                >
                  Register Another Outlet &rarr;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Play Store direct merchant app link */}
      <div className="bg-neutral-50 border-t border-neutral-100 px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-bold text-neutral-900 flex items-center justify-center sm:justify-start gap-1.5">
            <Smartphone className="h-4 w-4 text-orange-600" />
            <span>Direct Merchant Registration</span>
          </h4>
          <p className="text-neutral-500 text-[11px] mt-0.5">
            Download the merchant app and directly register in under 5 minutes.
          </p>
        </div>
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-neutral-950 hover:bg-neutral-850 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer"
          id="merchant-playstore-direct"
        >
          <Smartphone className="h-4 w-4" />
          <span>Download AMIGO Partner App</span>
        </a>
      </div>
    </div>
  );
}
