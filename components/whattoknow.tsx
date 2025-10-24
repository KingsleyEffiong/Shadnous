"use client";

import { motion } from "framer-motion";
import { Star, Users, HeartHandshake, Ticket } from "lucide-react";

export default function Fans() {
  const features = [
    {
      title: "More Than Just a Membership Pass",
      text: "For artists who value their live audiences, connect with your true fans and reward them directly.",
      icon: <Ticket className="w-6 h-6 text-[#00C8FF]" />,
    },
    {
      title: "Making It Personal",
      text: "Each fan gets a personalized onboarding experience, they choose what matters most to them.",
      icon: <HeartHandshake className="w-6 h-6 text-[#00C8FF]" />,
    },
    {
      title: "Better Access, Direct Rewards",
      text: "Unlock early tickets, limited drops, and exclusive updates powered by verified fan data.",
      icon: <Star className="w-6 h-6 text-[#00C8FF]" />,
    },
    {
      title: "Personalized Fan Hub",
      text: "A living digital space that reacts to fan behavior, showcasing moments that truly matter.",
      icon: <Users className="w-6 h-6 text-[#00C8FF]" />,
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#020202] to-[#050A0F] text-white py-28 overflow-hidden">
      {/* Glowing background accent */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-[#00C8FF]/20 blur-[180px] rounded-full top-[-100px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px]  blur-[150px] rounded-full bottom-[-100px] right-[-150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-[#00C8FF] to-white bg-clip-text text-transparent"
        >
          Lost in a crowd of followers?
          <br />
          Find your <span className="text-[#00C8FF]">real fans</span>.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Your fans aren’t just numbers, they’re your community. We help you
          know them, reward them, and keep them coming back.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-br from-[#0A0A0A] to-[#0D1115] p-8 rounded-2xl border border-white/10 hover:border-[#00C8FF]/40 hover:shadow-[0_0_40px_#00C8FF40] transition-all duration-500 text-left"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#00C8FF]/10 border border-[#00C8FF]/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
