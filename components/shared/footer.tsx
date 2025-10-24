"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="relative z-30 bg-gradient-to-br from-[#00141C] via-[#000000]/90 to-[#001B28] backdrop-blur-xl border-t border-[#00C8FF]/20 shadow-[0_0_80px_rgba(0,200,255,0.15)] text-white overflow-hidden">
      {/* animated cyan streak */}
      <div className="absolute top-0 left-[-50%] w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00C8FF] to-transparent opacity-60 animate-[moveLight_6s_linear_infinite]" />

      <style jsx>{`
        @keyframes moveLight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(50%);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-[#00C8FF]/25 mix-blend-screen" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold tracking-wide">
                  <span className="text-[#00C8FF]">SHAD</span>
                  <span className="text-white/90">NOUS</span>
                </h4>
                <p className="text-sm text-gray-300">
                  Artist membership & live experience platform
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  aria-label="Social"
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#00C8FF]/10 transition border border-transparent hover:border-[#00C8FF]/30"
                >
                  <Icon className="w-5 h-5 text-[#00C8FF]" />
                </a>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-400 max-w-md leading-relaxed">
              Built for artists who want to recognise, reward and grow their
              real fans. Integrates passes, wallet onboarding and live access.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex justify-between"
          >
            <div className="min-w-[140px]">
              <h5 className="text-sm font-semibold text-gray-300 mb-3">
                Platform
              </h5>
              <ul className="space-y-2 text-sm">
                {["Artists", "Fans", "Brands", "Venues"].map((label) => (
                  <li key={label}>
                    <Link
                      href={`/${label.toLowerCase()}`}
                      className="text-gray-300 hover:text-[#00C8FF] transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-[140px]">
              <h5 className="text-sm font-semibold text-gray-300 mb-3">
                Company
              </h5>
              <ul className="space-y-2 text-sm">
                {["About", "Careers", "Press", "Contact"].map((label) => (
                  <li key={label}>
                    <Link
                      href={`/${label.toLowerCase()}`}
                      className="text-gray-300 hover:text-[#00C8FF] transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h5 className="text-sm font-semibold text-gray-300 mb-3">
              Stay in the loop
            </h5>
            <p className="text-sm text-gray-400 mb-4">
              Get artist drops, early access and platform updates.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-3"
            >
              <input
                type="email"
                placeholder={
                  subscribed ? "You're subscribed ✅" : "you@fanmail.com"
                }
                className="min-w-0 flex-1 bg-white/5 border border-white/10 placeholder-gray-400 text-sm py-2 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00C8FF]/40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                aria-label="Email address"
              />
              <Button
                type="submit"
                className="rounded-full px-4 py-2 bg-gradient-to-r from-[#00C8FF] to-[#4FDFFF] text-black font-semibold shadow-[0_0_15px_#00C8FF40] hover:shadow-[0_0_25px_#00C8FF80] transition"
              >
                {subscribed ? "Thanks" : "Subscribe"}
              </Button>
            </form>

            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy — GDPR compliant & white-label options
              available.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shadnous — All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Terms", "Privacy"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-[#00C8FF] transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
