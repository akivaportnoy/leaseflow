import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const heroVariants = {
  "split-overlay": SplitOverlayHero,
  "float-grid": FloatGridHero,
  "deck-slide": DeckSlideHero,
  "bordered-classic": BorderedClassicHero,
  "centered-minimal": CenteredMinimalHero,
  "wide-landscape": WideLandscapeHero,
  "brutalist-stack": BrutalistStackHero,
  "dark-luxe": DarkLuxeHero,
  "gallery-minimal": GalleryMinimalHero,
  "gradient-wave": GradientWaveHero,
  "clean-nordic": CleanNordicHero,
  "geometric-overlap": GeometricOverlapHero,
};

export default function HeroSection({ property, template, basePath = "" }) {
  const Variant = heroVariants[template.heroStyle] || CenteredMinimalHero;
  return <Variant property={property} template={template} basePath={basePath} />;
}

function SplitOverlayHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {property.hero_image_url && (
          <img src={property.hero_image_url} alt="" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colors.bg}EE 40%, ${colors.bg}44 100%)` }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-none tracking-tight mb-6" style={{ fontFamily: fonts.heading }}>
            {property.hero_headline}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 opacity-80" style={{ fontFamily: fonts.heading }}>
            {property.hero_subheadline}
          </h2>
          <p className="text-base lg:text-lg mb-10 opacity-70 max-w-lg leading-relaxed">
            {property.hero_text}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to={`${basePath}/availability`} className="px-8 py-4 text-base font-semibold transition-all hover:opacity-90 inline-flex items-center" style={{ backgroundColor: colors.accent, color: colors.bg, borderRadius: template.radius, minHeight: "44px" }}>
              Explore Availability
            </Link>
            <a href="#amenities" className="px-8 py-4 text-base font-semibold border transition-all hover:opacity-80 inline-flex items-center" style={{ borderColor: colors.border, borderRadius: template.radius, minHeight: "44px" }}>
              Discover Amenities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatGridHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="relative min-h-[85vh] flex items-center" style={{ background: `linear-gradient(180deg, ${colors.bg} 0%, ${colors.cardBg} 100%)` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: fonts.heading }}>
              {property.hero_headline}
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl opacity-70" style={{ fontFamily: fonts.heading }}>
              {property.hero_subheadline}
            </h2>
            <p className="text-base opacity-60 max-w-md leading-relaxed">{property.hero_text}</p>
            <div className="flex flex-wrap gap-4">
              <Link to={`${basePath}/availability`} className="inline-flex items-center px-8 py-4 text-base font-semibold transition-all hover:opacity-90 shadow-lg" style={{ backgroundColor: colors.accent, color: "#FFFFFF", borderRadius: "9999px", minHeight: "44px" }}>
                Explore Availability
              </Link>
              <a href="#amenities" className="inline-flex items-center px-8 py-4 text-base font-semibold border transition-all hover:opacity-80" style={{ borderColor: colors.border, borderRadius: "9999px", minHeight: "44px" }}>
                Discover Amenities
              </a>
            </div>
          </div>
          <div className="relative">
            {property.hero_image_url ? (
              <div style={{ borderRadius: "32px" }} className="overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={property.hero_image_url} alt={property.name} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div style={{ borderRadius: "32px", backgroundColor: colors.accent + "15" }} className="aspect-[4/5]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeckSlideHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="min-h-[90vh] flex items-center" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6 border" style={{ borderColor: colors.accent, color: colors.accent }}>
              Now Leasing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-none tracking-tighter mb-6" style={{ fontFamily: fonts.heading }}>
              {property.hero_headline}
            </h1>
            <h2 className="text-xl lg:text-2xl font-light mb-6 opacity-60">{property.hero_subheadline}</h2>
            <p className="text-base opacity-50 mb-10 max-w-md">{property.hero_text}</p>
            <div className="flex flex-wrap gap-4">
              <Link to={`${basePath}/availability`} className="px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90" style={{ backgroundColor: colors.accent, color: "#FFFFFF", borderRadius: template.radius, minHeight: "44px" }}>
                Explore Availability
              </Link>
              <a href="#amenities" className="px-8 py-4 text-sm font-bold uppercase tracking-wider border transition-all hover:opacity-80" style={{ borderColor: colors.border, borderRadius: template.radius, minHeight: "44px" }}>
                Discover Amenities
              </a>
            </div>
          </div>
          <div className="relative">
            {property.hero_image_url ? (
              <div className="overflow-hidden aspect-square" style={{ borderRadius: template.radius }}>
                <img src={property.hero_image_url} alt={property.name} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="aspect-square" style={{ borderRadius: template.radius, background: `linear-gradient(135deg, ${colors.accent}22, ${colors.accent}44)` }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function BorderedClassicHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">{property.hero_image_url && <img src={property.hero_image_url} alt="" className="w-full h-full object-cover" />}<div className="absolute inset-0" style={{ background: `${colors.bg}DD` }} /></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="border-2 p-8 lg:p-16" style={{ borderColor: colors.accent }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: fonts.heading }}>{property.hero_headline}</h1>
          <div className="w-24 h-0.5 mx-auto mb-6" style={{ backgroundColor: colors.accent }} />
          <h2 className="text-lg lg:text-xl italic mb-6 opacity-80" style={{ fontFamily: fonts.heading }}>{property.hero_subheadline}</h2>
          <p className="text-base opacity-60 mb-10 max-w-lg mx-auto">{property.hero_text}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={`${basePath}/availability`} className="inline-flex items-center px-10 py-4 text-sm font-semibold uppercase tracking-widest transition-all hover:opacity-90" style={{ backgroundColor: colors.accent, color: colors.bg, minHeight: "44px" }}>
              Explore Availability
            </Link>
            <a href="#amenities" className="inline-flex items-center px-10 py-4 text-sm font-semibold uppercase tracking-widest border-2 transition-all hover:opacity-80" style={{ borderColor: colors.accent, color: colors.accent, minHeight: "44px" }}>
              Discover Amenities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CenteredMinimalHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6">
      {property.hero_image_url && <div className="absolute inset-0 opacity-10"><img src={property.hero_image_url} alt="" className="w-full h-full object-cover" /></div>}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light leading-none tracking-tight mb-8" style={{ fontFamily: fonts.heading }}>{property.hero_headline}</h1>
        <h2 className="text-lg lg:text-xl mb-6 opacity-50">{property.hero_subheadline}</h2>
        <p className="text-base opacity-40 mb-12 max-w-md mx-auto leading-relaxed">{property.hero_text}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to={`${basePath}/availability`} className="inline-flex items-center px-10 py-4 text-sm font-medium tracking-widest uppercase transition-all hover:opacity-90" style={{ backgroundColor: colors.text, color: colors.bg, borderRadius: template.radius, minHeight: "44px" }}>
            Explore Availability
          </Link>
          <a href="#amenities" className="inline-flex items-center px-10 py-4 text-sm font-medium tracking-widest uppercase border transition-all hover:opacity-70" style={{ borderColor: colors.text, color: colors.text, minHeight: "44px" }}>
            Discover Amenities
          </a>
        </div>
        <div className="mt-20 animate-bounce"><ChevronDown size={24} style={{ color: colors.muted }} /></div>
      </div>
    </section>
  );
}

function WideLandscapeHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="relative">
      <div className="aspect-[21/9] max-h-[70vh] relative overflow-hidden">
        {property.hero_image_url ? <img src={property.hero_image_url} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${colors.accent}33, ${colors.bg})` }} />}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${colors.bg} 0%, transparent 60%)` }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="p-8 lg:p-12 shadow-xl" style={{ backgroundColor: colors.cardBg, borderRadius: template.radius }}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>{property.hero_headline}</h1>
          <h2 className="text-lg mb-4 opacity-70">{property.hero_subheadline}</h2>
          <p className="text-base opacity-50 mb-8 max-w-2xl">{property.hero_text}</p>
          <div className="flex flex-wrap gap-4">
            <Link to={`${basePath}/availability`} className="inline-flex items-center px-8 py-3 text-sm font-semibold transition-all" style={{ backgroundColor: colors.accent, color: "#FFFFFF", borderRadius: template.radius, minHeight: "44px" }}>
              Explore Availability
            </Link>
            <a href="#amenities" className="inline-flex items-center px-8 py-3 text-sm font-semibold border transition-all hover:opacity-80" style={{ borderColor: colors.border, borderRadius: template.radius, minHeight: "44px" }}>
              Discover Amenities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrutalistStackHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="min-h-[85vh] flex items-end" style={{ backgroundColor: colors.cardBg }}>
      <div className="w-full">
        {property.hero_image_url && <div className="h-[40vh] overflow-hidden"><img src={property.hero_image_url} alt="" className="w-full h-full object-cover grayscale" /></div>}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-9xl font-black uppercase leading-none tracking-tight mb-4" style={{ fontFamily: fonts.heading }}>{property.hero_headline}</h1>
          <div className="h-1 w-20 mb-6" style={{ backgroundColor: colors.accent }} />
          <h2 className="text-xl lg:text-2xl uppercase font-bold mb-4 opacity-70">{property.hero_subheadline}</h2>
          <p className="text-base mb-8 max-w-xl opacity-60">{property.hero_text}</p>
          <div className="flex flex-wrap gap-4">
            <Link to={`${basePath}/availability`} className="inline-flex items-center px-8 py-4 text-sm font-black uppercase tracking-widest" style={{ backgroundColor: colors.accent, color: "#FFFFFF", minHeight: "44px" }}>
              Explore Availability
            </Link>
            <a href="#amenities" className="inline-flex items-center px-8 py-4 text-sm font-black uppercase tracking-widest border transition-all hover:opacity-80" style={{ borderColor: colors.accent, color: colors.accent, minHeight: "44px" }}>
              Discover Amenities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DarkLuxeHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {property.hero_image_url && <div className="absolute inset-0"><img src={property.hero_image_url} alt="" className="w-full h-full object-cover opacity-30" /></div>}
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 50%, ${colors.cardBg}AA, ${colors.bg})` }} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] mb-8 opacity-50" style={{ color: colors.accent }}>Welcome to</p>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light italic leading-none mb-8" style={{ fontFamily: fonts.heading, color: colors.accent }}>{property.hero_headline}</h1>
        <h2 className="text-lg lg:text-xl mb-6 opacity-60">{property.hero_subheadline}</h2>
        <p className="text-base mb-12 opacity-40 max-w-lg mx-auto">{property.hero_text}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to={`${basePath}/availability`} className="inline-flex items-center px-10 py-4 text-sm font-medium tracking-widest uppercase transition-all hover:opacity-90" style={{ backgroundColor: colors.accent, color: "#FFFFFF", borderRadius: template.radius, minHeight: "44px" }}>
            Explore Availability
          </Link>
          <a href="#amenities" className="inline-flex items-center px-10 py-4 text-sm font-medium tracking-widest uppercase border transition-all hover:opacity-80" style={{ borderColor: colors.accent, color: colors.accent, borderRadius: template.radius, minHeight: "44px" }}>
            Discover Amenities
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryMinimalHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-normal leading-none mb-12" style={{ fontFamily: fonts.heading }}>{property.hero_headline}</h1>
            <div className="h-px w-full mb-8" style={{ backgroundColor: colors.border }} />
            <p className="text-base opacity-50 max-w-md leading-relaxed">{property.hero_text}</p>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-lg italic opacity-60" style={{ fontFamily: fonts.heading }}>{property.hero_subheadline}</h2>
            <div className="flex flex-wrap gap-4">
              <Link to={`${basePath}/availability`} className="inline-flex items-center px-8 py-3 text-sm font-medium border-b-2 transition-all hover:opacity-70" style={{ borderColor: colors.text, minHeight: "44px" }}>
                Explore Availability
              </Link>
              <a href="#amenities" className="inline-flex items-center px-8 py-3 text-sm font-medium border-b-2 transition-all hover:opacity-70" style={{ borderColor: colors.text, minHeight: "44px" }}>
                Discover Amenities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GradientWaveHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colors.accent}15 0%, ${colors.muted}15 50%, ${colors.accent}08 100%)` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6" style={{ fontFamily: fonts.heading, background: `linear-gradient(135deg, ${colors.text}, ${colors.accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {property.hero_headline}
            </h1>
            <h2 className="text-xl mb-4 opacity-70">{property.hero_subheadline}</h2>
            <p className="text-base opacity-50 mb-10 max-w-md">{property.hero_text}</p>
            <div className="flex flex-wrap gap-4">
              <Link to={`${basePath}/availability`} className="inline-flex items-center px-8 py-4 text-sm font-bold shadow-lg transition-all hover:shadow-xl" style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.muted})`, color: "#FFFFFF", borderRadius: "9999px", minHeight: "44px" }}>
                Explore Availability
              </Link>
              <a href="#amenities" className="inline-flex items-center px-8 py-4 text-sm font-bold border transition-all hover:opacity-80" style={{ borderColor: colors.accent, color: colors.accent, borderRadius: "9999px", minHeight: "44px" }}>
                Discover Amenities
              </a>
            </div>
          </div>
          {property.hero_image_url && (
            <div className="relative">
              <div className="overflow-hidden shadow-2xl aspect-[4/5]" style={{ borderRadius: template.radius }}>
                <img src={property.hero_image_url} alt={property.name} className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CleanNordicHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="min-h-[85vh] flex items-center" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: fonts.heading }}>{property.hero_headline}</h1>
          <h2 className="text-lg opacity-60 mb-6">{property.hero_subheadline}</h2>
          <p className="text-base opacity-50 mb-10 leading-relaxed">{property.hero_text}</p>
          <div className="flex flex-wrap gap-4">
            <Link to={`${basePath}/availability`} className="inline-flex items-center px-8 py-4 text-sm font-semibold transition-all hover:opacity-90" style={{ backgroundColor: colors.accent, color: "#FFFFFF", borderRadius: template.radius, minHeight: "44px" }}>
              Explore Availability
            </Link>
            <a href="#amenities" className="inline-flex items-center px-8 py-4 text-sm font-semibold border transition-all hover:opacity-80" style={{ borderColor: colors.border, borderRadius: template.radius, minHeight: "44px" }}>
              Discover Amenities
            </a>
          </div>
        </div>
        {property.hero_image_url && (
          <div className="overflow-hidden aspect-[21/9]" style={{ borderRadius: template.radius }}>
            <img src={property.hero_image_url} alt={property.name} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}

function GeometricOverlapHero({ property, template, basePath }) {
  const { colors, fonts } = template;
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: colors.bg }}>
      <div className="absolute top-20 right-0 w-96 h-96 opacity-10" style={{ backgroundColor: colors.accent, borderRadius: "50%" }} />
      <div className="absolute bottom-0 left-20 w-64 h-64 opacity-5" style={{ backgroundColor: colors.accent, borderRadius: template.radius, transform: "rotate(45deg)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8" style={{ backgroundColor: colors.accent + "15", color: colors.accent, borderRadius: "9999px" }}>
              Now Leasing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: fonts.heading }}>{property.hero_headline}</h1>
            <h2 className="text-lg mb-4 opacity-60">{property.hero_subheadline}</h2>
            <p className="text-base opacity-50 mb-10 max-w-md">{property.hero_text}</p>
            <div className="flex flex-wrap gap-4">
              <Link to={`${basePath}/availability`} className="inline-flex items-center px-8 py-4 text-sm font-bold transition-all hover:opacity-90 shadow-lg" style={{ backgroundColor: colors.accent, color: "#FFFFFF", borderRadius: template.radius, minHeight: "44px" }}>
                Explore Availability
              </Link>
              <a href="#amenities" className="inline-flex items-center px-8 py-4 text-sm font-bold border transition-all hover:opacity-80" style={{ borderColor: colors.accent, color: colors.accent, borderRadius: template.radius, minHeight: "44px" }}>
                Discover Amenities
              </a>
            </div>
          </div>
          {property.hero_image_url && (
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 opacity-20" style={{ borderColor: colors.accent, borderRadius: template.radius }} />
              <div className="overflow-hidden shadow-xl aspect-[4/3] relative" style={{ borderRadius: template.radius }}>
                <img src={property.hero_image_url} alt={property.name} className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}