import React from "react";
import { useOutletContext } from "react-router-dom";
import PhotoGallery from "@/components/templates/shared/PhotoGallery";

export default function GalleryPage() {
  const { property, units, template } = useOutletContext();
  const { colors, fonts } = template;

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>
            Photo Gallery
          </h1>
          <p className="text-base opacity-60 max-w-2xl">
            Take a visual tour of our community and residences.
          </p>
        </div>
        <PhotoGallery property={property} units={units} template={template} />
      </div>
    </section>
  );
}