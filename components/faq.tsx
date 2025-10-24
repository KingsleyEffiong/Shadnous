"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is Advanced Ticket Registration?",
    answer:
      "Advanced Ticket Registration is a system that allows real fans to register their interest in tickets before general sales begin. It ensures tickets reach actual fans instead of bots or resellers.",
  },
  {
    question: "How do I register for tickets?",
    answer:
      "When an artist announces a tour, visit the registration page and select the shows you’d like to attend. You’ll receive an email confirmation once registration closes, and you’ll be notified if you’re selected to buy tickets.",
  },
  {
    question: "Is registering a guarantee that I’ll get tickets?",
    answer:
      "Registration does not guarantee a ticket. It increases your chances by prioritizing loyal fans, but tickets are still limited and distributed fairly based on demand.",
  },
  {
    question: "Do I need to pay to register?",
    answer:
      "No — registration is completely free. You’ll only need to pay once you’re selected and invited to complete your ticket purchase.",
  },
  {
    question: "How are fans prioritized?",
    answer:
      "We prioritize real fans based on fair algorithms that prevent scalping and ensure that active, verified members get better access opportunities.",
  },
  {
    question: "Can I register for multiple shows?",
    answer:
      "Yes! You can select multiple shows during the registration window. However, approval depends on demand and availability per show.",
  },
  {
    question: "What happens if I miss the registration window?",
    answer:
      "If you miss the registration window, you can still try to buy tickets during general sales — but early registration increases your chances significantly.",
  },
  {
    question: "How will I know if I’ve been selected?",
    answer:
      "You’ll receive an official email with purchase instructions and your access link if selected. Make sure to check your spam/junk folder just in case!",
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
            Find answers to common questions about advanced registration,
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
