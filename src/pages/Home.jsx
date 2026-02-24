import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Radio, TrendingUp, Shield, Globe, Award } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "3-Phase Power Monitoring",
      description: "Accurate measurement of three-phase voltage, current, power factor and all electrical parameters"
    },
    {
      icon: Radio,
      title: "RS485 Communication",
      description: "Modbus protocol support, easy integration into automation systems"
    },
    {
      icon: TrendingUp,
      title: "High Precision Display",
      description: "LED/LCD digital display with clear and accurate readings"
    },
    {
      icon: Shield,
      title: "Industrial Grade",
      description: "Compliant with IEC 61557-12 standard, stable and reliable"
    }
  ];

  const specs = [
    { label: "Model", value: "GY900E-AS4" },
    { label: "Size", value: "72×72mm" },
    { label: "Accuracy", value: "±0.5%" },
    { label: "Communication", value: "RS485" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sky-50 via-white to-sky-50/30 pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600')] bg-cover bg-center opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
              <div className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                Industrial Power Meter
              </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                GY900E-AS4
                <span className="block text-sky-600 mt-2">Multifunction Power Analyzer</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Professional 3-phase power monitoring solution with RS485 communication
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("Product")}>
                  <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-sky-200">
                    View Details
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Contact")}>
                  <Button size="lg" variant="outline" className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-6 text-lg rounded-xl">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/5e0dfd193_3.jpg"
                alt="NLK900E-AS4 Power Meter"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Specs */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="text-sm text-slate-500 mb-2">{spec.label}</div>
                <div className="text-xl font-bold text-slate-900">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-sky-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">
              Key Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Industrial-grade precision, intelligent monitoring
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Images */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Product Gallery
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/201a5862c_1.jpg",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/ace2bd821_2.jpg",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/a267e0bea_4.jpg"
            ].map((img, index) => (
              <div key={index} className="group relative aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Global Supply</h3>
              <p className="text-sm text-slate-500">Serving customers worldwide with rapid response</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Quality Assurance</h3>
              <p className="text-sm text-slate-500">International standards, reliable quality</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Professional Service</h3>
              <p className="text-sm text-slate-500">Technical support, worry-free after-sales</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-sky-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Contact us for professional power monitoring solutions and competitive quotes
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 px-10 py-6 text-lg rounded-xl shadow-xl">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to={createPageUrl("Product")}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg rounded-xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}