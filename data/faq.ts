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
          "Sahwa Coffee is an Ethiopian coffee export company that connects international buyers with trusted Ethiopian coffee producers. We manage sourcing, quality coordination, documentation, and export logistics.",
      },
      {
        id: 2,
        question: "Do you own coffee farms?",
        answer:
          "No. Sahwa Coffee does not own coffee farms. We work closely with carefully selected farmers, cooperatives, and processing stations across Ethiopia to source exceptional coffee.",
      },
      {
        id: 3,
        question: "Why work with Sahwa Coffee instead of buying directly?",
        answer:
          "We simplify the export process by coordinating sourcing, quality control, documentation, logistics, and communication, allowing buyers to work with a reliable export partner.",
      },
      {
        id: 4,
        question: "Where is your coffee sourced?",
        answer:
          "Our coffee is sourced from renowned Ethiopian coffee-growing regions, depending on seasonal availability and customer requirements.",
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
          "We export green coffee beans sourced from various Ethiopian regions, including natural and washed processing methods, based on availability.",
      },
      {
        id: 2,
        question: "Can I request coffee from a specific region?",
        answer:
          "Yes. We work to source coffee from specific regions or processing stations whenever possible, depending on harvest season and availability.",
      },
      {
        id: 3,
        question: "Do you provide coffee samples?",
        answer:
          "Yes. Samples can be arranged for qualified buyers before placing larger export orders.",
      },
      {
        id: 4,
        question: "Do you offer custom sourcing?",
        answer:
          "Yes. We can help source coffee that matches your preferred origin, processing method, cup profile, and quality requirements.",
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
          "We work with coffee importers, distributors, wholesalers, roasters, cafés, and other business buyers. We currently do not sell directly to consumers.",
      },
      {
        id: 2,
        question: "Do you sell coffee online?",
        answer:
          "No. Sahwa Coffee currently operates as a B2B exporter. Orders are arranged through direct communication with our sales team.",
      },
      {
        id: 3,
        question: "What is the minimum order quantity?",
        answer:
          "Minimum order quantities depend on the coffee type and destination. Please contact us for current requirements.",
      },
      {
        id: 4,
        question: "How do I request a quotation?",
        answer:
          "You can submit an inquiry through our contact form or email us with your coffee requirements, destination country, quantity, and preferred specifications.",
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
          "We work with international buyers worldwide, subject to import regulations and shipping availability.",
      },
      {
        id: 2,
        question: "Do you arrange international shipping?",
        answer:
          "Yes. We coordinate export logistics and shipping documentation to ensure a smooth delivery process.",
      },
      {
        id: 3,
        question: "How long does shipping take?",
        answer:
          "Shipping times vary depending on the destination country, shipping method, customs procedures, and port schedules.",
      },
      {
        id: 4,
        question: "Can I track my shipment?",
        answer:
          "Yes. Shipping information and tracking details are shared once your order has been dispatched.",
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
          "We work with trusted producers and processing stations while coordinating quality inspections before export.",
      },
      {
        id: 2,
        question: "Do you provide quality reports?",
        answer:
          "Yes. Quality information and supporting documentation can be provided depending on the coffee and customer requirements.",
      },
      {
        id: 3,
        question: "Do you offer certified coffee?",
        answer:
          "Certified coffee may be available depending on the producer and harvest. Please contact us for current availability.",
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
          "Payment methods are discussed during the quotation process and follow mutually agreed commercial terms.",
      },
      {
        id: 2,
        question: "Can I become a long-term sourcing partner?",
        answer:
          "Absolutely. We welcome long-term relationships with importers and businesses seeking consistent Ethiopian coffee supply.",
      },
      {
        id: 3,
        question: "How can I contact your export team?",
        answer:
          "You can reach us through our contact page or email us directly. Our team will respond as quickly as possible.",
      },
    ],
  },
];
