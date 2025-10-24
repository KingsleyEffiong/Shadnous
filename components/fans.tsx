"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FansImpactSection() {
  return (
    <section className="relative bg-black text-white py-20 md:py-28 overflow-hidden">
      {/* Ambient Gradient Lights */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#00C8FF]/10 blur-[150px] md:blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#00C8FF]/10 blur-[150px] md:blur-[180px] rounded-full" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* LEFT: Overview & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Direct from the official source — we run memberships that{" "}
            <span className="text-[#00C8FF] drop-shadow-[0_0_8px_#00C8FF]">
              prioritise loyal fans
            </span>
            , making it easier to be in the audience.
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
            Empowering real fans with early access, fair queue systems, and
            exclusive drops from their favourite artists and venues.
          </p>

          {/* Stats (responsive grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { percent: "93%", label: "Rate the service very easy to use*" },
              { percent: "78%", label: "Rate the experience 5 star*" },
              { percent: "84%", label: "Would recommend to a friend*" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                className="backdrop-blur-2xl bg-white/5 border border-[#00C8FF]/20 rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(0,200,255,0.2)] hover:shadow-[0_0_35px_rgba(0,200,255,0.3)] transition-all duration-500"
              >
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#00C8FF] mb-2">
                  {stat.percent}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Story Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-2xl bg-gradient-to-br from-[#00151C]/90 to-[#002B36]/60 border border-[#00C8FF]/20 rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(0,200,255,0.2)] relative overflow-hidden"
        >
          {/* Accent glow bar */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00C8FF] via-[#4FDFFF] to-transparent" />

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00C8FF] mb-4">
            It’s time to change the status quo
          </h3>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            The current system makes you scramble for tickets without any
            assurance of fairness or transparency — hours wasted in virtual
            queues for a chance that might never come.
          </p>

          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            It’s an experience that hasn’t changed in over 15 years. We
            prioritise fans' time and protect how they get tickets first.
          </p>

          <div className="text-xs sm:text-sm text-gray-400 italic">
            *Results above are from a recent survey of fans who have used the
            service.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
