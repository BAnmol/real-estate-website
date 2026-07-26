export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How accurate are the 3D walkthroughs?",
    answer:
      "Every 3D tour is built from real on-site laser scans and photography — not renders — so what you see online matches the property to the centimeter.",
  },
  {
    question: "Are your listings RERA registered?",
    answer:
      "Yes. Every property on ARIS is verified against its state RERA registration before it goes live, so you can browse with confidence.",
  },
  {
    question: "Can I schedule an in-person visit after the 3D tour?",
    answer:
      "Absolutely. Once you've shortlisted a home in 3D, your dedicated agent will arrange a site visit at a time that works for you.",
  },
  {
    question: "Do you help with home loans?",
    answer:
      "We partner with leading Indian banks and NBFCs to help you get pre-approved financing before you even step foot on-site.",
  },
  {
    question: "Is there a fee to browse or tour properties in 3D?",
    answer:
      "No — browsing, 3D tours, and virtual staging are completely free for buyers. We're paid by our developer and seller partners.",
  },
];
