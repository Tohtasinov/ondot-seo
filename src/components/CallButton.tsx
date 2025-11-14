"use client";
import { Phone } from "lucide-react";

type Props = { phone?: string };

export default function CallButton({ phone = "+17088704053" }: Props) {
  return (
    <a
      href={`tel:${phone}`}
      className="fixed bottom-5 right-5 z-50 bg-[#0a2a66] hover:bg-[#0d347d] text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
      aria-label="Call us"
    >
      <Phone size={24} />
    </a>
  );
}
