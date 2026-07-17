"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Shield, Calendar, KeyRound, Mail, MapPin, Clock, FileText, UserCheck, ShieldAlert } from "lucide-react";

export default function PrivacyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-[#FAF9F6] text-neutral-800 min-h-screen font-sans antialiased selection:bg-orange-500 selection:text-white flex flex-col justify-between" id="privacy-page-container">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-grow py-12 sm:py-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-100 shadow-xl space-y-10"
          >
            {/* Header section */}
            <div className="border-b border-neutral-100 pb-8 space-y-4">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Shield className="h-4 w-4" />
                Privacy & Data Protection
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-sm font-semibold text-neutral-600 leading-relaxed">
                Amigo - a food delivery platform owned and operated by Appygo Services Private Limited
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Effective Date: <strong>July 2026</strong></span>
                </div>
                <div className="hidden sm:block text-neutral-200">|</div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Last Updated: <strong>July 17, 2026</strong></span>
                </div>
              </div>
            </div>

            {/* Introduction info notice box */}
            <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-100 flex items-start gap-4">
              <KeyRound className="h-6 w-6 text-emerald-700 shrink-0 mt-0.5" />
              <div className="space-y-1.5 text-xs sm:text-sm text-neutral-700">
                <p className="font-bold text-emerald-950">DPDP Act, 2023 Compliant Policy</p>
                <p className="text-neutral-600 leading-relaxed text-xs">
                  This Privacy Policy is designed to adhere completely to the <strong>Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;)</strong> and other applicable Indian laws. We take extreme precautions to safeguard your business and personal data.
                </p>
              </div>
            </div>

            {/* Policy Content */}
            <div className="space-y-10 text-neutral-600 text-sm sm:text-base leading-relaxed">
              
              {/* SECTION 1 */}
              <section className="space-y-4" id="section-1">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">1.</span> Introduction
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Appygo Services Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operator of the Amigo food delivery platform (&quot;Platform&quot;), is committed to protecting the personal and business data of everyone who interacts with our Platform.
                </p>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  This Privacy Policy applies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-600 text-xs sm:text-sm">
                  <li>
                    <strong>Customers</strong> - individuals who use the Platform to discover, order, and receive food from Food Service Partners.
                  </li>
                  <li>
                    <strong>Food Service Partners</strong> - restaurants, home kitchens, and catering establishments registered on the Platform to list and fulfill food orders.
                  </li>
                </ul>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  This Policy describes what data we collect from each of these groups, why we collect it, how we use and share it, how long we retain it, and what rights you have over your data.
                </p>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  This Privacy Policy is compliant with the <strong>Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;)</strong>, the <strong>Information Technology Act, 2000</strong>, the <strong>IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>, and all other applicable data protection regulations in India.
                </p>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  By registering on or using the Platform - whether as a Customer or a Food Service Partner - you expressly consent to the collection, processing, storage, and use of your data as described in this Privacy Policy. If you do not agree, please discontinue use of the Platform.
                </p>
              </section>

              {/* SECTION 2 */}
              <section className="space-y-6" id="section-2">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">2.</span> Data We Collect
                </h2>

                {/* 2.1 */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-neutral-900" id="section-2-1">
                    2.1 Data Collected from Customers
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-neutral-200">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-neutral-50 text-neutral-700 border-b border-neutral-200 font-bold">
                          <th className="p-3 w-1/4">Category</th>
                          <th className="p-3">Data Points</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 text-neutral-600">
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Identity Data</td>
                          <td className="p-3">Full name, email address, mobile number, date of birth</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Location Data</td>
                          <td className="p-3">Delivery address, GPS location (with explicit consent, while using the Platform)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Transaction Data</td>
                          <td className="p-3">Order history, order details, payment method type, saved delivery addresses, food preferences, UPI ID(collected as a payment method via Razorpay).</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Device Data</td>
                          <td className="p-3">Device type and model, operating system and version, IP address, browser type, app version</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Usage Data</td>
                          <td className="p-3">Browsing behaviour within the Platform, search history and queries, interactions with features and promotions, time and frequency of access</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 2.2 */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-neutral-900" id="section-2-2">
                    2.2 Data Collected from Food Service Partners
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-neutral-200">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-neutral-50 text-neutral-700 border-b border-neutral-200 font-bold">
                          <th className="p-3 w-1/4">Category</th>
                          <th className="p-3">Data Points</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 text-neutral-600">
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Business Identity Data</td>
                          <td className="p-3">Business name, type of establishment (restaurant / home kitchen / caterer), FSSAI registration or license number, GSTIN</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Owner / Authorised Representative Data</td>
                          <td className="p-3">Full name, mobile number, email address, PAN (for tax compliance)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Banking & Financial Data</td>
                          <td className="p-3">Bank account number and IFSC code (for order payout processing)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Business Address Data</td>
                          <td className="p-3">Registered and operational address of the establishment</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Menu & Catalogue Data</td>
                          <td className="p-3">Food items listed, descriptions, pricing, images, availability settings</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Operational Data</td>
                          <td className="p-3">Order acceptance and rejection records, preparation time data, delivery fulfillment data</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Performance Data</td>
                          <td className="p-3">Order volume, ratings received, response time metrics (used internally for Platform quality management)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 3 */}
              <section className="space-y-4" id="section-3">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">3.</span> How We Collect Data
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  We collect data through the following means:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-600 text-xs sm:text-sm">
                  <li>
                    <strong>Directly from you</strong> - Information provided at the time of account or partner registration, Order placement, menu setup, support interactions, or feedback submission.
                  </li>
                  <li>
                    <strong>Automatically</strong> - Through cookies, device identifiers, and usage tracking technologies when you access or use the Platform. See Section 10 for details.
                  </li>
                  <li>
                    <strong>From third-party services</strong> - Limited transactional data from Razorpay (our payment processing partner) and location data from map service providers used for delivery coordination.
                  </li>
                  <li>
                    <strong>From platform interactions</strong> - Data generated through your use of Platform features, including Order placements, search queries, and support requests.
                  </li>
                </ul>
              </section>

              {/* SECTION 4 */}
              <section className="space-y-6" id="section-4">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">4.</span> Purpose of Data Processing
                </h2>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-neutral-900" id="section-4-1">
                    4.1 For Customers
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    We process Customer data to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-neutral-600 text-xs sm:text-sm">
                    <li>Verify identity and create and manage user accounts.</li>
                    <li>Process, confirm, and coordinate fulfillment of Orders.</li>
                    <li>Calculate and display delivery charges, Technical Support Fees, and applicable GST.</li>
                    <li>Facilitate secure payment processing through Razorpay.</li>
                    <li>Send transactional communications including Order confirmations, status updates, and delivery notifications via the app, and WhatsApp.</li>
                    <li>Send promotional communications and offers - <strong>only with explicit prior consent.</strong></li>
                    <li>Personalise the Platform experience, including menu recommendations and search results.</li>
                    <li>Provide customer support through email and WhatsApp Business.</li>
                    <li>Detect, prevent, and investigate fraud, abuse, and security incidents.</li>
                    <li>Comply with applicable Indian law, including tax and regulatory obligations.</li>
                    <li>Improve Platform performance through internal analytics and feature development.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-neutral-900" id="section-4-2">
                    4.2 For Food Service Partners
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    We process Food Service Partner data to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-neutral-600 text-xs sm:text-sm">
                    <li>Verify business identity, FSSAI compliance, and GSTIN prior to onboarding.</li>
                    <li>Create and manage partner accounts and menu listings on the Platform.</li>
                    <li>Route and communicate incoming Orders to the relevant Food Service Partner.</li>
                    <li>Process and disburse Order payouts to the registered bank account.</li>
                    <li>Generate and maintain transaction records for GST and audit purposes.</li>
                    <li>Communicate operational updates, policy changes, and support communications via email and WhatsApp.</li>
                    <li>Monitor and manage Platform quality, including Order fulfillment rates and delivery performance.</li>
                    <li>Comply with applicable Indian law, including the Food Safety and Standards Act, 2006, Income Tax Act, 1961, and GST framework.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 5 */}
              <section className="space-y-4" id="section-5">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">5.</span> Legal Basis for Processing (DPDP Act, 2023)
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  We process personal and business data on the following lawful bases under the Digital Personal Data Protection Act, 2023:
                </p>

                <div className="space-y-3 pl-4">
                  <div>
                    <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">5.1 Consent</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm">
                      For processing such as GPS location access and promotional communications, we rely on your explicit, informed consent obtained at the time of registration or through account settings. You may withdraw consent at any time. Withdrawal does not affect the lawfulness of prior processing.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">5.2 Contractual Necessity</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm">
                      Processing is necessary to perform our obligations under the Terms and Conditions (for Customers) and the Partner Agreement (for Food Service Partners), including Order processing, payment disbursement, and delivery coordination.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">5.3 Legitimate Interest</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm">
                      We process certain data based on our legitimate interest in operating a secure, functional, and improved Platform - including fraud detection, security monitoring, and internal analytics. We ensure this interest does not override your fundamental rights.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">5.4 Legal Obligation</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm">
                      We retain and process certain data to comply with applicable Indian law, including obligations under the Income Tax Act, 1961, the GST framework, the Food Safety and Standards Act, 2006, and any valid order from a regulatory authority or court of competent jurisdiction.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 6 */}
              <section className="space-y-4" id="section-6">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">6.</span> Data Sharing
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  We share data only as necessary and with the following categories of recipients:
                </p>

                <div className="space-y-3 pl-4 text-neutral-600 text-xs sm:text-sm">
                  <p><strong>6.1 Between Customers and Food Service Partners:</strong> Customer name and delivery address are shared with the relevant Food Service Partner to enable Order preparation and dispatch. Food Service Partner name, menu information, and estimated preparation time are shared with Customers at the time of ordering.</p>
                  <p><strong>6.2 Delivery Partners:</strong> The Delivery Partner assigned to an Order will receive the Customer&apos;s name and delivery address for the exclusive purpose of completing delivery. Delivery Partners are instructed not to use this information for any other purpose.</p>
                  <p><strong>6.3 Razorpay - Payment Processing:</strong> Payment-related data is shared with Razorpay, our PCI-DSS compliant payment processing partner, solely to facilitate secure and authenticated transactions. We do not store full payment card details on our servers.</p>
                  <p><strong>6.4 Banking Partners:</strong> Food Service Partner banking details (account number and IFSC) are shared with our banking partners solely for the purpose of processing Order payouts.</p>
                  <p><strong>6.5 Technology Service Providers:</strong> We use third-party technology providers for cloud infrastructure, data storage, customer support tooling, and communication services. These providers are contractually bound to process data only on our instructions and in compliance with applicable data protection law.</p>
                  <p><strong>6.6 Map & Navigation Providers:</strong> Customer location data may be shared with map service providers (such as Google Maps) solely for the purpose of displaying delivery addresses, calculating routes, and estimating delivery times.</p>
                  <p><strong>6.7 WhatsApp Business:</strong> Customer and Food Service Partner contact details may be used to facilitate support and operational communication through WhatsApp Business. WhatsApp&apos;s own privacy policy governs data processed through that platform.</p>
                  <p><strong>6.8 Law Enforcement & Regulatory Authorities:</strong> We may disclose data to law enforcement agencies, regulatory bodies, or courts where required under applicable law or pursuant to a valid judicial or regulatory order.</p>
                  <p className="text-neutral-950 font-bold bg-neutral-50 p-3 rounded-xl border border-neutral-100">6.9 No Sale of Data: We do not sell, rent, or trade personal or business data to any third party for marketing, advertising, or any other commercial purpose.</p>
                </div>
              </section>

              {/* SECTION 7 */}
              <section className="space-y-4" id="section-7">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">7.</span> Data Retention
                </h2>
                
                <div className="overflow-x-auto rounded-xl border border-neutral-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-neutral-50 text-neutral-700 border-b border-neutral-200 font-bold">
                        <th className="p-3 w-1/3">Data Category</th>
                        <th className="p-3">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 text-neutral-600">
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Customer account, identity & profile data</td>
                        <td className="p-3">30-day reactivation window post deletion request. Permanently deleted after 30 days if account is not reactivated.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Customer transaction and order data</td>
                        <td className="p-3">Up to 7 years (for tax, audit, and legal compliance)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Customer usage and device data</td>
                        <td className="p-3">Up to 12 months from date of collection</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Food Service Partner account and profile data (business name, owner name, email, mobile, business address)</td>
                        <td className="p-3">30-day deactivation window post closure request approval. Permanently deleted after 30 days if reactivation does not occur.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Food Service Partner Menu and catalogue data (food items, pricing, images)</td>
                        <td className="p-3">Deleted upon account closure confirmation. No legal retention requirement.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Food Service Partner business and identity data</td>
                        <td className="p-3">Duration of active partnership + up to 7 years post-termination (for GST and audit compliance)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Food Service Partner banking and payout data</td>
                        <td className="p-3">Up to 7 years (for tax and audit compliance)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Food Service Partner operational and performance data</td>
                        <td className="p-3">Duration of active partnership + up to 2 years</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Promotional consent records</td>
                        <td className="p-3">Until consent is withdrawn + 1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm">
                  Where a Customer requests deletion of their account, or where a Food Service Partner terminates their partnership, we will process the data deletion request within 30 days, subject to data we are legally obligated to retain.
                </p>
              </section>

              {/* SECTION 8 */}
              <section className="space-y-4" id="section-8">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">8.</span> Your Rights Under the DPDP Act, 2023
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  Both Customers and Food Service Partners are Data Principals under the Digital Personal Data Protection Act, 2023 and hold the following rights:
                </p>

                <div className="space-y-3 pl-4 text-neutral-600 text-xs sm:text-sm">
                  <p><strong>8.1 Right to Access:</strong> You may request confirmation of whether we process your data and obtain a summary of the data we hold.</p>
                  <p><strong>8.2 Right to Correction:</strong> You may request correction of any inaccurate or incomplete data we hold about you or your business.</p>
                  <p><strong>8.3 Right to Erasure:</strong> You may request deletion of your data where it is no longer necessary for the purpose for which it was collected, subject to our legal and regulatory retention obligations.</p>
                  <p><strong>8.4 Right to Withdraw Consent:</strong> Where processing is based on your consent, you may withdraw it at any time. Withdrawal will not affect the lawfulness of processing prior to withdrawal.</p>
                  <p><strong>8.5 Right to Grievance Redressal:</strong> You have the right to have any privacy-related grievance addressed in a timely and effective manner. See Section 15 for contact details.</p>
                  <p><strong>8.6 Right of Nomination:</strong> Customers may nominate another individual to exercise their rights under this Policy on their behalf in the event of death or incapacity, as permitted under the DPDP Act, 2023.</p>
                </div>

                <p className="text-neutral-850 font-semibold bg-orange-50/40 p-3 rounded-xl border border-orange-100/50 text-xs sm:text-sm">
                  To exercise any of the above rights, contact us at <strong>support@appygo.in</strong>. We will respond within 30 days of receipt of your verified request.
                </p>
              </section>

              {/* SECTION 9 */}
              <section className="space-y-4" id="section-9">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">9.</span> Children&apos;s Data
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  The Platform is intended for users aged 18 years and above. Minors under the age of 18 may access the Platform only under the direct supervision of a parent or legal guardian.
                </p>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  We do not knowingly collect personal data from individuals under the age of 18 without verifiable parental or guardian consent. If we become aware that a minor&apos;s data has been collected without appropriate consent, we will take prompt steps to delete such data.
                </p>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  Parents or guardians who believe their child&apos;s data has been collected without consent should contact us at <strong>support@appygo.in</strong>.
                </p>
              </section>

              {/* SECTION 10 */}
              <section className="space-y-4" id="section-10">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">10.</span> Cookies & Tracking Technologies
                </h2>

                <div className="space-y-2">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">10.1 What We Use</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    The Platform uses cookies, device identifiers, and similar tracking technologies to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-neutral-600 text-xs sm:text-sm">
                    <li>Maintain session state and login persistence.</li>
                    <li>Analyse usage patterns and Platform performance.</li>
                    <li>Personalise content, search results, and promotional offers for Customers.</li>
                    <li>Enable integration with Razorpay and map service providers.</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">10.2 Managing Cookies</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    You may manage cookie preferences through your device or browser settings. Disabling certain cookies may affect Platform functionality, including login persistence and the checkout experience.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">10.3 Analytics</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    We may use third-party analytics tools to understand how users interact with the Platform. These tools may collect anonymised or aggregated usage data subject to their own privacy policies.
                  </p>
                </div>
              </section>

              {/* SECTION 11 */}
              <section className="space-y-4" id="section-11">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">11.</span> App Permissions
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  The Amigo Customer & Merchant application requests the following permissions:
                </p>

                <div className="overflow-x-auto rounded-xl border border-neutral-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-neutral-50 text-neutral-700 border-b border-neutral-200 font-bold">
                        <th className="p-3 w-1/3">Permission</th>
                        <th className="p-3">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 text-neutral-600">
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Location (while in use)</td>
                        <td className="p-3">To display nearby Food Service Partners, set delivery address, and support delivery coordination</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Internet access</td>
                        <td className="p-3">To enable core Platform functionality including Order placement, payment, and real-time updates</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Push notifications</td>
                        <td className="p-3">To send Order confirmations, delivery status updates, and (with consent) promotional offers</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold bg-neutral-50/30 text-neutral-900">Storage (read/write)</td>
                        <td className="p-3">To cache app data for performance and offline access to Order history</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm">
                  We do not access your device camera, microphone, or contacts. All app permissions may be managed at any time through your device settings.
                </p>
              </section>

              {/* SECTION 12 */}
              <section className="space-y-4" id="section-12">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">12.</span> Data Security
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  We implement industry-standard technical and organisational security measures to protect data against unauthorised access, disclosure, alteration, or destruction:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-neutral-600 text-xs sm:text-sm">
                  <li>Encryption of data in transit using HTTPS/TLS protocols.</li>
                  <li>Access controls restricting data access to authorised personnel on a need-to-know basis.</li>
                  <li>Regular security assessments of our systems and infrastructure.</li>
                  <li>Contractual data security obligations imposed on all third-party service providers, including Razorpay.</li>
                </ul>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  No method of electronic transmission or storage is entirely free of risk. While we take all reasonable precautions, we cannot guarantee absolute security. In the event of a data breach likely to result in harm, we will take appropriate steps as required under applicable law.
                </p>
              </section>

              {/* SECTION 13 */}
              <section className="space-y-4" id="section-13">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">13.</span> Cross-Border Data Transfers
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  Your personal data is primarily stored and processed within India. Certain third-party technology service providers used by the Platform may store or process data outside India. Under Section 16 of the Digital Personal Data Protection Act, 2023, such transfers are permitted as the Central Government has not notified any restricted countries as of the effective date of this Policy. Payment data is stored and processed within India in compliance with applicable RBI guidelines.
                </p>
              </section>

              {/* SECTION 14 */}
              <section className="space-y-4" id="section-14">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">14.</span> Consent Management
                </h2>

                <div className="space-y-2">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">14.1 How We Obtain Consent</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    At the time of account or partner registration, you will be presented with this Privacy Policy and the applicable Terms and Conditions, and asked to provide explicit consent before using the Platform. Consent is obtained through a clear and affirmative action.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">14.2 Promotional Communications</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    Promotional communications are sent only with your explicit, separate consent provided during registration or via account notification settings. You may opt out at any time through Platform settings or by writing to <strong>support@appygo.in</strong>.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">14.3 Location Access</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    GPS location is requested at the time of delivery address entry and is used only while you are actively using the Platform. We do not access GPS location in the background unless you have explicitly granted background location permission.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">14.4 Withdrawing Consent</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">
                    To withdraw consent for data processing, you may delete your account or partnership profile through Platform settings, or contact us at <strong>support@appygo.in</strong> with a deletion request. Withdrawal may affect your ability to use all or part of the Platform&apos;s Services.
                  </p>
                </div>
              </section>

              {/* SECTION 15 */}
              <section className="space-y-4" id="section-15">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">15.</span> Grievance Officer
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  In accordance with the Information Technology Act, 2000, the DPDP Act, 2023, and the Consumer Protection (E-Commerce) Rules, 2020, the following officer is designated to handle all data and privacy-related grievances from both Customers and Food Service Partners:
                </p>

                <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100/80 space-y-3 text-xs sm:text-sm text-neutral-700">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <p className="text-neutral-400 font-mono text-[10px] uppercase">Grievance Officer Name</p>
                      <p className="font-bold text-neutral-900">Shaon Dhar</p>
                    </div>
                    <div>
                      <p className="text-neutral-400 font-mono text-[10px] uppercase">Designation</p>
                      <p className="font-bold text-neutral-900">Chief Product Officer</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-200/50 my-2 pt-2">
                    <p className="text-neutral-400 font-mono text-[10px] uppercase">Company</p>
                    <p className="font-bold text-neutral-900">Appygo Services Private Limited</p>
                  </div>
                  <div className="border-t border-neutral-200/50 my-2 pt-2">
                    <p className="text-neutral-400 font-mono text-[10px] uppercase">Email</p>
                    <a href="mailto:support@appygo.in" className="font-bold text-orange-600 hover:underline">support@appygo.in</a>
                  </div>
                  <div className="border-t border-neutral-200/50 my-2 pt-2">
                    <p className="text-neutral-400 font-mono text-[10px] uppercase">Registered Office</p>
                    <p className="font-medium text-neutral-800">4TH-FR, FL-401, 4/22 VIDYASAGARCOLONY LP-142/9/4/3 KOLKATA-700047, WB, India</p>
                  </div>
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm font-medium">
                  Grievances will be acknowledged within 48 hours of receipt and resolved within 30 days.
                </p>
              </section>

              {/* SECTION 16 */}
              <section className="space-y-4" id="section-16">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">16.</span> Changes to This Privacy Policy
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  We reserve the right to update this Privacy Policy at any time. The updated Policy will be published on the Platform and within the mobile application with the revised effective date.
                </p>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  For material changes that affect how data is processed or that affect your rights, we will notify you via email or in-app notification prior to the change taking effect. Continued use of the Platform following publication of changes constitutes acceptance of the revised Policy.
                </p>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  We encourage all users and partners to review this Policy periodically.
                </p>
              </section>

              {/* SECTION 17 */}
              <section className="space-y-4" id="section-17">
                <h2 className="text-xl font-bold text-neutral-950 border-b border-neutral-100 pb-2 flex items-center gap-2">
                  <span className="text-orange-600">17.</span> Contact Us
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  For any privacy-related queries, data requests, or concerns:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-700">
                  <div className="bg-[#FAF9F6] p-4 rounded-xl border border-neutral-100 flex items-start gap-3">
                    <Mail className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900">Email & Help</p>
                      <a href="mailto:support@appygo.in" className="text-orange-600 font-semibold hover:underline">support@appygo.in</a>
                      <p className="text-neutral-500 text-[11px] mt-1">In-App: Help & Support section</p>
                    </div>
                  </div>

                  <div className="bg-[#FAF9F6] p-4 rounded-xl border border-neutral-100 flex items-start gap-3">
                    <Clock className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900">Operating Hours</p>
                      <p className="text-neutral-600 font-semibold">Monday–Sunday, 8:00 AM – 11:00 PM IST</p>
                    </div>
                  </div>

                  <div className="bg-[#FAF9F6] p-4 rounded-xl border border-neutral-100 flex items-start gap-3 md:col-span-2">
                    <MapPin className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900">Registered Corporate Entity</p>
                      <p className="font-medium text-neutral-800">Appygo Services Private Limited</p>
                      <p className="text-neutral-500 text-xs mt-1">Registered Office: 4TH-FR, FL-401, 4/22 VIDYASAGARCOLONY LP-142/9/4/3 KOLKATA-700047, WB, India</p>
                    </div>
                  </div>
                </div>
              </section>

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
