# Leaseflow Property Templates - Setup Guide

This guide helps you import the property website templates into another Base44 project.

## Files to Copy

Copy the following files and directories to your new project:

### 1. Configuration Files
- `lib/templateConfig.js` → Copy to `lib/templateConfig.js`
- `lib/usePropertyData.js` → Copy to `lib/usePropertyData.js`

### 2. Template Components
Copy entire directory: `components/templates/` → `components/templates/`

This includes:
- `TemplateLayout.jsx`
- `TemplateSelector.jsx`
- `TemplateCard.jsx`
- `TemplateWrapper.jsx`
- `shared/` (all shared components like HeroSection, AmenitiesSection, etc.)

### 3. Template Pages
Copy entire directory: `pages/template/` → `pages/template/`

This includes:
- `HomePage.jsx`
- `AvailabilityPage.jsx`
- `GalleryPage.jsx`
- `FAQsPage.jsx`
- `ContactPage.jsx`

## Integration Steps

1. **Copy all files** listed above to your new Base44 project in the matching paths

2. **Ensure these entities exist** in your project:
   ```
   - Property
   - Unit
   - ContactSubmission
   ```
   See the original project for entity schemas if needed.

3. **Update your App.jsx** to include template routes:
   ```jsx
   import TemplateSelector from './pages/TemplateSelector';
   import TemplateLayout from './components/templates/TemplateLayout';
   import HomePage from './pages/template/HomePage';
   import AvailabilityPage from './pages/template/AvailabilityPage';
   import GalleryPage from './pages/template/GalleryPage';
   import FAQsPage from './pages/template/FAQsPage';
   import ContactPage from './pages/template/ContactPage';

   // Add these routes inside your <Routes>:
   <Route path="/templates" element={<TemplateSelector />} />
   <Route path="/preview" element={<TemplateLayout />}>
     <Route index element={<HomePage />} />
     <Route path="availability" element={<AvailabilityPage />} />
     <Route path="gallery" element={<GalleryPage />} />
     <Route path="faqs" element={<FAQsPage />} />
     <Route path="contact" element={<ContactPage />} />
   </Route>
   ```

4. **Verify dependencies** - All required packages are standard Base44 packages (lucide-react, react-router-dom, etc.)

## Testing

Once integrated:
1. Navigate to `/templates` to see the template selector
2. Click a template to preview it
3. Add sample Property and Unit records to see the templates populate with data

## Notes

- Templates automatically pull data from the `Property` entity
- The `template_id` field on Property determines which template design is used
- All 12 templates are available: metropolitan, verdant, kinetic, heritage, zenith, panorama, brut, velvet, canvas, pulse, nordic, prism