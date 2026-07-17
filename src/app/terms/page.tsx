"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { 
  FileText, 
  Calendar, 
  ShieldAlert, 
  User, 
  Handshake, 
  Globe, 
  ChevronRight,
  MapPin,
  Mail,
  Clock
} from "lucide-react";

export default function TermsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "customers" | "partners" | "general">("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-[#FAF9F6] text-neutral-800 min-h-screen font-sans antialiased selection:bg-orange-500 selection:text-white flex flex-col justify-between" id="terms-page-container">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow py-12 sm:py-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          
          {/* Main Document Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-100 shadow-xl space-y-8"
          >
            {/* Title Block */}
            <div className="border-b border-neutral-100 pb-8 text-center space-y-4">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <FileText className="h-4 w-4" />
                Legal Framework
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                Terms and Conditions
              </h1>
              <p className="text-sm sm:text-base font-bold text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Amigo - A food delivery platform owned and operated by Appygo Services Private Limited
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-4 pt-2 text-xs text-neutral-500 font-mono">
                <span className="flex items-center gap-1 bg-neutral-50 px-2.5 py-1 rounded-md border border-neutral-200/40">
                  <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                  <strong>Effective Date:</strong> July, 2026
                </span>
                <span className="flex items-center gap-1 bg-neutral-50 px-2.5 py-1 rounded-md border border-neutral-200/40">
                  <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                  <strong>Last Updated:</strong> July 17, 2026
                </span>
              </div>
            </div>

            {/* Quick Navigation Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-neutral-50 p-1.5 rounded-2xl border border-neutral-200/40">
              <button
                onClick={() => setActiveTab("all")}
                className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer text-center ${
                  activeTab === "all"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                Complete T&C
              </button>
              <button
                onClick={() => setActiveTab("customers")}
                className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer text-center flex items-center justify-center gap-1 ${
                  activeTab === "customers"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <User className="h-3.5 w-3.5 shrink-0" />
                Part A: Customers
              </button>
              <button
                onClick={() => setActiveTab("partners")}
                className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer text-center flex items-center justify-center gap-1 ${
                  activeTab === "partners"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <Handshake className="h-3.5 w-3.5 shrink-0" />
                Part B: Partners
              </button>
              <button
                onClick={() => setActiveTab("general")}
                className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer text-center flex items-center justify-center gap-1 ${
                  activeTab === "general"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <Globe className="h-3.5 w-3.5 shrink-0" />
                Part C: General
              </button>
            </div>

            {/* Document Preamble */}
            {(activeTab === "all" || activeTab === "general") && (
              <div className="space-y-4 border-b border-neutral-100 pb-8">
                <h2 className="text-xl font-extrabold text-neutral-900 flex items-center gap-2">
                  <span className="text-orange-600">■</span> Preamble
                </h2>
                <div className="text-neutral-700 text-xs sm:text-sm leading-relaxed space-y-4">
                  <p>
                    Welcome to Amigo, a food delivery marketplace operated by Appygo Services Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), incorporated under the Companies Act, 2013. Amigo connects customers with Food Service Partners and their delivery personnel through its mobile application and website (collectively, the &quot;Platform&quot;).
                  </p>
                  <p className="font-semibold text-neutral-900">This document contains three parts:</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                      <span><strong>Part A</strong> - Terms applicable to <strong>Customers</strong> who use the Platform to browse, order, and receive food.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                      <span><strong>Part B</strong> - Terms applicable to <strong>Food Service Partners</strong> (restaurants, home kitchens, and caterers) who list and fulfill orders through the Platform.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                      <span><strong>Part C</strong> - General Terms applicable to <strong>all users</strong> of the Platform.</span>
                    </li>
                  </ul>
                  <p className="bg-amber-50 border border-amber-100 p-3.5 rounded-xl text-amber-900 font-medium">
                    Please read only the section relevant to you, along with Part C which applies to everyone.
                  </p>
                  <p>
                    By accessing or using the Platform, you agree to be bound by the applicable Terms. If you do not agree, please do not access or use the Platform.
                  </p>
                </div>
              </div>
            )}

            {/* PART A - TERMS FOR CUSTOMERS */}
            {(activeTab === "all" || activeTab === "customers") && (
              <div className="space-y-8 pt-2">
                <div className="border-l-4 border-orange-600 pl-4 py-1 bg-orange-50/20 pr-4 rounded-r-xl">
                  <h2 className="text-2xl font-black text-neutral-900 tracking-tight uppercase">
                    PART A - TERMS FOR CUSTOMERS
                  </h2>
                </div>

                {/* A1. Definitions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">A1. Definitions</h3>
                  <div className="grid gap-3 text-xs sm:text-sm pl-4 border-l border-neutral-100">
                    <p>
                      <strong>&quot;Platform&quot;</strong> means the Amigo mobile application, website, and any related digital services operated by Appygo Services Private Limited.
                    </p>
                    <p>
                      <strong>&quot;Customer&quot;</strong> or <strong>&quot;User&quot;</strong> means any individual who accesses, registers on, or uses the Platform to place food orders.
                    </p>
                    <p>
                      <strong>&quot;Food Service Partner&quot;</strong> means any restaurant, home kitchen, or catering establishment registered on the Platform to offer food and/or beverages for sale.
                    </p>
                    <p>
                      <strong>&quot;Delivery Partner&quot;</strong> means the delivery personnel associated with the respective Food Service Partner who fulfills the delivery of Orders.
                    </p>
                    <p>
                      <strong>&quot;Order&quot;</strong> means a confirmed request placed by a Customer on the Platform for food and/or beverages from a Food Service Partner.
                    </p>
                    <p>
                      <strong>&quot;Technical Support Fee&quot;</strong> means the technology service charge levied by the Company to cover costs including server infrastructure and payment gateway operations, displayed at checkout.
                    </p>
                  </div>
                </div>

                {/* A2. Eligibility & Account Registration */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">A2. Eligibility & Account Registration</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100">
                    <h4 className="font-bold text-neutral-900 text-sm">A2.1 Eligibility</h4>
                    <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-neutral-700">
                      <li>You must be at least 18 years of age to independently use this Platform.</li>
                      <li>You must be a resident of a serviceable area within India.</li>
                      <li>You must possess a valid mobile number and email address.</li>
                      <li>Minors under the age of 18 may use the Platform only under direct supervision of a parent or legal guardian, who shall be responsible for all transactions.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 text-sm pt-2">A2.2 Account Registration</h4>
                    <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-neutral-700">
                      <li>Registration requires a valid mobile number verified via One-Time Password (OTP).</li>
                      <li>You agree to provide accurate, current, and complete information during registration and to update it promptly if it changes.</li>
                      <li>You are solely responsible for maintaining the confidentiality of your account credentials and all activities conducted under your account.</li>
                      <li>Notify us immediately at <strong className="text-orange-600 font-mono text-xs">support@appygo.in</strong> if you suspect unauthorised access to your account.</li>
                      <li>Amigo reserves the right to suspend or terminate accounts found to be in violation of these Terms.</li>
                    </ul>
                  </div>
                </div>

                {/* A3. Nature of Services */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">A3. Nature of Services</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">A3.1 Marketplace Role</h4>
                    <p>
                      Amigo operates as a technology marketplace facilitating transactions between Customers and Food Service Partners. Amigo does not prepare or sell food. The contract for the sale of food is directly between the Customer and the Food Service Partner.
                    </p>

                    <h4 className="font-bold text-neutral-900 pt-2">A3.2 Delivery Services</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Delivery is fulfilled by Delivery Partners associated with the respective Food Service Partner.</li>
                      <li>Amigo does not directly employ or engage Delivery Partners.</li>
                      <li>Estimated delivery times are indicative and may vary due to distance, traffic, weather, or preparation time.</li>
                      <li>Customers are responsible for providing accurate delivery address information.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">A3.3 Service Availability</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Services are available only in areas currently listed as serviceable on the Platform, which may be updated as operations expand.</li>
                      <li>Availability may vary by time, location, and Food Service Partner capacity.</li>
                      <li>Amigo reserves the right to modify, suspend, or discontinue any part of the Services without prior notice.</li>
                    </ul>
                  </div>
                </div>

                {/* A4. Ordering Process */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">A4. Ordering Process</h3>
                  
                  <div className="space-y-4 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">A4.1 Placing an Order</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Orders are confirmed only upon acceptance by the Food Service Partner through the Platform.</li>
                      <li>Menu prices are displayed exclusive of GST. Applicable GST is shown as a separate line item at checkout prior to Order confirmation.</li>
                      <li>The Company reserves the right to cancel an Order if the Food Service Partner is unable to fulfill it.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2" id="cancellation-policy">A4.2 Cancellation, Refunds & Disputes</h4>
                    
                    <h5 className="font-bold text-neutral-800 text-xs uppercase tracking-wide pt-1">A4.2.1 Customer Cancellations</h5>
                    <p>
                      A Customer&apos;s right to cancel an Order and receive a refund is determined by the preparation status of the Order at the time the cancellation request is made. Preparation status is communicated in real time through the Platform based on updates provided by the Food Service Partner via the Amigo merchant application. The Food Service Partner&apos;s determination of preparation status is final for the purposes of cancellation eligibility.
                    </p>
                    <p className="font-medium text-neutral-900">The following conditions apply:</p>

                    {/* Table */}
                    <div className="overflow-x-auto my-3 border border-neutral-200 rounded-xl shadow-sm">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-neutral-50 border-b border-neutral-200">
                            <th className="p-3 font-bold text-neutral-900 w-1/2">Order Status at Time of Cancellation</th>
                            <th className="p-3 font-bold text-neutral-900 w-1/2">Refund</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3 font-medium text-neutral-800">Order not yet confirmed by Food Service Partner</td>
                            <td className="p-3 text-emerald-700 font-semibold">100% refund of menu price within 48 hours</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-medium text-neutral-800">Order confirmed, preparation not yet commenced</td>
                            <td className="p-3 text-emerald-700 font-semibold">100% refund of menu price within 48 hours</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-medium text-neutral-800">Order confirmed, preparation commenced</td>
                            <td className="p-3 text-red-600 font-semibold">No refund. 100% of Order value charged as cancellation fee</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-medium text-neutral-800">Order confirmed, at advanced stage of preparation</td>
                            <td className="p-3 text-red-600 font-semibold">No refund. 100% of Order value charged as cancellation fee</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      Refunds under this section are processed to the original payment method within 48 hours of the cancellation being approved through the Platform. Actual credit timelines may vary depending on the Customer&apos;s bank or payment provider and are beyond Amigo&apos;s control once processed.
                    </p>

                    <h5 className="font-bold text-neutral-800 text-xs uppercase tracking-wide pt-3">A4.2.2 Food Service Partner or Platform Cancellations</h5>
                    <p>
                      If an Order is cancelled by the Food Service Partner for any reason after Customer payment has been received, the Customer shall be entitled to a full 100% refund of the amount paid, processed within 48 hours.
                    </p>
                    <p>
                      If Amigo is unable to facilitate completion of an Order due to technical or operational reasons directly attributable to the Platform, the Customer shall be entitled to a full 100% refund, processed within 48 hours.
                    </p>

                    <h5 className="font-bold text-neutral-800 text-xs uppercase tracking-wide pt-3">A4.2.3 Delivery Failures</h5>
                    <p>
                      Delivery of Orders on the Platform may be fulfilled by the Food Service Partner&apos;s own delivery personnel, third-party logistics providers engaged by the Company or the Food Service Partner, or Amigo&apos;s own delivery fleet, depending on the delivery model applicable at the time of the Order.
                    </p>
                    <p className="font-medium text-neutral-900">In the event of a failed delivery:</p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Where the failure is attributable to the Delivery Partner - regardless of whether they are the Food Service Partner&apos;s own personnel, a third-party logistics provider, or Amigo&apos;s delivery fleet - Amigo will assess the circumstances and, where the failure is verified, facilitate a refund to the Customer. Amigo reserves the right to recover the refund amount from the responsible party in accordance with the applicable merchant or logistics partner agreement.</li>
                      <li>Where the failure is attributable to incorrect delivery information provided by the Customer, or the Customer&apos;s unavailability at the time of delivery, no refund shall be issued.</li>
                      <li>Where the failure is caused by circumstances beyond the reasonable control of any party - including but not limited to adverse weather, civil unrest, or force majeure events - Amigo will assess the circumstances on a case-by-case basis. No automatic refund obligation arises in such cases.</li>
                    </ul>
                    <p className="italic text-neutral-500">
                      The applicable delivery model at the time of any Order is as communicated on the Platform.
                    </p>

                    <h5 className="font-bold text-neutral-800 text-xs uppercase tracking-wide pt-3">A4.2.4 Food Quality, Incorrect Items, Missing Items & Other Disputes</h5>
                    <p>
                      If a Customer believes an Order contains incorrect items, missing items, quality concerns, damaged food, or any other issue, the Customer must report the issue through the Platform&apos;s customer support channels within the time period specified by the Company at the time of reporting.
                    </p>
                    <p>
                      All refund requests under this section are subject to verification by the Company. The Company may request photographs, order details, or any other information reasonably necessary to investigate the claim.
                    </p>
                    <p>
                      Refunds for disputed Orders are not automatic. After reviewing the reported circumstances and available evidence, the Company may, at its sole discretion, provide a goodwill refund where it determines such refund is appropriate. Any goodwill refund granted for an eligible disputed Order shall not exceed ten percent (10%) of the total Order value.
                    </p>
                    <p className="font-semibold text-neutral-900">
                      The Company&apos;s determination regarding the eligibility and quantum of any refund shall be final and binding, subject to applicable law.
                    </p>

                    <h5 className="font-bold text-neutral-800 text-xs uppercase tracking-wide pt-3">A4.2.5 Exclusions</h5>
                    <p className="font-medium text-neutral-900">Refunds shall not be issued in the following circumstances:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Change of mind after Order placement</li>
                      <li>Customer-initiated cancellation after food preparation has commenced</li>
                      <li>Incorrect delivery address or contact information provided by the Customer</li>
                      <li>Customer unavailability at the time of delivery</li>
                      <li>Delays caused by circumstances beyond the reasonable control of the Company, the Food Service Partner, or the Delivery Partner</li>
                    </ul>

                    <h5 className="font-bold text-neutral-800 text-xs uppercase tracking-wide pt-3">A4.2.6 Modification of Policy</h5>
                    <p>
                      The Company reserves the right to amend this Cancellation and Refund Policy at any time. Changes will be published on the Platform with a revised effective date and will apply prospectively unless otherwise required by applicable law.
                    </p>

                    <h4 className="font-bold text-neutral-900 pt-4">A4.3 Bulk & Commercial Orders</h4>
                    <p>
                      Bulk or commercial orders are not permitted without prior written approval from the Company.
                    </p>
                  </div>
                </div>

                {/* A5. Pricing & Payment */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">A5. Pricing & Payment</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">A5.1 Pricing</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Menu prices are set by Food Service Partners and may change without prior notice.</li>
                      <li>All charges including the Technical Support Fee, delivery charges, packaging fees, and GST will be displayed as separate line items at checkout.</li>
                      <li>Amigo does not apply surge or dynamic pricing. Charges displayed at checkout are final.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">A5.2 Payment Methods</h4>
                    <p>
                      All payments are processed securely through Razorpay, supporting:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>UPI (Unified Payments Interface)</li>
                      <li>Credit cards and debit cards (Visa, Mastercard, RuPay)</li>
                      <li>Net banking</li>
                      <li>Digital wallets (as supported by Razorpay)</li>
                      <li>Cash on Delivery (where available and indicated at checkout)</li>
                    </ul>
                    <p className="italic text-neutral-500">
                      Amigo does not store payment card details. All payment data is handled exclusively by Razorpay in accordance with PCI-DSS standards.
                    </p>

                    <h4 className="font-bold text-neutral-900 pt-2">A5.3 Technical Support Fee & Charges</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>A Technical Support Fee covering server infrastructure and payment gateway costs will be displayed at checkout.</li>
                      <li>Delivery charges are determined based on distance and Food Service Partner location.</li>
                      <li>Packaging charges, where applicable, are set by the Food Service Partner and displayed at checkout.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">A5.4 Instant Discount Programme</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Amigo offers instant discounts at checkout on eligible Orders, funded entirely by Amigo</li>
                      <li>Discounts are applied automatically based on Amigo Menu Price, minimum item count, and Order value as displayed on the Platform at the time of checkout</li>
                      <li>Amigo reserves the right to modify, suspend, or discontinue any discount at any time</li>
                      <li>Discounts are non-transferable and cannot be combined with other offers unless stated</li>
                      <li>Final discounted price shown at checkout is the price charged</li>
                    </ul>
                  </div>
                </div>

                {/* A6. Delivery Policy */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">A6. Delivery Policy</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">A6.1 Delivery Areas</h4>
                    <p>
                      Delivery is available only in areas listed as serviceable on the Platform at the time of ordering.
                    </p>

                    <h4 className="font-bold text-neutral-900 pt-2">A6.2 Delivery Timelines</h4>
                    <p>
                      Estimated delivery times communicated at checkout may vary based on distance, traffic, preparation time, and demand. Amigo is not liable for delays caused by circumstances beyond its reasonable control.
                    </p>

                    <h4 className="font-bold text-neutral-900 pt-2">A6.3 Failed Deliveries</h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>If a Customer is unreachable at the delivery address, the Delivery Partner may wait up to 5 minutes before marking the Order undeliverable.</li>
                      <li>The Delivery Partner will make reasonable efforts to contact the Customer via the Platform&apos;s in-app communication feature.</li>
                      <li>Refunds may not be issued for failed deliveries caused by an incorrect address, Customer unavailability or fraudulent/fictitious or malicious order or cancellation done by a customer.</li>
                    </ul>
                  </div>
                </div>

                {/* A7. Customer Conduct & Prohibited Activities */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">A7. Customer Conduct & Prohibited Activities</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <p className="font-medium text-neutral-900">Customers agree not to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Place fraudulent, fictitious, or malicious Orders.</li>
                      <li>Provide false or inaccurate information during registration or ordering.</li>
                      <li>Use another person&apos;s account or payment details without authorisation.</li>
                      <li>Engage in abusive or harassing behaviour towards Delivery Partners, Food Service Partners, or Company staff.</li>
                      <li>Attempt to access Platform backend systems or APIs without authorisation.</li>
                      <li>Use automated bots or scrapers to access the Platform.</li>
                      <li>Misuse promotional codes or offers.</li>
                      <li>Violate any applicable Indian law.</li>
                    </ul>
                    <p className="font-semibold text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                      Violations may result in account suspension, permanent ban, and/or legal proceedings.
                    </p>
                  </div>
                </div>

                {/* A8. Food Safety & Quality */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">A8. Food Safety & Quality</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">A8.1 General</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>All Food Service Partners are required to hold valid FSSAI registration or license prior to listing on the Platform.</li>
                      <li>Each Food Service Partner is solely responsible for the quality, safety, and hygiene of their food.</li>
                      <li>Amigo does not independently inspect or certify food prepared by Food Service Partners.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">A8.2 Home Kitchens & Caterers</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Home kitchens and caterers must hold valid FSSAI Basic Registration or License applicable to their scale of operations.</li>
                      <li>Customers with dietary requirements, food allergies, or religious food restrictions are advised to contact the Food Service Partner directly before ordering.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">A8.3 Complaints</h4>
                    <p>
                      Food quality or safety complaints must be reported through the Platform&apos;s support channels within 24 hours of delivery.
                    </p>
                  </div>
                </div>

                {/* A9. Account Deletion - Customers */}
                <div className="space-y-4 pb-6 border-b border-neutral-100">
                  <h3 className="text-lg font-bold text-neutral-900">A9. Account Deletion - Customers</h3>
                  
                  <div className="space-y-2 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Customers may request account deletion through the Platform&apos;s account settings.</li>
                      <li>A 30-day reactivation window applies from the date of the deletion request. Logging back in within 30 days will reactivate the account.</li>
                      <li>If the account is not reactivated within 30 days, profile and account data will be permanently deleted.</li>
                      <li><strong>Transaction and order data will be retained for 7 years post-transaction for GST and tax compliance, regardless of account deletion.</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* PART B - TERMS FOR FOOD SERVICE PARTNERS */}
            {(activeTab === "all" || activeTab === "partners") && (
              <div className="space-y-8 pt-2">
                <div className="border-l-4 border-emerald-600 pl-4 py-1 bg-emerald-50/20 pr-4 rounded-r-xl">
                  <h2 className="text-2xl font-black text-neutral-900 tracking-tight uppercase">
                    PART B - TERMS FOR FOOD SERVICE PARTNERS
                  </h2>
                </div>

                {/* B1. Definitions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">B1. Definitions</h3>
                  <div className="grid gap-3 text-xs sm:text-sm pl-4 border-l border-neutral-100">
                    <p>
                      <strong>&quot;Food Service Partner&quot;</strong> or <strong>&quot;Partner&quot;</strong> means any restaurant, home kitchen, or catering establishment registered on the Platform to list and fulfill food orders.
                    </p>
                    <p>
                      <strong>&quot;Partner Account&quot;</strong> means the account created by a Food Service Partner on the merchant-facing application to manage listings, orders, and payouts.
                    </p>
                    <p>
                      <strong>&quot;Menu&quot;</strong> means the catalogue of food items, descriptions, prices, and images listed by the Food Service Partner on the Platform.
                    </p>
                    <p>
                      <strong>&quot;Order&quot;</strong> means a Customer&apos;s confirmed purchase request routed to the Food Service Partner through the Platform.
                    </p>
                    <p>
                      <strong>&quot;Payout&quot;</strong> means the disbursement of Order proceeds to the Food Service Partner&apos;s registered bank account after applicable deductions.
                    </p>
                    <p>
                      <strong>&quot;Applicable Fees&quot;</strong> means the flat fees or order-based charges payable by the Food Service Partner to the Company as per the Partner Agreement, excluding commissions on Order value.
                    </p>
                  </div>
                </div>

                {/* B2. Eligibility & Onboarding */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">B2. Eligibility & Onboarding</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">B2.1 Eligibility</h4>
                    <p className="font-medium text-neutral-900">To register as a Food Service Partner on the Platform, you must:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Be a legally operating food establishment within a serviceable area.</li>
                      <li>Hold a valid FSSAI Registration or License applicable to your category - Basic Registration for home kitchens, State or Central License for restaurants and caterers as applicable.</li>
                      <li>Hold a valid GSTIN where applicable under Indian GST law.</li>
                      <li>Provide a valid bank account and IFSC code for payout processing.</li>
                      <li>Provide a valid PAN for tax compliance purposes.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">B2.2 Onboarding Process</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Partners must complete the onboarding process on the merchant application, including submission of FSSAI registration, GSTIN, PAN, and banking details.</li>
                      <li>Amigo reserves the right to approve, reject, or defer any Partner application at its sole discretion.</li>
                      <li>Listing on the Platform does not commence until onboarding is verified and approved by Amigo.</li>
                    </ul>
                  </div>
                </div>

                {/* B3. Menu & Listing Obligations */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">B3. Menu & Listing Obligations</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Partners are solely responsible for the accuracy, completeness, and legality of their Menu listings, including item descriptions, prices, allergen information, and images.</li>
                      <li>Prices listed must be inclusive of all applicable taxes unless displayed separately in accordance with GST requirements.</li>
                      <li>Partners must ensure Menu availability is updated in real time. Listing items as available when they are not is a violation of these Terms.</li>
                      <li>Partners must not list items that are prohibited under the Food Safety and Standards Act, 2006, or any other applicable Indian law.</li>
                      <li>Amigo reserves the right to remove or suspend any listing that violates applicable law or Platform policies.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">B3.1 Content Licence</h4>
                    <p>
                      By uploading menu content to the Platform - including food item names, descriptions, prices, and images - the Food Service Partner grants Appygo Services Private Limited a non-exclusive, royalty-free, worldwide licence to use, display, reproduce, and distribute such content solely for the purpose of operating and promoting the Platform.
                    </p>
                    <p>
                      This licence remains in effect for the duration of the active partnership and expires upon confirmed account closure, except where such content is required to fulfill outstanding Orders or resolve active disputes at the time of closure.
                    </p>
                    <p className="italic font-medium">
                      The Food Service Partner warrants that all uploaded content is original, accurate, and does not infringe any third-party intellectual property rights. Amigo bears no liability for content uploaded by Food Service Partners.
                    </p>
                  </div>
                </div>

                {/* B4. Order Management */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">B4. Order Management</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">B4.1 Order Acceptance</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Partners are expected to accept or reject incoming Orders promptly through the merchant application.</li>
                      <li>Consistent or repeated rejection of Orders without valid reason may result in account review, suspension, or termination.</li>
                      <li>Once an Order is accepted, the Partner is obligated to prepare and dispatch it within the estimated preparation time communicated on the Platform.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">B4.2 Order Cancellations by Partner</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Partners may cancel an accepted Order only in exceptional circumstances such as ingredient unavailability or operational downtime.</li>
                      <li>In case of Partner-initiated cancellation, Amigo will initiate a full refund to the Customer and reserves the right to record such cancellations against the Partner&apos;s performance record.</li>
                      <li>Repeated Partner-initiated cancellations may result in account suspension.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">B4.3 Order Preparation & Packaging</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Partners are responsible for preparing orders accurately as per the Customer&apos;s request.</li>
                      <li>Packaging must be appropriate to maintain food quality and safety during delivery.</li>
                      <li>Partners are responsible for handing orders to Delivery Partners in a timely manner.</li>
                    </ul>
                  </div>
                </div>

                {/* B5. Delivery Obligations */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">B5. Delivery Obligations</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Delivery is fulfilled by Delivery Partners associated with the Food Service Partner. Partners are responsible for ensuring their Delivery Partners are available, trained, and compliant with applicable road and traffic regulations.</li>
                      <li>Amigo does not employ or manage Delivery Partners associated with Food Service Partners.</li>
                      <li>Delivery Partners acting on behalf of Food Service Partners must not engage in abusive, threatening, or unprofessional behaviour towards Customers.</li>
                      <li>Partners are responsible for failed deliveries caused by their Delivery Partners.</li>
                    </ul>
                  </div>
                </div>

                {/* B6. Pricing, Fees & Payouts */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">B6. Pricing, Fees & Payouts</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">B6.1 Pricing</h4>
                    <p>
                      Partners set their own Menu prices. Amigo does not impose or restrict pricing. Partners are responsible for ensuring their prices comply with applicable GST regulations and are accurately reflected on the Platform.
                    </p>

                    <h4 className="font-bold text-neutral-900 pt-2">B6.2 Amigo&apos;s Fee Structure</h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong>Amigo operates on a zero-commission model. No percentage commission is charged on Order value.</strong></li>
                      <li>Applicable Fees - including flat order-based charges or technology fees as agreed in the Partner Agreement - will be deducted from Payouts.</li>
                      <li>All Applicable Fees will be communicated clearly in the Partner Agreement and reflected in Payout statements.</li>
                      <li>Amigo may operate customer-facing instant discounts or promotional programmes from time to time. These are funded entirely from Amigo&apos;s own earnings and have no impact on Partner payouts or the applicable fee structure.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">B6.3 Payouts</h4>
                    <p>
                      Order Payouts will be disbursed to the Partner&apos;s registered bank account on a twice-weekly basis, subject to deduction of Applicable Fees and any applicable TDS under the Income Tax Act, 1961, in accordance with the following settlement schedule:
                    </p>

                    {/* Table */}
                    <div className="overflow-x-auto my-3 border border-neutral-200 rounded-xl shadow-sm max-w-md">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-neutral-50 border-b border-neutral-200">
                            <th className="p-3 font-bold text-neutral-900 w-1/2">Orders Fulfilled</th>
                            <th className="p-3 font-bold text-neutral-900 w-1/2">Payout Processed By</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3 font-medium text-neutral-800">Mon to Wednesday</td>
                            <td className="p-3 text-neutral-700 font-medium">Thursday of the same week</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-medium text-neutral-800">Thursday to Saturday</td>
                            <td className="p-3 text-neutral-700 font-medium">Sunday of the same week</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <ul className="list-disc pl-5 space-y-1">
                      <li>Amigo reserves the right to withhold Payouts in cases of active Customer disputes, suspected fraud, or regulatory investigation.</li>
                      <li>If a scheduled Payout day falls on a bank holiday, the Payout will be processed on the following working day.</li>
                    </ul>
                  </div>
                </div>

                {/* B7. Partner Conduct & Prohibited Activities */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">B7. Partner Conduct & Prohibited Activities</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <p className="font-medium text-neutral-900">Food Service Partners agree not to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>List food items that are unsafe, prohibited, or non-compliant with FSSAI regulations.</li>
                      <li>Provide false or misleading information during onboarding or in Menu listings.</li>
                      <li>Engage in price manipulation, artificial inflation, or deceptive pricing practices.</li>
                      <li>Solicit Customers to transact outside the Platform to circumvent Amigo&apos;s fee structure.</li>
                      <li>Engage in abusive or harassing behaviour towards Customers, Delivery Partners, or Company staff.</li>
                      <li>Use the Platform to promote competitor platforms or services.</li>
                      <li>Violate any applicable Indian law including the Food Safety and Standards Act, 2006, Consumer Protection Act, 2019, or GST regulations.</li>
                    </ul>
                    <p className="font-semibold text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                      Violations may result in immediate account suspension, Payout withholding, permanent ban, and/or legal proceedings.
                    </p>
                  </div>
                </div>

                {/* B8. Account Closure - Food Service Partners */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">B8. Account Closure - Food Service Partners</h3>
                  
                  <div className="space-y-2 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Partners may request account closure through the merchant application by submitting a formal closure request.</li>
                      <li>Account closure requests will be reviewed by Amigo within 7 business days.</li>
                      <li>Closure will not be processed if there are pending Orders, unresolved Customer disputes, or outstanding Payout settlements.</li>
                      <li>Once all obligations are settled, the Partner Account will be deactivated.</li>
                      <li>A 30-day reactivation window applies from the date of closure confirmation. Logging back in within 30 days will reactivate the account.</li>
                      <li>Profile and business data will be permanently deleted after 30 days of confirmed closure.</li>
                      <li><strong>Transaction, payout, GST, and financial records will be retained for 7 years post-transaction regardless of account closure, as required under applicable Indian law.</strong></li>
                    </ul>
                  </div>
                </div>

                {/* B9. Suspension & Termination by Amigo */}
                <div className="space-y-4 pb-6 border-b border-neutral-100">
                  <h3 className="text-lg font-bold text-neutral-900">B9. Suspension & Termination by Amigo</h3>
                  
                  <div className="space-y-2 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <p>
                      Amigo reserves the right to suspend or permanently terminate a Partner Account without prior notice in cases of:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Violation of these Terms or any applicable law.</li>
                      <li>Repeated Order rejections or fulfillment failures.</li>
                      <li>Food safety complaints verified against the Partner.</li>
                      <li>Fraudulent activity or misrepresentation during onboarding or operations.</li>
                      <li>Regulatory action or investigation involving the Partner.</li>
                    </ul>
                    <p>
                      In cases of suspension, Amigo will notify the Partner via registered email or WhatsApp and provide an opportunity to respond within 7 business days before permanent termination is actioned.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PART C - GENERAL TERMS (APPLICABLE TO ALL USERS) */}
            {(activeTab === "all" || activeTab === "general") && (
              <div className="space-y-8 pt-2">
                <div className="border-l-4 border-neutral-700 pl-4 py-1 bg-neutral-50 pr-4 rounded-r-xl">
                  <h2 className="text-2xl font-black text-neutral-900 tracking-tight uppercase">
                    PART C - GENERAL TERMS (APPLICABLE TO ALL USERS)
                  </h2>
                </div>

                {/* C1. Intellectual Property */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">C1. Intellectual Property</h3>
                  <div className="space-y-2 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <p>
                      All content on the Platform, including the &quot;Amigo&quot; brand name, logo, trademarks, software, interface design, text, images, and data compilations, is the exclusive property of Appygo Services Private Limited or its licensors.
                    </p>
                    <p>
                      Users are granted a limited, non-exclusive, non-transferable licence to access and use the Platform for its intended purpose only.
                    </p>
                    <p>
                      No content may be copied, modified, distributed, sold, or used to create derivative works without prior express written permission from the Company.
                    </p>
                  </div>
                </div>

                {/* C2. Third-Party Services */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">C2. Third-Party Services</h3>
                  <div className="space-y-2 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <p>
                      The Platform integrates third-party services including Razorpay for payment processing, map providers for delivery navigation, and WhatsApp Business for customer and partner support. These integrations are for functional convenience only.
                    </p>
                    <p>
                      Amigo does not endorse or assume responsibility for the content, privacy practices, or terms of any third-party service. Interactions with third-party services are governed by their respective terms and policies.
                    </p>
                  </div>
                </div>

                {/* C3. Disclaimers & Limitation of Liability */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">C3. Disclaimers & Limitation of Liability</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">C3.1 Disclaimer of Warranties</h4>
                    <p>
                      The Platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Amigo makes no warranties, express or implied, regarding fitness for a particular purpose, uninterrupted availability, or freedom from errors.
                    </p>

                    <h4 className="font-bold text-neutral-900 pt-2">C3.2 Limitation of Liability</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>To the maximum extent permitted by applicable law, Appygo Services Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</li>
                      <li>Amigo&apos;s total aggregate liability to any user shall not exceed the value of the specific Order in question.</li>
                      <li>Amigo is not liable for acts or omissions of Food Service Partners, Delivery Partners, or third-party payment processors.</li>
                    </ul>

                    <h4 className="font-bold text-neutral-900 pt-2">C3.3 Force Majeure</h4>
                    <p>
                      Appygo Services Private Limited shall not be liable for any failure or delay in performing its obligations under these Terms where such failure or delay results from circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, floods, earthquakes, fire, epidemics or pandemics, war, civil unrest, strikes or labour disputes, government orders or regulatory action, power outages, internet or telecommunications failures, or any other event that could not reasonably have been anticipated or prevented.
                    </p>
                    <p>
                      In such circumstances, Amigo&apos;s obligations will be suspended for the duration of the force majeure event. Amigo will make reasonable efforts to notify affected users and resume normal operations as soon as practicable.
                    </p>
                    <p>
                      If a force majeure event continues for more than 30 (thirty) days, either party may terminate their use of or participation in the Platform without liability, subject to settlement of any outstanding financial obligations.
                    </p>
                  </div>
                </div>

                {/* C4. Indemnification */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">C4. Indemnification</h3>
                  <div className="space-y-2 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <p>
                      All users agree to indemnify, defend, and hold harmless Appygo Services Private Limited, its directors, officers, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Use or misuse of the Platform.</li>
                      <li>Breach of these Terms or any applicable law.</li>
                      <li>Violation of any third party&apos;s rights.</li>
                    </ul>
                  </div>
                </div>

                {/* C5. Grievance Redressal */}
                <div className="space-y-4" id="grievance-redressal-details">
                  <h3 className="text-lg font-bold text-neutral-900">C5. Grievance Redressal</h3>
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <p>
                      In accordance with the Information Technology Act, 2000, and the Consumer Protection (E-Commerce) Rules, 2020, the following officer is designated to address grievances from both Customers and Food Service Partners:
                    </p>
                    
                    <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/50 space-y-2 max-w-lg">
                      <p className="font-bold text-neutral-900 text-sm">Grievance Officer</p>
                      <div className="grid grid-cols-3 gap-y-1 text-xs sm:text-sm">
                        <span className="text-neutral-500 font-medium">Name:</span>
                        <span className="col-span-2 text-neutral-900 font-bold">Shaon Dhar</span>
                        
                        <span className="text-neutral-500 font-medium">Designation:</span>
                        <span className="col-span-2 text-neutral-900">Chief Product Officer</span>
                        
                        <span className="text-neutral-500 font-medium">Company:</span>
                        <span className="col-span-2 text-neutral-900">Appygo Services Private Limited</span>
                        
                        <span className="text-neutral-500 font-medium flex items-center gap-1">
                          <Mail className="h-3 w-3 inline text-neutral-400" /> Email:
                        </span>
                        <span className="col-span-2 text-orange-600 font-mono font-bold">support@appygo.in</span>
                        
                        <span className="text-neutral-500 font-medium flex items-start gap-1">
                          <MapPin className="h-3 w-3 inline text-neutral-400 mt-1" /> Office:
                        </span>
                        <span className="col-span-2 text-neutral-700 text-xs leading-snug">
                          4TH-FR, FL-401, 4/22 VIDYASAGARCOLONY LP-142/9/4/3 KOLKATA-700047, WB, India
                        </span>
                      </div>
                    </div>

                    <p className="font-medium text-neutral-900">
                      Grievances will be acknowledged within 48 hours and resolved within 30 days of receipt.
                    </p>
                  </div>
                </div>

                {/* C6. Governing Law & Dispute Resolution */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">C6. Governing Law & Dispute Resolution</h3>
                  
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    <h4 className="font-bold text-neutral-900">C6.1 Governing Law</h4>
                    <p>
                      These Terms are governed by the laws of India.
                    </p>

                    <h4 className="font-bold text-neutral-900 pt-2">C6.2 Dispute Resolution</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Users are encouraged to first raise disputes through <strong className="text-orange-600 font-mono">support@appygo.in</strong> or WhatsApp Business.</li>
                      <li>Unresolved disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996.</li>
                      <li>The seat of arbitration shall be Kolkata, India. Proceedings shall be in English.</li>
                      <li>Nothing prevents either party from seeking emergency interim relief from a court of competent jurisdiction.</li>
                    </ul>
                  </div>
                </div>

                {/* C7. Amendments */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">C7. Amendments</h3>
                  <div className="space-y-2 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <p>
                      Amigo reserves the right to amend these Terms at any time. Updates will be published on the Platform with a revised effective date. Continued use of the Platform constitutes acceptance of revised Terms. For material changes, Amigo will notify users via email or in-app notification prior to the change taking effect.
                    </p>
                  </div>
                </div>

                {/* C8. Miscellaneous */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">C8. Miscellaneous</h3>
                  <div className="space-y-2 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>If any provision is found unlawful or unenforceable, remaining provisions continue in full force.</li>
                      <li>These Terms and the Privacy Policy constitute the entire agreement between users and the Company.</li>
                      <li>Failure to enforce any provision does not constitute a waiver.</li>
                      <li>In the event of inconsistency between the English version and any translation, the English version prevails.</li>
                    </ul>
                  </div>
                </div>

                {/* C9. Contact Us */}
                <div className="space-y-4" id="contact-us-details">
                  <h3 className="text-lg font-bold text-neutral-900">C9. Contact Us</h3>
                  <div className="space-y-3 pl-4 border-l border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/50 space-y-2 max-w-lg">
                      <div className="grid grid-cols-3 gap-y-1 text-xs sm:text-sm">
                        <span className="text-neutral-500 font-medium flex items-center gap-1">
                          <Mail className="h-3 w-3 inline text-neutral-400" /> Email:
                        </span>
                        <span className="col-span-2 text-orange-600 font-mono font-bold">support@appygo.in</span>
                        
                        <span className="text-neutral-500 font-medium">In-App:</span>
                        <span className="col-span-2 text-neutral-900">Help & Support section</span>
                        
                        <span className="text-neutral-500 font-medium flex items-center gap-1">
                          <Clock className="h-3 w-3 inline text-neutral-400" /> Hours:
                        </span>
                        <span className="col-span-2 text-neutral-900">Monday–Sunday, 8:00 AM – 11 PM IST</span>
                        
                        <span className="text-neutral-500 font-medium">Company:</span>
                        <span className="col-span-2 text-neutral-900 font-bold">Appygo Services Private Limited</span>
                        
                        <span className="text-neutral-500 font-medium flex items-start gap-1">
                          <MapPin className="h-3 w-3 inline text-neutral-400 mt-1" /> Office:
                        </span>
                        <span className="col-span-2 text-neutral-700 text-xs leading-snug">
                          4TH-FR, FL-401, 4/22 VIDYASAGARCOLONY LP-142/9/4/3 KOLKATA-700047, WB, India
                        </span>
                      </div>
                    </div>

                    <p className="font-bold text-neutral-900 pt-2">
                      By using the Amigo Platform, you acknowledge that you have read, understood, and agree to be bound by the Terms applicable to you and the General Terms in Part C.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Copyright Block */}
            <div className="border-t border-neutral-100 pt-8 text-center text-xs text-neutral-400 font-mono space-y-1">
              <p>© 2026 Appygo Services Private Limited. All rights reserved.</p>
              <p className="text-[10px] text-neutral-300">Amigo is a food delivery platform owned and operated by Appygo Services Private Limited</p>
            </div>

          </motion.div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
