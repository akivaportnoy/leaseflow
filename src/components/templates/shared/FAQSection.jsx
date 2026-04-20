import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({ property, template, variant = "accordion" }) {
  const { colors, fonts } = template;
  const faqs = property.faqs || [];
  const [openIdx, setOpenIdx] = useState(null);

  if (faqs.length === 0) {
    return (
      <div className="text-center py-16 opacity-50">
        <p className="text-lg">FAQs will appear once they are added to the property details.</p>
      </div>
    );
  }

  if (variant === "two-column") {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="p-6 border"
            style={{ borderColor: colors.border, borderRadius: template.radius }}
          >
            <h3 className="text-base font-semibold mb-3" style={{ fontFamily: fonts.heading }}>
              {faq.question}
            </h3>
            <p className="text-sm opacity-60 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border overflow-hidden transition-all"
          style={{ borderColor: colors.border, borderRadius: template.radius }}
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left transition-colors hover:opacity-80"
            style={{ minHeight: "44px" }}
          >
            <span className="font-semibold text-base pr-4" style={{ fontFamily: fonts.heading }}>
              {faq.question}
            </span>
            <ChevronDown
              size={20}
              className="shrink-0 transition-transform duration-200"
              style={{
                color: colors.muted,
                transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          {openIdx === i && (
            <div className="px-5 pb-5">
              <p className="text-sm opacity-60 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}