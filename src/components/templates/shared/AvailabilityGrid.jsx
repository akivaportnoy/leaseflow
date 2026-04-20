import React, { useState } from "react";
import { Bed, Bath, Maximize, Calendar, Check } from "lucide-react";
import { format } from "date-fns";

export default function AvailabilityGrid({ units, template, variant = "cards" }) {
  const { colors, fonts } = template;
  const [filter, setFilter] = useState("all");

  const types = [...new Set(units.map((u) => u.unit_type))];
  const filtered = filter === "all" ? units : units.filter((u) => u.unit_type === filter);

  const statusBadge = (status) => {
    const styles = {
      available: { bg: "#10B98115", text: "#10B981", label: "Available" },
      leased: { bg: `${colors.muted}22`, text: colors.muted, label: "Leased" },
      pending: { bg: "#F59E0B15", text: "#F59E0B", label: "Pending" },
      coming_soon: { bg: `${colors.accent}15`, text: colors.accent, label: "Coming Soon" },
    };
    const s = styles[status] || styles.available;
    return (
      <span
        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold"
        style={{ backgroundColor: s.bg, color: s.text, borderRadius: "9999px" }}
      >
        <Check size={12} /> {s.label}
      </span>
    );
  };

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 text-sm font-medium transition-all"
          style={{
            backgroundColor: filter === "all" ? colors.accent : "transparent",
            color: filter === "all" ? "#FFFFFF" : colors.muted,
            borderRadius: template.radius,
            border: filter === "all" ? "none" : `1px solid ${colors.border}`,
            minHeight: "44px",
          }}
        >
          All Units
        </button>
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className="px-4 py-2 text-sm font-medium transition-all"
            style={{
              backgroundColor: filter === t ? colors.accent : "transparent",
              color: filter === t ? "#FFFFFF" : colors.muted,
              borderRadius: template.radius,
              border: filter === t ? "none" : `1px solid ${colors.border}`,
              minHeight: "44px",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Units Grid */}
      {variant === "list" ? (
        <div className="space-y-4">
          {filtered.map((unit, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 border transition-all"
              style={{
                borderColor: colors.border,
                borderRadius: template.radius,
                backgroundColor: colors.cardBg,
              }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold" style={{ fontFamily: fonts.heading }}>
                    {unit.unit_type}
                  </h3>
                  {statusBadge(unit.status)}
                </div>
                <div className="flex flex-wrap gap-4 text-sm opacity-60">
                  {unit.bedrooms !== undefined && (
                    <span className="flex items-center gap-1"><Bed size={14} /> {unit.bedrooms === 0 ? "Studio" : `${unit.bedrooms} Bed`}</span>
                  )}
                  {unit.bathrooms && <span className="flex items-center gap-1"><Bath size={14} /> {unit.bathrooms} Bath</span>}
                  {unit.sqft && <span className="flex items-center gap-1"><Maximize size={14} /> {unit.sqft} sqft</span>}
                  {unit.available_date && <span className="flex items-center gap-1"><Calendar size={14} /> {format(new Date(unit.available_date), "MMM d, yyyy")}</span>}
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold" style={{ fontFamily: fonts.heading }}>
                  ${unit.price?.toLocaleString()}
                </p>
                <p className="text-xs opacity-50">per month</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((unit, i) => (
            <div
              key={i}
              className="overflow-hidden border transition-all hover:shadow-lg"
              style={{
                borderColor: colors.border,
                borderRadius: template.radius,
                backgroundColor: colors.cardBg,
              }}
            >
              {unit.floor_plan_url && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={unit.floor_plan_url} alt={unit.unit_type} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold" style={{ fontFamily: fonts.heading }}>
                    {unit.unit_type}
                  </h3>
                  {statusBadge(unit.status)}
                </div>
                <div className="flex flex-wrap gap-3 text-sm opacity-60 mb-4">
                  {unit.bedrooms !== undefined && (
                    <span className="flex items-center gap-1"><Bed size={14} /> {unit.bedrooms === 0 ? "Studio" : `${unit.bedrooms} Bed`}</span>
                  )}
                  {unit.bathrooms && <span className="flex items-center gap-1"><Bath size={14} /> {unit.bathrooms} Bath</span>}
                  {unit.sqft && <span className="flex items-center gap-1"><Maximize size={14} /> {unit.sqft} sqft</span>}
                </div>
                {unit.available_date && (
                  <p className="text-xs opacity-50 mb-4 flex items-center gap-1">
                    <Calendar size={12} /> Available {format(new Date(unit.available_date), "MMM d, yyyy")}
                  </p>
                )}
                {unit.features?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {unit.features.slice(0, 3).map((f, j) => (
                      <span key={j} className="text-xs px-2 py-1 opacity-70" style={{ backgroundColor: colors.accent + "10", borderRadius: template.radius }}>
                        {f}
                      </span>
                    ))}
                  </div>
                )}
                <div className="pt-4 border-t" style={{ borderColor: colors.border }}>
                  <p className="text-2xl font-bold" style={{ fontFamily: fonts.heading }}>
                    ${unit.price?.toLocaleString()}
                    <span className="text-sm font-normal opacity-50">/mo</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16 opacity-50">
          <p className="text-lg">No units available in this category.</p>
        </div>
      )}
    </div>
  );
}