"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Artists", path: "/" },
    { label: "Fans", path: "/fans" },
    { label: "Brands", path: "/brands" },
    { label: "Venues", path: "/venues" },
    { label: "News", path: "/news" },
    { label: "The Beat", path: "/thebeat" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_0_30px_rgba(0,200,255,0.2)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex items-center"
            animate={{
              y: [0, -4, 0, 4, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 15px rgba(0,200,255,0.4)",
                  "0 0 30px rgba(0,200,255,0.8)",
                  "0 0 15px rgba(0,200,255,0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full"
            />
            <Image
              src="/logo.png"
              alt="Shadnous Logo"
              width={50}
              height={50}
              className="rounded-full relative z-10"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-2xl font-extrabold tracking-wide"
          >
            <span className="text-[#00C8FF] drop-shadow-[0_0_8px_#00C8FF]">
              SHAD
            </span>
            <span className="text-white/90">NOUS</span>
          </motion.h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium">
          {links.map((link, idx) => {
            const isActive =
              pathname === link.path ||
              (link.path === "/" && pathname === "/artists"); // just in case you had a nested route
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                <Link
                  href={link.path}
                  className="relative group transition-colors duration-300"
                >
                  <span
                    className={`${
                      pathname === link.path ||
                      (link.path === "/" && pathname === "/")
                        ? "text-[#00C8FF]"
                        : "text-white/80 hover:text-[#00C8FF]"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#00C8FF] transition-all duration-300 ${
                      pathname === link.path ||
                      (link.path === "/" && pathname === "/")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative z-[60]">
          {isOpen ? (
            <X
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 text-[#00C8FF] cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="w-8 h-8 text-[#00C8FF] cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 w-[80%] h-screen bg-black/80 backdrop-blur-2xl border-l border-[#00C8FF]/30 shadow-[0_0_40px_rgba(0,200,255,0.3)] flex flex-col items-center justify-center space-y-10 z-50"
          >
            {links.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-semibold transition-all duration-300 ${
                    pathname === link.path ||
                    (link.path === "/" && pathname === "/")
                      ? "text-[#00C8FF]"
                      : "text-white/90 hover:text-[#00C8FF]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
