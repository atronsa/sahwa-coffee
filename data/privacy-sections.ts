import { CONTACT, type BodyItem, type Section } from "./terms-sections";

export const PRIVACY_SECTIONS: Section[] = [
  {
    num: "01",
    title: "Introduction",
    body: [
      { type: 'paragraph', content: "This Privacy Policy explains how Sahwa Coffee (“we,” “us,” “our”) collects, uses, and protects information you share through sahwacoffee.com (the “Website”). By using the Website, you agree to the practices described here." },
    ],
  },
  {
    num: "02",
    title: "Information We Collect",
    body: [
      { type: 'list', content: "Contact details you submit through inquiry, contact, or newsletter forms name, email, phone, company, and message." },
      { type: 'list', content: "Technical data collected automatically when you browse IP address, browser type, device, and pages visited via analytics tools." },
      { type: 'list', content: "Communication history if you reach out to us via WhatsApp Business or email." },
      { type: 'paragraph', content: "We do not collect payment information through the Website. All transactions are inquiry-based and finalized separately, off-site.", muted: true },
    ],
  },
  {
    num: "03",
    title: "How We Use Your Information",
    body: [
      { type: 'list', content: "Respond to inquiries and export requests." },
      { type: 'list', content: "Send newsletter updates sourcing, harvests, or company news if you've subscribed." },
      { type: 'list', content: "Improve the Website's content and performance." },
      { type: 'list', content: "Meet legal, accounting, or export-documentation obligations." },
    ],
  },
  {
    num: "04",
    title: "Cookies & Analytics",
    body: [
      { type: 'paragraph', content: "We use tools like Google Analytics and Google Search Console to understand how visitors use the Website. These tools use cookies to collect anonymized, aggregate usage data. You can disable cookies through your browser settings; doing so may limit some Website features." },
    ],
  },
  {
    num: "05",
    title: "How We Share Information",
    body: [
      { type: 'list', content: "Trusted service providers who help us operate the Website such as hosting, email delivery, and analytics bound by confidentiality." },
      { type: 'list', content: "Logistics or compliance partners, only as needed to process an actual export transaction you've engaged us for." },
      { type: 'list', content: "Legal or regulatory authorities, if required by law." },
      { type: 'paragraph', content: "We do not sell or rent your personal information to third parties for marketing purposes.", muted: true },
    ],
  },
  {
    num: "06",
    title: "International Data Transfers",
    body: [
      { type: 'paragraph', content: "Sahwa Coffee is based in Ethiopia, and many of our buyers are located abroad. Information you submit may be processed or stored on servers outside your home country. By using the Website, you consent to this transfer." },
    ],
  },
  {
    num: "07",
    title: "Data Retention",
    body: [
      { type: 'paragraph', content: "We keep inquiry and newsletter data for as long as needed to respond to you, maintain business records, or meet legal requirements. You can request deletion of your information at any time see Section 9." },
    ],
  },
  {
    num: "08",
    title: "Data Security",
    body: [
      { type: 'paragraph', content: "We use reasonable technical and organizational measures including SSL encryption and restricted access to protect your information. No method of transmission over the internet is completely secure, and we can't guarantee absolute security." },
    ],
  },
  {
    num: "09",
    title: "Your Rights & Choices",
    body: [
      { type: 'list', content: "Ask what personal information we hold about you." },
      { type: 'list', content: "Request correction of inaccurate details." },
      { type: 'list', content: "Request deletion of your information, where feasible." },
      { type: 'list', content: "Unsubscribe from the newsletter at any time via the link in each email." },
      { type: 'paragraph', content: "To exercise any of these rights, contact us using the details below.", muted: true },
    ],
  },
  {
    num: "10",
    title: "Children's Privacy",
    body: [
      { type: 'paragraph', content: "The Website is intended for business use by adults. We do not knowingly collect information from children under 18. If you believe a child has provided us information, please contact us and we'll remove it." },
    ],
  },
  {
    num: "11",
    title: "Changes to This Policy",
    body: [
      { type: 'paragraph', content: "We may update this Privacy Policy as our services or legal requirements change. The “Last Updated” date above reflects the latest revision. Continued use of the Website after changes go live means you accept the update." },
    ],
  },
  {
    num: "12",
    title: "Contact Us",
    body: [
      { type: 'paragraph', content: "Questions about this Privacy Policy, or a request to access, correct, or delete your information:" },
      { type: 'contact' },
    ],
  },
];

export { CONTACT };
export type { BodyItem, Section };