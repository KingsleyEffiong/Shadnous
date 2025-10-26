"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Music2, Guitar, Mic2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center text-center py-56">
      {/* Background Image */}
      <Image
        src="/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg"
        alt="Concert crowd"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />

      {/* Dark overlay with cyan gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,200,255,0.25)_0%,_transparent_70%)] z-10" />

      {/* Floating glowing circles */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-[#00C8FF]/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-[#00C8FF]/10 rounded-full blur-3xl right-[20%] bottom-[15%]"
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🎵 Animated Musical Icons (Lucide) */}
      <motion.div
        className="absolute text-[#00C8FF]/80 z-20"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: "15%", top: "25%" }}
      >
        <Music2 size={50} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="absolute text-[#4FDFFF]/80 z-20"
        animate={{
          y: [0, 40, 0],
          rotate: [360, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ right: "18%", top: "35%" }}
      >
        <Guitar size={52} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="absolute text-[#00C8FF]/70 z-20"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: "48%", bottom: "20%" }}
      >
        <Mic2 size={54} strokeWidth={1.2} />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-30 text-white max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Elevate <span className="text-[#00C8FF]">Your Music</span> Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-300 text-lg mb-8"
        >
          Unlock private access to your favorite artists. Enjoy exclusive drops,
          updates, meet-and-greets, and unforgettable experiences — all with
          your Fan Access Card.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center space-x-4"
        >
          <Link
            href="/shadnous.fan"
            className="rounded-full bg-gradient-to-r from-[#00C8FF] to-[#4FDFFF] text-black font-semibold px-6 py-3 hover:shadow-[0_0_25px_#00C8FF] transition-all duration-300"
          >
            Join Now
          </Link>
          <Link
            href="/shadnous.fan"
            className="rounded-full border border-[#00C8FF]/60 text-[#00C8FF] hover:bg-[#00C8FF]/10 hover:shadow-[0_0_15px_#00C8FF] px-6 py-3 transition-all duration-300"
          >
            Explore
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
