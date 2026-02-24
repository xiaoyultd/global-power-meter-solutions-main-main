import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", country: "", phone: "", quantity: "", message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.Inquiry.create({ ...form, status: "new" });
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          Your inquiry has been submitted successfully. We will contact you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" required value={form.name} onChange={e => handleChange("name", e.target.value)} placeholder="Your name" className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" required value={form.email} onChange={e => handleChange("email", e.target.value)} placeholder="your@email.com" className="rounded-xl" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" value={form.company} onChange={e => handleChange("company", e.target.value)} placeholder="Company name" className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" value={form.country} onChange={e => handleChange("country", e.target.value)} placeholder="Your country" className="rounded-xl" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={form.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="+1 234 567 8900" className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Required Quantity</Label>
          <Input id="quantity" value={form.quantity} onChange={e => handleChange("quantity", e.target.value)} placeholder="e.g. 100 units" className="rounded-xl" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" value={form.message} onChange={e => handleChange("message", e.target.value)} placeholder="Tell us about your requirements, specifications, or any questions..." rows={4} className="rounded-xl" />
      </div>

      <Button type="submit" disabled={submitting} size="lg" className="w-full bg-sky-600 hover:bg-sky-700 rounded-xl py-6 text-base">
        {submitting ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Send className="w-5 h-5 mr-2" />}
        {submitting ? "Submitting..." : "Send Inquiry"}
      </Button>
    </form>
  );
}