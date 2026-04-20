import React from "react";

export default function TemplateWrapper({ template, children }) {
  const { colors, fonts } = template;
  
  return (
    <div
      style={{
        "--t-bg": colors.bg,
        "--t-text": colors.text,
        "--t-accent": colors.accent,
        "--t-card": colors.cardBg,
        "--t-muted": colors.muted,
        "--t-border": colors.border,
        "--t-heading": fonts.heading,
        "--t-body": fonts.body,
        "--t-radius": template.radius,
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: fonts.body,
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}