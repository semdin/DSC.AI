"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Copy, Check } from "lucide-react"

const CONTRACT_ADDRESS = "BEGSySVguDF4tFSkm2N9pq2BPGzxdPtDL21N4kFfpump"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function CoinInfo() {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setIsCopied(true)
      toast({
        title: "Address copied!",
        description: "The contract address has been copied to your clipboard.",
      })
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
      toast({
        title: "Copy failed",
        description: "Please try copying the address manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          variants={itemVariants}
        >
          Coin Info
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="flex items-center mb-8 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
            variants={itemVariants}
          >
            <Input
              value={CONTRACT_ADDRESS}
              readOnly
              className="flex-grow mr-2 bg-transparent border-white/20 text-white"
            />
            <Button
              onClick={copyToClipboard}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              {isCopied ? <Check className="mr-2" /> : <Copy className="mr-2" />}
              {isCopied ? "Copied!" : "Copy Address"}
            </Button>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
            {[
              { title: "Total Supply", value: "1,000,000,000 DEEP" },
              { title: "Transaction Fee", value: "0.1%" },
              { title: "Network", value: "Solana" },
              { title: "Security", value: "Audited by CertiK" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-all hover:scale-105"
              >
                <h3 className="font-bold text-blue-400 mb-2">{item.title}</h3>
                <p className="text-xl">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

