import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactForm({ property, template }) {
  const { colors, fonts } = template;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", move_in_date: "", unit_interest: "" });
  const [customFields, setCustomFields] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.ContactSubmission.create({
      ...form,
      property_id: property.id || "",
      custom_fields: customFields,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle = {
    backgroundColor: "transparent",
    borderColor: colors.border,
    borderRadius: template.radius,
    color: colors.text,
    minHeight: "44px",
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle size={48} style={{ color: colors.accent }} className="mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: fonts.heading }}>Thank You!</h3>
        <p className="opacity-60">We've received your message and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: fonts.heading }}>Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: colors.accent }} />
              <div>
                <p className="font-medium text-sm">Address</p>
                <p className="text-sm opacity-60">{property.address}, {property.city}, {property.state} {property.zip}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0" style={{ color: colors.accent }} />
              <div>
                <p className="font-medium text-sm">Phone</p>
                <a href={`tel:${property.phone}`} className="text-sm opacity-60 hover:opacity-80">{property.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0" style={{ color: colors.accent }} />
              <div>
                <p className="font-medium text-sm">Email</p>
                <a href={`mailto:${property.email}`} className="text-sm opacity-60 hover:opacity-80">{property.email}</a>
              </div>
            </div>
            {property.office_hours && (
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0" style={{ color: colors.accent }} />
                <div>
                  <p className="font-medium text-sm">Office Hours</p>
                  <p className="text-sm opacity-60">{property.office_hours}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name *"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 border text-sm"
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email Address *"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 border text-sm"
            style={inputStyle}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 border text-sm"
            style={inputStyle}
          />
          <input
            type="date"
            placeholder="Desired Move-in Date"
            value={form.move_in_date}
            onChange={(e) => setForm({ ...form, move_in_date: e.target.value })}
            className="w-full px-4 py-3 border text-sm"
            style={inputStyle}
          />
        </div>
        <input
          type="text"
          placeholder="Unit Type Interest (e.g., 1 Bedroom)"
          value={form.unit_interest}
          onChange={(e) => setForm({ ...form, unit_interest: e.target.value })}
          className="w-full px-4 py-3 border text-sm"
          style={inputStyle}
        />

        {/* Custom form fields from property */}
        {property.contact_form_fields?.map((field, i) => (
          <div key={i}>
            {field.type === "textarea" ? (
              <textarea
                placeholder={field.label}
                required={field.required}
                value={customFields[field.label] || ""}
                onChange={(e) => setCustomFields({ ...customFields, [field.label]: e.target.value })}
                className="w-full px-4 py-3 border text-sm min-h-[100px] resize-y"
                style={inputStyle}
              />
            ) : field.type === "select" ? (
              <select
                required={field.required}
                value={customFields[field.label] || ""}
                onChange={(e) => setCustomFields({ ...customFields, [field.label]: e.target.value })}
                className="w-full px-4 py-3 border text-sm"
                style={inputStyle}
              >
                <option value="">{field.label}</option>
                {field.options?.map((opt, j) => <option key={j} value={opt}>{opt}</option>)}
              </select>
            ) : (
              <input
                type={field.type || "text"}
                placeholder={field.label}
                required={field.required}
                value={customFields[field.label] || ""}
                onChange={(e) => setCustomFields({ ...customFields, [field.label]: e.target.value })}
                className="w-full px-4 py-3 border text-sm"
                style={inputStyle}
              />
            )}
          </div>
        ))}

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 border text-sm min-h-[120px] resize-y"
          style={inputStyle}
        />
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50"
          style={{
            backgroundColor: colors.accent,
            color: colors.bg,
            borderRadius: template.radius,
            minHeight: "44px",
          }}
        >
          {submitting ? "Sending..." : <><Send size={16} /> Send Message</>}
        </button>
      </form>
    </div>
  );
}