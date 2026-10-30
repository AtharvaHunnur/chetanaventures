import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Ruler, 
  Compass, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Eye, 
  Sparkles,
  Building,
  Target
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company.js';
import { TEAM_MEMBERS } from '../data/team.js';

export default function About() {
  return (
    <div className="w-full bg-[#F5F2EB] pt-24">
      
      {/* Hero Banner */}
      <section className="bg-[#183B32] text-white py-16 md:py-24 border-b border-[#B77B53]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/src/assets/images/hero_luxury_villa_1793377131201.jpg"
            alt="Chethana Ventures Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#B77B53]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                ABOUT CHETHANA VENTURES
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Architecture Rooted in Purpose. Construction Built for Generations.
            </h1>
            <p className="text-sm sm:text-base text-[#F5F2EB]/80 leading-relaxed font-light">
              We are an integrated architectural design, structural engineering, and turnkey general contracting practice based in Bengaluru, dedicated to creating spaces that inspire and endure.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Editorial Narrative */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53] block">
              OUR JOURNEY &amp; ETHOS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#183B32] font-bold leading-snug">
              Bridging the Divide Between Bold Architectural Concepts and Civil Precision.
            </h2>
            <p className="text-sm text-[#535B56] leading-relaxed">
              Traditional construction often suffers from fragmented responsibility—architects propose designs without budget accountability, while general contractors substitute inferior materials to protect margins.
            </p>
            <p className="text-sm text-[#535B56] leading-relaxed">
              Chethana Ventures was established to fundamentally solve this dilemma. By housing registered architects, STAAD-Pro certified structural engineers, procurement managers, and on-site civil supervisors under a single multidisciplinary roof, we guarantee design fidelity without financial surprises.
            </p>

            <div className="p-5 bg-white border border-[#242B28]/10 space-y-2">
              <h3 className="font-serif text-base font-bold text-[#183B32]">
                Our Brand Tagline
              </h3>
              <p className="font-serif italic text-lg text-[#B77B53]">
                "{COMPANY_INFO.tagline}"
              </p>
              <p className="text-xs text-[#535B56]">
                Trust is not claimed—it is built batch by batch, rebar by rebar, and verified through transparent documentation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] w-full overflow-hidden shadow-2xl border border-[#242B28]/10 bg-[#EAE7DE]">
              <img
                src="/src/assets/images/residential_architecture_1793377131205.jpg"
                alt="Chethana Ventures Engineering"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#183B32] text-white p-6 max-w-xs shadow-xl hidden sm:block border-t-2 border-[#B77B53]">
              <span className="text-xs uppercase tracking-widest text-[#B77B53] font-mono block mb-1">
                Field Integrity
              </span>
              <p className="text-xs text-[#F5F2EB]/80 leading-relaxed">
                Over 120 successfully completed architectural structures with zero structural compromise.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#EAE7DE] border-y border-[#242B28]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 md:p-10 border border-[#242B28]/10 space-y-4">
              <div className="w-12 h-12 bg-[#183B32] text-[#B77B53] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#183B32]">
                Our Mission
              </h3>
              <p className="text-sm text-[#535B56] leading-relaxed">
                To deliver residential, commercial, and industrial built environments that combine exceptional architectural aesthetics, structural resilience, and absolute financial clarity, making the construction journey effortless and empowering for our clients.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 md:p-10 border border-[#242B28]/10 space-y-4">
              <div className="w-12 h-12 bg-[#183B32] text-[#B77B53] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#183B32]">
                Our Vision
              </h3>
              <p className="text-sm text-[#535B56] leading-relaxed">
                To be recognized as South India's benchmark contemporary architectural and turnkey construction brand—celebrated for structural excellence, climatic responsiveness, and honest client partnerships.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Company Values */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53] block">
            GUIDING PRINCIPLES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#183B32] font-bold">
            The Values That Govern Every Site.
          </h2>
          <p className="text-sm text-[#535B56]">
            These non-negotiable principles inform every decision from soil sampling to final coat polishing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 border border-[#242B28]/10 space-y-3">
            <span className="font-serif text-2xl font-bold text-[#B77B53]">01</span>
            <h3 className="font-serif text-lg font-bold text-[#183B32]">Structural Truth</h3>
            <p className="text-xs text-[#535B56] leading-relaxed">
              We never conceal structural defects behind cosmetic plaster. Rebar sizes and concrete grades adhere strictly to structural engineers' calculations.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#242B28]/10 space-y-3">
            <span className="font-serif text-2xl font-bold text-[#B77B53]">02</span>
            <h3 className="font-serif text-lg font-bold text-[#183B32]">Climatic Empathy</h3>
            <p className="text-xs text-[#535B56] leading-relaxed">
              Every home is oriented to capture prevailing breezes, harness soft northern daylight, and shield living quarters from harsh western heat.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#242B28]/10 space-y-3">
            <span className="font-serif text-2xl font-bold text-[#B77B53]">03</span>
            <h3 className="font-serif text-lg font-bold text-[#183B32]">Fiscal Transparency</h3>
            <p className="text-xs text-[#535B56] leading-relaxed">
              No hidden clauses, unexpected variations, or mysterious markup. Stage-gate payments are triggered only after client inspection and satisfaction.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#242B28]/10 space-y-3">
            <span className="font-serif text-2xl font-bold text-[#B77B53]">04</span>
            <h3 className="font-serif text-lg font-bold text-[#183B32]">Tactile Luxury</h3>
            <p className="text-xs text-[#535B56] leading-relaxed">
              From hand-chiseled natural stone to precision fluted wood joinery, the spaces we build reward the human touch and age with dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards & Governance */}
      <section className="py-20 bg-[#183B32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53] block">
                ENGINEERING PROTOCOLS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Our 450+ Point Quality Verification Protocol.
              </h2>
              <p className="text-sm text-[#F5F2EB]/80 leading-relaxed font-light">
                Quality isn't an accident; it is the natural consequence of rigorous checklists executed consistently. Every Chethana Ventures site adheres to standardized stage-gate audits.
              </p>

              <div className="space-y-3 text-xs text-[#F5F2EB]/85">
                <div className="flex items-start gap-3 bg-[#242B28]/60 p-3 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#B77B53] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">Geotechnical &amp; Foundation Stage:</strong>
                    Standard penetration tests (SPT), soil bearing capacity confirmation, and crystalline anti-capillary waterproofing.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#242B28]/60 p-3 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#B77B53] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">Structural RCC Superstructure:</strong>
                    Pre-pour rebar cover checks, concrete slump cone testing, and 7/14/28-day cube compression crushing laboratory tests.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#242B28]/60 p-3 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#B77B53] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">Finishing &amp; MEP Pressure Testing:</strong>
                    Hydrostatic pressure testing of plumbing circuits for 24 hours, electrical insulation resistance tests, and laser plumb checks.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-video w-full overflow-hidden shadow-2xl border border-white/15 bg-[#242B28]">
                <img
                  src="/src/assets/images/commercial_complex_1793377131946.jpg"
                  alt="Quality Assurance Execution"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F2EB] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#183B32] font-bold">
            Ready to Discuss Your Architectural Vision?
          </h2>
          <p className="text-sm text-[#535B56] leading-relaxed">
            Meet our principal architects and civil engineers at our design office or schedule an initial site assessment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/get-quote"
              className="px-8 py-3.5 bg-[#183B32] hover:bg-[#235246] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Request Free Consultation
            </Link>
            <Link
              to="/team"
              className="px-8 py-3.5 border border-[#183B32] text-[#183B32] hover:bg-[#183B32] hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
