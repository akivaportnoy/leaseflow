# Leaseflow Property Website Templates - Detailed Recreation Prompt

Use this prompt with Base44 (or any AI assistant) to recreate the complete template system in another project.

---

## SYSTEM INSTRUCTION

You are creating a complete property website template system for rental/leasing properties. This system includes 12 distinct design templates, each with unique visual styling, typography, color schemes, and hero sections. All templates share the same underlying component structure and data model but apply different visual treatments.

---

## ENTITIES REQUIRED

Create these three entities in your Base44 project:

### 1. Property Entity
```json
{
  "name": "Property",
  "properties": {
    "name": { "type": "string" },
    "tagline": { "type": "string" },
    "description": { "type": "string" },
    "hero_headline": { "type": "string" },
    "hero_subheadline": { "type": "string" },
    "hero_text": { "type": "string" },
    "hero_image_url": { "type": "string" },
    "logo_url": { "type": "string" },
    "address": { "type": "string" },
    "city": { "type": "string" },
    "state": { "type": "string" },
    "zip": { "type": "string" },
    "phone": { "type": "string" },
    "email": { "type": "string" },
    "office_hours": { "type": "string" },
    "resident_portal_url": { "type": "string" },
    "management_company": { "type": "string" },
    "privacy_policy_url": { "type": "string" },
    "template_id": { "type": "string", "enum": ["metropolitan", "verdant", "kinetic", "heritage", "zenith", "panorama", "brut", "velvet", "canvas", "pulse", "nordic", "prism"] },
    "amenities": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string" }, "description": { "type": "string" }, "icon": { "type": "string" }, "category": { "type": "string", "enum": ["community", "unit", "outdoor", "fitness", "tech", "pet", "parking", "other"] } } } },
    "property_photos": { "type": "array", "items": { "type": "object", "properties": { "url": { "type": "string" }, "caption": { "type": "string" } } } },
    "faqs": { "type": "array", "items": { "type": "object", "properties": { "question": { "type": "string" }, "answer": { "type": "string" } } } },
    "features": { "type": "array", "items": { "type": "object", "properties": { "title": { "type": "string" }, "description": { "type": "string" } } } },
    "pet_policy": { "type": "string" },
    "lease_terms": { "type": "string" },
    "contact_form_fields": { "type": "array" }
  },
  "required": ["name"]
}
```

### 2. Unit Entity
```json
{
  "name": "Unit",
  "properties": {
    "property_id": { "type": "string" },
    "unit_type": { "type": "string" },
    "unit_number": { "type": "string" },
    "bedrooms": { "type": "number" },
    "bathrooms": { "type": "number" },
    "sqft": { "type": "number" },
    "price": { "type": "number" },
    "deposit": { "type": "number" },
    "available_date": { "type": "string", "format": "date" },
    "status": { "type": "string", "enum": ["available", "leased", "pending", "coming_soon"] },
    "floor_plan_url": { "type": "string" },
    "photos": { "type": "array" },
    "features": { "type": "array" },
    "description": { "type": "string" }
  },
  "required": ["property_id", "unit_type"]
}
```

### 3. ContactSubmission Entity
```json
{
  "name": "ContactSubmission",
  "properties": {
    "property_id": { "type": "string" },
    "name": { "type": "string" },
    "email": { "type": "string" },
    "phone": { "type": "string" },
    "message": { "type": "string" },
    "move_in_date": { "type": "string", "format": "date" },
    "unit_interest": { "type": "string" },
    "custom_fields": { "type": "object" },
    "status": { "type": "string", "enum": ["new", "contacted", "toured", "applied", "closed"] }
  },
  "required": ["property_id", "name", "email"]
}
```

---

## 12 TEMPLATE DEFINITIONS

Each template has:
- **colors**: bg, text, accent, cardBg, muted, border
- **fonts**: heading font family, body font family
- **radius**: border-radius value
- **heroStyle**: which hero section variant to use

### Template 1: Metropolitan
- **Name**: The Metropolitan Monolith
- **Description**: Urban luxury — authoritative, architectural, sophisticated
- **Target**: High-rise developments, downtown lofts
- **Colors**: bg="#0F1110", text="#F4F1EA", accent="#C5A059", cardBg="#1A1C1B", muted="#8A8A82", border="#2A2C2B"
- **Fonts**: heading="Playfair Display", body="Inter"
- **Radius**: 2px
- **Hero Style**: split-overlay

### Template 2: Verdant
- **Name**: The Lumina Verdant
- **Description**: Suburban wellness — airy, organic, serene
- **Target**: Garden-style apartments, eco-conscious communities
- **Colors**: bg="#F7F9F6", text="#2D3436", accent="#5D7052", cardBg="#FFFFFF", muted="#7B8B7A", border="#D4DDD1"
- **Fonts**: heading="DM Sans", body="Outfit"
- **Radius**: 32px
- **Hero Style**: float-grid

### Template 3: Kinetic
- **Name**: The Kinetic Atelier
- **Description**: Young professional / tech — dynamic, bold, tech-forward
- **Target**: Co-living spaces, studio apartments
- **Colors**: bg="#FFFFFF", text="#000000", accent="#581CFF", cardBg="#F5F3FF", muted="#6B7280", border="#E5E7EB"
- **Fonts**: heading="Space Grotesk", body="Inter"
- **Radius**: 8px
- **Hero Style**: deck-slide

### Template 4: Heritage
- **Name**: The Heritage
- **Description**: Classic serif, earth tones — timeless elegance
- **Target**: Historic conversions, brownstones
- **Colors**: bg="#FAF8F5", text="#3C2F2F", accent="#8B6F47", cardBg="#FFFFFF", muted="#9C8E82", border="#E0D5C7"
- **Fonts**: heading="Libre Baskerville", body="Source Sans 3"
- **Radius**: 4px
- **Hero Style**: bordered-classic

### Template 5: Zenith
- **Name**: The Zenith
- **Description**: Ultra-minimalist, centered typography — peak sophistication
- **Target**: Luxury high-rise, penthouses
- **Colors**: bg="#FAFAFA", text="#1A1A1A", accent="#0A0A0A", cardBg="#FFFFFF", muted="#999999", border="#EEEEEE"
- **Fonts**: heading="Cormorant Garamond", body="Inter"
- **Radius**: 0px
- **Hero Style**: centered-minimal

### Template 6: Panorama
- **Name**: The Panorama
- **Description**: Landscape-oriented, wide gutters — expansive views
- **Target**: Resort-style, waterfront properties
- **Colors**: bg="#F0F4F8", text="#1B2A4A", accent="#2563EB", cardBg="#FFFFFF", muted="#64748B", border="#CBD5E1"
- **Fonts**: heading="Montserrat", body="Open Sans"
- **Radius**: 12px
- **Hero Style**: wide-landscape

### Template 7: Brut
- **Name**: The Brut
- **Description**: Raw concrete textures, heavy typography — no-frills
- **Target**: Industrial lofts, warehouse conversions
- **Colors**: bg="#E8E4E0", text="#1C1917", accent="#DC2626", cardBg="#D6D3CF", muted="#78716C", border="#A8A29E"
- **Fonts**: heading="Oswald", body="IBM Plex Sans"
- **Radius**: 0px
- **Hero Style**: brutalist-stack

### Template 8: Velvet
- **Name**: The Velvet
- **Description**: Dark mode, serif fonts — high-end hospitality
- **Target**: Boutique apartments, luxury rentals
- **Colors**: bg="#1A1020", text="#F5F0EB", accent="#D4A574", cardBg="#251A30", muted="#9B8EA8", border="#3D2E4A"
- **Fonts**: heading="Cormorant Garamond", body="Nunito Sans"
- **Radius**: 8px
- **Hero Style**: dark-luxe

### Template 9: Canvas
- **Name**: The Canvas
- **Description**: White-space heavy, art-gallery style — designer appeal
- **Target**: Designer lofts, creative districts
- **Colors**: bg="#FFFFFF", text="#111111", accent="#111111", cardBg="#F9F9F9", muted="#888888", border="#E0E0E0"
- **Fonts**: heading="EB Garamond", body="Work Sans"
- **Radius**: 0px
- **Hero Style**: gallery-minimal

### Template 10: Pulse
- **Name**: The Pulse
- **Description**: Vivid gradients, interactive hover effects — energetic
- **Target**: Student housing, vibrant communities
- **Colors**: bg="#FFFBF5", text="#1E1B4B", accent="#F97316", cardBg="#FFFFFF", muted="#6366F1", border="#E0E7FF"
- **Fonts**: heading="Sora", body="Inter"
- **Radius**: 16px
- **Hero Style**: gradient-wave

### Template 11: Nordic
- **Name**: The Nordic
- **Description**: Minimalist, functional, wood-textures — high legibility
- **Target**: Suburban family, Scandinavian-inspired communities
- **Colors**: bg="#F5F0EB", text="#2C2520", accent="#4A7C59", cardBg="#FFFFFF", muted="#8E8279", border="#D9CFC5"
- **Fonts**: heading="Fraunces", body="Karla"
- **Radius**: 6px
- **Hero Style**: clean-nordic

### Template 12: Prism
- **Name**: The Prism
- **Description**: Geometric shapes, overlapping images — playful but professional
- **Target**: Mixed-use developments, young families
- **Colors**: bg="#FAFBFF", text="#1F2937", accent="#7C3AED", cardBg="#FFFFFF", muted="#9CA3AF", border="#DDD6FE"
- **Fonts**: heading="Plus Jakarta Sans", body="Inter"
- **Radius**: 20px
- **Hero Style**: geometric-overlap

---

## HERO SECTION VARIANTS

Create 12 distinct hero section components, each with unique layout and styling:

1. **split-overlay**: Image on background with overlay, text on left side
2. **float-grid**: Two-column grid with image on right, text on left with rounded corners
3. **deck-slide**: Two columns with subtle badge, image square aspect ratio
4. **bordered-classic**: Centered text in border, image background faded
5. **centered-minimal**: Text centered, image background very faint, chevron animation
6. **wide-landscape**: Image at top with gradient overlay, card floats above
7. **brutalist-stack**: Grayscale image, stacked text, heavy typography
8. **dark-luxe**: Italic serif headline, radial gradient background, centered
9. **gallery-minimal**: Asymmetric layout, minimal spacing, text on left grid
10. **gradient-wave**: Gradient background, two-column with image right, gradient text
11. **clean-nordic**: Clean typography, image below text, functional minimalism
12. **geometric-overlap**: Geometric shapes, layered borders on image, playful layout

Each hero variant displays:
- Property `hero_headline` (h1)
- Property `hero_subheadline` (h2)
- Property `hero_text` (body)
- Property `hero_image_url` (background or element image)
- Two CTA buttons: "Explore Availability" → `/availability` route, "Discover Amenities" → `#amenities` anchor

---

## PAGES TO CREATE

### 1. TemplateSelector Page (`pages/TemplateSelector.jsx`)
- Display all 12 templates as browsable cards
- Each card shows template name, description, color swatch
- Click card to preview template (navigate to `/preview?template=TEMPLATE_ID`)

### 2. HomePage (`pages/template/HomePage.jsx`)
- Hero section (variant depends on template)
- Amenities section below
- Footer with company info

### 3. AvailabilityPage (`pages/template/AvailabilityPage.jsx`)
- Grid or list of units from Unit entity
- Filter by unit type
- Display: unit type, bedrooms, bathrooms, sqft, price, status, available date

### 4. GalleryPage (`pages/template/GalleryPage.jsx`)
- Photo gallery from property_photos and unit photos
- Lightbox/modal for viewing full images
- Organized by section

### 5. FAQsPage (`pages/template/FAQsPage.jsx`)
- Two variants: accordion or two-column grid
- Display faqs from Property entity

### 6. ContactPage (`pages/template/ContactPage.jsx`)
- Contact form that submits to ContactSubmission entity
- Form fields: name, email, phone, message, move_in_date, unit_interest
- Support for custom fields from Property.contact_form_fields

---

## SHARED COMPONENTS

### HeroSection Component
- Accepts `property`, `template`, `basePath` props
- Routes based on `template.heroStyle` to correct variant
- All 12 variants follow the same interface

### AmenitiesSection Component
- Displays amenities grid or list variant
- Grouped by category
- Icon rendering based on amenity.icon field
- Color styling from template

### AvailabilityGrid Component
- Responsive grid of unit cards
- Filter controls
- Status badges with colors

### PhotoGallery Component
- Responsive image grid
- Modal/lightbox overlay
- Navigation controls

### ContactForm Component
- Dynamic form based on contact_form_fields
- Submit to ContactSubmission entity
- Form validation and success message

### FAQSection Component
- Accordion variant: expandable Q&A
- Grid variant: two-column layout

### TemplateHeader Component
- Logo, property name
- Navigation links (Home, Availability, Amenities, Gallery, FAQs, Contact)
- Desktop and mobile responsive
- CTA buttons (Resident Portal, Leasing)

### TemplateFooter Component
- Property info section
- Sitemap links
- Contact details
- "Professionally Managed By" section with management company name
- Copyright, privacy policy link
- Equal Housing logo

---

## LAYOUT & ROUTING

### App Routes
```
/ → TemplateSelector (browse templates)
/preview?template=TEMPLATE_ID → TemplateLayout
  /preview (index) → HomePage
  /preview/availability → AvailabilityPage
  /preview/gallery → GalleryPage
  /preview/faqs → FAQsPage
  /preview/contact → ContactPage
```

### TemplateLayout Wrapper
- Fetches property data based on ?propertyId query param
- Applies TemplateWrapper to set global theme styles (colors, fonts)
- Renders TemplateHeader
- Renders page content via Outlet
- Renders TemplateFooter

---

## STYLING & THEMING

### Color System
Each template defines 6 colors: `bg`, `text`, `accent`, `cardBg`, `muted`, `border`
- All text colors inherit from template.colors.text
- All buttons use template.colors.accent
- All cards use template.colors.cardBg
- All borders use template.colors.border

### Typography
Each template defines: `heading` and `body` font families
- All headings use template.fonts.heading
- All body text uses template.fonts.body
- Google Fonts imported

### Border Radius
Each template defines a base `radius` value applied globally:
- Buttons: `radius`
- Cards: `radius`
- Images: `radius`

---

## DATA FLOW

1. User navigates to `/preview?propertyId=ABC&template=metropolitan`
2. TemplateLayout fetches Property ABC from database
3. Merges with DEFAULT_PROPERTY fallback values
4. Fetches all Units where property_id = ABC
5. Selects template configuration based on Property.template_id or query param override
6. TemplateWrapper applies theme (colors, fonts, radius) to entire page
7. TemplateHeader/Footer render with property data and template styles
8. Page components (HomePage, AvailabilityPage, etc.) receive property, units, template via context
9. All components render using template.colors and template.fonts

---

## INTEGRATION CHECKLIST

- [ ] Create 3 entities: Property, Unit, ContactSubmission
- [ ] Create 12 template definitions in templateConfig.js
- [ ] Create usePropertyData hook for data fetching
- [ ] Create TemplateSelector page with 12 cards
- [ ] Create TemplateLayout wrapper with header/footer
- [ ] Create 12 hero section variants in HeroSection component
- [ ] Create 5 pages: Home, Availability, Gallery, FAQs, Contact
- [ ] Create shared components: AmenitiesSection, AvailabilityGrid, PhotoGallery, ContactForm, FAQSection
- [ ] Create TemplateHeader and TemplateFooter
- [ ] Create TemplateWrapper for theme application
- [ ] Add routes to App.jsx
- [ ] Test with sample property data
- [ ] Verify responsive design on mobile, tablet, desktop

---

## NOTES

- All 12 templates use the same underlying component structure — styling varies
- Data-driven: templates adapt to property data automatically
- Header buttons consistently labeled "Explore Availability" and "Discover Amenities"
- Footer displays "Professionally Managed By" with management company name
- Mobile-first responsive design required