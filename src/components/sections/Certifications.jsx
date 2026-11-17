import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Eye,
  Download,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { certifications } from '../../data/portfolioData';
import CertificateModal from '../modals/CertificateModal';

export default function Certifications() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Certified Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Verified <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Officially verified credentials in Java Full Stack Development and modern React frontend engineering.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              {/* Preview Banner */}
              <div
                onClick={() => setActiveCertificate(cert)}
                className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-800"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300">
                  <span className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>Click to Inspect Full Certificate</span>
                  </span>
                </div>

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/95 text-blue-400 text-xs font-bold border border-slate-700/80 shadow-md">
                  {cert.badge}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="mt-2 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Issuer: <span className="text-blue-400 dark:text-blue-400 light:text-blue-600">{cert.issuer}</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Verification Info Box */}
                  <div className="mt-5 p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-500 light:text-slate-400 block font-medium">
                        Verification Code:
                      </span>
                      <code className="font-mono font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                        {cert.verificationCode}
                      </code>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-slate-500 dark:text-slate-500 light:text-slate-400 block font-medium">
                        Date of Issue:
                      </span>
                      <span className="font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                        {cert.issueDate}
                      </span>
                    </div>
                  </div>

                  {/* Skills Covered Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800/70 dark:bg-slate-800/70 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-3 flex-wrap">
                  <button
                    onClick={() => setActiveCertificate(cert)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={cert.pdf}
                      download={`${cert.id}.pdf`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800 hover:bg-slate-700 transition-colors"
                      title="Download Certificate PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      {activeCertificate && (
        <CertificateModal
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      )}
    </section>
  );
}

