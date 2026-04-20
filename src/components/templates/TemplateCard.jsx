import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TemplateCard({ template }) {
  const { colors, fonts } = template;

  return (
    <Link
      to={`/preview?template=${template.id}`}
      className="group block overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ borderColor: "#E5E7EB", borderRadius: "12px" }}
    >
      {/* Preview Swatch */}
      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: colors.bg }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p
              className="text-2xl font-bold mb-1"
              style={{ fontFamily: fonts.heading, color: colors.text }}
            >
              Welcome Home
            </p>
            <p className="text-sm" style={{ color: colors.muted }}>
              Modern Living Redefined
            </p>
            <div
              className="inline-block mt-3 px-4 py-1.5 text-xs font-semibold"
              style={{
                backgroundColor: colors.accent,
                color: colors.bg,
                borderRadius: template.radius,
              }}
            >
              Lease Now
            </div>
          </div>
        </div>
        {/* Color dots */}
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {[colors.bg, colors.text, colors.accent, colors.cardBg].map((c, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 bg-white">
        <h3 className="text-base font-semibold text-gray-900 mb-1">{template.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{template.description}</p>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-gray-700 transition-colors">
          Preview Template <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}