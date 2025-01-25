import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export default function Community() {
  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
        <p className="text-xl mb-8">
          Be part of the Deepseek revolution. Join our community and stay updated on the latest news and developments.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="lg">
            <FaTwitter className="mr-2" /> Twitter
          </Button>
          <Button variant="outline" size="lg">
            <FaTelegram className="mr-2" /> Telegram
          </Button>
          <Button variant="outline" size="lg">
            <FaDiscord className="mr-2" /> Discord
          </Button>
        </div>
      </div>
    </section>
  )
}

