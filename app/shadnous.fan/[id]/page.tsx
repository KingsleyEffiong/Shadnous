"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Music2, ArrowLeft, Sparkles, Crown, Shield } from "lucide-react";

export default function MusicianPage() {
  const { id } = useParams();
  const name = id;
  const capitalized = name.toUpperCase();
  const capitalizedFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);

  const tiers = [
    {
      name: "Basic",
      color: "from-[#00C8FF]/40 via-[#00C8FF]/15 to-transparent",
      border: "from-[#00C8FF] to-[#7B61FF]",
      icon: Star,
      text: "Access to community, early updates & fan drops.",
    },
    {
      name: "Pro",
      color: "from-[#7B61FF]/40 via-[#00C8FF]/15 to-transparent",
      border: "from-[#7B61FF] to-[#00C8FF]",
      icon: Shield,
      text: "Includes Basic + exclusive merch discounts & livestreams.",
    },
    {
      name: "VIP",
      color: "from-[#FF4AED]/40 via-[#7B61FF]/20 to-[#00C8FF]/10",
      border: "from-[#FF4AED] to-[#7B61FF]",
      icon: Crown,
      text: "All perks + meetups, signed collectibles & VIP drops.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tiers.length);
    }, 4000); // changes every 4s
    return () => clearInterval(interval);
  }, [tiers.length]);

  const tier = tiers[index];
  const Icon = tier.icon;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03040A] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={`/images/${capitalizedFirstLetter}/${id}.jpg`}
          alt={capitalized}
          fill
          priority
          className="object-cover brightness-[0.35] blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b14]/90 via-[#050505]/70 to-[#000]/95" />
        <div className="absolute inset-0 bg-[url('/grain.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute -top-32 -left-40 w-[400px] h-[400px] bg-[#00C8FF]/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF4AED]/20 blur-[180px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-8 lg:px-16 gap-12 py-28">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl"
        >
          <Link
            href="/shadnous.fan"
            className="flex items-center gap-2 text-[#00C8FF] hover:text-[#7B61FF] mb-6 transition-colors"
          >
            <ArrowLeft size={18} /> Back to Memberships
          </Link>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            {capitalized}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C8FF] via-[#7B61FF] to-[#FF4AED]">
              Pass
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Step into the world of{" "}
            <span className="text-[#00C8FF] font-semibold">{capitalized}</span>{" "}
            — unlock behind-the-scenes access, early tickets, and premium
            rewards through our exclusive glass-tier membership cards.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-8 py-3 rounded-full text-sm sm:text-base font-semibold shadow-[0_0_30px_rgba(0,200,255,0.3)] 
                       bg-gradient-to-r from-[#00C8FF] via-[#7B61FF] to-[#FF4AED]
                       hover:shadow-[#FF4AED]/40 transition-all duration-300"
          >
            Get Access Card
          </motion.button>
          {/* How it works */}
          <div className="mt-14">
            <h2 className="text-xl font-semibold mb-3">How it works</h2>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#00C8FF]" /> Choose your tier and
                join the fan club.
              </li>
              <li className="flex items-center gap-2">
                <Music2 className="w-4 h-4 text-[#00C8FF]" /> Earn access,
                perks, and collectibles.
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00C8FF]" /> Experience music
                like never before.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Shuffling Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-1 relative flex justify-center items-center"
        >
          <div className="relative w-[380px] h-[240px] perspective-[2000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, x: 100, rotateY: 30 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -30 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute w-full h-full rounded-3xl overflow-hidden 
                            bg-gradient-to-br ${tier.color} border border-white/10 
                            shadow-[0_0_60px_rgba(0,200,255,0.15)] backdrop-blur-2xl`}
              >
                {/* Gradient border animation */}
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute inset-0 rounded-3xl border-[1.5px] border-transparent bg-gradient-to-r ${tier.border} bg-clip-border`}
                />

                {/* Background image overlay */}
                <Image
                  src={`/images/${capitalizedFirstLetter}/${id}.jpg`}
                  alt={capitalized}
                  fill
                  className="object-cover opacity-25 mix-blend-overlay"
                />

                {/* Card content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#00C8FF]" />
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                    </div>

                    <div className="w-10 h-10 relative">
                      <Image
                        src="/logo.png"
                        alt="Shadnous Logo"
                        fill
                        className="object-contain opacity-80"
                      />
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mt-3">{tier.text}</p>

                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Status:{" "}
                      <span className="text-[#00C8FF] font-semibold">
                        Available
                      </span>
                    </p>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#00C8FF] to-[#FF4AED] flex items-center justify-center">
                      <Music2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
