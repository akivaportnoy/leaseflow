import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import EqualHousingLogo from "./EqualHousingLogo";

export default function TemplateFooter({ property, template, basePath = "" }) {
  const { colors, fonts } = template;
  const year = new Date().getFullYear();

  const sitemapLinks = [
    { label: "Home", to: `${basePath}/` },
    { label: "Availability", to: `${basePath}/availability` },
    { label: "Amenities", to: `${basePath}/#amenities` },
    { label: "Gallery", to: `${basePath}/gallery` },
    { label: "FAQs", to: `${basePath}/faqs` },
    { label: "Contact", to: `${basePath}/contact` },
  ];

  return (
    <footer
      style={{
        backgroundColor: colors.text,
        color: colors.bg,
        fontFamily: fonts.body,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Property Info */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold"
              style={{ fontFamily: fonts.heading }}
            >
              {property.name}
            </h3>
            {property.tagline && (
              <p className="text-sm opacity-70">{property.tagline}</p>
            )}
            <div className="pt-2">
              <EqualHousingLogo color={colors.bg} size={36} />
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Sitemap
            </h4>
            <nav className="space-y-2">
              {sitemapLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 opacity-70" />
                <span>
                  {property.address}
                  <br />
                  {property.city}, {property.state} {property.zip}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 opacity-70" />
                <a href={`tel:${property.phone}`} className="hover:opacity-80">
                  {property.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 opacity-70" />
                <a href={`mailto:${property.email}`} className="hover:opacity-80">
                  {property.email}
                </a>
              </div>
              {property.office_hours && (
                <p className="opacity-70 pt-1">{property.office_hours}</p>
              )}
            </div>
          </div>

          {/* Management Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Management
            </h4>
            <p className="text-sm opacity-80">
              {property.management_company || "Property Management Company"}
            </p>
            {property.privacy_policy_url && (
              <a
                href={property.privacy_policy_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity mt-2 inline-block underline"
              >
                Privacy Policy
              </a>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: `${colors.bg}22` }}
        >
          <p className="text-xs opacity-50">
            © {year} {property.management_company || property.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs opacity-50">
            {property.privacy_policy_url && (
              <a href={property.privacy_policy_url} target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            )}
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}