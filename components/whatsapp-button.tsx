"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleClick = () => {
    try {
      const whatsappUrl =
        "https://wa.me/34644609259?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20OLEUMEXTRA"
      window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.warn("Error opening WhatsApp:", error)
    }
  }

  const handleMouseEnter = () => {
    try {
      setIsTooltipVisible(true)
    } catch (error) {
      console.warn("Error showing tooltip:", error)
    }
  }

  const handleMouseLeave = () => {
    try {
      setIsTooltipVisible(false)
    } catch (error) {
      console.warn("Error hiding tooltip:", error)
    }
  }

  const handleCloseTooltip = () => {
    try {
      setIsTooltipVisible(false)
    } catch (error) {
      console.warn("Error closing tooltip:", error)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 rounded-lg bg-white p-4 shadow-lg animate-fade-in">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={handleCloseTooltip}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm font-medium">¿Necesitas ayuda?</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Chatea con nosotros en WhatsApp y te responderemos al instante.
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
        aria-label="Contactar por WhatsApp"
        type="button"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}
