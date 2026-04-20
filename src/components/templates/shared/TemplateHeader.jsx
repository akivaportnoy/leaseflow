import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function TemplateHeader({ property, template, basePath = "", variant = "default" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { colors, fonts } = template;

  const navItems = [
    { label: "Home", to: `${basePath}/` },
    { label: "Availability", to: `${basePath}/availability` },
    { label: "Amenities", to: `${basePath}/#amenities` },
    { label: "Gallery", to: `${basePath}/gallery` },
    { label: "FAQs", to: `${basePath}/faqs` },
    { label: "Contact", to: `${basePath}/contact` },
  ];

  const isTransparent = variant === "transparent";
  const headerBg = isTransparent ? "transparent" : colors.bg;
  const headerBorder = isTransparent ? "none" : `1px solid ${colors.border}`;

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: isTransparent ? `${colors.bg}CC` : colors.bg,
        borderBottom: headerBorder,
        fontFamily: fonts.body,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Property Name */}
          <Link to={`${basePath}/`} className="flex items-center gap-3 shrink-0">
            {property.logo_url ? (
              <img
                src={property.logo_url}
                alt={property.name}
                className="h-8 lg:h-10 w-auto object-contain"
              />
            ) : (
              <span
                className="text-lg lg:text-xl font-semibold tracking-tight"
                style={{ fontFamily: fonts.heading, color: colors.text }}
              >
                {property.name}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="px-3 py-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: colors.muted }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to={`${basePath}/availability`}
              className="px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: colors.accent,
                color: colors.bg,
                borderRadius: template.radius,
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Lease Now
            </Link>
            <a
              href={property.resident_portal_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-80 border"
              style={{
                color: colors.text,
                borderColor: colors.border,
                borderRadius: template.radius,
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Resident Portal
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            style={{ color: colors.text, minWidth: "44px", minHeight: "44px" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: colors.bg, borderColor: colors.border }}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-base font-medium rounded-lg transition-colors"
                style={{ color: colors.text }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Link
                to={`${basePath}/availability`}
                onClick={() => setMobileOpen(false)}
                className="block text-center px-5 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.bg,
                  borderRadius: template.radius,
                }}
              >
                Lease Now
              </Link>
              <a
                href={property.resident_portal_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-5 py-3 text-sm font-semibold border"
                style={{
                  color: colors.text,
                  borderColor: colors.border,
                  borderRadius: template.radius,
                }}
              >
                Resident Portal
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}