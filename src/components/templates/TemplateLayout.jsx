import React from "react";
import { Outlet } from "react-router-dom";
import TemplateWrapper from "./TemplateWrapper";
import TemplateHeader from "./shared/TemplateHeader";
import TemplateFooter from "./shared/TemplateFooter";
import { usePropertyData } from "@/lib/usePropertyData";
import { getTemplate } from "@/lib/templateConfig";

export default function TemplateLayout() {
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("propertyId");
  const templateOverride = urlParams.get("template");

  const { property, units, template: dataTemplate, isLoading } = usePropertyData(propertyId);

  const template = templateOverride ? getTemplate(templateOverride) : dataTemplate;

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: template.colors.bg }}>
        <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: template.colors.border, borderTopColor: template.colors.accent }} />
      </div>
    );
  }

  return (
    <TemplateWrapper template={template}>
      <TemplateHeader property={property} template={template} />
      <main>
        <Outlet context={{ property, units, template }} />
      </main>
      <TemplateFooter property={property} template={template} />
    </TemplateWrapper>
  );
}