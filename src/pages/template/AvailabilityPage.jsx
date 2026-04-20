import React from "react";
import { useOutletContext } from "react-router-dom";
import AvailabilityGrid from "@/components/templates/shared/AvailabilityGrid";

export default function AvailabilityPage() {
  const { property, units, template } = useOutletContext();
  const { colors, fonts } = template;

  const variant = ["metropolitan", "brut", "kinetic", "zenith"].includes(template.id)
    ? "list"
    : "cards";

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>
            Available Residences
          </h1>
          <p className="text-base opacity-60 max-w-2xl">
            Find your perfect home. Browse our available floor plans and schedule a tour today.
          </p>
        </div>
        <AvailabilityGrid units={units} template={template} variant={variant} />
      </div>
    </section>
  );
}