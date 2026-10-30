import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Award, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team.js';

export default function TeamPage() {
  return (
    <div className="w-full bg-[#F5F2EB] pt-24 min-h-screen">
      
      {/* Banner */}
      <section className="bg-[#183B32] text-white py-16 md:py-24 border-b border-[#B77B53]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#B77B53]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B77B53]">
                LEADERSHIP &amp; ENGINEERING
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              The People Behind Every Project.
            </h1>
            <p className="text-sm sm:text-base text-[#F5F2EB]/80 leading-relaxed font-light">
              Meet the architects, civil engineers, project managers, and interior designers who uphold the Chethana Ventures standard of craftsmanship and structural permanence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Placeholder Notice */}
        <div className="mb-12 p-4 bg-[#EAE7DE] border border-[#242B28]/10 text-xs text-[#535B56] flex items-center justify-between">
          <span>
            <strong className="text-[#183B32]">Note on Team Profiles: </strong>
            The profiles below represent sample demonstration roles and can be readily configured with the official leadership biographies and headshots of Chethana Ventures.
          </span>
          <span className="font-mono uppercase text-[10px] text-[#B77B53] border border-[#B77B53]/30 px-2 py-0.5 shrink-0 hidden sm:inline-block">
            Editable Template
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-[#242B28]/10 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[4/3] w-full bg-[#EAE7DE] overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#183B32]/90 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5">
                    {member.credentials}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B77B53] font-semibold block">
                      {member.designation}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#183B32] mt-0.5">
                      {member.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#535B56] leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-bold text-[#183B32] block mb-1">
                      Domain Focus:
                    </span>
                    <span className="text-xs text-[#242B28] bg-[#F5F2EB] px-2.5 py-1 block border border-[#242B28]/5">
                      {member.specialty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-[#242B28]/5 mt-4">
                <div className="flex items-center justify-between text-xs text-[#535B56] pt-3">
                  <span className="text-[10px] font-mono text-[#535B56]/70">
                    Chethana Practice Lead
                  </span>
                  <Link
                    to="/contact"
                    className="text-[#183B32] font-semibold hover:text-[#B77B53] transition-colors flex items-center gap-1"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="py-16 bg-[#183B32] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Work With Our Dedicated Civil &amp; Architectural Teams.
          </h2>
          <p className="text-xs sm:text-sm text-[#F5F2EB]/80">
            Book an introductory technical review of your site location and floor plan objectives.
          </p>
          <div className="pt-2">
            <Link
              to="/get-quote"
              className="px-6 py-3 bg-[#B77B53] hover:bg-[#C98F69] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
