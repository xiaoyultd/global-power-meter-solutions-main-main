import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    phone: "",
    country: "",
    quantity: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  
  const queryClient = useQueryClient();

  const createInquiryMutation = useMutation({
    mutationFn: (data) => base44.entities.Inquiry.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
      setSubmitted(true);
      toast.success("询价已提交！我们会尽快联系您 / Inquiry submitted successfully!");
      setFormData({
        company_name: "",
        contact_person: "",
        email: "",
        phone: "",
        country: "",
        quantity: "",
        message: ""
      });
    },
    onError: (error) => {
      toast.error("提交失败，请重试 / Submission failed, please try again");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createInquiryMutation.mutate({
      ...formData,
      quantity: formData.quantity ? Number(formData.quantity) : null
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center px-6">
        <Card className="max-w-lg w-full border-0 shadow-2xl">
          <CardContent className="pt-16 pb-12 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Thank You!</h2>
            <p className="text-slate-500 leading-relaxed">
              We have received your inquiry and will contact you within 24 hours.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg rounded-xl"
            >
              Submit Another Inquiry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get professional power monitoring solutions and competitive quotes
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-600 to-blue-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Guangzhou Xiaoyu Import and Export Co., Ltd.</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <p className="font-medium mb-1">Address:</p>
                        <p className="text-sky-100 leading-relaxed">
                          A256, 1st Floor, Shop 114, No. 3 & 4, 
                          Zhongjing 4th Street, Nansha District, 
                          Guangzhou, China
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium mb-1">Email:</p>
                        <a href="mailto:summer@yucore.ltd" className="text-sky-100 hover:text-white">
                          summer@yucore.ltd
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium mb-1">Contact:</p>
                        <p className="text-sky-100">Ms. Summer</p>
                        <a href="tel:+8615018485957" className="text-sky-100 hover:text-white">
                          +86 150 1848 5957
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
                      alt="Office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Inquiry Form</CardTitle>
                  <p className="text-slate-600">Please fill in the form below and we will respond promptly</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company_name">Company Name</Label>
                        <Input
                          id="company_name"
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="h-12 rounded-xl"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact_person">Contact Person *</Label>
                        <Input
                          id="contact_person"
                          name="contact_person"
                          value={formData.contact_person}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+86 123 4567 8900"
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="h-12 rounded-xl"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="100"
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your requirements..."
                        required
                        rows={6}
                        className="rounded-xl"
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={createInquiryMutation.isPending}
                      size="lg"
                      className="w-full bg-sky-600 hover:bg-sky-700 text-white py-6 text-lg rounded-xl shadow-lg"
                    >
                      {createInquiryMutation.isPending ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}