"use client";

import React from "react";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
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
                <Image
                  src="/logo.png"
                  alt="logo"
                  fill
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
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/share/16qSWBP7ys/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#00C8FF]/10 transition border border-transparent hover:border-[#00C8FF]/30"
              >
                <Facebook className="w-5 h-5 text-[#00C8FF]" />
              </a>
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
                {["Fans", "Brands"].map((label) => (
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
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shadnous — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
