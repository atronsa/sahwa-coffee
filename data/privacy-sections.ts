import { CONTACT, type BodyItem, type Section } from "./terms-sections";

export const PRIVACY_SECTIONS: Section[] = [
  {
    num: "01",
    title: "Introduction & Acceptance",
    body: [
      {
        type: "paragraph",
        content:
          'Welcome to Sahwa Coffee ("Sahwa Coffee," "we," "our," or "us"). These Terms of Use ("Terms") govern your access to and use of www.sahwacoffee.com (the "Website"). By accessing or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must discontinue using the Website immediately.',
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
          "Sahwa Coffee is an Ethiopian coffee export company dedicated to supplying premium Ethiopian coffee to international buyers. We work closely with trusted farmers, cooperatives, washing stations, and suppliers across Ethiopia to source high-quality coffee while coordinating the export process from origin to destination.",
      },
      {
        type: "paragraph",
        content:
          "References to coffee origins, farms, cooperatives, or producing regions on this Website describe our sourcing network and business relationships. Unless expressly stated otherwise, Sahwa Coffee does not claim ownership of every farm, cooperative, or processing facility mentioned.",
        muted: true,
      },
    ],
  },
  {
    num: "03",
    title: "Nature of the Website & Services",
    body: [
      {
        type: "paragraph",
        content:
          "This Website is provided for informational purposes and to introduce Sahwa Coffee, our products, and our export services.",
      },
      {
        type: "paragraph",
        content:
          "The Website serves as an inquiry platform. Submitting an inquiry form, requesting a quotation, subscribing to our newsletter, or contacting us through the Website does not create a legally binding agreement, purchase order, or contract.",
      },
      {
        type: "paragraph",
        content:
          "All commercial transactions, including pricing, quantities, quality specifications, payment terms, shipping arrangements, and delivery schedules, are negotiated and confirmed separately through written agreements between Sahwa Coffee and the buyer.",
      },
      {
        type: "paragraph",
        content:
          "Nothing contained on this Website constitutes a legally binding offer to sell coffee or any other product.",
        muted: true,
      },
    ],
  },
  {
    num: "04",
    title: "Sourcing & Product Information",
    body: [
      {
        type: "paragraph",
        content:
          "Sahwa Coffee sources coffee from trusted Ethiopian farmers, cooperatives, processors, and suppliers. Because coffee is an agricultural product, availability, harvest volumes, quality, grades, and flavor profiles may vary depending on seasonal conditions and regional production.",
      },
      {
        type: "paragraph",
        content:
          "All product descriptions, photographs, tasting notes, processing methods, origin information, and quality grades displayed on the Website are provided for general informational purposes only and may be updated without prior notice.",
      },
      {
        type: "paragraph",
        content:
          "The final quality, quantity, specifications, and availability of coffee are confirmed directly with the buyer before shipment and may be subject to independent inspection or certification where agreed.",
        muted: true,
      },
    ],
  },
  {
    num: "05",
    title: "Export & Regulatory Compliance",
    body: [
      {
        type: "paragraph",
        content:
          "International coffee trade is governed by the export laws and regulations of Ethiopia as well as the import laws, customs requirements, and food safety regulations of the destination country.",
      },
      {
        type: "paragraph",
        content:
          "Sahwa Coffee provides reasonable assistance in preparing export documentation required under Ethiopian regulations. However, the buyer is solely responsible for obtaining any import permits, paying customs duties and taxes, and complying with all legal and regulatory requirements applicable in the destination country.",
      },
      {
        type: "paragraph",
        content:
          "Sahwa Coffee shall not be responsible for shipment delays, customs inspections, import restrictions, or refusal of entry resulting from the laws or regulations of the importing country.",
        muted: true,
      },
    ],
  },
  {
    num: "06",
    title: "Use of the Website",
    body: [
      {
        type: "paragraph",
        content:
          "By using this Website, you agree to use it only for lawful purposes and in accordance with these Terms.",
      },
      { type: "paragraph", content: "You agree not to:" },
      {
        type: "list",
        content: "Use the Website for any unlawful or fraudulent purpose.",
      },
      {
        type: "list",
        content: "Submit false, inaccurate, or misleading information.",
      },
      {
        type: "list",
        content:
          "Attempt to gain unauthorized access to the Website or its systems.",
      },
      {
        type: "list",
        content:
          "Interfere with the security or proper operation of the Website.",
      },
      {
        type: "list",
        content:
          "Copy, reproduce, distribute, or use any Website content for commercial purposes without our prior written permission.",
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
          "All content available on this Website, including text, logos, trademarks, images, graphics, photographs, product descriptions, documents, layouts, and other materials, is the intellectual property of Sahwa Coffee or its licensors and is protected under applicable copyright, trademark, and intellectual property laws.",
      },
      {
        type: "paragraph",
        content:
          "No part of the Website may be copied, reproduced, modified, distributed, published, or used for commercial purposes without the prior written consent of Sahwa Coffee.",
        muted: true,
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
          "The Website may contain links to third-party websites or services, including social media platforms, logistics providers, certification organizations, WhatsApp Business, and other external resources.",
      },
      {
        type: "paragraph",
        content:
          "These links are provided solely for your convenience. Sahwa Coffee does not control or endorse these third-party services and is not responsible for their content, availability, privacy practices, or terms of use. Your use of third-party websites is entirely at your own risk.",
        muted: true,
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
          'The Website and all information provided on it are made available on an "as is" and "as available" basis without any warranties, whether express or implied.',
      },
      {
        type: "paragraph",
        content:
          "While Sahwa Coffee strives to keep all information accurate and up to date, we do not guarantee the completeness, accuracy, reliability, uninterrupted availability, or suitability of the Website or its content.",
      },
      {
        type: "paragraph",
        content:
          "Nothing on this Website should be interpreted as legal, financial, customs, or professional advice.",
        muted: true,
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
          "To the fullest extent permitted by applicable law, Sahwa Coffee shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from or related to the use of this Website.",
      },
      {
        type: "paragraph",
        content:
          "Any liability relating to an actual coffee export transaction shall be governed exclusively by the separate written agreement entered into between Sahwa Coffee and the buyer.",
        muted: true,
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
          "You agree to indemnify, defend, and hold harmless Sahwa Coffee, its directors, employees, representatives, partners, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses arising out of your misuse of the Website, your violation of these Terms, or your infringement of any applicable law or the rights of a third party.",
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
          "Any personal information submitted through our inquiry forms, contact forms, or newsletter subscriptions is collected and processed in accordance with our Privacy Policy.",
      },
      {
        type: "paragraph",
        content:
          "By using the Website and submitting your information, you consent to the collection, use, and storage of your personal information as described in our Privacy Policy.",
        muted: true,
      },
    ],
  },
  {
    num: "13",
    title: "Governing Law & Dispute Resolution",
    body: [
      {
        type: "paragraph",
        content:
          "These Terms shall be governed by and interpreted in accordance with the laws of the Federal Democratic Republic of Ethiopia.",
      },
      {
        type: "paragraph",
        content:
          "In the event of any dispute arising from the use of the Website, both parties agree to first attempt to resolve the matter through good-faith negotiations. Where a resolution cannot be reached, the dispute shall be subject to the jurisdiction of the competent courts of Ethiopia unless otherwise agreed in a separate written export contract.",
        muted: true,
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
          "Sahwa Coffee reserves the right to modify or update these Terms of Use at any time to reflect changes in our business operations, legal obligations, or Website functionality.",
      },
      {
        type: "paragraph",
        content:
          "Any revisions will become effective immediately upon publication on this Website. Your continued use of the Website after such changes constitutes your acceptance of the revised Terms.",
        muted: true,
      },
    ],
  },
];

export { CONTACT };
export type { BodyItem, Section };
