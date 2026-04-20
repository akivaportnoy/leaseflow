import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoGallery({ property, units, template, variant = "masonry" }) {
  const { colors, fonts } = template;
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const propertyPhotos = property.property_photos || [];
  const unitPhotoGroups = {};
  (units || []).forEach((u) => {
    if (u.photos?.length > 0) {
      if (!unitPhotoGroups[u.unit_type]) unitPhotoGroups[u.unit_type] = [];
      unitPhotoGroups[u.unit_type].push(...u.photos);
    }
  });

  const allPhotos = [
    ...propertyPhotos.map((p) => ({ ...p, section: "Property" })),
    ...Object.entries(unitPhotoGroups).flatMap(([type, photos]) =>
      photos.map((p) => ({ ...p, section: type }))
    ),
  ];

  const openLightbox = (photos, idx) => {
    setLightbox(photos);
    setLightboxIdx(idx);
  };

  const renderPhotoGrid = (photos, columns = 3) => (
    <div className={`grid grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-3 lg:gap-4`}>
      {photos.map((photo, i) => (
        <div
          key={i}
          className="relative group cursor-pointer overflow-hidden aspect-[4/3]"
          style={{ borderRadius: template.radius }}
          onClick={() => openLightbox(photos, i)}
        >
          <img
            src={photo.url}
            alt={photo.caption || "Property photo"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {photo.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm">{photo.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const hasPhotos = propertyPhotos.length > 0 || Object.keys(unitPhotoGroups).length > 0;

  return (
    <div>
      {!hasPhotos && (
        <div className="text-center py-20 opacity-50">
          <p className="text-lg">Photo gallery will appear once photos are uploaded.</p>
        </div>
      )}

      {propertyPhotos.length > 0 && (
        <div className="mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6" style={{ fontFamily: fonts.heading }}>
            Property Photos
          </h2>
          {renderPhotoGrid(propertyPhotos)}
        </div>
      )}

      {Object.entries(unitPhotoGroups).map(([type, photos]) => (
        <div key={type} className="mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6" style={{ fontFamily: fonts.heading }}>
            {type} Photos
          </h2>
          {renderPhotoGrid(photos)}
        </div>
      ))}

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90" onClick={() => setLightbox(null)}>
          <button
            className="absolute top-4 right-4 text-white p-2 hover:opacity-70"
            onClick={() => setLightbox(null)}
            style={{ minWidth: "44px", minHeight: "44px" }}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:opacity-70"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + lightbox.length) % lightbox.length); }}
            style={{ minWidth: "44px", minHeight: "44px" }}
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={lightbox[lightboxIdx]?.url}
            alt={lightbox[lightboxIdx]?.caption || ""}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:opacity-70"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % lightbox.length); }}
            style={{ minWidth: "44px", minHeight: "44px" }}
          >
            <ChevronRight size={32} />
          </button>
          {lightbox[lightboxIdx]?.caption && (
            <p className="absolute bottom-6 text-white text-center text-sm opacity-80 px-4">
              {lightbox[lightboxIdx].caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}