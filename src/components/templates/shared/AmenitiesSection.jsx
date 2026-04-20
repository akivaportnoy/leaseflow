import React from "react";
import { Waves, Dumbbell, PawPrint, Laptop, Car, TreePine, Home, Star, Wifi, Utensils, Shield, Flower2 } from "lucide-react";

const iconMap = {
  Waves, Dumbbell, PawPrint, Laptop, Car, TreePine, Home, Star, Wifi, Utensils, Shield, Flower2,
};

const categoryLabels = {
  community: "Community",
  unit: "In-Unit",
  outdoor: "Outdoor",
  fitness: "Fitness & Wellness",
  tech: "Tech & Work",
  pet: "Pet Friendly",
  parking: "Parking",
  other: "More",
};

export default function AmenitiesSection({ property, template, variant = "grid" }) {
  const { colors, fonts } = template;
  const amenities = property.amenities || [];
  const features = property.features || [];

  const groupedAmenities = amenities.reduce((acc, a) => {
    const cat = a.category || "other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(a);
    return acc;
  }, {});

  if (variant === "list") {
    return (
      <section id="amenities" className="py-16 lg:py-24 scroll-mt-20" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>
            Amenities & Features
          </h2>
          <p className="text-base opacity-60 mb-12 max-w-2xl">Everything you need for elevated living.</p>

          {features.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((f, i) => (
                <div key={i} className="p-6 border" style={{ borderColor: colors.border, borderRadius: template.radius }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: fonts.heading }}>{f.title}</h3>
                  <p className="text-sm opacity-60">{f.description}</p>
                </div>
              ))}
            </div>
          )}

          {Object.entries(groupedAmenities).map(([cat, items]) => (
            <div key={cat} className="mb-10">
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider opacity-70" style={{ fontSize: "14px" }}>
                {categoryLabels[cat] || cat}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((a, i) => {
                  const Icon = iconMap[a.icon] || Star;
                  return (
                    <div key={i} className="flex items-start gap-4 p-4" style={{ borderRadius: template.radius }}>
                      <div className="shrink-0 w-10 h-10 flex items-center justify-center" style={{ backgroundColor: colors.accent + "15", borderRadius: template.radius }}>
                        <Icon size={18} style={{ color: colors.accent }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{a.name}</h4>
                        {a.description && <p className="text-xs opacity-50 mt-1">{a.description}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="amenities" className="py-16 lg:py-24 scroll-mt-20" style={{ backgroundColor: colors.cardBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>
            Amenities & Features
          </h2>
          <p className="text-base opacity-60 max-w-xl mx-auto">
            Thoughtfully designed spaces and services for modern living.
          </p>
        </div>

        {features.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((f, i) => (
              <div key={i} className="p-6 text-center" style={{ backgroundColor: colors.bg, borderRadius: template.radius }}>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: fonts.heading }}>{f.title}</h3>
                <p className="text-sm opacity-60">{f.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((a, i) => {
            const Icon = iconMap[a.icon] || Star;
            return (
              <div key={i} className="flex items-start gap-4 p-5" style={{ backgroundColor: colors.bg, borderRadius: template.radius }}>
                <div className="shrink-0 w-12 h-12 flex items-center justify-center" style={{ backgroundColor: colors.accent + "15", borderRadius: template.radius }}>
                  <Icon size={20} style={{ color: colors.accent }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{a.name}</h3>
                  {a.description && <p className="text-sm opacity-50">{a.description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}