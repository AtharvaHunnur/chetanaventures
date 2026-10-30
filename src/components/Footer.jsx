import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  MessageCircle, 
  ShieldCheck, 
  Compass, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company.js';
import { SERVICES } from '../data/services.js';

export default function Footer() {
  return (
    <footer className="bg-[#183B32] text-[#F5F2EB] pt-16 pb-12 border-t border-[#B77B53]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F5F2EB]/10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#F5F2EB] flex items-center justify-center p-1 relative">
                <div className="w-full h-full border border-dashed border-[#F5F2EB] flex items-center justify-center">
                  <span className="font-serif text-base font-bold text-[#F5F2EB]">CV</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#B77B53]"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.2em] font-bold uppercase text-white">
                  CHETHANA
                </span>
                <span className="text-[10px] tracking-[0.35em] font-sans font-medium uppercase text-[#B77B53]">
                  VENTURES
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#F5F2EB]/75 leading-relaxed font-sans max-w-sm">
              Chethana Ventures is a premier architecture, structural engineering, and turnkey construction firm. We merge architectural rigor, structural permanence, and luxury finishing into cohesive living environments.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-[#B77B53] font-semibold mb-1">
                Our Creed
              </p>
              <p className="font-serif italic text-lg text-white">
                "{COMPANY_INFO.tagline}"
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#F5F2EB]/20 flex items-center justify-center text-[#F5F2EB]/80 hover:text-white hover:border-[#B77B53] hover:bg-[#B77B53]/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#F5F2EB]/20 flex items-center justify-center text-[#F5F2EB]/80 hover:text-white hover:border-[#B77B53] hover:bg-[#B77B53]/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#F5F2EB]/20 flex items-center justify-center text-[#F5F2EB]/80 hover:text-white hover:border-[#B77B53] hover:bg-[#B77B53]/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#F5F2EB]/20 flex items-center justify-center text-[#F5F2EB]/80 hover:text-white hover:border-[#B77B53] hover:bg-[#B77B53]/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#F5F2EB]/75">
              <li>
                <Link to="/" className="hover:text-[#B77B53] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B77B53] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B77B53] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#B77B53] transition-colors">Portfolio Projects</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#B77B53] transition-colors">Construction Packages</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#B77B53] transition-colors">Executive Team</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B77B53] transition-colors">Contact & Enquiries</Link>
              </li>
              <li>
                <Link to="/get-quote" className="text-[#B77B53] font-semibold hover:text-white transition-colors">
                  Get a Free Quote &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-6">
              Our Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-[#F5F2EB]/75">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="hover:text-[#B77B53] transition-colors block text-xs leading-relaxed"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-base font-semibold text-white tracking-wide">
                Direct Contact
              </h4>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#B77B53] border border-[#B77B53]/30 px-1.5 py-0.5">
                Editable
              </span>
            </div>

            <div className="space-y-3 text-xs text-[#F5F2EB]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B77B53] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.officeAddress}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B77B53] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B77B53] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#B77B53] shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-[#242B28] hover:bg-[#B77B53] text-white text-xs font-semibold tracking-wider uppercase transition-colors border border-[#F5F2EB]/15"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Google Maps link */}
            <div className="pt-1">
              <a
                href="https://maps.google.com/?q=Bengaluru+Karnataka"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-[#F5F2EB]/60 hover:text-white flex items-center gap-1.5 transition-colors underline underline-offset-4"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>View on Google Maps</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F5F2EB]/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Chethana Ventures. All rights reserved. Crafting Spaces. Building Trust.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#F5F2EB]/40">
              Sample Demonstration Data &middot; Ready for Company Customization
            </span>
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
