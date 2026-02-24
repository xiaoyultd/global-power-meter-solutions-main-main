import React from "react";
import { motion } from "framer-motion";

const specs = [
  { label: "Model", value: "NLK900E-AS4 (Customizable)" },
  { label: "Panel Dimensions", value: "72 × 72 mm" },
  { label: "Cutout Dimensions", value: "68 × 68 mm" },
  { label: "Display Type", value: "LED Digital / LCD (Optional)" },
  { label: "Accuracy Class", value: "0.5%" },
  { label: "Voltage Input", value: "AC 380V / 220V" },
  { label: "Current Input", value: "AC 5A (via CT)" },
  { label: "Frequency", value: "50 / 60 Hz" },
  { label: "Power Supply", value: "AC/DC 80–270V or AC 220V" },
  { label: "Connection", value: "Three-phase four-wire / Three-phase three-wire" },
  { label: "Communication", value: "RS485 Modbus-RTU" },
  { label: "Baud Rate", value: "4800 / 9600 / 19200 / 38400" },
  { label: "Pulse Output", value: "Energy pulse output (kWh)" },
  { label: "Relay Output", value: "Up to 4 channels (optional)" },
  { label: "Analog Output", value: "4–20mA, up to 4 channels (optional)" },
  { label: "Digital Input", value: "Up to 4 channels (optional)" },
  { label: "Standard", value: "IEC 61557-12: 2018" },
];

export default function SpecTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
      <div className="rounded-2xl border border-gray-100 overflow-hidden">
        {specs.map((spec, i) => (
          <div
            key={i}
            className={`flex ${i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}
          >
            <div className="w-2/5 px-5 py-3.5 text-sm font-medium text-gray-600 border-r border-gray-100">
              {spec.label}
            </div>
            <div className="w-3/5 px-5 py-3.5 text-sm text-gray-900">
              {spec.value}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}