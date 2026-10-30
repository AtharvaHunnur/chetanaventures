import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  HelpCircle, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import { PACKAGES, PACKAGE_DISCLAIMER } from '../data/packages.js';

export default function Packages() {
  const [activeTab, setActiveTab] = useState('premium');
  const [calcArea, setCalcArea] = useState(2500);
  const [calcTier, setCalcTier] = useState('premium');

  const selectedTierData = PACKAGES.find(p => p.id === calcTier) || PACKAGES[1];
  const estimatedTotal = calcArea * selectedTierData.pricePerSqFt;

  return (
    <div className="w-full bg-[#F5F2EB] pt-24 min-h-screen">
      
      {/* Banner */}
      <section className="bg-[#183B32] text-white py-16 md:py-24 border-b border-[#B77B53]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#B77B53]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                TRANSPARENT PRICING &amp; SCOPE
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Construction Packages Engineered for Quality.
            </h1>
            <p className="text-sm sm:text-base text-[#F5F2EB]/80 leading-relaxed font-light">
              Clear specifications, branded material allocations, and uncompromised structural integrity across four refined tiers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`bg-white border flex flex-col justify-between transition-all scroll-mt-32 ${
                pkg.isPopular
                  ? 'border-[#183B32] shadow-2xl relative lg:-translate-y-2'
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
                  <h2 className="font-serif text-xl font-bold text-[#183B32] mt-0.5">
                    {pkg.name}
                  </h2>
                  <p className="text-xs text-[#535B56] mt-1">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="border-y border-[#242B28]/10 py-3 bg-[#F5F2EB]/50 px-3">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-bold text-[#183B32]">
                      {pkg.priceDisplay}
                    </span>
                    <span className="text-xs text-[#535B56] font-mono">
                      / sq.ft
                    </span>
                  </div>
                  <span className="text-[10px] text-[#535B56]/80 block mt-1">
                    *Sample demonstration rate
                  </span>
                </div>

                {/* Ideal For */}
                <div className="text-xs text-[#535B56] leading-relaxed">
                  <strong className="text-[#183B32] block mb-1">Recommended For:</strong>
                  {pkg.idealFor}
                </div>

                {/* Inclusions */}
                <div className="space-y-2 pt-2 border-t border-[#242B28]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#183B32] block">
                    Key Deliverables:
                  </span>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#242B28]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B77B53] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight text-[#535B56]">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Link
                  to={`/get-quote?package=${pkg.id}`}
                  className={`block w-full text-center py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    pkg.isPopular
                      ? 'bg-[#183B32] hover:bg-[#235246] text-white shadow-md'
                      : 'border border-[#183B32] text-[#183B32] hover:bg-[#183B32] hover:text-white'
                  }`}
                >
                  Select &amp; Estimate Cost
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Disclaimer Box */}
        <div className="mt-10 p-5 bg-[#EAE7DE] border border-[#242B28]/10 text-xs text-[#535B56] leading-relaxed flex items-start gap-3">
          <Info className="w-4 h-4 text-[#B77B53] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#183B32] font-semibold">Important Notice: </strong>
            {PACKAGE_DISCLAIMER}
          </div>
        </div>

      </section>

      {/* ========================================================
          INTERACTIVE BUILT-UP AREA COST ESTIMATOR
          ======================================================== */}
      <section className="py-16 bg-[#EAE7DE] border-y border-[#242B28]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#242B28]/10 shadow-xl overflow-hidden">
            
            <div className="bg-[#183B32] text-white p-6 md:p-8 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B77B53] font-mono block">
                  INTERACTIVE ESTIMATOR
                </span>
                <h3 className="font-serif text-2xl font-bold">
                  Quick Construction Budget Calculator
                </h3>
              </div>
              <Calculator className="w-8 h-8 text-[#B77B53] hidden sm:block" />
            </div>

            <div className="p-6 md:p-8 space-y-8">
              
              {/* Slider / Input */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#183B32]">
                    Estimated Built-Up Area (Square Feet):
                  </label>
                  <div className="flex items-center gap-1 font-mono font-bold text-lg text-[#183B32]">
                    <span>{calcArea.toLocaleString()}</span>
                    <span className="text-xs text-[#535B56]">sq.ft</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="12000"
                  step="100"
                  value={calcArea}
                  onChange={(e) => setCalcArea(Number(e.target.value))}
                  className="w-full h-2 bg-[#EAE7DE] accent-[#183B32] cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-[#535B56] font-mono">
                  <span>1,000 sq.ft (Duplex)</span>
                  <span>4,000 sq.ft (Villa)</span>
                  <span>8,000 sq.ft (Mansion)</span>
                  <span>12,000 sq.ft+</span>
                </div>
              </div>

              {/* Package selector for calculator */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#183B32] block">
                  Select Architectural Package Tier:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {PACKAGES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setCalcTier(p.id)}
                      className={`p-3 text-left border transition-all ${
                        calcTier === p.id
                          ? 'border-[#183B32] bg-[#183B32] text-white shadow-sm'
                          : 'border-[#242B28]/15 bg-white text-[#242B28] hover:border-[#B77B53]'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-mono block opacity-80">
                        {p.priceDisplay}/sq.ft
                      </span>
                      <span className="font-serif text-xs font-bold block mt-1">
                        {p.name.split(' ')[0]} {p.name.split(' ')[1]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculation Summary Result */}
              <div className="bg-[#F5F2EB] p-6 border border-[#242B28]/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#B77B53] font-semibold block">
                    Estimated Baseline Investment
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#183B32] mt-1">
                    ₹{(estimatedTotal / 100000).toFixed(2)} Lakhs
                  </div>
                  <span className="text-xs text-[#535B56] block mt-1">
                    (Approx. ₹{estimatedTotal.toLocaleString()} for {calcArea.toLocaleString()} sq.ft at {selectedTierData.priceDisplay}/sq.ft)
                  </span>
                </div>

                <Link
                  to={`/get-quote?area=${calcArea}&package=${calcTier}`}
                  className="px-6 py-3.5 bg-[#183B32] hover:bg-[#235246] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
                >
                  <span>Request Formal Bill of Quantities</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B77B53]" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          COMPREHENSIVE SPECIFICATION COMPARISON MATRIX TABLE
          ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53] block">
            DETAILED TECHNICAL MATRIX
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#183B32] font-bold">
            Side-by-Side Material &amp; Engineering Comparison
          </h2>
          <p className="text-xs text-[#535B56]">
            Examine the exact material grades, brands, and architectural inclusions across each tier.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto bg-white border border-[#242B28]/15 shadow-sm">
          <table className="w-full text-left text-xs text-[#535B56] border-collapse">
            <thead>
              <tr className="bg-[#183B32] text-white border-b border-[#242B28]/20">
                <th className="p-4 font-serif font-bold text-sm w-1/5 min-w-[180px]">
                  Material / Scope
                </th>
                {PACKAGES.map((p) => (
                  <th key={p.id} className="p-4 font-serif font-bold text-sm min-w-[220px]">
                    <div>{p.name}</div>
                    <div className="text-[11px] font-mono text-[#B77B53] font-normal">{p.priceDisplay} / sq.ft</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#242B28]/10">
              
              {/* Structure */}
              <tr className="hover:bg-[#F5F2EB]/50">
                <td className="p-4 font-semibold text-[#183B32] bg-[#EAE7DE]/30">
                  RCC &amp; Superstructure
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.structure}
                  </td>
                ))}
              </tr>

              {/* Flooring */}
              <tr className="hover:bg-[#F5F2EB]/50">
                <td className="p-4 font-semibold text-[#183B32] bg-[#EAE7DE]/30">
                  Flooring &amp; Staircases
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.flooring}
                  </td>
                ))}
              </tr>

              {/* Doors & Windows */}
              <tr className="hover:bg-[#F5F2EB]/50">
                <td className="p-4 font-semibold text-[#183B32] bg-[#EAE7DE]/30">
                  Doors &amp; Windows
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.doorsWindows}
                  </td>
                ))}
              </tr>

              {/* Electrical */}
              <tr className="hover:bg-[#F5F2EB]/50">
                <td className="p-4 font-semibold text-[#183B32] bg-[#EAE7DE]/30">
                  Electrical &amp; Smart Conduits
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.electrical}
                  </td>
                ))}
              </tr>

              {/* Plumbing & Sanitary */}
              <tr className="hover:bg-[#F5F2EB]/50">
                <td className="p-4 font-semibold text-[#183B32] bg-[#EAE7DE]/30">
                  Plumbing &amp; Sanitaryware
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.plumbingSanitary}
                  </td>
                ))}
              </tr>

              {/* Kitchen */}
              <tr className="hover:bg-[#F5F2EB]/50">
                <td className="p-4 font-semibold text-[#183B32] bg-[#EAE7DE]/30">
                  Kitchen Counter &amp; Dado
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.kitchen}
                  </td>
                ))}
              </tr>

              {/* Painting */}
              <tr className="hover:bg-[#F5F2EB]/50">
                <td className="p-4 font-semibold text-[#183B32] bg-[#EAE7DE]/30">
                  Internal &amp; External Painting
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.painting}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </section>

    </div>
  );
}
