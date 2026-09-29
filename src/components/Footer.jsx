import { Camera, Mail, MapPin, MessageCircle, Phone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingDock } from '../components/ui/floating-dock';

export default function Footer() {
  const contactLinks = [
    {
      title: "WhatsApp",
      icon: <MessageCircle className="h-full w-full text-rose-200" />,
      href: "#",
    },
    {
      title: "Instagram",
      icon: <Camera className="h-full w-full text-rose-200" />,
      href: "#",
    },
    {
      title: "Facebook",
      icon: <Users className="h-full w-full text-rose-200" />,
      href: "#",
    },
    {
      title: "Call Us",
      icon: <Phone className="h-full w-full text-rose-200" />,
      href: "tel:+910000000000",
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-rose-200" />,
      href: "mailto:hello@flaransbeautyparlour.com",
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
            <Link to="/services?category=Bridal" className="hover:text-rose-200">Bridal Makeup</Link>
            <Link to="/services?category=Hair%20Care" className="hover:text-rose-200">Hair Styling</Link>
            <Link to="/services?category=Facials" className="hover:text-rose-200">Facials</Link>
            <Link to="/services?category=Waxing" className="hover:text-rose-200">Waxing</Link>
            <Link to="/services?category=Pedicure%20%26%20Manicure" className="hover:text-rose-200">Nail Care</Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Contact</h3>
          <div className="mt-4 grid gap-4 text-xs text-white/60">
            <p className="flex gap-2"><MapPin className="shrink-0 text-rose-300" size={16} /> <span>Your salon address, Tamil Nadu</span></p>
            <p className="flex gap-2"><Phone className="shrink-0 text-rose-300" size={16} /> <span>+91 00000 00000</span></p>
            <p className="flex gap-2"><Mail className="shrink-0 text-rose-300" size={16} /> <span>hello@flaransbeautyparlour.com</span></p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[10px] tracking-[0.08em] text-white/45">
        © {new Date().getFullYear()} Flarans Beauty Parlour. All rights reserved.
      </div>
    </footer>
  );
}