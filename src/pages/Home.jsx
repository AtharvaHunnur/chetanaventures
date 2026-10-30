import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronRight, 
  ChevronLeft, 
  Compass, 
  Layers, 
  Ruler, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Building2,
  HardHat,
  Home as HomeIcon,
  Quote,
  Maximize2
} from 'lucide-react';
import { SERVICES } from '../data/services.js';
import { PROJECTS } from '../data/projects.js';
import { PACKAGES, PACKAGE_DISCLAIMER } from '../data/packages.js';
import { TESTIMONIALS } from '../data/testimonials.js';
import { TEAM_MEMBERS } from '../data/team.js';
import { COMPANY_INFO } from '../data/company.js';
import ProjectModal from '../components/ProjectModal.jsx';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [activePackageTab, setActivePackageTab] = useState('premium');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Interiors', 'Elevations'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handlePrevTestimonial = () => {
    setTestimonialIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setTestimonialIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full overflow-hidden bg-[#F5F2EB]">

      {/* ========================================================
          SECTION 1: HERO (Cinematic Full-Width Architectural Hero)
          ======================================================== */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center bg-[#183B32] overflow-hidden pt-20">
        {/* Background Image with Controlled Dark Editorial Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_luxury_villa_1793377131201.jpg"
            alt="Contemporary Luxury Villa Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#183B32]/90 via-transparent to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B77B53]"></span>
              <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#B77B53]">
                Contemporary Architectural Luxury
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.12] tracking-tight text-balance">
              WE DON'T JUST BUILD STRUCTURES. WE CREATE PLACES TO BELONG.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-[#F5F2EB]/85 font-sans leading-relaxed max-w-2xl font-light">
              From architectural vision to the final finishing touch, Chethana Ventures brings thoughtful design, quality construction and reliable execution together.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#B77B53] hover:bg-[#C98F69] text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/get-quote"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest border border-white/25 transition-all"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#B77B53]" />
              </Link>
            </div>

            {/* Floating Project Detail Badge */}
            <div className="pt-6 hidden sm:flex items-center gap-6 text-xs text-[#F5F2EB]/70 border-t border-white/15">
              <div>
                <span className="text-[#B77B53] font-mono font-medium block">Current Highlight</span>
                <span className="text-white font-medium">The Serene Pavilion &middot; Sadashivanagar</span>
              </div>
              <div className="h-6 w-[1px] bg-white/20"></div>
              <div>
                <span className="text-[#B77B53] font-mono font-medium block">Core Delivery</span>
                <span className="text-white font-medium">Turnkey Residential &amp; Commercial</span>
              </div>
            </div>

          </div>
        </div>

        {/* Minimal Scroll Cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-75 hidden md:flex">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#F5F2EB]">Scroll</span>
          <div className="w-4 h-7 border border-[#F5F2EB]/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-[#B77B53] rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: INTRODUCTION / ABOUT (Split-Screen)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Overlapping Architectural Photography & Numerical Marker */}
            <div className="lg:col-span-6 relative">
              {/* Primary Large Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-xl border border-[#242B28]/10 bg-[#EAE7DE]">
                <img
                  src="/src/assets/images/residential_architecture_1793377131205.jpg"
                  alt="Chethana Ventures Residential Architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 aspect-[4/3] shadow-2xl border-4 border-[#F5F2EB] hidden sm:block overflow-hidden bg-[#EAE7DE]">
                <img
                  src="/src/assets/images/luxury_interior_living_1793377133191.jpg"
                  alt="Curated Interior Living Space"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Numerical Marker */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-[#183B32] text-white p-4 shadow-xl border-t-2 border-[#B77B53]">
                <span className="font-serif text-2xl sm:text-3xl font-bold block text-[#B77B53]">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-[#F5F2EB]/80 font-sans">
                  Years Design &amp; Build
                </span>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B77B53]"></span>
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#183B32] font-bold leading-snug">
                Turning Your Vision Into Lasting Spaces.
              </h2>

              <p className="text-sm md:text-base text-[#535B56] leading-relaxed font-sans">
                Chethana Ventures is a premier multidisciplinary construction and design practice. We bridge the gap between aspirational architectural concepts and uncompromising structural reality.
              </p>

              <p className="text-sm text-[#535B56] leading-relaxed font-sans">
                By unifying architectural drafting, geotechnical engineering, transparent costing, and on-site civil execution under one roof, we eliminate subcontractor friction and protect client budgets.
              </p>

              {/* Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border border-[#242B28]/10 bg-white p-4 space-y-1">
                  <span className="text-xs font-serif font-bold text-[#183B32] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B77B53]"></span>
                    Quality Craftsmanship
                  </span>
                  <p className="text-xs text-[#535B56] leading-relaxed">
                    Zero-compromise material grading, certified steel rebar, and verified cube strength checks.
                  </p>
                </div>

                <div className="border border-[#242B28]/10 bg-white p-4 space-y-1">
                  <span className="text-xs font-serif font-bold text-[#183B32] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B77B53]"></span>
                    Thoughtful Planning
                  </span>
                  <p className="text-xs text-[#535B56] leading-relaxed">
                    Climate-responsive layouts, natural cross-ventilation, and functional daylight optimization.
                  </p>
                </div>

                <div className="border border-[#242B28]/10 bg-white p-4 space-y-1">
                  <span className="text-xs font-serif font-bold text-[#183B32] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B77B53]"></span>
                    Transparent Communication
                  </span>
                  <p className="text-xs text-[#535B56] leading-relaxed">
                    Itemized BOQs with zero hidden escalations and weekly digital photographic updates.
                  </p>
                </div>

                <div className="border border-[#242B28]/10 bg-white p-4 space-y-1">
                  <span className="text-xs font-serif font-bold text-[#183B32] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B77B53]"></span>
                    Reliable Execution
                  </span>
                  <p className="text-xs text-[#535B56] leading-relaxed">
                    Milestone-governed timelines with dedicated full-time on-site civil engineering supervision.
                  </p>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#183B32] hover:text-[#B77B53] transition-colors border-b-2 border-[#183B32] pb-1 hover:border-[#B77B53]"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: OUR SERVICES (Editorial Bento Grid)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#EAE7DE] border-y border-[#242B28]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#B77B53]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                CORE DISCIPLINES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#183B32] font-bold">
              Complete Solutions. One Trusted Partner.
            </h2>
            <p className="text-sm text-[#535B56] leading-relaxed">
              Explore our six integrated practice areas. From individual dream residences to commercial hubs and turnkey project management, we handle every phase.
            </p>
          </div>

          {/* Editorial Grid: Asymmetrical composition */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1: Residential Construction (Large Feature) */}
            <div className="lg:col-span-2 group bg-white border border-[#242B28]/10 overflow-hidden flex flex-col justify-between hover:border-[#B77B53] transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                <div className="p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#B77B53] block mb-1">
                      01 / RESIDENTIAL
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#183B32] mb-3">
                      Residential Construction
                    </h3>
                    <p className="text-xs text-[#535B56] leading-relaxed">
                      Custom independent houses, contemporary multi-story villas, and bespoke homes built with structural permanence and fine craftsmanship.
                    </p>
                    <ul className="mt-4 space-y-1.5 text-xs text-[#242B28]">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#B77B53]"></span>
                        Individual Homes &amp; Triplex Luxury Villas
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#B77B53]"></span>
                        Earthquake-Resistant RCC Framing
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#B77B53]"></span>
                        Customized Elevation Finishes
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/services#residential-construction"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183B32] group-hover:text-[#B77B53] transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-video sm:aspect-auto overflow-hidden bg-[#EAE7DE]">
                  <img
                    src="/src/assets/images/residential_architecture_1793377131205.jpg"
                    alt="Residential Construction"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Service 2: Commercial Construction */}
            <div className="group bg-white border border-[#242B28]/10 overflow-hidden flex flex-col justify-between p-6 hover:border-[#B77B53] transition-all">
              <div className="relative aspect-video w-full mb-5 overflow-hidden bg-[#EAE7DE]">
                <img
                  src="/src/assets/images/commercial_complex_1793377131946.jpg"
                  alt="Commercial Construction"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold text-[#B77B53] block">
                  02 / COMMERCIAL
                </span>
                <h3 className="font-serif text-lg font-bold text-[#183B32]">
                  Commercial Construction
                </h3>
                <p className="text-xs text-[#535B56] leading-relaxed">
                  Offices, retail complexes, and hospitality spaces designed for longevity, high human traffic, and low maintenance overheads.
                </p>
              </div>
              <div className="pt-4 border-t border-[#242B28]/10 mt-5">
                <Link
                  to="/services#commercial-construction"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183B32] group-hover:text-[#B77B53] transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 3: Industrial Construction */}
            <div className="group bg-white border border-[#242B28]/10 overflow-hidden flex flex-col justify-between p-6 hover:border-[#B77B53] transition-all">
              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold text-[#B77B53] block">
                  03 / INDUSTRIAL
                </span>
                <h3 className="font-serif text-lg font-bold text-[#183B32]">
                  Industrial Construction
                </h3>
                <p className="text-xs text-[#535B56] leading-relaxed">
                  Heavy-load warehouses, pre-engineered steel buildings (PEB), and industrial plants with laser-screeded FM2 flooring.
                </p>
                <div className="pt-2 text-xs text-[#535B56] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#B77B53]"></span>
                    Pre-Engineered Metal Buildings
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#B77B53]"></span>
                    Heavy Equipment Foundations
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#242B28]/10 mt-5">
                <Link
                  to="/services#industrial-construction"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183B32] group-hover:text-[#B77B53] transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 4: Architecture & Structural Design */}
            <div className="group bg-white border border-[#242B28]/10 overflow-hidden flex flex-col justify-between p-6 hover:border-[#B77B53] transition-all">
              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold text-[#B77B53] block">
                  04 / ARCHITECTURE &amp; DESIGN
                </span>
                <h3 className="font-serif text-lg font-bold text-[#183B32]">
                  Architecture &amp; Structural Design
                </h3>
                <p className="text-xs text-[#535B56] leading-relaxed">
                  Complete architectural masterplans, 3D exterior elevations, STAAD-Pro structural engineering, and integrated MEP drawings.
                </p>
                <div className="pt-2 text-xs text-[#535B56] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#B77B53]"></span>
                    3D Visualizations &amp; Walkthroughs
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#B77B53]"></span>
                    Vastu-Harmonized Floor Plans
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#242B28]/10 mt-5">
                <Link
                  to="/services#architecture-structural-design"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183B32] group-hover:text-[#B77B53] transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 5 & 6: Interior Design & Turnkey Solutions (Spans 1 col each) */}
            <div className="group bg-white border border-[#242B28]/10 overflow-hidden flex flex-col justify-between p-6 hover:border-[#B77B53] transition-all">
              <div className="relative aspect-video w-full mb-5 overflow-hidden bg-[#EAE7DE]">
                <img
                  src="/src/assets/images/luxury_interior_living_1793377133191.jpg"
                  alt="Interior Design"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold text-[#B77B53] block">
                  05 / INTERIOR DESIGN
                </span>
                <h3 className="font-serif text-lg font-bold text-[#183B32]">
                  Interior Design &amp; Styling
                </h3>
                <p className="text-xs text-[#535B56] leading-relaxed">
                  Tailored living spaces, bespoke acoustic wall paneling, imported Italian marble, and modular kitchen joinery.
                </p>
              </div>
              <div className="pt-4 border-t border-[#242B28]/10 mt-5">
                <Link
                  to="/services#interior-design"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183B32] group-hover:text-[#B77B53] transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Turnkey Callout Bar */}
          <div className="mt-8 bg-[#183B32] text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#B77B53]">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-[#B77B53] font-mono">
                06 / TURNKEY EXCELLENCE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Looking for 100% Turnkey Solutions?
              </h3>
              <p className="text-xs text-[#F5F2EB]/80 max-w-xl">
                We manage everything—statutory approvals, material procurement, contractor supervision, and final cleaning. Single-point accountability from foundation to key handover.
              </p>
            </div>
            <Link
              to="/services#turnkey-solutions"
              className="px-6 py-3 bg-[#B77B53] hover:bg-[#C98F69] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              Learn About Turnkey Model
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 4: FEATURED PROJECTS (Architectural Portfolio)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Category Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B77B53]"></span>
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                  PORTFOLIO
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#183B32] font-bold">
                Spaces That Speak for Themselves.
              </h2>
              <p className="text-sm text-[#535B56]">
                Explore our curated architectural showcases across residential villas, commercial landmarks, and bespoke luxury interiors.
              </p>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1 bg-[#EAE7DE] p-1 border border-[#242B28]/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#183B32] text-white shadow-sm'
                      : 'text-[#535B56] hover:text-[#183B32]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetrical Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setActiveProjectModal(project)}
                className="group cursor-pointer bg-white border border-[#242B28]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE7DE]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Category & Status Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-[#183B32]/90 backdrop-blur-md text-white text-[10px] uppercase font-mono px-2.5 py-1 tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] text-[#B77B53] font-mono block">
                      {project.location}
                    </span>
                    <h3 className="font-serif text-lg font-bold group-hover:text-[#F5F2EB] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Expand icon on hover */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#B77B53]" />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-[#535B56] line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                  <div className="pt-2 border-t border-[#242B28]/10 flex items-center justify-between text-xs">
                    <span className="text-[#535B56] font-mono">Area: {project.builtUpArea}</span>
                    <span className="text-[#183B32] font-semibold flex items-center gap-1 group-hover:text-[#B77B53] transition-colors">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Portfolio Link */}
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#183B32] hover:bg-[#235246] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              <span>View Full Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#B77B53]" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 5: OUR CONSTRUCTION PROCESS (5-Step Timeline)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#183B32] text-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#B77B53]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                METHODOLOGY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
              From First Sketch to Final Handover.
            </h2>
            <p className="text-sm text-[#F5F2EB]/80 leading-relaxed font-sans">
              Our 5-stage sequential delivery framework ensures predictable timelines, transparent billing milestones, and rigorous structural quality control.
            </p>
          </div>

          {/* Timeline Process Cards (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Step 1 */}
            <div className="bg-[#242B28]/60 border border-[#F5F2EB]/10 p-6 flex flex-col justify-between space-y-4 hover:border-[#B77B53]/50 transition-colors">
              <div>
                <span className="font-serif text-3xl font-bold text-[#B77B53] block mb-2">01.</span>
                <h3 className="font-serif text-base font-bold text-white mb-2">
                  Consultation
                </h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Understand customer requirements, lifestyle preferences, budget constraints, and site orientation expectations.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F5F2EB]/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B77B53]">
                  Brief &middot; Feasibility
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#242B28]/60 border border-[#F5F2EB]/10 p-6 flex flex-col justify-between space-y-4 hover:border-[#B77B53]/50 transition-colors">
              <div>
                <span className="font-serif text-3xl font-bold text-[#B77B53] block mb-2">02.</span>
                <h3 className="font-serif text-base font-bold text-white mb-2">
                  Planning &amp; Design
                </h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Prepare architectural floor plans, structural engineering calculations, 3D elevations, and municipal approval packages.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F5F2EB]/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B77B53]">
                  BIM &middot; Structural
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#242B28]/60 border border-[#F5F2EB]/10 p-6 flex flex-col justify-between space-y-4 hover:border-[#B77B53]/50 transition-colors">
              <div>
                <span className="font-serif text-3xl font-bold text-[#B77B53] block mb-2">03.</span>
                <h3 className="font-serif text-base font-bold text-white mb-2">
                  Estimation &amp; Approval
                </h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Finalize comprehensive scope of work, material grade specifications, fixed stage-gate pricing, and critical path timeline.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F5F2EB]/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B77B53]">
                  Itemized BOQ
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#242B28]/60 border border-[#F5F2EB]/10 p-6 flex flex-col justify-between space-y-4 hover:border-[#B77B53]/50 transition-colors">
              <div>
                <span className="font-serif text-3xl font-bold text-[#B77B53] block mb-2">04.</span>
                <h3 className="font-serif text-base font-bold text-white mb-2">
                  Construction &amp; Execution
                </h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Coordinate civil execution, soil compaction, rebar inspections, curing protocols, and continuous on-site QC governance.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F5F2EB]/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B77B53]">
                  On-Site QC &middot; Weekly Logs
                </span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-[#242B28]/60 border border-[#F5F2EB]/10 p-6 flex flex-col justify-between space-y-4 hover:border-[#B77B53]/50 transition-colors">
              <div>
                <span className="font-serif text-3xl font-bold text-[#B77B53] block mb-2">05.</span>
                <h3 className="font-serif text-base font-bold text-white mb-2">
                  Finishing &amp; Handover
                </h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Complete millwork, stone polishing, sanitary testing, electrical commissioning, deep industrial cleaning, and key handover.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F5F2EB]/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B77B53]">
                  450-Point Audit &middot; Keys
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 6: WHY CHOOSE US (Dark Forest & Copper Focus)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#242B28] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B77B53]"></span>
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                  THE CHETHANA STANDARD
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Built on Trust. Defined by Quality.
              </h2>

              <p className="text-sm text-[#F5F2EB]/80 leading-relaxed font-sans">
                Every foundation we pour and every facade we sculpt is anchored in engineering honesty. We do not cut corners on structural concrete or hide behind opaque contracts.
              </p>

              <div className="p-6 bg-[#183B32] border border-[#B77B53]/30 space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#B77B53] font-mono">
                  Transparent Governance
                </span>
                <p className="text-xs text-[#F5F2EB]/85 leading-relaxed">
                  "Our clients receive unedited digital test reports for steel tensile strength, concrete slump and cube compression tests at every casting stage."
                </p>
              </div>
            </div>

            {/* Right: Numbered Highlights Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 bg-[#183B32]/40 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-[#B77B53]">01 / MATERIALS</span>
                <h3 className="font-serif text-base font-bold text-white">Quality Materials</h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Only Tier-1 certified steel brands (Tata Tiscon / JSW) and high-grade 53 OPC cement directly sourced from authorized plants.
                </p>
              </div>

              <div className="p-6 bg-[#183B32]/40 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-[#B77B53]">02 / TALENT</span>
                <h3 className="font-serif text-base font-bold text-white">Skilled Professionals</h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  In-house licensed structural consultants, experienced site engineers, and master stone masons with decades of expertise.
                </p>
              </div>

              <div className="p-6 bg-[#183B32]/40 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-[#B77B53]">03 / PRICING</span>
                <h3 className="font-serif text-base font-bold text-white">Transparent Pricing</h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Comprehensive bill of quantities detailing exact brand names, tile sizes, pipe classes, and payment stage milestones.
                </p>
              </div>

              <div className="p-6 bg-[#183B32]/40 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-[#B77B53]">04 / TIMELINE</span>
                <h3 className="font-serif text-base font-bold text-white">Planned Execution</h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Digitally tracked milestone schedules with buffer allocations for monsoons and seasonal curing requirements.
                </p>
              </div>

              <div className="p-6 bg-[#183B32]/40 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-[#B77B53]">05 / CLIENT FIRST</span>
                <h3 className="font-serif text-base font-bold text-white">Customer-Focused Approach</h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Dedicated single point of contact with weekly video calls and milestone sign-off prior to releasing stage payments.
                </p>
              </div>

              <div className="p-6 bg-[#183B32]/40 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-[#B77B53]">06 / ATTENTION</span>
                <h3 className="font-serif text-base font-bold text-white">Attention to Detail</h3>
                <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                  Meticulous waterproofing coats, anti-termite soil barriers, concealed expansion joints, and laser-aligned tile grooves.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: CONSTRUCTION PACKAGES (4 Tiers)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#B77B53]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                TRANSPARENT SPECIFICATIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#183B32] font-bold">
              The Right Plan for Your Dream Space.
            </h2>
            <p className="text-sm text-[#535B56] leading-relaxed">
              Choose from four clear construction tiers tailored to your architectural aspirations and material standards.
            </p>
          </div>

          {/* Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white border flex flex-col justify-between transition-all ${
                  pkg.isPopular
                    ? 'border-[#183B32] shadow-xl relative scale-100 lg:-translate-y-2'
                    : 'border-[#242B28]/15 hover:border-[#B77B53]'
                }`}
              >
                {pkg.isPopular && (
                  <div className="bg-[#183B32] text-white text-[10px] font-mono uppercase tracking-widest text-center py-1 font-semibold">
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 space-y-5">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#B77B53] font-semibold block">
                      {pkg.badge}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#183B32] mt-0.5">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#535B56] mt-1 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="border-y border-[#242B28]/10 py-3">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-2xl font-bold text-[#183B32]">
                        {pkg.priceDisplay}
                      </span>
                      <span className="text-[11px] text-[#535B56] font-mono">
                        / sq.ft
                      </span>
                    </div>
                    <span className="text-[10px] text-[#535B56]/80 block mt-0.5">
                      *Sample demonstration rate
                    </span>
                  </div>

                  {/* Key Inclusions */}
                  <div className="space-y-2 text-xs text-[#242B28]">
                    <span className="text-[11px] uppercase tracking-wider text-[#183B32] font-bold block">
                      Package Inclusions:
                    </span>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B77B53] shrink-0 mt-0.5" />
                        <span className="text-[11px] text-[#535B56] leading-tight">{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Structure & Flooring Preview */}
                  <div className="bg-[#F5F2EB] p-3 text-[11px] text-[#535B56] space-y-1.5 border border-[#242B28]/5">
                    <div>
                      <strong className="text-[#183B32]">Flooring: </strong>
                      <span className="line-clamp-2">{pkg.specs.flooring}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/packages#${pkg.id}`}
                    className={`block w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                      pkg.isPopular
                        ? 'bg-[#183B32] hover:bg-[#235246] text-white'
                        : 'border border-[#183B32] text-[#183B32] hover:bg-[#183B32] hover:text-white'
                    }`}
                  >
                    View Full Scope
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Disclaimer Box */}
          <div className="mt-10 p-5 bg-[#EAE7DE] border border-[#242B28]/10 text-xs text-[#535B56] leading-relaxed">
            <span className="font-semibold text-[#183B32]">Important Notice: </span>
            {PACKAGE_DISCLAIMER}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#183B32] hover:text-[#B77B53] transition-colors border-b-2 border-[#183B32] pb-1 hover:border-[#B77B53]"
            >
              <span>Explore Detailed Package Comparison Matrix &amp; Cost Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 8: PROJECT NUMBERS (Animated Editorial Statistics)
          ======================================================== */}
      <section className="py-16 md:py-24 bg-[#183B32] text-white border-y border-[#B77B53]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
            
            <div className="space-y-1">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F2EB] tracking-tight block">
                {COMPANY_INFO.projectsCompleted}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B77B53] font-semibold block">
                Completed Projects
              </span>
              <span className="text-[10px] text-[#F5F2EB]/50 font-mono block">
                *Verified demonstration figure
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F2EB] tracking-tight block">
                {COMPANY_INFO.clientSatisfaction}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B77B53] font-semibold block">
                Happy Clients
              </span>
              <span className="text-[10px] text-[#F5F2EB]/50 font-mono block">
                *Client satisfaction rate
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F2EB] tracking-tight block">
                {COMPANY_INFO.experienceYears}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B77B53] font-semibold block">
                Years of Expertise
              </span>
              <span className="text-[10px] text-[#F5F2EB]/50 font-mono block">
                *Engineering leadership experience
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F2EB] tracking-tight block">
                {COMPANY_INFO.activeSites}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B77B53] font-semibold block">
                Active Sites Supervised
              </span>
              <span className="text-[10px] text-[#F5F2EB]/50 font-mono block">
                *Current ongoing operations
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: CLIENT TESTIMONIALS (Carousel)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B77B53]"></span>
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                  CLIENT EXPERIENCES
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#183B32] font-bold">
                Trust That Speaks Through Experience.
              </h2>
              <p className="text-sm text-[#535B56]">
                Genuine client stories across bespoke residential estates, corporate headquarters, and turnkey interiors.
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevTestimonial}
                className="w-10 h-10 border border-[#242B28]/20 bg-white hover:bg-[#183B32] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-10 h-10 border border-[#242B28]/20 bg-white hover:bg-[#183B32] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Active Slide */}
          <div className="bg-white border border-[#242B28]/10 p-8 md:p-12 shadow-sm relative">
            <Quote className="w-12 h-12 text-[#B77B53]/20 absolute top-8 right-8" />
            
            <div className="max-w-3xl space-y-6">
              <span className="text-xs uppercase font-mono tracking-wider text-[#B77B53] font-semibold block">
                {TESTIMONIALS[testimonialIdx].projectCategory} &middot; {TESTIMONIALS[testimonialIdx].location}
              </span>

              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#183B32] italic leading-relaxed">
                "{TESTIMONIALS[testimonialIdx].quote}"
              </p>

              <div className="pt-4 border-t border-[#242B28]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#183B32]">
                    {TESTIMONIALS[testimonialIdx].clientName}
                  </h4>
                  <p className="text-xs text-[#535B56]">
                    {TESTIMONIALS[testimonialIdx].designation}
                  </p>
                </div>
                <div className="text-[10px] text-[#535B56]/70 font-mono">
                  *Sample Client Review Profile
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`h-1.5 transition-all ${
                    testimonialIdx === i ? 'w-8 bg-[#183B32]' : 'w-2 bg-[#242B28]/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 10: OUR TEAM (Editorial Team Highlights)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-[#EAE7DE] border-t border-[#242B28]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#B77B53]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                LEADERSHIP &amp; EXPERTISE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#183B32] font-bold">
              The People Behind Every Project.
            </h2>
            <p className="text-sm text-[#535B56] leading-relaxed">
              Our multidisciplinary studio brings together architects, structural consultants, project management professionals, and site supervisors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.slice(0, 3).map((member) => (
              <div key={member.id} className="bg-white border border-[#242B28]/10 overflow-hidden group">
                <div className="relative aspect-[4/3] w-full bg-[#EAE7DE] overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-mono px-2 py-0.5">
                    Editable Profile
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-[#B77B53] font-semibold block">
                    {member.designation}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#183B32]">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#535B56] line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#183B32] hover:text-[#B77B53] transition-colors border-b-2 border-[#183B32] pb-1 hover:border-[#B77B53]"
            >
              <span>Meet The Entire Engineering &amp; Design Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 11: FINAL CALL TO ACTION
          ======================================================== */}
      <section className="relative py-24 md:py-32 bg-[#183B32] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/src/assets/images/hero_luxury_villa_1793377131201.jpg"
            alt="Chethana Ventures Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#B77B53]"></span>
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#B77B53]">
              START YOUR JOURNEY
            </span>
            <span className="w-8 h-[1px] bg-[#B77B53]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            LET'S BUILD SOMETHING EXTRAORDINARY.
          </h2>

          <p className="text-sm sm:text-base text-[#F5F2EB]/85 font-sans leading-relaxed max-w-xl mx-auto font-light">
            Have a vision for your next project? Let's discuss how we can bring it to life with precision engineering and timeless architecture.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-quote"
              className="px-8 py-3.5 bg-[#B77B53] hover:bg-[#C98F69] text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest border border-white/25 transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Project Lightbox Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}

    </div>
  );
}
