import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Zap, Gauge, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full text-sky-700 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Three-Phase Multifunction Power Meter
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              NLK900E
              <span className="block text-sky-600 mt-2">Power Analyzer</span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
              Advanced LED/LCD digital multifunction meter for precise three-phase electrical measurement. RS485 communication, energy pulse output, and compact 72×72mm panel mount design.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Gauge className="w-5 h-5 text-sky-500" />
                <span className="text-sm font-medium">0.5% Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Wifi className="w-5 h-5 text-sky-500" />
                <span className="text-sm font-medium">RS485 Modbus</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Zap className="w-5 h-5 text-sky-500" />
                <span className="text-sm font-medium">Energy Pulse</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link to={createPageUrl("Product")}>
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-sky-200">
                  View Product Details
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base rounded-xl border-gray-200 hover:bg-gray-50">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 to-blue-200/30 rounded-3xl blur-2xl scale-110" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/201a5862c_1.jpg"
                alt="NLK900E Power Meter"
                className="relative w-full max-w-md rounded-2xl shadow-2xl shadow-gray-200/50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}