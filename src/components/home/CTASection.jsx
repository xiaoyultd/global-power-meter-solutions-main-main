import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Upgrade Your Power Monitoring?
        </h2>
        <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
          Contact us for pricing, technical support, and OEM/ODM customization. MOQ as low as 100 units.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-white text-sky-700 hover:bg-sky-50 px-8 py-6 text-base rounded-xl font-semibold shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Send Inquiry
            </Button>
          </Link>
          <Link to={createPageUrl("Product")}>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-xl">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}