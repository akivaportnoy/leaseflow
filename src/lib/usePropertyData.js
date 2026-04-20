import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { DEFAULT_PROPERTY, DEFAULT_UNITS, getTemplate } from "./templateConfig";

export function usePropertyData(propertyId) {
  const { data: property, isLoading: loadingProperty } = useQuery({
    queryKey: ["property", propertyId],
    queryFn: () => base44.entities.Property.list(),
    select: (data) => {
      if (propertyId) return data.find((p) => p.id === propertyId);
      return data[0];
    },
    initialData: [],
  });

  const { data: units, isLoading: loadingUnits } = useQuery({
    queryKey: ["units", propertyId],
    queryFn: () => base44.entities.Unit.list(),
    select: (data) => {
      if (propertyId) return data.filter((u) => u.property_id === propertyId);
      return data;
    },
    initialData: [],
  });

  const merged = property ? { ...DEFAULT_PROPERTY, ...stripNulls(property) } : DEFAULT_PROPERTY;
  const mergedUnits = units?.length > 0 ? units : DEFAULT_UNITS;
  const template = getTemplate(merged.template_id || "metropolitan");

  return {
    property: merged,
    units: mergedUnits,
    template,
    isLoading: loadingProperty || loadingUnits,
  };
}

function stripNulls(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined && value !== "") {
      result[key] = value;
    }
  }
  return result;
}