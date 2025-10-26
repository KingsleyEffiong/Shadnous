"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Music2,
  ArrowLeft,
  Sparkles,
  Crown,
  Shield,
  Copy,
  Check,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { QRCodeCanvas } from "qrcode.react"; // ✅ QR code generator

export default function MusicianPage() {
  const { id } = useParams();
  const name = Array.isArray(id) ? id[0] : id || "";
  const capitalized = name.toUpperCase();
  const capitalizedFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);

  const tiers = [
    { name: "Basic", price: "500 USDT", icon: Star },
    { name: "Pro", price: "1000 USDT", icon: Shield },
    { name: "VIP", price: "2000 USDT", icon: Crown },
  ];

  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Basic");
  const [txId, setTxId] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState(""); // ✅ added email state

  const walletAddress = "0xABCDEF1234567890ABCDEF1234567890ABCDEF12";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tiers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [tiers.length]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    toast.success("Wallet address copied ✅");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ tier: selectedTier, txId, file, email }); // ✅ include email

    toast.success(`🎟️ Payment submitted for ${selectedTier} tier!`, {
      description: "We’ll verify your transaction shortly.",
    });

    setTxId("");
    setFile(null);
    setEmail("");
  };

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
            Unlock behind-the-scenes access, early tickets, and premium rewards
            through our exclusive glass-tier membership cards.
          </p>
          <p className="text-sm text-gray-400 mb-10 italic">
            ⏳ Your Fan Access Card is active for{" "}
            <span className="text-[#00C8FF] font-medium">1 year</span> from the
            date of activation.
          </p>

          {/* Popup Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-6 md:px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#00C8FF] via-[#7B61FF] to-[#FF4AED] shadow-lg hover:shadow-[#FF4AED]/40 transition-all text-sm md:text-base">
                Get Access Card
              </Button>
            </DialogTrigger>

            {/* Popup Content */}
            <DialogContent
              className="bg-[#0a0b14]/90 backdrop-blur-xl border border-white/10 text-white 
    w-[95vw] sm:w-[90vw] md:w-[480px] lg:w-[520px]
    max-h-[90vh] overflow-y-auto 
    shadow-xl rounded-2xl p-4 sm:p-6 space-y-6 
    scrollbar-thin scrollbar-thumb-[#7B61FF]/40"
            >
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00C8FF] to-[#FF4AED] mb-4 text-center sm:text-left">
                  Purchase Membership
                </DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6 pb-6">
                {/* Select Tier */}
                <div className="space-y-2">
                  <Label className="text-sm text-gray-300">Select Tier</Label>
                  <div className="bg-[#111]/70 border border-white/10 rounded-lg p-2">
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full bg-transparent text-white text-sm outline-none appearance-none cursor-pointer"
                    >
                      {tiers.map((t) => (
                        <option
                          key={t.name}
                          value={t.name}
                          className="bg-[#0a0b14] text-white"
                        >
                          {t.name} – {t.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Email Input ✅ */}
                <div className="space-y-2">
                  <Label className="text-sm text-gray-300">
                    Your Email Address
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#111]/70 border border-white/10 text-white placeholder:text-gray-500 rounded-lg focus:ring-2 focus:ring-[#7B61FF]/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Wallet QR + Address */}
                <div className="space-y-3 text-center">
                  <Label className="text-sm text-gray-300">
                    Scan to Pay (Wallet QR)
                  </Label>
                  <div className="flex justify-center">
                    <div className="p-3 bg-[#111]/70 rounded-xl border border-white/10 inline-block">
                      <QRCodeCanvas
                        value={walletAddress}
                        size={window.innerWidth < 400 ? 120 : 140}
                        bgColor="#0a0b14"
                        fgColor="#00C8FF"
                        level="H"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">
                    Or copy address below 👇
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 bg-[#111]/70 border border-white/10 px-3 py-2 rounded-lg">
                    <span className="truncate text-sm text-gray-300">
                      {walletAddress}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-[#00C8FF] hover:text-[#7B61FF] transition-colors self-end sm:self-auto"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                {/* Transaction ID */}
                <div className="space-y-2">
                  <Label className="text-sm text-gray-300">
                    Transaction ID (TxHash)
                  </Label>
                  <Input
                    placeholder="Paste your transaction hash"
                    className="bg-[#111]/70 border border-white/10 text-white placeholder:text-gray-500 rounded-lg focus:ring-2 focus:ring-[#7B61FF]/50"
                    value={txId}
                    onChange={(e) => setTxId(e.target.value)}
                    required
                  />
                </div>

                {/* Upload Screenshot */}
                <div className="space-y-2">
                  <Label className="text-sm text-gray-300">
                    Upload Payment Screenshot
                  </Label>
                  <Input
                    type="file"
                    accept="image/*"
                    className="bg-[#111]/70 border border-white/10 text-gray-300 rounded-lg file:bg-[#00C8FF]/10 file:border-none file:mr-2 file:px-3 file:py-1 file:rounded-md file:text-[#00C8FF] hover:file:bg-[#00C8FF]/20 cursor-pointer"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    required
                  />
                </div>

                {/* Info Message */}
                <div className="bg-[#111]/50 border border-[#00C8FF]/20 rounded-lg p-4 text-sm text-gray-300 leading-relaxed">
                  ✅ After your payment is confirmed, you’ll receive your
                  <span className="text-[#00C8FF] font-medium">
                    {" "}
                    digital access card
                  </span>{" "}
                  instantly via email, and your
                  <span className="text-[#7B61FF] font-medium">
                    {" "}
                    physical card
                  </span>{" "}
                  will arrive within{" "}
                  <span className="font-semibold text-white">
                    1–2 business days
                  </span>
                  .
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full py-3 mt-2 rounded-full bg-gradient-to-r from-[#00C8FF] via-[#7B61FF] to-[#FF4AED] font-semibold shadow-lg hover:opacity-90 transition-all text-sm sm:text-base"
                >
                  Submit Payment
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* How it works */}
          <div className="mt-14">
            <h2 className="text-xl font-semibold mb-3">How it works</h2>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#00C8FF]" /> Choose your tier and
                join the fan club.
              </li>
              <li className="flex items-center gap-2">
                <Music2 className="w-4 h-4 text-[#00C8FF]" /> Send payment via
                crypto (scan or copy wallet).
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00C8FF]" /> Upload proof and
                get verified.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Animated Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-1 relative flex justify-center items-center py-32 md:py-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: 100, rotateY: 30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-[380px] h-[260px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#00C8FF]/40 via-[#7B61FF]/20 to-[#FF4AED]/10 border border-white/10 backdrop-blur-2xl shadow-lg hover:shadow-[#7B61FF]/30 transition-all"
            >
              <Image
                src={`/images/${capitalizedFirstLetter}/${id}.jpg`}
                alt={capitalized}
                fill
                className="object-cover opacity-25 mix-blend-overlay"
              />
              <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#00C8FF]" />
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                  </div>
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      fill
                      className="object-contain opacity-80"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-3">
                  {tier.name} Membership – {tier.price}
                </p>

                {/* Access Details */}
                <div className="text-xs text-gray-400 mt-3 leading-relaxed">
                  {tier.name === "Basic" && (
                    <p>
                      🎵 Access to exclusive posts, updates, and fan community
                      chats.
                    </p>
                  )}
                  {tier.name === "Pro" && (
                    <p>
                      🔥 All Basic perks + early song access, ticket presales,
                      and limited merch drops.
                    </p>
                  )}
                  {tier.name === "VIP" && (
                    <p>
                      👑 Includes all Pro benefits + private meet & greets,
                      unreleased tracks, and signed digital collectibles.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
