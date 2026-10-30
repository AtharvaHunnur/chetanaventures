import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company.js';
import { SERVICES } from '../data/services.js';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Our Projects', path: '/projects' },
    { label: 'Packages', path: '/packages' },
    { label: 'Our Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ];

  // Dynamic styling based on scroll and whether we are on dark hero
  const navBackground = isScrolled
    ? 'bg-[#F5F2EB]/95 backdrop-blur-md shadow-sm border-b border-[#242B28]/10 text-[#242B28]'
    : isHome
    ? 'bg-gradient-to-b from-black/60 via-black/20 to-transparent text-white'
    : 'bg-[#F5F2EB] border-b border-[#242B28]/10 text-[#242B28]';

  const brandColor = isScrolled || !isHome ? 'text-[#183B32]' : 'text-white';
  const linkHoverColor = isScrolled || !isHome ? 'hover:text-[#B77B53]' : 'hover:text-[#F5F2EB]';
  const activeColor = isScrolled || !isHome ? 'text-[#183B32] font-semibold' : 'text-white font-semibold';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Architectural Emblem + Brand Wordmark */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 border border-current flex items-center justify-center p-1 relative transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full border border-dashed border-current flex items-center justify-center">
                <span className="font-serif text-base font-bold tracking-tighter">CV</span>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#B77B53]"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg tracking-[0.2em] font-bold uppercase transition-colors ${brandColor}`}>
                CHETHANA
              </span>
              <span className={`text-[10px] tracking-[0.35em] font-sans font-medium uppercase transition-colors opacity-80 ${brandColor}`}>
                VENTURES
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Single-Line) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 py-2 whitespace-nowrap transition-colors ${
                        isActive ? activeColor : linkHoverColor
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Services Dropdown */}
                    <div
                      className={`absolute top-full -left-4 w-72 bg-[#FFFFFF] shadow-xl border border-[#242B28]/10 py-3 transition-all duration-200 transform ${
                        servicesDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="px-4 py-1.5 border-b border-[#242B28]/5 mb-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B77B53]">
                          Our Core Capabilities
                        </span>
                      </div>
                      {SERVICES.slice(0, 6).map((service) => (
                        <Link
                          key={service.id}
                          to={`/services#${service.id}`}
                          className="block px-4 py-2 text-xs text-[#242B28] hover:bg-[#F5F2EB] hover:text-[#183B32] transition-colors"
                        >
                          <div className="font-medium">{service.title}</div>
                          <div className="text-[11px] text-[#535B56] line-clamp-1">{service.subtitle}</div>
                        </Link>
                      ))}
                      <div className="mt-2 pt-2 border-t border-[#242B28]/5 px-4">
                        <Link
                          to="/services"
                          className="text-xs font-semibold text-[#183B32] hover:text-[#B77B53] flex items-center justify-between py-1"
                        >
                          <span>Explore All Services</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`py-2 whitespace-nowrap transition-colors relative ${
                    isActive ? activeColor : linkHoverColor
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B77B53]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#183B32] hover:bg-[#235246] transition-colors border border-transparent shadow-sm whitespace-nowrap"
            >
              <span>Get a Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B77B53]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-current hover:text-[#B77B53] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F2EB] border-b border-[#242B28]/15 px-6 py-6 text-[#242B28] shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1.5 text-base font-serif font-medium ${
                    location.pathname === item.path ? 'text-[#183B32] font-bold' : 'text-[#242B28]'
                  }`}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4 mt-2 border-l border-[#B77B53]/30 flex flex-col gap-2 text-xs text-[#535B56]">
                    {SERVICES.slice(0, 4).map((s) => (
                      <Link
                        key={s.id}
                        to={`/services#${s.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#183B32] py-0.5"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#242B28]/10 flex flex-col gap-3">
              <Link
                to="/get-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#183B32] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#235246] transition-colors"
              >
                Get a Free Consultation
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#183B32] border border-[#183B32]/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#B77B53]" />
                <span>Call Us: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
