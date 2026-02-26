import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: "Home", path: "Home" },
    { name: "Product", path: "Product" },
    { name: "About", path: "About" },
    { name: "Contact", path: "Contact" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">Xiaoyu</div>
                <div className="text-xs text-slate-500">Import & Export</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  className={`text-sm font-medium transition-colors ${
                    currentPageName === item.path
                      ? "text-sky-600"
                      : "text-slate-600 hover:text-sky-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-sky-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="px-6 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                    currentPageName === item.path
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">X</span>
                </div>
                <div>
                  <div className="text-lg font-bold">Xiaoyu</div>
                  <div className="text-xs text-slate-400">Import & Export</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Professional industrial power monitoring equipment supplier
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>A256, 1st Floor, Shop 114, Nansha District, Guangzhou, China</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:summer@yucore.ltd" className="text-slate-400 hover:text-white transition-colors">
                    summer@yucore.ltd
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+8615018485957" className="text-slate-400 hover:text-white transition-colors">
                    +86 150 1848 5957
                  </a>
                </div>
                <div className="text-slate-400">
                  Ms. Summer
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 Guangzhou Xiaoyu Import and Export Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}