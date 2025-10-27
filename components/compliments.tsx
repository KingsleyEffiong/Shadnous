"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import Link from "next/link";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Thanks so much for all the work on the new release – giving AAA pass holders an early listen has gone down brilliantly – the Discord has gone bonkers!",
      name: "Paul",
      role: "Artist Manager",
    },
    {
      quote:
        "Absolutely loved the way you sold tickets this time. Such less stress!! Thank you 😊",
      name: "Lauren",
      role: "Spencer Crandall Fan",
    },
    {
      quote:
        "The fan engagement tools are a game-changer. It’s like we finally know who our real supporters are, not just followers.",
      name: "Chris",
      role: "Tour Manager",
    },
    {
      quote:
        "I've never felt so connected to an artist before. Getting early access to shows makes me feel like part of the team!",
      name: "Sarah",
      role: "Chris Lane Fan",
    },
    {
      quote:
        "Our last campaign saw double the engagement once we personalized fan messages. This platform just works.",
      name: "Mia",
      role: "Music Label Rep",
    },
    {
      quote:
        "As a venue, this made it so much easier to reach out to the right crowd. We filled seats faster than ever.",
      name: "Tony",
      role: "Venue Partner",
    },
  ];

  const stats = [
    {
      number: "71%",
      text: "Average marketing opt-in with our white label GDPR-compliant tools",
    },
    {
      number: "5bn",
      text: "Devices globally have the Apple or Google Wallet pre-installed for frictionless onboarding",
    },
    {
      number: "91%",
      text: "Typical click to pass download conversion rate as a result",
    },
  ];

  return (
    <section className="relative w-full h-auto py-28 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/artem-bryzgalov-n6NNwX0lRTk-unsplash.jpg"
        alt="Concert background"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85 z-10" />
      <div className="absolute w-[500px] h-[500px] bg-[#00C8FF]/20 blur-[180px] top-1/3 left-1/2 -translate-x-1/2 z-10 rounded-full" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Our Recent <span className="text-[#00C8FF]">Testimonials</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We’ve received incredible feedback from artists, fans, venues, and
          brands who’ve experienced what it means to connect directly with their
          audiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center space-x-4 mb-20"
        >
          <Link
            href="/fans"
            className="rounded-full bg-gradient-to-r from-[#00C8FF] to-[#4FDFFF] text-black font-semibold px-6 py-3 hover:shadow-[0_0_25px_#00C8FF] transition-all duration-300"
          >
            Learn More
          </Link>
          <Link
            href="/shadnous.fan"
            className="rounded-full border border-[#00C8FF]/60 text-[#00C8FF] hover:bg-[#00C8FF]/10 hover:shadow-[0_0_15px_#00C8FF] px-6 py-3 transition-all duration-300"
          >
            Join Us
          </Link>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-xl border border-[#00C8FF]/20 rounded-2xl p-8 text-left hover:border-[#00C8FF]/40 hover:shadow-[0_0_35px_#00C8FF30] hover:-translate-y-2 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 w-6 h-6 text-[#00C8FF]/60" />
              <p className="text-gray-300 italic leading-relaxed mb-6">
                “{item.quote}”
              </p>
              <div>
                <h4 className="text-[#00C8FF] font-semibold text-lg">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-[#00C8FF] to-[#004b66] overflow-hidden"
            >
              {/* Inner card */}
              <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8 h-full flex flex-col justify-center border border-[#00C8FF]/30 group-hover:border-[#00C8FF]/60 transition-all duration-500">
                {/* Cyan ring effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C8FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-3xl" />
                <h3 className="text-5xl font-extrabold text-[#00C8FF] mb-4 z-10">
                  {stat.number}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed z-10">
                  {stat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            A <span className="text-[#00C8FF]">gateway</span> to live
            experiences
          </h3>
          <p className="text-gray-300 mb-8">
            Get in touch to super-serve your most valuable fans, connecting up
            their digital and physical experiences.
          </p>
          <Link
            href="fans"
            className="rounded-full bg-gradient-to-r from-[#00C8FF] to-[#4FDFFF] text-black font-semibold px-8 py-4 hover:shadow-[0_0_25px_#00C8FF] transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
