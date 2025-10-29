"use client";
import { motion } from "framer-motion";
import { Mail, Building2, User, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative bg-gradient-to-br from-[#0E0E10] via-[#121214] to-[#0A0A0C] text-white py-52 overflow-hidden">
      {/* Glass effect */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] to-[#67E8F9]">
            Build Your Personalised Memberships
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch to learn how we’re redefining live experiences and
            membership engagement.
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              For Customer Support
            </h3>
            <p className="text-gray-400 leading-relaxed">
              For anything relating to the artists or venues we work with,
              please contact us via:
            </p>

            <div className="flex items-center gap-3 text-[#06B6D4] font-medium">
              <Mail size={20} /> shadnous3@gmail.com
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3">
                <User className="text-[#06B6D4]" size={18} />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent py-3 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3">
                <Mail className="text-[#06B6D4]" size={18} />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent py-3 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Company
              </label>
              <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3">
                <Building2 className="text-[#06B6D4]" size={18} />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full bg-transparent py-3 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                placeholder="Request a demo or sign up to get the latest news..."
                className="w-full bg-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none min-h-[120px]"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-[#06B6D4] hover:bg-[#0891B2] rounded-full font-semibold text-white flex items-center justify-center gap-2 transition"
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
