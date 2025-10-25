"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const musicians = [
  {
    name: "Spencer Crandall",
    img: "/images/Spencer/spencer.jpg",
    pass: "Spencer Pass",
  },
  {
    name: "Chancey Williams",
    img: "/images/Chancey/chancey.jpg",
    pass: "Chancey Pass",
  },
  {
    name: "Chris Lane",
    img: "/images/Chris/chris.jpg",
    pass: "Chris Pass",
  },
  {
    name: "Clay Walker",
    img: "/images/Clay/clay.jpg",
    pass: "Clay Pass",
  },
  {
    name: "Joe Nichols",
    img: "/images/Joe/joe.jpg",
    pass: "Nichols Pass",
  },
  {
    name: "Greylan James",
    img: "/images/Greylan/greylan.jpg",
    pass: "James Pass",
  },
  {
    name: "Gabby Barrett",
    img: "/images/Gabby/gabby.jpg",
    pass: "Gabby Pass",
  },
  {
    name: "Struggle Jennings",
    img: "/images/Struggle/struggle.jpg",
    pass: "Struggle Pass",
  },
  { name: "Jon Pardi", img: "/images/Jon/jon.jpg", pass: "Jon Pass" },
  {
    name: "Jennie Fricke",
    img: "/images/Jennie/jennie.jpg",
    pass: "Jennie Pass",
  },
  { name: "Moe Brandy", img: "/images/Moe/moe.jpg", pass: "Moe Pass" },
  {
    name: "Hank Williams Jr.",
    img: "/images/Hank/hank.jpg",
    pass: "Hank Pass",
  },
];

export default function MembershipList() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white px-6 py-32 flex flex-col items-center">
      {/* Soft ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-[#050505]" />
      <div className="absolute inset-0 bg-[url('/grain.svg')] opacity-10 pointer-events-none" />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
      >
        Discover Your{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C8FF] via-[#7B61FF] to-[#FF4AED]">
          Artist Membership
        </span>
      </motion.h1>

      {/* Card grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full relative z-10">
        {musicians.map((m, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0,200,255,0.25)",
            }}
            className="group relative overflow-hidden rounded-3xl bg-white/[0.05] border border-white/[0.08] 
                       hover:border-[#00C8FF]/60 transition-all duration-500 backdrop-blur-xl cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={m.img}
                alt={m.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between relative z-10">
              <div>
                <h2 className="text-2xl font-semibold mb-1">{m.name}</h2>
                <p className="text-sm text-gray-400">{m.pass}</p>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  router.push(
                    `/shadnous.fan/${m.name.split(" ")[0].toLowerCase()}`
                  )
                }
                className="mt-5 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full 
             bg-gradient-to-r from-[#00C8FF] via-[#7B61FF] to-[#FF4AED]
             text-sm font-semibold text-white shadow-lg shadow-[#00C8FF]/30
             hover:shadow-[#FF4AED]/40 transition-all duration-300"
              >
                Get Access Card
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Glow Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-[#00C8FF]/20 via-transparent to-transparent" />
            <Sparkles className="absolute top-4 right-4 w-5 h-5 text-[#00C8FF] opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Footer caption */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-20 text-gray-400 text-sm text-center max-w-md"
      >
        Tap on an artist to unlock their exclusive fan world and get your access
        card.
      </motion.p>
    </div>
  );
}
