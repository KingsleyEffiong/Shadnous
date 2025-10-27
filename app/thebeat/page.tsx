"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoyaltyForLiveAudiences() {
  return (
    <section className="relative py-52 bg-gradient-to-br from-[#0E0E10] via-[#131317] to-[#0E0E10] text-white overflow-hidden">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] to-[#67E8F9]">
            Loyalty for live audiences:
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Personalise every event and unlock genuine fan connections.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-[#06B6D4]/50 hover:bg-[#06B6D4]/10 text-white font-medium transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { stat: "67%", desc: "Interact with pre-saves on the platform" },
            {
              stat: "225%",
              desc: "Average increase in engagement using automated fan tagging",
            },
            {
              stat: "50%",
              desc: "of active pass holders purchase 2 pre-sale tickets",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-4xl font-bold text-[#06B6D4]">{item.stat}</h3>
              <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6"
        >
          <h3 className="text-2xl font-semibold text-white">
            Not another broadcast channel
          </h3>
          <p>
            On our journey towards creating a platform where fans can feel truly
            seen and prioritised, we aim to make engagement effortless with{" "}
            <span className="text-[#06B6D4] font-semibold">The Beat</span> — our
            personalisation engine that keeps your audience’s rhythm alive.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {[
              {
                title: "Treat fans as individuals",
                desc: "Group your fans based on their interests, preferences, and engagement authenticity.",
              },
              {
                title: "One-click personalisation",
                desc: "Deliver relevant drops giving fans first access before general release.",
              },
              {
                title: "Work smarter not harder",
                desc: "Automate audience creation and reduce management effort with smart insights.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Why “The Beat”?
            </h3>
            <p>
              <span className="text-[#06B6D4] font-semibold">The Beat</span>{" "}
              symbolises the rhythm that keeps fans connected — like the
              heartbeat of music. It sets the tempo for how fans interact with
              events, artists, and brands, guiding a collective experience that
              feels alive and authentic.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
