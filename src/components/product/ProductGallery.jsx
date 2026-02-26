import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/201a5862c_1.jpg",
    label: "Black Shell - LED"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/ace2bd821_2.jpg",
    label: "White Shell - LED"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/5e0dfd193_3.jpg",
    label: "Black Shell - LCD"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/a267e0bea_4.jpg",
    label: "White Shell - LCD"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/9e7334728_KP0A3635.jpg",
    label: "Rear Terminal View"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/414328241_KP0A3636.jpg",
    label: "Side View"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/8656c8994_KP0A3637.jpg",
    label: "Wiring Diagram"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/0adef6aa8_KP0A3638.jpg",
    label: "Label Detail"
  }
];

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={selected}
            src={images[selected].url}
            alt={images[selected].label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-contain p-4"
          />
        </AnimatePresence>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700">
          {images[selected].label}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              selected === i ? "border-sky-500 shadow-md shadow-sky-100" : "border-gray-100 hover:border-gray-200"
            }`}
          >
            <img src={img.url} alt={img.label} className="w-full h-full object-contain bg-gray-50 p-1" />
          </button>
        ))}
      </div>
    </div>
  );
}