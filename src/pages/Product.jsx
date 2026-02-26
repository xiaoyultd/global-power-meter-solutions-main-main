import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Download, Mail } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/201a5862c_1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/ace2bd821_2.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/5e0dfd193_3.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/a267e0bea_4.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/9e7334728_KP0A3635.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/414328241_KP0A3636.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/8656c8994_KP0A3637.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/0adef6aa8_KP0A3638.jpg"
  ];

  const specifications = [
    { label: "Model", value: "GY900E-AS4" },
    { label: "Dimensions", value: "72mm × 72mm" },
    { label: "Cutout Size", value: "68mm × 68mm" },
    { label: "Display", value: "LED/LCD Digital Display" },
    { label: "Voltage Range", value: "AC 380V/220V" },
    { label: "Current Range", value: "AC 5A" },
    { label: "Accuracy", value: "0.5%" },
    { label: "Communication", value: "RS485 / Modbus" },
    { label: "Power Supply", value: "AC/DC 80-270V" },
    { label: "Frequency", value: "50Hz / 60Hz" },
    { label: "Operating Temp", value: "-10°C ~ +55°C" },
    { label: "Standard", value: "IEC 61557-12: 2018" }
  ];

  const features = [
    "3-phase voltage measurement",
    "3-phase current measurement",
    "Active power measurement",
    "Reactive power measurement",
    "Power factor measurement",
    "Frequency measurement",
    "Energy accumulation",
    "Pulse output",
    "RS485 communication",
    "LED/LCD display",
    "Multiple display modes",
    "Alarm output"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                GY900E-AS4
              </h1>
              <p className="text-xl text-slate-600">
                Multifunction Power Analyzer
              </p>
            </div>
            <Button
              onClick={async () => {
                try {
                  const response = await base44.functions.invoke('exportCompleteWebsite', {});
                  const blob = new Blob([response.data], { type: 'text/html' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'gy900e-website.html';
                  document.body.appendChild(a);
                  a.click();
                  window.URL.revokeObjectURL(url);
                  a.remove();
                } catch (error) {
                  console.error('Download failed:', error);
                }
              }}
              variant="outline"
              className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50"
            >
              <Download className="mr-2 w-4 h-4" />
              下载网站
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="aspect-square bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <img 
                  src={images[selectedImage]}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-sky-600 shadow-lg' 
                        : 'border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    <img 
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    The GY900E-AS4 is a professional 3-phase multifunction power meter using advanced 
                    digital signal processing technology. It accurately measures various electrical 
                    parameters in 3-phase power systems and complies with IEC 61557-12:2018 standards.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Widely used in industrial automation, energy management systems, and building 
                    monitoring applications worldwide. The meter features high precision measurement, 
                    RS485 Modbus communication, and compact panel-mount design.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Link to={createPageUrl("Contact")} className="flex-1">
                  <Button size="lg" className="w-full bg-sky-600 hover:bg-sky-700 text-white py-6 text-lg rounded-xl shadow-lg">
                    <Mail className="mr-2 w-5 h-5" />
                    Get Quote
                  </Button>
                </Link>
                <a 
                  href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/de022e3ed_LCDMultifunctionmetermanual.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" variant="outline" className="w-full border-2 border-sky-600 text-sky-600 hover:bg-sky-50 py-6 text-lg rounded-xl">
                    <Download className="mr-2 w-5 h-5" />
                    Manual
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specifications.map((spec, index) => (
                    <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-sm text-slate-500 mb-2">{spec.label}</div>
                      <div className="text-lg font-semibold text-slate-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}