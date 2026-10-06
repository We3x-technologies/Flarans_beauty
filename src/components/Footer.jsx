import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingDock } from '../components/ui/floating-dock';

export default function Footer() {
  const contactLinks = [
    {
      title: "WhatsApp",
      icon: <i className="fi fi-brands-whatsapp text-[1em] leading-none text-rose-200" aria-hidden="true" />,
      href: "https://wa.me/9842505037",
    },
    {
      title: "Instagram",
      icon: <i className="fi fi-brands-instagram text-[1em] leading-none text-rose-200" aria-hidden="true" />,
      href: "https://www.instagram.com/flarans_beauty_studio",
    },
    {
      title: "Facebook",
      icon: <i className="fi fi-brands-facebook text-[1em] leading-none text-rose-200" aria-hidden="true" />,
      href: "https://www.facebook.com/flaransbeautystudio/",
    },
    {
      title: "Call Us",
      icon: <Phone className="h-full w-full text-rose-200" />,
      href: "tel:+919842505037",
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-rose-200" />,
      href: "mailto:hello@flaransbeautyparlour@gmail.com",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-ink pt-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.9fr_1fr] lg:px-10">
        <div>
          <div className="great-vibes-regular text-5xl text-rose-300">Flarans</div>
          <p className="mt-1 text-[10px] font-medium tracking-[0.22em] text-white/70">BEAUTY PARLOUR</p>
          <p className="mt-4 max-w-sm text-xs leading-6 text-white/60">
            Enhance your beauty, reveal your confidence. A premium beauty salon homepage built for future expansion into services, booking, gallery, team and contact pages.
          </p>
          
          {/* Replaced static icons with the animated Floating Dock */}
          <div className="mt-6 flex">
            <FloatingDock 
              items={contactLinks} 
              desktopClassName="mx-0 bg-transparent px-0 border-none"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-xs text-white/60">
            <Link to="/" className="hover:text-rose-200">Home</Link>
            <Link to="/services" className="hover:text-rose-200">Services</Link>
            <Link to="/about" className="hover:text-rose-200">About</Link>
            <Link to="/gallery" className="hover:text-rose-200">Gallery</Link>
            <Link to="/contact" className="hover:text-rose-200">Contact</Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Services</h3>
          <div className="mt-4 grid gap-3 text-xs text-white/60">
            <Link to="/services/men" className="hover:text-rose-200">Mens Services</Link>
            <Link to="/services/women" className="hover:text-rose-200">Womens Services</Link>
            <Link to="/services/kids" className="hover:text-rose-200">Kids Services</Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Contact</h3>
          <div className="mt-4 grid gap-4 text-xs text-white/60">
            <p className="flex gap-2"><MapPin className="shrink-0 text-rose-300" size={16} /> <a href="https://www.google.com/maps/place//@10.0847901,78.7730896,17z/data=!3m1!4b1!4m3!3m2!1s0x3b0067d73e939a43:0x83f3fde24dc69a62!12e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"> <span>Velu Complex , Near Daily market , kalanivasal Road, Karaikudi 630003, Tamil Nadu</span></a></p>
            <p className="flex gap-2"><Phone className="shrink-0 text-rose-300" size={16} /> <span>+91 9842505037</span></p>
            <p className="flex gap-2"><Mail className="shrink-0 text-rose-300" size={16} /> <span>flaransbeautyparlour@gmail.com</span></p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[10px] tracking-[0.08em] text-white/45">
        © {new Date().getFullYear()} Flarans Beauty Parlour. All rights reserved.
      </div>
    </footer>
  );
}