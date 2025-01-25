import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Deepseek. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTelegram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaDiscord size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-sm text-center">
          <p>Disclaimer: Cryptocurrency investments are subject to market risks. Please invest responsibly.</p>
        </div>
      </div>
    </footer>
  )
}

