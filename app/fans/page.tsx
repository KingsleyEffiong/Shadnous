"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FansImpactSection from "@/components/fans";
import AdvancedRegistration from "@/components/advanceregistration";
import FaqSection from "@/components/faq";
import Link from "next/link";

export default function FansPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative  flex items-center justify-center py-52">
        {/* Background image */}
        <Image
          src="/danny-howe-bn-D2bCvpik-unsplash.jpg"
          alt="Fans crowd concert"
          fill
          className="object-cover opacity-30"
          priority
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-[#001B26]/90"></div>

        {/* Animated glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#00C8FF]/20 blur-[150px] rounded-full"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-[15%] right-[5%] w-[300px] h-[300px] bg-[#00C8FF]/10 blur-[100px] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto backdrop-blur-2xl bg-white/5 border border-[#00C8FF]/20 rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(0,200,255,0.2)]"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Prioritising{" "}
              <span className="text-[#00C8FF] drop-shadow-[0_0_15px_#00C8FF]">
                loyal fans
              </span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Direct from the official source — we run memberships for artists
              and venues that prioritise real fans, making it easier to be in
              the audience and part of every moment.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Link
                href="/shadnous.fan"
                className="bg-[#00C8FF] text-black font-semibold px-8 py-6 rounded-full hover:bg-[#00E0FF]/90 shadow-[0_0_30px_#00C8FF] transition-all duration-300"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="border-[#00C8FF] text-[#00C8FF] font-semibold px-8 py-6 rounded-full hover:bg-[#00C8FF]/10 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Floating tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-16 text-[#00C8FF]/80 text-sm uppercase tracking-[0.3em] font-semibold"
          >
            Empowering fans • Strengthening connections • Building moments
          </motion.p>
        </div>
      </section>

      {/* FANS IMPACT SECTION */}
      <section className="relative z-30 bg-gradient-to-b from-black via-[#001520] to-black py-32">
        <FansImpactSection />
      </section>

      {/* ADVANCED REGISTRATION SECTION */}
      <section className="relative z-30 bg-gradient-to-t from-black via-[#001018] to-black py-32">
        <AdvancedRegistration />
      </section>
    </main>
  );
}
