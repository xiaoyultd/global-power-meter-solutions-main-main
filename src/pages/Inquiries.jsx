import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Building2, Globe, Package, Loader2, Inbox, Download, Github } from "lucide-react";
import { format } from "date-fns";

const statusColors = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  quoted: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
};

export default function Inquiries() {
  const queryClient = useQueryClient();

  const { data: inquiries = [], isLoading } = useQuery({
    queryKey: ["inquiries"],
    queryFn: () => base44.entities.Inquiry.list("-created_date", 100),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Inquiry.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["inquiries"] }),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-sky-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Customer Inquiries</h1>
            <p className="text-gray-500 text-sm mt-1">{inquiries.length} total inquiries</p>
          </div>
          <button
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
                alert('下载失败，请重试');
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white rounded-md font-medium transition-colors shadow-lg"
          >
            <Download className="w-4 h-4" />
            下载完整网站
          </button>
        </div>

        {inquiries.length === 0 ? (
          <div className="text-center py-24">
            <Inbox className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No inquiries yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inq) => (
              <Card key={inq.id} className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{inq.name}</h3>
                      <Badge className={statusColors[inq.status || "new"]}>
                        {inq.status || "new"}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      {inq.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5" /> {inq.email}
                        </span>
                      )}
                      {inq.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5" /> {inq.phone}
                        </span>
                      )}
                      {inq.company && (
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" /> {inq.company}
                        </span>
                      )}
                      {inq.country && (
                        <span className="flex items-center gap-1">
                          <Globe className="w-3.5 h-3.5" /> {inq.country}
                        </span>
                      )}
                      {inq.quantity && (
                        <span className="flex items-center gap-1">
                          <Package className="w-3.5 h-3.5" /> {inq.quantity}
                        </span>
                      )}
                    </div>
                    {inq.message && (
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{inq.message}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-3">
                      {inq.created_date && format(new Date(inq.created_date), "MMM d, yyyy HH:mm")}
                    </p>
                  </div>

                  <Select
                    value={inq.status || "new"}
                    onValueChange={(value) => updateMutation.mutate({ id: inq.id, data: { status: value } })}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="quoted">Quoted</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}