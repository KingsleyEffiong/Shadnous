"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ticket, Clock3, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AdvancedRegistration() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#111111] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ffe0]/10 blur-[160px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-tight"
        >
          HERE'S HOW{" "}
          <span className="text-[#00ffe0]">ADVANCED TICKET REGISTRATION</span>{" "}
          WORKS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/10 transition-all"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#00ffe0]/10 border border-[#00ffe0]/30">
                <Ticket size={34} className="text-[#00ffe0]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#00ffe0] text-center">
              Select tickets in advance
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              When a tour is announced, fans have an advanced registration
              window to select tickets for the shows they want to go to.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-gradient-to-br from-[#00ffe0]/10 to-[#00ffe0]/5 border border-[#00ffe0]/20 rounded-2xl p-8 backdrop-blur-xl hover:from-[#00ffe0]/20 transition-all"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#00ffe0]/10 border border-[#00ffe0]/30">
                <Clock3 size={34} className="text-[#00ffe0]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#00ffe0] text-center">
              Saving fans' time
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              With a membership pass already in their wallet, it’s just 3 clicks
              to select the tickets they want to register for.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/10 transition-all"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#00ffe0]/10 border border-[#00ffe0]/30">
                <Users size={34} className="text-[#00ffe0]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#00ffe0] text-center">
              Fair for all
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              Everyone has the same amount of time, and we prioritise everyone’s
              first choice — so as many fans get tickets as possible.
            </p>
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-16 gap-6">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#00ffe0] text-black font-semibold flex items-center gap-2 hover:bg-[#00e0c8] transition"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
