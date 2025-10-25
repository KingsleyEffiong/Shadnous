"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Bell, Smartphone, Users, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandsSection() {
  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-52 px-6 md:px-16">
      {/* Subtle glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00ffe0]/10 blur-[200px] rounded-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#0a0a0a]/90 to-[#000000]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Elevate{" "}
            <span className="text-[#00FFE0] drop-shadow-[0_0_15px_#00FFE0]">
              product launches
            </span>{" "}
            and brand experiences
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Unlocking first access to live event experiences and limited edition
            products with drops powered by Apple or Google Wallet.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Button className="bg-[#00FFE0] text-black font-semibold px-8 py-6 rounded-full hover:bg-[#00E0C8]/90 shadow-[0_0_25px_#00FFE0] transition-all duration-300">
              Learn More
            </Button>
            <Button
              variant="outline"
              className="border-[#00FFE0] text-[#00FFE0] font-semibold px-8 py-6 rounded-full hover:bg-[#00FFE0]/10 transition-all duration-300 hover:text-white"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,255,224,0.1)]"
        >
          <Image
            src="/green-liu-U8ayDS7I0iw-unsplash.jpg"
            alt="Brand experience visual"
            width={1400}
            height={800}
            className="object-cover w-full h-full opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </motion.div>

        {/* STATS CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <Users size={28} className="text-[#00FFE0]" />,
              title: "1st party audiences",
              desc: "Collect 1st party data on audiences to segment and re-engage.",
            },
            {
              icon: <Bell size={28} className="text-[#00FFE0]" />,
              title: "Direct push notifications",
              desc: "Push notifications have a 21% open rate, compared to 3% from email.",
            },
            {
              icon: <Smartphone size={28} className="text-[#00FFE0]" />,
              title: "High retention",
              desc: "Once in the smartphone wallet, we see a less than 1% uninstall rate.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {card.icon}
                <h3 className="text-lg font-semibold text-[#00FFE0]">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CONNECTION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Building connections that last
          </h3>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            With the pass in the digital wallet, this unlocks a way to build a
            repeat relationship with the customer through push notifications and
            rewards incentives — reducing costs to reach them.
          </p>
        </motion.div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">
          {[
            {
              icon: <Zap size={30} className="text-[#00FFE0]" />,
              title: "Simple sign up",
              desc: "A custom-built onboarding journey lets customers click a link or scan a QR code to download a fully branded wallet pass.",
            },
            {
              icon: <Star size={30} className="text-[#00FFE0]" />,
              title: "Product drops",
              desc: "Deliver timely and relevant drops that notify fans about early access to products via push notification.",
            },
            {
              icon: <ArrowRight size={30} className="text-[#00FFE0]" />,
              title: "Brand experiences",
              desc: "Create event passes for launches or experiences, enabling insight into who attended and completing the campaign loop.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-4 mb-5">
                {item.icon}
                <h4 className="text-xl font-semibold text-[#00FFE0]">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Music Examples
          </h3>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Get in touch — our audience segmentation engine,{" "}
            <span className="text-[#00FFE0] font-semibold">The Beat</span>, tags
            every interaction in real-time to deliver insights and notify
            customers directly with personalised, relevant, and timely messages.
          </p>
          <Button className="bg-[#00FFE0] text-black font-semibold px-8 py-6 rounded-full hover:bg-[#00E0C8]/90 shadow-[0_0_25px_#00FFE0] transition-all duration-300">
            Get in touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
