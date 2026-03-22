import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt, FaStar, FaCut, FaCheckCircle } from "react-icons/fa";
import { MdSpa, MdFace, MdColorLens } from "react-icons/md";
import { GiLipstick, GiBeard } from "react-icons/gi";

const WHATSAPP_URL = "https://wa.me/917349661676?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20PM%20Family%20Unisex%20Salon";
const PHONE1 = "tel:+917349661676";
const PHONE2 = "tel:+919353667336";
const MAPS_URL = "https://maps.app.goo.gl/iSHpjmjdFm31LMh96";
const INSTAGRAM = "https://www.instagram.com/pm_family_unisex_saloon_";

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
    icon: <FaCut size={32} className="gold-text" />,
    title: "Haircut & Styling",
    desc: "Precision cuts and modern styling for all hair types, tailored to your face shape and personality.",
  },
  {
    icon: <GiBeard size={32} className="gold-text" />,
    title: "Beard Grooming",
    desc: "Expert beard shaping, trimming, and grooming for a clean, sharp, and confident look.",
  },
  {
    icon: <MdFace size={32} className="gold-text" />,
    title: "Facial & Skincare",
    desc: "Revitalizing facials and skin treatments to give you a fresh, glowing complexion.",
  },
  {
    icon: <MdColorLens size={32} className="gold-text" />,
    title: "Hair Coloring",
    desc: "From highlights to full color transformations — we use premium products for vibrant, lasting results.",
  },
  {
    icon: <GiLipstick size={32} className="gold-text" />,
    title: "Bridal / Makeup",
    desc: "Stunning bridal and occasion makeup by our experienced artists for your most special moments.",
  },
  {
    icon: <MdSpa size={32} className="gold-text" />,
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
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "Premium salon experience at prices that don't break the bank. Quality you'll love at rates that make you smile.",
  },
  {
    icon: "✂️",
    title: "Experienced Stylists",
    desc: "Our team of skilled professionals brings years of expertise to every service, keeping up with the latest trends.",
  },
  {
    icon: "🧼",
    title: "Hygienic Environment",
    desc: "We maintain the highest standards of cleanliness — every tool sterilized, every surface spotless, always.",
  },
  {
    icon: "⭐",
    title: "Customer Satisfaction",
    desc: "With 100+ five-star Google reviews and a loyal client base, your satisfaction is our greatest achievement.",
  },
];

const galleryImages = [
  { src: "/salon1.png", alt: "Styling chairs and mirrors" },
  { src: "/salon2.png", alt: "Skincare and hair station" },
  { src: "/salon3.png", alt: "Relaxing waiting area" },
  { src: "/salon4.png", alt: "Modern salon interior" },
  { src: "/salon5.png", alt: "Reception and entry" },
  { src: "/salon7.png", alt: "Pedicure and spa area" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-glass shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logo.png" alt="PM Family Unisex Salon Logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <span className="text-white font-bold text-lg leading-tight block" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>PM Family</span>
            <span className="gold-text text-xs tracking-widest uppercase">Unisex Salon</span>
          </div>
        </a>

        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 btn-whatsapp px-4 py-2 rounded-full text-sm font-semibold">
          <FaWhatsapp size={16} /> Book Now
        </a>

        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden navbar-glass border-t border-white/10 px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-3">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-white/80 hover:text-white transition-colors text-sm font-medium block py-1"
                  onClick={() => setMenuOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 btn-whatsapp px-4 py-2.5 rounded-full text-sm font-semibold">
            <FaWhatsapp size={16} /> Book via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/salon4.png" alt="PM Family Unisex Salon" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <img src="/logo.png" alt="PM Family Unisex Salon" className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-yellow-500/40 shadow-2xl object-cover" />
          <p className="gold-text text-sm tracking-[0.3em] uppercase font-medium">Hair · Skin · Makeover</p>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          Best Unisex Salon in <span className="gold-text">Yelahanka</span> for Hair, Skin & Grooming
        </h1>

        <p className="text-white/80 text-lg sm:text-xl mb-3">Walk-ins & Appointments Available</p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex">
            {[1,2,3,4,5].map(i => <FaStar key={i} className="star-filled" size={16} />)}
          </div>
          <span className="text-white/70 text-sm">4.9 · Based on 100+ Google Reviews</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold shadow-lg">
            <FaWhatsapp size={20} /> Book via WhatsApp
          </a>
          <a href={PHONE1}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
            <FaPhone size={16} /> Call Now
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-white/60"></div>
        </div>
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="gold-text text-sm tracking-widest uppercase font-medium mb-2">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About PM Family Salon</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/salon1.png" alt="Inside PM Family Salon" className="rounded-2xl shadow-xl w-full object-cover h-72 sm:h-96" />
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to <strong className="text-gray-900">PM Family Unisex Salon</strong> — your neighborhood destination for premium grooming and beauty services in Yelahanka, Bangalore.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe everyone deserves to look and feel their best without spending a fortune. Our experienced team of stylists combines skill, creativity, and care to deliver exceptional results for every client — whether you're in for a quick trim or a full makeover.
            </p>
            <div className="space-y-3">
              {[
                "Experienced & trained stylists",
                "Strict hygiene & sterilization standards",
                "Premium products for lasting results",
                "Welcoming environment for the whole family",
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="gold-text flex-shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-whatsapp px-6 py-3 rounded-full font-semibold mt-2">
              <FaWhatsapp size={18} /> Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="gold-text text-sm tracking-widest uppercase font-medium mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="section-divider"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Comprehensive beauty and grooming services for men, women, and children under one roof.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100 cursor-default">
              <div className="w-14 h-14 rounded-xl bg-yellow-50 flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-gold px-8 py-4 rounded-full text-base font-semibold shadow-md">
            <FaWhatsapp size={18} /> Book Any Service
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="gold-text text-sm tracking-widest uppercase font-medium mb-2">Transparent Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Affordable Rates</h2>
          <div className="section-divider"></div>
          <p className="text-white/60 mt-4">Premium quality services at prices everyone can enjoy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map(cat => (
            <div key={cat.category} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-colors">
              <h3 className="gold-text font-bold text-lg mb-5 pb-3 border-b border-white/10">{cat.category}</h3>
              <div className="space-y-4">
                {cat.items.map(item => (
                  <div key={item.name} className="pricing-row flex justify-between items-center py-1 px-1 rounded-lg transition-colors">
                    <span className="text-white/80 text-sm">{item.name}</span>
                    <span className="gold-text font-semibold text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-8">* Prices may vary based on hair length and complexity. Walk in or WhatsApp for exact pricing.</p>

        <div className="text-center mt-8">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp px-8 py-3.5 rounded-full font-semibold">
            <FaWhatsapp size={18} /> WhatsApp for Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="gold-text text-sm tracking-widest uppercase font-medium mb-2">The PM Difference</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map(w => (
            <div key={w.title} className="service-card text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-5xl mb-5">{w.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{w.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="gold-text text-sm tracking-widest uppercase font-medium mb-2">Inside the Salon</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className={`gallery-item ${i === 0 ? 'md:col-span-2 h-64 sm:h-80' : 'h-48 sm:h-60'}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <p className="gold-text text-sm tracking-widest uppercase font-medium mb-2">Customer Love</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="section-divider"></div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-8">
          <div className="flex justify-center gap-1.5 mb-4">
            {[1,2,3,4,5].map(i => <FaStar key={i} className="star-filled" size={28} />)}
          </div>
          <div className="text-6xl sm:text-7xl font-bold gold-text mb-2">4.9</div>
          <p className="text-white/70 text-lg">Based on <span className="text-white font-semibold">100+ Google Reviews</span></p>
          <p className="text-white/50 text-sm mt-2">⭐ Highly rated salon in Yelahanka, Bangalore</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { quote: "Amazing service and friendly staff. My hair looks fantastic! Very hygienic place. Will definitely come back.", rating: 5 },
            { quote: "Best salon in Yelahanka! Affordable prices and the stylists really know their craft. Highly recommended.", rating: 5 },
            { quote: "Excellent facial treatment. The atmosphere is clean and relaxing. Great value for money!", rating: 5 },
          ].map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(s => <FaStar key={s} className="star-filled" size={12} />)}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic">"{r.quote}"</p>
              <p className="text-white/30 text-xs mt-3">— Google Review</p>
            </div>
          ))}
        </div>

        <a href="https://www.google.com/maps/search/PM+Family+Unisex+Salon+Yelahanka" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-yellow-500/40 gold-text px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-500/10 transition-colors">
          View All Reviews on Google →
        </a>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-yellow-900/20 via-black to-black text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-6xl mb-6">✂️</div>
        <p className="gold-text text-sm tracking-widest uppercase font-medium mb-2">Ready for a Fresh Look?</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Book Your Appointment</h2>
        <div className="section-divider mb-8"></div>
        <p className="text-white/70 text-lg mb-2">Click below to book instantly via WhatsApp</p>
        <p className="text-white/40 text-sm mb-10">⚡ Quick response within minutes</p>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 btn-whatsapp px-10 py-5 rounded-full text-lg font-bold shadow-xl">
          <FaWhatsapp size={24} /> Book via WhatsApp
        </a>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a href={PHONE1} className="flex items-center justify-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
            <FaPhone size={14} /> +91 7349661676
          </a>
          <a href={PHONE2} className="flex items-center justify-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
            <FaPhone size={14} /> +91 9353667336
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="gold-text text-sm tracking-widest uppercase font-medium mb-2">Find Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact & Location</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0 mt-1">
                <FaMapMarkerAlt className="gold-text" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600 leading-relaxed">No 75/2, Gantiganahalli,<br />Naganahalli Main Road, Yelahanka,<br />Bangalore, Karnataka 560064</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 btn-gold px-4 py-2 rounded-full text-sm font-semibold">
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <FaPhone className="gold-text" size={18} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                <a href={PHONE1} className="block text-gray-600 hover:text-yellow-600 transition-colors">+91 73496 61676</a>
                <a href={PHONE2} className="block text-gray-600 hover:text-yellow-600 transition-colors">+91 93536 67336</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-green-500" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp Booking</h3>
                <p className="text-gray-600 text-sm mb-2">Quick booking — response within minutes</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-whatsapp px-5 py-2 rounded-full text-sm font-semibold">
                  <FaWhatsapp size={14} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0">
                <FaInstagram className="text-pink-500" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition-colors">@pm_family_unisex_saloon_</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 sm:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3!2d77.5971!3d13.1012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23b99ad64d3b%3A0x1ef6cdae4cdcb9cd!2sPM%20Family%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PM Family Unisex Salon Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="PM Family Logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-bold text-lg" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>PM Family</p>
                <p className="gold-text text-xs tracking-widest uppercase">Unisex Salon</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">Hair · Skin · Makeover<br />Yelahanka, Bangalore</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 gold-text text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 gold-text text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-green-400 text-sm transition-colors">
                <FaWhatsapp size={16} /> WhatsApp
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-pink-400 text-sm transition-colors">
                <FaInstagram size={16} /> @pm_family_unisex_saloon_
              </a>
              <a href={PHONE1} className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
                <FaPhone size={14} /> +91 73496 61676
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs">
          © {new Date().getFullYear()} PM Family Unisex Salon. All rights reserved.
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
