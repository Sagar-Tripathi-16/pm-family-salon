import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt, FaStar, FaCut, FaCheckCircle, FaTimes, FaExpand } from "react-icons/fa";
import { MdSpa, MdFace, MdColorLens } from "react-icons/md";
import { GiLipstick, GiBeard } from "react-icons/gi";

const WHATSAPP_URL = "https://wa.me/917349661676?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20PM%20Family%20Unisex%20Salon";
const PHONE1 = "tel:+917349661676";
const PHONE2 = "tel:+919353667336";
const MAPS_URL = "https://maps.app.goo.gl/iSHpjmjdFm31LMh96";
const INSTAGRAM = "https://www.instagram.com/pm_family_unisex_saloon_";
const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3162153159424!2d77.58356607484453!3d13.142442987188788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1957972be679%3A0x2d437292046e9ae!2sP%20M%20FAMILY%20UNISEX%20SALON!5e0!3m2!1sen!2sin!4v1774205169139!5m2!1sen!2sin";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: <FaCut size={28} className="gold-text" />,
    title: "Haircut & Styling",
    desc: "Precision cuts and modern styling for all hair types, tailored to your face shape and personality.",
  },
  {
    icon: <GiBeard size={28} className="gold-text" />,
    title: "Beard Grooming",
    desc: "Expert beard shaping, trimming, and grooming for a clean, sharp, and confident look.",
  },
  {
    icon: <MdFace size={28} className="gold-text" />,
    title: "Facial & Skincare",
    desc: "Revitalizing facials and skin treatments to give you a fresh, glowing complexion.",
  },
  {
    icon: <MdColorLens size={28} className="gold-text" />,
    title: "Hair Coloring",
    desc: "From highlights to full color transformations — premium products for vibrant, lasting results.",
  },
  {
    icon: <GiLipstick size={28} className="gold-text" />,
    title: "Bridal / Makeup",
    desc: "Stunning bridal and occasion makeup by our experienced artists for your most special moments.",
  },
  {
    icon: <MdSpa size={28} className="gold-text" />,
    title: "Hair Spa",
    desc: "Deep conditioning and nourishing hair spa treatments to restore health and shine to your hair.",
  },
];

const pricing = [
  { category: "Haircut & Styling", items: [
    { name: "Men's Haircut", price: "₹150 – ₹250" },
    { name: "Women's Haircut", price: "₹200 – ₹300" },
    { name: "Kids' Haircut", price: "₹100 – ₹150" },
  ]},
  { category: "Beard Grooming", items: [
    { name: "Beard Trim & Shape", price: "₹100 – ₹150" },
    { name: "Full Beard Grooming", price: "₹150 – ₹200" },
  ]},
  { category: "Facial & Skincare", items: [
    { name: "Basic Facial", price: "₹500+" },
    { name: "Advanced Facial", price: "₹800+" },
    { name: "Clean-up", price: "₹350+" },
  ]},
];

const whyUs = [
  { icon: "💰", title: "Affordable Pricing", desc: "Premium salon experience at prices that don't break the bank. Quality you'll love at rates that make sense." },
  { icon: "✂️", title: "Experienced Stylists", desc: "Skilled professionals with years of expertise, always keeping up with the latest trends and techniques." },
  { icon: "🧼", title: "Hygienic Environment", desc: "Highest standards of cleanliness — every tool sterilized, every surface spotless, always." },
  { icon: "⭐", title: "Customer Satisfaction", desc: "100+ five-star Google reviews and a loyal client base speak louder than any promise we could make." },
];

const galleryImages = [
  { src: "/salon1.png", alt: "Styling chairs and mirrors" },
  { src: "/salon2.png", alt: "Skincare and hair station" },
  { src: "/salon3.png", alt: "Relaxing waiting area" },
  { src: "/salon4.png", alt: "Modern salon interior" },
  { src: "/salon5.png", alt: "Reception and entry" },
  { src: "/salon7.png", alt: "Pedicure and spa area" },
];

function SectionLabel({ text }: { text: string }) {
  return <p className="gold-text text-xs tracking-[0.25em] uppercase font-semibold mb-3">{text}</p>;
}

function SectionDivider() {
  return <div className="section-divider mt-4 mb-0"></div>;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "navbar-glass border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="PM Family Unisex Salon Logo" className="h-10 w-10 rounded-full object-cover ring-1 ring-yellow-500/30 group-hover:ring-yellow-500/60 transition-all" />
          <div className="hidden sm:block">
            <span className="text-white font-bold text-base leading-tight block tracking-wide" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>PM Family</span>
            <span className="gold-text text-[10px] tracking-[0.25em] uppercase font-medium">Unisex Salon</span>
          </div>
        </a>

        <ul className="hidden md:flex gap-7 items-center">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-yellow-500 after:transition-all after:duration-300">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 btn-whatsapp px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
          <FaWhatsapp size={15} /> Book Now
        </a>

        <button className="md:hidden text-white p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <div className={`md:hidden navbar-glass border-t border-white/10 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 py-4">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 hover:text-white transition-colors text-sm font-medium block py-2.5 border-b border-white/5"
                  onClick={() => setMenuOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 btn-whatsapp px-4 py-3.5 rounded-full text-sm font-semibold w-full">
            <FaWhatsapp size={16} /> Book via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/salon4.png" alt="PM Family Unisex Salon interior" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)' }} />
      </div>

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-20">
        <div className="mb-8">
          <img src="/logo.png" alt="PM Family Unisex Salon"
            className="w-28 h-28 rounded-full mx-auto mb-5 border border-yellow-500/30 shadow-2xl object-cover ring-4 ring-yellow-500/10" />
          <p className="gold-text text-xs tracking-[0.35em] uppercase font-semibold">Hair · Skin · Makeover</p>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          Best Unisex Salon in <span className="gold-text">Yelahanka</span><br className="hidden sm:block" /> for Hair, Skin & Grooming
        </h1>

        <p className="text-white/75 text-lg sm:text-xl mb-5 font-light">Walk-ins & Appointments Available</p>

        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <FaStar key={i} className="star-filled" size={15} />)}
          </div>
          <span className="text-white/60 text-sm">4.9 · Based on 100+ Google Reviews</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-semibold shadow-xl">
            <FaWhatsapp size={20} /> Book via WhatsApp
          </a>
          <a href={PHONE1}
            className="flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-semibold border border-white/25 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
            <FaPhone size={15} /> Call Now
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-60 hover:opacity-100 transition-opacity">
        <div className="w-7 h-11 rounded-full border border-white/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-white/70 animate-pulse"></div>
        </div>
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <SectionLabel text="Who We Are" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>About PM Family Salon</h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src="/salon1.png" alt="Inside PM Family Salon" className="rounded-2xl shadow-2xl w-full object-cover h-80 sm:h-[420px]" />
            <div className="absolute -bottom-5 -right-5 bg-black rounded-2xl px-6 py-4 shadow-xl hidden sm:block">
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(i => <FaStar key={i} className="star-filled" size={12} />)}
              </div>
              <p className="text-white text-sm font-semibold">4.9 Rating</p>
              <p className="text-white/50 text-xs">100+ Google Reviews</p>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-gray-700 text-base leading-[1.85]">
              Welcome to <strong className="text-gray-900">PM Family Unisex Salon</strong> — your neighborhood destination for premium grooming and beauty services in Yelahanka, Bangalore.
            </p>
            <p className="text-gray-500 text-base leading-[1.85]">
              We believe everyone deserves to look and feel their best without spending a fortune.
            </p>
            <p className="text-gray-500 text-base leading-[1.85]">
              Our experienced team combines skill, creativity, and care to deliver exceptional results — whether you're in for a quick trim or a complete makeover.
            </p>

            <div className="space-y-3 pt-1">
              {[
                "Experienced & trained stylists",
                "Strict hygiene & sterilization standards",
                "Premium products for lasting results",
                "Welcoming environment for the whole family",
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="gold-text flex-shrink-0" size={16} />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 btn-whatsapp px-7 py-3.5 rounded-full font-semibold shadow-lg">
                <FaWhatsapp size={17} /> Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <SectionLabel text="What We Offer" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Our Services</h2>
          <SectionDivider />
          <p className="text-gray-400 mt-6 max-w-lg mx-auto text-sm leading-relaxed">Comprehensive beauty and grooming services for men, women, and children — all under one roof.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100/80 cursor-default group">
              <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2.5">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-[1.75]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-gold px-9 py-4 rounded-full text-sm font-semibold shadow-lg">
            <FaWhatsapp size={17} /> Book Any Service via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <SectionLabel text="Transparent Pricing" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Affordable Rates</h2>
          <SectionDivider />
          <p className="text-white/40 mt-6 text-sm">Premium quality services at prices everyone can enjoy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pricing.map(cat => (
            <div key={cat.category} className="bg-white/[0.04] border border-white/8 rounded-2xl p-7 hover:border-yellow-500/25 hover:bg-white/[0.07] transition-all duration-300">
              <h3 className="gold-text font-bold text-sm uppercase tracking-wider mb-5 pb-4 border-b border-white/10">{cat.category}</h3>
              <div className="space-y-4">
                {cat.items.map(item => (
                  <div key={item.name} className="flex justify-between items-center py-0.5">
                    <span className="text-white/65 text-sm">{item.name}</span>
                    <span className="gold-text font-semibold text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/25 text-xs mt-8 leading-relaxed">* Prices may vary based on hair length and service complexity. WhatsApp us for exact pricing.</p>

        <div className="text-center mt-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 btn-whatsapp px-8 py-4 rounded-full font-semibold shadow-lg">
            <FaWhatsapp size={17} /> Ask Pricing on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <SectionLabel text="The PM Difference" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Why Choose Us?</h2>
          <SectionDivider />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map(w => (
            <div key={w.title} className="service-card text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 group">
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{w.icon}</div>
              <h3 className="font-bold text-gray-900 text-base mb-3">{w.title}</h3>
              <p className="text-gray-400 text-sm leading-[1.75]">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <SectionLabel text="Inside the Salon" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Our Gallery</h2>
          <SectionDivider />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative cursor-pointer group ${i === 0 ? 'md:col-span-2 h-64 sm:h-80' : 'h-48 sm:h-64'}`}
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-400 flex items-center justify-center rounded-xl">
                <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" size={22} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-all"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <FaTimes size={16} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[88vh] rounded-2xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <div className="mb-16">
          <SectionLabel text="Customer Love" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>What Our Clients Say</h2>
          <SectionDivider />
        </div>

        <div className="bg-white/[0.04] border border-white/8 rounded-3xl px-8 py-10 mb-8">
          <div className="flex justify-center gap-1.5 mb-4">
            {[1,2,3,4,5].map(i => <FaStar key={i} className="star-filled" size={24} />)}
          </div>
          <div className="text-6xl sm:text-7xl font-bold gold-text mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>4.9</div>
          <p className="text-white/60 text-base">Based on <span className="text-white font-semibold">100+ Google Reviews</span></p>
          <p className="text-white/35 text-sm mt-2">Highly rated salon in Yelahanka, Bangalore</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            "Amazing service and friendly staff. My hair looks fantastic! Very hygienic place. Will definitely come back.",
            "Best salon in Yelahanka! Affordable prices and the stylists really know their craft. Highly recommended.",
            "Excellent facial treatment. The atmosphere is clean and relaxing. Great value for money!",
          ].map((quote, i) => (
            <div key={i} className="bg-white/[0.04] border border-white/8 rounded-2xl p-5 text-left hover:border-yellow-500/20 transition-colors">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(s => <FaStar key={s} className="star-filled" size={11} />)}
              </div>
              <p className="text-white/60 text-sm leading-[1.75] italic">"{quote}"</p>
              <p className="text-white/25 text-xs mt-4">— Google Review</p>
            </div>
          ))}
        </div>

        <a href="https://www.google.com/maps/place/P+M+FAMILY+UNISEX+SALON/@13.1424430,77.5835661,17z" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-yellow-500/30 gold-text px-7 py-3 rounded-full text-sm font-medium hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all duration-300">
          View All Reviews on Google →
        </a>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-50 mb-8">
          <FaWhatsapp className="text-green-500" size={32} />
        </div>
        <SectionLabel text="Ready for a Fresh Look?" />
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Book Your Appointment</h2>
        <SectionDivider />
        <p className="text-gray-500 text-base mt-6 mb-2 leading-relaxed">Click below to book instantly via WhatsApp</p>
        <p className="text-gray-400 text-sm mb-10">⚡ Quick response within minutes</p>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 btn-whatsapp px-12 py-5 rounded-full text-lg font-bold shadow-2xl mb-8">
          <FaWhatsapp size={22} /> Book via WhatsApp
        </a>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={PHONE1} className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors py-2">
            <FaPhone size={13} /> +91 7349661676
          </a>
          <span className="hidden sm:block text-gray-200">·</span>
          <a href={PHONE2} className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors py-2">
            <FaPhone size={13} /> +91 9353667336
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <SectionLabel text="Find Us" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Contact & Location</h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="gold-text" size={18} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">Address</h3>
                <p className="text-gray-500 text-sm leading-relaxed">No 75/2, Gantiganahalli,<br />Naganahalli Main Road, Yelahanka,<br />Bangalore, Karnataka 560064</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 btn-gold px-4 py-2 rounded-full text-xs font-semibold">
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                <FaPhone className="gold-text" size={16} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">Phone</h3>
                <a href={PHONE1} className="block text-gray-500 hover:text-yellow-600 transition-colors text-sm mb-1">+91 73496 61676</a>
                <a href={PHONE2} className="block text-gray-500 hover:text-yellow-600 transition-colors text-sm">+91 93536 67336</a>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-5 border border-green-100 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <FaWhatsapp className="text-green-500" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">WhatsApp Booking</h3>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed">Quick & easy booking — response within minutes</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-whatsapp px-5 py-2.5 rounded-full text-xs font-semibold shadow-md">
                  <FaWhatsapp size={13} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center flex-shrink-0">
                <FaInstagram className="text-pink-500" size={18} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">Instagram</h3>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition-colors text-sm font-medium">@pm_family_unisex_saloon_</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PM Family Unisex Salon Location"
            />
            <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
              <p className="text-gray-500 text-xs">P M Family Unisex Salon, Yelahanka</p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                className="btn-gold px-4 py-2 rounded-full text-xs font-semibold">
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-7">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="PM Family Logo" className="w-11 h-11 rounded-full object-cover ring-1 ring-yellow-500/20" />
              <div>
                <p className="font-bold text-base" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>PM Family</p>
                <p className="gold-text text-[10px] tracking-[0.25em] uppercase">Unisex Salon</p>
              </div>
            </div>
            <p className="text-white/35 text-xs leading-relaxed">Hair · Skin · Makeover<br />Yelahanka, Bangalore 560064</p>
          </div>

          <div>
            <h4 className="font-semibold mb-5 gold-text text-xs uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 gold-text text-xs uppercase tracking-widest">Connect</h4>
            <div className="space-y-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-green-400 text-sm transition-colors">
                <FaWhatsapp size={15} /> WhatsApp Booking
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-pink-400 text-sm transition-colors">
                <FaInstagram size={15} /> @pm_family_unisex_saloon_
              </a>
              <a href={PHONE1} className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm transition-colors">
                <FaPhone size={13} /> +91 73496 61676
              </a>
              <a href={PHONE2} className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm transition-colors">
                <FaPhone size={13} /> +91 93536 67336
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} PM Family Unisex Salon. All rights reserved.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 btn-whatsapp px-5 py-2 rounded-full text-xs font-semibold">
            <FaWhatsapp size={13} /> Book Now
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <WhyUsSection />
      <GallerySection />
      <ReviewsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
