import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966545052121"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      left-6
      z-50
      bg-[#25D366]
      text-white
      p-4
      rounded-full
      shadow-xl
      hover:scale-110
      transition-all
      duration-300
      "
    >
      <FaWhatsapp size={32} />
    </a>
  );
}