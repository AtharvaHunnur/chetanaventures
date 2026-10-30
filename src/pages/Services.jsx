import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Hammer, 
  Maximize, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '../data/services.js';
import { PROJECTS } from '../data/projects.js';
import { heroVilla } from '../assets/images.js';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="w-full bg-[#F5F2EB] pt-24">
      
      {/* Header Banner */}
      <section className="bg-[#183B32] text-white py-16 md:py-24 border-b border-[#B77B53]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={heroVilla}
            alt="Chethana Ventures Capabilities"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#B77B53]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                OUR CAPABILITIES
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Integrated Architectural &amp; Construction Services.
            </h1>
            <p className="text-sm sm:text-base text-[#F5F2EB]/80 leading-relaxed font-light">
              From architectural masterplanning and seismic structural design to turnkey execution and bespoke interiors, Chethana Ventures offers unified responsibility for every stage of your project.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 border-b border-[#242B28]/15 pb-20 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Image Col */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden shadow-xl border border-[#242B28]/10 bg-[#EAE7DE] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#183B32]/90 backdrop-blur-md text-white px-3 py-1 text-xs font-mono">
                      0{index + 1} &middot; {service.title}
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53] block mb-1">
                      {service.subtitle}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#183B32] font-bold">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-[#535B56] leading-relaxed">
                    {service.longDesc}
                  </p>

                  {/* Scope of Work */}
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#183B32]">
                      Scope of Services &amp; Inclusions:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#242B28]">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 bg-white p-2.5 border border-[#242B28]/10">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B77B53] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div className="bg-[#EAE7DE] p-4 border border-[#242B28]/10 space-y-2">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#183B32] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#B77B53]" />
                      <span>Formal Deliverables &amp; Documentation:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#535B56]">
                      {service.deliverables.map((del, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#183B32]"></span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/get-quote?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#183B32] hover:bg-[#235246] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>Enquire for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B77B53]" />
                    </Link>

                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#242B28]/20 text-[#183B32] hover:bg-[#183B32] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>View Sample Projects</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Turnkey Callout */}
      <section className="py-20 bg-[#242B28] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53] block">
            NEED A COMPREHENSIVE TURNKEY PACKAGE?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Explore Our 4 Standardized Construction Tiers.
          </h2>
          <p className="text-sm text-[#F5F2EB]/80 leading-relaxed font-light">
            Compare material specifications, steel grades, Italian stone allocations, and square-foot estimations side-by-side.
          </p>
          <div className="pt-2">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B77B53] hover:bg-[#C98F69] text-white text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg"
            >
              <span>Explore Construction Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
