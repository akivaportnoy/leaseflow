import React from "react";
import { TEMPLATES } from "@/lib/templateConfig";
import TemplateCard from "@/components/templates/TemplateCard";

export default function TemplateSelector() {
  const templates = Object.values(TEMPLATES);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Leaseflow Templates
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Property Website Templates
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              12 bespoke designs crafted for modern residential properties. Each template
              adapts to your property data — just select one to preview.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {templates.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      </div>
    </div>
  );
}