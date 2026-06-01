export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: { heading: string; content: string[] }[];
}

export const LegalData = {
  about: {
    title: "About AMIGO",
    tagline: "Revolutionizing the Food Tech Ecosystem through Honesty, Fair Deals, and Culinary Excellence.",
    mission: "Our mission is simple: to make healthy, restaurant-quality food affordable and accessible, while ensuring that the culinary masterminds behind our meals keep 100% of their hard-earned revenue. By cutting out high commission platforms, everyone wins.",
    history: "Founded in 2026, AMIGO (owned and operated by APPYGO SERVICES PRIVATE LIMITED) started with a vision of a transparent food ecosystem. Traditional aggregator platforms charge restaurants up to 30% commission per order, leading to smaller portions, inflated menu prices, and struggling local kitchens. We changed the game. By charging 0% commission on orders, we restore the relationship between restaurants and food lovers.",
    features: [
      {
        title: "0% Commission Ever",
        description: "We never take a cut of the food creator's hard work. Restaurants earn more, and can pass those savings on to you with bigger portions and better ingredients."
      },
      {
        title: "Always Fresh & Safe",
        description: "Every item is cooked on demand in certified kitchens adhering to the highest standards of sanitation, freshness, and quality assurance."
      },
      {
        title: "Transparent Fair Prices",
        description: "What you see is what you pay. No fake 'convenience' surcharges, no hidden platform fees. Fair delivery wages paired with direct honest restaurant rates."
      }
    ],
    stats: [
      { number: "0%", label: "Partner Commissions" },
      { number: "25k+", label: "Happy Diners Daily" },
      { number: "450+", label: "Local Restaurant Partners" },
      { number: "4.9★", label: "App Store & Play Store Rating" }
    ]
  },

  terms: {
    title: "Terms & Conditions",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        content: [
          "Welcome to AMIGO. By accessing or using our mobile application, website, or services, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully. If you do not agree to these terms, you should not access or use AMIGO.",
          "These terms govern all aspects of our service, including transactions, orders, partner registrations, delivery agreements, and website navigation. We reserve the right to revise or update these terms at any time without prior notification."
        ]
      },
      {
        heading: "2. Partner Relationships & 0% Commission Guarantee",
        content: [
          "AMIGO behaves as an open, high-efficiency technology facilitator. We guarantee a 0% lifetime commission structure on standard food orders placed via our basic tier platform for verified restaurant partners who maintain our quality standards.",
          "Partners are responsible for pricing accuracy, licensing, and compliance with all food safety guidelines. Restaurant partners must provide genuine representation of ingredients, portions, and preparing environments."
        ]
      },
      {
        heading: "3. User Accounts & Security",
        content: [
          "To order food or register as a partner, you must provide valid credentials, including name, contact number, active email, and location context. You are solely responsible for maintaining the privacy of your account details.",
          "We reserve the right to suspend or terminate accounts that present suspicious activity, false information, or policy violations."
        ]
      },
      {
        heading: "4. Pricing & Payments",
        content: [
          "Payment processing is handled via secure authorized gateways. All menu prices are set directly by restaurant partners. AMIGO never inflates menu rates.",
          "Delivery dispatch fares are paid directly to independent courier partners to ensure fair live-wage compensation. Delivery rates are estimated transparently prior to checking out."
        ]
      },
      {
        heading: "5. Limitation of Liability",
        content: [
          "AMIGO is not liable for delayed cooking, courier delivery bottlenecks, allergen mishaps, or discrepancies in partner kitchen representations. However, our rapid resolution support center is available to address issues promptly."
        ]
      }
    ]
  } as LegalContent,

  privacy: {
    title: "Privacy Policy",
    lastUpdated: "June 2026",
    sections: [
      {
        heading: "1. Information We Collect",
        content: [
          "We collect personal information necessary to safely fulfill and manage orders. This includes: contact details (name, email, phone number), address and delivery coordinates, payment parameters (stored safely with encrypted transaction processors), and application preference metadata.",
          "Background geolocation information may be accessed while the app is active to enable live tracking of delivery couriers or direct location selection, with explicit customer consent."
        ]
      },
      {
        heading: "2. How We Use Your Data",
        content: [
          "Fulfilling and tracking food orders efficiently.",
          "Authenticating users and protecting against unauthorized or malicious activities.",
          "Empowering partner restaurants with dispatch addresses and coordination queries.",
          "Communicating account updates, security notices, and voluntary promo campaigns. We NEVER sell or lease your demographic, browsing, or operational telemetry to third-party advertisers."
        ]
      },
      {
        heading: "3. Data Retention & Safeguards",
        content: [
          "Your data is securely stored on enterprise cloud databases incorporating modern transport layer security (TLS) protocols and high-end server-side encryption.",
          "We retain user information only as long as necessary to provide service and fulfill compliance duties. Users can request total deletion of their profile and record logs via the app settings menu."
        ]
      },
      {
        heading: "4. Third-Party Integrations & Cookies",
        content: [
          "We use necessary services for map routing (e.g., Google Maps) and transaction verification. These external nodes only ingest details necessary to deliver their respective utilities."
        ]
      }
    ]
  } as LegalContent
};
