import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, BarChart3, Cpu, Settings, Shield } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Multi-Parameter Measurement",
    desc: "Three-phase voltage, current, active/reactive/apparent power, power factor, frequency — all in one device."
  },
  {
    icon: BarChart3,
    title: "Energy Metering",
    desc: "Bidirectional active & reactive energy accumulation with pulse output for accurate energy monitoring."
  },
  {
    icon: Cpu,
    title: "RS485 Modbus Communication",
    desc: "Standard Modbus-RTU protocol for seamless integration with SCADA, PLC, and building management systems."
  },
  {
    icon: Zap,
    title: "LED / LCD Display",
    desc: "High-visibility digital display with 14-page measurement information, easy navigation via front panel buttons."
  },
  {
    icon: Settings,
    title: "Compact Panel Mount",
    desc: "72×72mm front panel (68×68mm cutout) for standard DIN panel installation, saving valuable panel space."
  },
  {
    icon: Shield,
    title: "IEC 61557-12 Certified",
    desc: "Compliant with international standards for power metering devices, ensuring reliability and accuracy."
  }
];

export default function FeatureCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Choose NLK900E
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            A comprehensive power monitoring solution designed for industrial and commercial applications worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-sky-100 hover:bg-sky-50/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sky-100 transition-colors">
                <feature.icon className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}