export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: number;
  title: string;
  faqs: FAQItem[];
}

export const FAQDATA: FAQCategory[] = [
  {
    id: 1,
    title: "About Sahwa Coffee",
    faqs: [
      {
        id: 1,
        question: "What does Sahwa Coffee do?",
        answer:
          "Sahwa Coffee is an Ethiopian coffee export company that connects international buyers with trusted Ethiopian coffee producers. We manage coffee sourcing, quality coordination, export documentation, and international logistics to ensure a seamless purchasing experience.",
      },
      {
        id: 2,
        question: "Does Sahwa Coffee own coffee farms?",
        answer:
          "No. Sahwa Coffee does not own coffee farms. We work closely with carefully selected farmers, cooperatives, and washing stations across Ethiopia to source high-quality coffee.",
      },
      {
        id: 3,
        question:
          "Why should I work with Sahwa Coffee instead of buying directly from producers?",
        answer:
          "Sahwa Coffee simplifies the export process by managing sourcing, quality control, documentation, logistics, and communication. This allows buyers to work with one reliable export partner while maintaining full transparency throughout the process.",
      },
      {
        id: 4,
        question: "Where is your coffee sourced?",
        answer:
          "Our coffee is sourced from Ethiopia's renowned coffee-growing regions, including Guji, Yirgacheffe, Sidamo, Limu, Jimma, and Nekemte, depending on seasonal availability and customer requirements.",
      },
    ],
  },

  {
    id: 2,
    title: "Products & Coffee Sourcing",
    faqs: [
      {
        id: 1,
        question: "What types of coffee do you export?",
        answer:
          "We export premium Ethiopian green Arabica coffee beans, including both natural and washed processing methods. Coffee availability depends on the harvest season.",
      },
      {
        id: 2,
        question: "Can I request coffee from a specific region?",
        answer:
          "Yes. We can source coffee from specific regions, cooperatives, or processing stations whenever possible, subject to seasonal availability.",
      },
      {
        id: 3,
        question: "Do you provide coffee samples?",
        answer:
          "Yes. Samples are available for qualified buyers before placing larger export orders.",
      },
      {
        id: 4,
        question: "Do you offer custom sourcing?",
        answer:
          "Yes. We can source coffee based on your preferred origin, processing method, grade, cup profile, and quality specifications.",
      },
    ],
  },

  {
    id: 3,
    title: "Orders & Export Process",
    faqs: [
      {
        id: 1,
        question: "Who can place an order?",
        answer:
          "We work with coffee importers, distributors, wholesalers, specialty coffee roasters, cafés, retailers, and other business buyers. We currently do not sell directly to consumers.",
      },
      {
        id: 2,
        question: "Do you sell coffee online?",
        answer:
          "No. Sahwa Coffee operates exclusively as a B2B coffee exporter. Orders are arranged through direct communication with our sales team.",
      },
      {
        id: 3,
        question: "What is the minimum order quantity?",
        answer:
          "Minimum order quantities vary depending on the coffee type, destination, and shipping method. Please contact us for current requirements.",
      },
      {
        id: 4,
        question: "How do I request a quotation?",
        answer:
          "You can submit an inquiry through our contact form or email us with your coffee requirements, destination country, preferred coffee specifications, and estimated order quantity.",
      },
    ],
  },

  {
    id: 4,
    title: "Shipping & Logistics",
    faqs: [
      {
        id: 1,
        question: "Which countries do you export to?",
        answer:
          "We supply Ethiopian coffee to buyers worldwide, subject to each country's import regulations and shipping availability.",
      },
      {
        id: 2,
        question: "Do you arrange international shipping?",
        answer:
          "Yes. We coordinate export logistics, shipping documentation, and customs requirements to ensure a smooth delivery process.",
      },
      {
        id: 3,
        question: "How long does shipping take?",
        answer:
          "Shipping times vary depending on the destination country, shipping route, customs procedures, and port schedules.",
      },
      {
        id: 4,
        question: "Can I track my shipment?",
        answer:
          "Yes. Once your shipment has been dispatched, we will provide the shipping documents and tracking information, where available.",
      },
    ],
  },

  {
    id: 5,
    title: "Quality & Certification",
    faqs: [
      {
        id: 1,
        question: "How do you ensure coffee quality?",
        answer:
          "We work with trusted farmers, cooperatives, and processing stations while coordinating quality inspections and evaluations before export.",
      },
      {
        id: 2,
        question: "Do you provide quality reports?",
        answer:
          "Yes. Quality reports, cupping information, and supporting documentation can be provided depending on the coffee and customer requirements.",
      },
      {
        id: 3,
        question: "Do you offer certified coffee?",
        answer:
          "Certified coffee may be available depending on the producer and harvest season. Please contact us for current availability.",
      },
    ],
  },

  {
    id: 6,
    title: "Payments & Business",
    faqs: [
      {
        id: 1,
        question: "What payment methods do you accept?",
        answer:
          "Payment terms and methods are discussed during the quotation process and are agreed upon based on mutually accepted commercial terms.",
      },
      {
        id: 2,
        question: "Can I become a long-term sourcing partner?",
        answer:
          "Absolutely. We welcome long-term partnerships with importers, roasters, distributors, and businesses seeking a consistent supply of premium Ethiopian coffee.",
      },
      {
        id: 3,
        question: "How can I contact your export team?",
        answer:
          "You can reach us through our Contact page or by emailing our export team directly. We aim to respond to all inquiries as quickly as possible.",
      },
      {
        id: 4,
        question: "Do you assist first-time coffee importers?",
        answer:
          "Yes. Our team can guide first-time importers through the sourcing, documentation, export, and shipping process to ensure a smooth experience.",
      },
      {
        id: 5,
        question: "Can I request different coffee grades in one shipment?",
        answer:
          "Yes. Depending on availability, we can prepare shipments containing different coffee origins, grades, or processing methods based on your requirements.",
      },
    ],
  },
];
