import React from "react";
import { useOutletContext } from "react-router-dom";
import FAQSection from "@/components/templates/shared/FAQSection";

export default function FAQsPage() {
  const { property, template } = useOutletContext();
  const { colors, fonts } = template;

  const variant = ["panorama", "pulse", "prism", "kinetic"].includes(template.id)
    ? "two-column"
    : "accordion";

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>
            Frequently Asked Questions
          </h1>
          <p className="text-base opacity-60 max-w-xl mx-auto">
            Find answers to common questions about living at {property.name}.
          </p>
        </div>
        <FAQSection property={property} template={template} variant={variant} />
      </div>
    </section>
  );
}