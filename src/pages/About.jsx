import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Users, Award, ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Strict quality control system to ensure every product meets international standards"
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Customer-oriented approach, providing professional solutions and technical support"
    },
    {
      icon: Target,
      title: "Innovation Driven",
      description: "Continuous technical innovation, providing advanced power monitoring products"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            About Us
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional power monitoring equipment supplier
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-sky-100 text-sky-700 rounded-full">
                <Building2 className="w-5 h-5" />
                <span className="font-medium">Since 2021</span>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900">
                Guangzhou Xiaoyu Import and Export Co., Ltd.
              </h2>
              
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  We are a professional company specializing in industrial power monitoring equipment 
                  import and export trade, committed to providing high-quality power meters, power 
                  analyzers and other power monitoring products to global customers.
                </p>
                <p>
                  With years of industry experience and a professional technical team, we provide 
                  comprehensive solutions from product selection, technical support to after-sales 
                  service. Our products are widely used in industrial automation, energy management, 
                  and smart building applications.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
                  alt="Company"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600">
              Professional, Reliable, Innovative
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Focus */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-sky-50 to-white overflow-hidden">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900">
                    Our Products
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    The GY900E-AS4 three-phase multifunction power meter is our flagship product, 
                    using advanced digital signal processing technology to provide accurate electrical 
                    parameter measurement. The product complies with international standards and has 
                    been successfully applied in industrial projects in multiple countries and regions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                      <p className="text-slate-700">Compliant with IEC 61557-12:2018 international standard</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                      <p className="text-slate-700">RS485 communication support, easy system integration</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                      <p className="text-slate-700">High precision measurement, accuracy up to 0.5%</p>
                    </div>
                  </div>
                  <Link to={createPageUrl("Product")}>
                    <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg rounded-xl mt-4">
                      View Product
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="aspect-square">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/5e0dfd193_3.jpg"
                    alt="Product"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">
            Looking Forward to Working with You
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            If you are interested in our products, please feel free to contact us and we will serve you wholeheartedly.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-6 text-lg rounded-xl shadow-lg">
              Contact Us Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}