import React, { useMemo } from "react";
import { Phone, MessageSquare, ShieldCheck, Clock3, Star, CheckCircle2, Sparkles, Wrench, Droplets, ChevronRight, ChevronDown, MapPin, Image as ImageIcon } from "lucide-react";

/**
 * Toronto Caulking & Grout — High‑Conversion Landing (EN)
 * Single-file React component. Uses TailwindCSS.
 * — Core UX: sticky CTA, short lead form, social proof, before/after, areas, FAQ, SEO JSON-LD.
 * — Accessibility: semantic tags, labels, input patterns, focus rings.
 * — Performance: system font-stack, responsive images (lazy), minimal deps.
 */

// ==== BRAND CONFIG (edit for your business) ====
const BRAND = {
  name: "Toronto Caulking & Grout",
  phone: "+1 (647) 555-0199",
  sms: "+16475550199",
  email: "quote@toronto-caulking.com",
  url: "https://example.com",
  serviceAreas: [
    "Toronto",
    "North York",
    "Etobicoke",
    "Scarborough",
    "Mississauga",
    "Vaughan",
    "Richmond Hill",
  ],
  rating: 4.9,
  reviewsCount: 88,
};

// ==== COLOR PALETTE (WCAG AA) ====
const COLORS = {
  primary: "#005EB8", // Trust blue (links/CTAs)
  primaryHover: "#0B6FD1",
  accent: "#FFB81C", // CTA highlight
  dark: "#0B1220",
  light: "#F9FAFB",
};

const CTAButton: React.FC<{ href: string; children: React.ReactNode; as?: "a" | "button" }>=({ href, children })=> (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-white font-semibold shadow-md transition-transform hover:scale-[1.02] focus:outline-none"
    style={{ backgroundColor: COLORS.primary }}
  >
    <Phone className="w-5 h-5" /> {children}
  </a>
);

export default function LandingTorontoEN() {
  const ldJson = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    url: BRAND.url,
    telephone: BRAND.phone,
    email: BRAND.email,
    image: "https://images.unsplash.com/photo-1615870216515-9f539f205e67?auto=format&fit=crop&w=1200&q=60",
    address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
    areaServed: BRAND.serviceAreas,
    aggregateRating: { "@type": "AggregateRating", ratingValue: BRAND.rating, reviewCount: BRAND.reviewsCount },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Caulking Replacement" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Sink Caulking" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grout Cleaning & Sealing" }},
    ],
    openingHours: "Mo-Sa 08:00-20:00",
  }), []);

  return (
    <div className="min-h-screen font-sans antialiased" style={{ color: COLORS.dark }}>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full grid place-items-center" style={{ backgroundColor: COLORS.primary }}>
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg">{BRAND.name}</div>
              <div className="text-xs opacity-70">Caulking • Grout • Tile</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#reviews" className="hover:underline">Reviews</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#areas" className="hover:underline">Areas</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={`sms:${BRAND.sms}`} className="hidden sm:inline-flex items-center gap-2 text-sm">
              <MessageSquare className="w-4 h-4" /> SMS</a>
            <CTAButton href={`tel:${BRAND.sms}`}>Call: {BRAND.phone}</CTAButton>
          </div>
        </div>
      </header>

      {/* HERO + LEAD FORM */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 py-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Toronto’s Trusted Caulking & Grout Experts
            </h1>
            <p className="mt-4 text-lg opacity-80">Mold-resistant caulking and professional grout cleaning. Same‑day or next‑day service across the GTA.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {["12‑month warranty", "Premium mold‑resistant silicone", "On‑time arrival", "No mess, no odor"].map((b) => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" style={{ color: COLORS.accent }} /> {b}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CTAButton href={`tel:${BRAND.sms}`}>Free Phone Estimate</CTAButton>
              <a href="#lead" className="inline-flex items-center gap-2 underline">
                See Prices <ChevronRight className="w-4 h-4"/>
              </a>
            </div>
            <div className="mt-4 text-xs opacity-70 flex items-center gap-3">
              <ShieldCheck className="w-4 h-4"/> Licensed & insured • Serving: {BRAND.serviceAreas.join(", ")}
            </div>
          </div>

          {/* Lead form */}
          <div id="lead" className="rounded-2xl p-6 shadow-lg bg-white border">
            <div className="text-lg font-semibold">Request a Free Quote</div>
            <p className="text-sm opacity-80">Leave 3 fields — we respond within 15 minutes during business hours.</p>
            <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We’ll contact you shortly.");}} className="mt-4 grid gap-3" aria-label="Quote request form">
              <div>
                <label htmlFor="name" className="text-sm">Name <span className="opacity-60">(required)</span></label>
                <input id="name" name="name" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: "#E2E8F0" }} placeholder="Your name"/>
              </div>
              <div>
                <label htmlFor="phone" className="text-sm">Phone <span className="opacity-60">(required)</span></label>
                <input id="phone" name="phone" required inputMode="tel" pattern="[0-9()+\-\s]{7,}" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: "#E2E8F0" }} placeholder="+1 (647) 000‑0000"/>
                <p className="text-[11px] opacity-60 mt-1">Format: +1 (XXX) XXX‑XXXX</p>
              </div>
              <div>
                <label htmlFor="postal" className="text-sm">Postal code <span className="opacity-60">(required)</span></label>
                <input id="postal" name="postal" required className="mt-1 w-full rounded-xl border px-3 py-2 uppercase tracking-wider" style={{ borderColor: "#E2E8F0" }} placeholder="M4B 1B3"/>
              </div>
              <div>
                <label htmlFor="service" className="text-sm">Service <span className="opacity-60">(optional)</span></label>
                <select id="service" name="service" className="mt-1 w-full rounded-xl border px-3 py-2" style={{ borderColor: "#E2E8F0" }}>
                  <option>Bathtub / Shower Re‑Caulking</option>
                  <option>Kitchen Sink Caulking</option>
                  <option>Grout Cleaning & Sealing</option>
                  <option>Minor Tile Repair</option>
                </select>
              </div>
              <div>
                <label htmlFor="photo" className="text-sm">Photo (optional)</label>
                <input id="photo" type="file" accept="image/*" className="mt-1 w-full rounded-xl border px-3 py-2" style={{ borderColor: "#E2E8F0" }}/>
              </div>
              <button type="submit" className="mt-2 rounded-2xl px-5 py-3 text-white font-semibold" style={{ backgroundColor: COLORS.primary }}>Get My Quote</button>
              <p className="text-[11px] opacity-60">By submitting, you agree to be contacted by phone/SMS/email. CASL‑compliant, no spam.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-10" style={{ background: COLORS.light }}>
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-4 gap-6">
          {[{icon: <Clock3 className="w-6 h-6"/>, title: "Same‑day available", desc: "If booked before 12:00"}, {icon: <ShieldCheck className="w-6 h-6"/>, title: "12‑month warranty", desc: "Mold‑resistant silicone"}, {icon: <Star className="w-6 h-6"/>, title: `${BRAND.rating}/5 rating`, desc: `${BRAND.reviewsCount}+ Google reviews`}, {icon: <MapPin className="w-6 h-6"/>, title: "GTA coverage", desc: BRAND.serviceAreas.slice(0,3).join(", ")+"…"}].map((b, i) => (
            <div key={i} className="rounded-2xl bg-white border p-5">
              <div className="flex items-center gap-3 font-semibold">{b.icon} {b.title}</div>
              <p className="text-sm opacity-80 mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Popular services</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[{title: "Bathtub / Shower Re‑Caulking", img: "https://images.unsplash.com/photo-1615870216515-9f539f205e67?auto=format&fit=crop&w=1200&q=60", list:["Remove old bead","Clean & disinfect","Apply sanitary silicone"]}, {title: "Grout Cleaning & Sealing", img: "https://images.unsplash.com/photo-1556909114-56eb2fe3f4fd?auto=format&fit=crop&w=1200&q=60", list:["Deep clean","Recolor if needed","Hydrophobic sealant"]}, {title: "Kitchen Sink Caulking", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=60", list:["Counters & splashback","Seam sealing","Food‑safe silicone"]}].map((s, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border bg-white">
                <img src={s.img} alt="" className="w-full h-48 object-cover" loading="lazy"/>
                <div className="p-5">
                  <div className="font-semibold text-lg flex items-center gap-2"><Wrench className="w-5 h-5"/>{s.title}</div>
                  <ul className="mt-3 space-y-2 text-sm">
                    {s.list.map((li) => (<li key={li} className="flex items-center gap-2"><Sparkles className="w-4 h-4" style={{ color: COLORS.accent }}/>{li}</li>))}
                  </ul>
                  <div className="mt-4"><CTAButton href={`tel:${BRAND.sms}`}>Get Price</CTAButton></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-12" style={{ background: COLORS.light }}>
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Before & After</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border bg-white">
                <img src={`https://picsum.photos/seed/gta${i}/800/500`} className="w-full h-48 object-cover" alt="Before and after example" loading="lazy"/>
                <div className="p-3 text-xs opacity-70 flex items-center gap-2"><ImageIcon className="w-3 h-3"/> Real Toronto job #{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">What homeowners say</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {["Professional, quick, perfectly smooth bead!","They removed mold and re‑caulked — the tub looks brand new.","Great price and service. Highly recommend."].map((t, i) => (
              <div key={i} className="rounded-2xl border p-5 bg-white">
                <div className="flex items-center gap-1 text-yellow-500" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="mt-3 text-sm">{t}</p>
                <div className="mt-3 text-xs opacity-70">Via Google Reviews</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="py-12" style={{ background: COLORS.light }}>
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">We serve Toronto & GTA</h2>
          <p className="mt-2 opacity-80">{BRAND.serviceAreas.join(" • ")}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {q: "How long does new caulking last?", a: "With proper prep and premium sanitary silicone, typically 3–5 years or more. We provide a 12‑month workmanship warranty."},
              {q: "Do you serve condos?", a: "Yes. We work with condo management and follow quiet hours and elevator booking rules."},
              {q: "How long is the visit?", a: "Usually 60–120 minutes for a standard tub/shower, then 6–12 hours for full cure."},
              {q: "Do you remove the old bead?", a: "Always. We remove old caulk, degrease, disinfect against mold, then apply a new sanitary bead."},
            ].map((f, i) => (
              <details key={i} className="rounded-xl border bg-white p-4">
                <summary className="font-medium flex items-center justify-between cursor-pointer">{f.q} <ChevronDown className="w-4 h-4"/></summary>
                <p className="mt-2 text-sm opacity-80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <div className="font-bold">Ready to start?</div>
            <div className="text-sm opacity-80">Fast quotes by phone & photo. Hours: Mon–Sat 8:00–20:00</div>
          </div>
          <div className="flex gap-3">
            <CTAButton href={`tel:${BRAND.sms}`}>Call: {BRAND.phone}</CTAButton>
            <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 border">
              <MessageSquare className="w-5 h-5"/> Email
            </a>
          </div>
          <div className="text-xs opacity-70 md:text-right">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        </div>
      </footer>

      {/* SEO: Title/Description to be set in <head> via framework. JSON-LD below for crawlers. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
    </div>
  );
}
