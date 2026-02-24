import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Guangzhou Xiaoyu</h3>
            <p className="text-gray-500 text-sm mb-4">Import and Export Co., Ltd.</p>
            <p className="text-sm leading-relaxed">
              Professional supplier of multifunction power meters and electrical measurement instruments for global markets.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
                <a href="mailto:summer@yucore.ltd" className="hover:text-sky-400 transition-colors">summer@yucore.ltd</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
                <a href="tel:+8615018485957" className="hover:text-sky-400 transition-colors">+86 150-1848-5957</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
                <span>A256, 1st Floor, Shop 114, No. 3 & 4, Zhongjing 4th Street, Nansha District, Guangzhou, China</span>
              </div>
            </div>
          </div>

          {/* Contact person */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sales Contact</h4>
            <p className="text-sm">Contact: <span className="text-white">Ms. Summer</span></p>
            <p className="text-sm mt-1">MOB: <span className="text-white">+86 15018485957</span></p>
            <p className="text-sm mt-1">Email: <a href="mailto:summer@yucore.ltd" className="text-sky-400 hover:text-sky-300">summer@yucore.ltd</a></p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Guangzhou Xiaoyu Import and Export Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}