"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "919884554654"
  const message = "Hi, I'm interested in learning more about Raja Sir's IAS Academy."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
