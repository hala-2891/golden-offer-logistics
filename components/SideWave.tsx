"use client";

import { FaShip } from "react-icons/fa";

export default function FloatingShip() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <FaShip
        className="
        absolute
        top-[55%]
        left-[-100px]
        text-[#C8A15A]
        opacity-[0.12]
        animate-shipFloat
        "
        size={200}
      />
    </div>
  );
}