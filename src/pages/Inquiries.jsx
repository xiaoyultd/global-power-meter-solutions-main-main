import React from "react";
import { Card } from "@/components/ui/card";
import { Inbox } from "lucide-react";

export default function Inquiries() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Customer Inquiries</h1>
            <p className="text-gray-500 text-sm mt-1">Inquiries submitted via the contact form will be sent to your email.</p>
          </div>
        </div>

        <div className="text-center py-24">
          <Inbox className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Inquiries are sent directly to summer@yucore.ltd</p>
        </div>
      </div>
    </div>
  );
}
