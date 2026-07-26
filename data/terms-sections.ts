export type BodyItem =
  | { type: "paragraph"; content: string; muted?: boolean }
  | { type: "list"; content: string }
  | { type: "contact" };

export type Section = {
  num: string;
  title: string;
  body: BodyItem[];
};

export type ContactInfo = {
  email: string;
  phone: string;
  address: string;
  emailHref: string;
  phoneHref: string;
  addressHref: string;
};
export const SECTIONS: Section[] = [
  {
    num: "01",
    title: "Introduction & Acceptance",
    body: [
      {
        type: "paragraph",
        content:
          "These Terms of Use (“Terms”) govern access to and use of sahwacoffee.com (the “Website”), operated by Sahwa Coffee (“we,” “us,” “our”). By using the Website, you accept these Terms. If you don't agree, please don't use the Website.",
      },
    ],
  },
  {
    num: "02",
    title: "Who We Are",
    body: [
      {
        type: "paragraph",
        content:
          "Sahwa Coffee is an export facilitator based in Ethiopia. We are not a coffee farm or producer. We act as an intermediary connecting independent Ethiopian coffee farms and suppliers with buyers abroad, and coordinating the export process on their behalf.",
      },
      {
        type: "paragraph",
        content:
          "Any mention of origin, farms, cooperatives, or growing regions describes our sourcing partners. It does not mean Sahwa Coffee owns, operates, or exclusively controls any farm or production facility.",
      },
    ],
  },
  {
    num: "03",
    title: "Nature of the Website & Services",
    body: [
      {
        type: "list",
        content:
          "The Website is informational — it introduces Sahwa Coffee, our sourcing network, and our export services.",
      },
      {
        type: "list",
        content:
          "The Website is inquiry-based. A contact form, inquiry request, or newsletter sign-up does not create a binding order, contract, or sale.",
      },
      {
        type: "list",
        content:
          "Pricing, quantities, quality specs, shipping, and payment are all finalized separately, in writing, between Sahwa Coffee and the buyer outside the Website.",
      },
      {
        type: "list",
        content:
          "Nothing on the Website is a binding offer to sell coffee or any other product.",
      },
    ],
  },
  {
    num: "04",
    title: "Sourcing & Product Information",
    body: [
      {
        type: "list",
        content:
          "Coffee is sourced from independent third-party farms and suppliers in Ethiopia. Availability, harvest volumes, and quality vary by season and sit outside our direct control.",
      },
      {
        type: "list",
        content:
          "Descriptions, images, origin details, and grading on the Website are for general reference and may be updated without notice.",
      },
      {
        type: "list",
        content:
          "Final quality, quantity, and specification of any shipment are confirmed directly with the buyer before export, and may be subject to independent inspection or certification as agreed between the parties.",
      },
    ],
  },
  {
    num: "05",
    title: "Export & Regulatory Compliance",
    body: [
      {
        type: "list",
        content:
          "International coffee trade is subject to the laws, licensing, and regulations of both Ethiopia and the buyer's country including customs, import duties, and phytosanitary requirements.",
      },
      {
        type: "list",
        content:
          "Sahwa Coffee reasonably assists with export-side documentation. The buyer is responsible for compliance with import requirements, duties, and regulations in their own country.",
      },
      {
        type: "list",
        content:
          "We don't guarantee any product can be legally imported into a specific country, and we're not liable for delays, seizures, or denial of entry caused by the buyer's local regulations.",
      },
    ],
  },
  {
    num: "06",
    title: "Use of the Website",
    body: [
      { type: "paragraph", content: "By using the Website, you agree not to:" },
      {
        type: "list",
        content:
          "Use it for any unlawful purpose or in violation of these Terms.",
      },
      {
        type: "list",
        content:
          "Submit false, misleading, or fraudulent inquiries or information.",
      },
      {
        type: "list",
        content:
          "Interfere with, disrupt, or attempt to compromise its security.",
      },
      {
        type: "list",
        content:
          "Copy or repurpose Website content for commercial use without written permission.",
      },
    ],
  },
  {
    num: "07",
    title: "Intellectual Property",
    body: [
      {
        type: "paragraph",
        content:
          "All Website content text, logos, images, graphics, layout belongs to Sahwa Coffee or its licensors and is protected under applicable IP law. Reproduction or commercial use requires our prior written consent.",
      },
    ],
  },
  {
    num: "08",
    title: "Third-Party Links & Services",
    body: [
      {
        type: "paragraph",
        content:
          "The Website may reference third-party services such as WhatsApp Business, social platforms, or email. We aren't responsible for their content or practices, and your use of them is governed by their own terms.",
      },
    ],
  },
  {
    num: "09",
    title: "Disclaimer of Warranties",
    body: [
      {
        type: "paragraph",
        content:
          "The Website is provided “as is” and “as available,” without warranties of any kind express or implied including accuracy, completeness, or fitness for a particular purpose. We don't warrant uninterrupted, error-free, or secure access.",
      },
    ],
  },
  {
    num: "10",
    title: "Limitation of Liability",
    body: [
      {
        type: "paragraph",
        content:
          "To the fullest extent permitted by law, Sahwa Coffee isn't liable for indirect, incidental, special, or consequential damages arising from Website use. Liability tied to an actual export transaction is governed solely by the separate written export agreement with the buyer not by these Terms.",
      },
    ],
  },
  {
    num: "11",
    title: "Indemnification",
    body: [
      {
        type: "paragraph",
        content:
          "You agree to indemnify and hold harmless Sahwa Coffee, its owners, employees, and partners from claims, damages, or expenses arising from your misuse of the Website or breach of these Terms.",
      },
    ],
  },
  {
    num: "12",
    title: "Privacy",
    body: [
      {
        type: "paragraph",
        content:
          "Information submitted through inquiry forms, the contact form, or newsletter sign-up is handled per our Privacy Policy. Submitting your information means you consent to its collection and use as described there.",
      },
    ],
  },
  {
    num: "13",
    title: "Governing Law & Dispute Resolution",
    body: [
      {
        type: "list",
        content:
          "These Terms are governed primarily by the laws of Ethiopia, where Sahwa Coffee is based.",
      },
      {
        type: "list",
        content:
          "For export transactions with a foreign buyer, the applicable laws of the buyer's country may also apply to that transaction, as agreed in the separate export contract.",
      },
      {
        type: "list",
        content:
          "Disputes are first addressed through good-faith negotiation before any formal proceedings.",
      },
    ],
  },
  {
    num: "14",
    title: "Changes to These Terms",
    body: [
      {
        type: "paragraph",
        content:
          "We may update these Terms as our services or legal requirements change. The “Last Updated” date above reflects the latest revision. Continued use of the Website after changes go live means you accept the update.",
      },
    ],
  },
  {
    num: "15",
    title: "Contact Us",
    body: [
      { type: "paragraph", content: "Questions about these Terms:" },
      { type: "contact" },
    ],
  },
];

export const CONTACT: ContactInfo = {
  email: "legal@sahwacoffee.com",
  phone: "+251-911-111-111",
  address: "Addis Ababa, Ethiopia",
  emailHref: "mailto:legal@sahwacoffee.com",
  phoneHref: "tel:+251-911-111-111",
  addressHref:
    "https://www.google.com/maps/search/?api=1&query=Addis+Ababa%2C+Ethiopia",
};
