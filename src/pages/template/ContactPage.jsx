import React from "react";
import { useOutletContext } from "react-router-dom";
import ContactForm from "@/components/templates/shared/ContactForm";

export default function ContactPage() {
  const { property, template } = useOutletContext();
  const { colors, fonts } = template;

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>
            Contact Us
          </h1>
          <p className="text-base opacity-60 max-w-2xl">
            We'd love to hear from you. Reach out to schedule a tour or ask any questions.
          </p>
        </div>
        <ContactForm property={property} template={template} />
      </div>
    </section>
  );
}