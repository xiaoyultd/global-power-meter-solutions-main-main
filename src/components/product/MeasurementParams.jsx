import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, BarChart3, Gauge, Timer, TrendingUp } from "lucide-react";

const params = [
  { icon: Zap, label: "Three-Phase Voltage", desc: "Ua, Ub, Uc, Uab, Ubc, Uca" },
  { icon: Activity, label: "Three-Phase Current", desc: "Ia, Ib, Ic" },
  { icon: BarChart3, label: "Active Power", desc: "Pa, Pb, Pc, Total P (W/kW)" },
  { icon: TrendingUp, label: "Reactive Power", desc: "Qa, Qb, Qc, Total Q (var/kvar)" },
  { icon: Gauge, label: "Power Factor", desc: "PFa, PFb, PFc, Total PF" },
  { icon: Timer, label: "Frequency", desc: "System frequency (Hz)" },
];

export default function MeasurementParams() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Measurement Parameters</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {params.map((param, i) => (
          <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-sky-100 hover:bg-sky-50/20 transition-all">
            <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center shrink-0">
              <param.icon className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">{param.label}</h4>
              <p className="text-gray-500 text-sm mt-0.5">{param.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}