import React from "react";
import { useOutletContext } from "react-router-dom";
import HeroSection from "@/components/templates/shared/HeroSection";
import AmenitiesSection from "@/components/templates/shared/AmenitiesSection";

export default function HomePage() {
  const { property, template } = useOutletContext();

  const amenityVariant = ["metropolitan", "brut", "canvas", "zenith"].includes(template.id)
    ? "list"
    : "grid";

  return (
    <div>
      <HeroSection property={property} template={template} />
      <AmenitiesSection property={property} template={template} variant={amenityVariant} />
    </div>
  );
}