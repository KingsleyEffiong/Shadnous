"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the Fan Access Card?",
    answer:
      "The Fan Access Card is your digital pass to exclusive artist updates, events, and drops — all in one place.",
  },
  {
    question: "How do I get my card?",
    answer:
      "Just enter your email, and your personalized Fan Access Card will be generated instantly.",
  },
  {
    question: "Do I need an account or sign-up?",
    answer:
      "No sign-ups or logins — simply get your card and start receiving updates right away.",
  },
  {
    question: "What do I get with the card?",
    answer:
      "You’ll receive insider news, show alerts, merch drops, and special updates directly from the artist.",
  },
  {
    question: "Can I get cards for multiple artists?",
    answer: "Yes, you can get a unique card for each artist you support.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#050505] text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00ffe0]/10 blur-[200px] rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <HelpCircle className="text-[#00ffe0]" size={40} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-[#00ffe0]">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about Fan Access Cards, artist
            memberships, and how to get the best ticket access.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/10 transition-all duration-300"
              >
                <span className="font-semibold text-white text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={22} className="text-[#00ffe0]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-gray-300 text-sm md:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
