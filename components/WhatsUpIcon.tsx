import React from "react";
import { SiWhatsapp } from "react-icons/si";
export default function WhatsUpIcon() {
  return (
    <a
      href="https://wa.me/34653890763"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all"
      aria-label="Contactar por WhatsApp"
    >
      <SiWhatsapp size={40} color="#ffffff"/>
    </a>
  );
}