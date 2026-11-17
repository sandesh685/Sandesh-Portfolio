import React from 'react';
import { X, ExternalLink, Download, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] bg-slate-900 dark:bg-slate-900 light:bg-white rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900">
                {certificate.title}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                Issued by {certificate.issuer} • Code: {certificate.verificationCode}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Certificate Modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High Resolution Image View */}
        <div className="overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-slate-950/70">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-w-full max-h-[60vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
          />

          <div className="mt-4 text-center max-w-xl">
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              {certificate.description}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/95 dark:bg-slate-900/95 light:bg-slate-50 flex items-center justify-between gap-3 shrink-0 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              Verification Code:
            </span>
            <code className="px-2 py-0.5 rounded bg-slate-800 dark:bg-slate-800 light:bg-slate-200 font-mono text-xs text-blue-400 dark:text-blue-400 light:text-blue-700 font-bold border border-slate-700/60">
              {certificate.verificationCode}
            </code>
          </div>

          <div className="flex items-center gap-2.5">
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verify Online</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}

            <a
              href={certificate.pdf}
              download={`${certificate.id}.pdf`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

