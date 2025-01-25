import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import CoinInfo from "@/components/coin-info"
import Community from "@/components/community"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Deepseek - Decentralized Future, Deeply Connected",
  description:
    "Deepseek is a revolutionary cryptocurrency on the Solana blockchain, connecting the decentralized future.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <CoinInfo />
      <Community />
      <Footer />
    </main>
  )
}

