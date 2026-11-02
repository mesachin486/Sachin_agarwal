import React, { useState } from 'react';
import { X, Download, ExternalLink, Check, FileText } from 'lucide-react';
import { RESUMES, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [selectedResumeId, setSelectedResumeId] = useState<string>('product');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentResume = RESUMES.find((r) => r.id === selectedResumeId) || RESUMES[0];

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${currentResume.path}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Curriculum Vitae & Resumes
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {PERSONAL_INFO.name} · Verified PDF Documents
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-6 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60">
          <div className="flex flex-wrap gap-2">
            {RESUMES.map((resume) => {
              const active = resume.id === selectedResumeId;
              return (
                <button
                  key={resume.id}
                  onClick={() => setSelectedResumeId(resume.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 text-left ${
                    active
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                  }`}
                >
                  <span className="font-semibold">{resume.label}</span>
                  <span className="block text-[11px] opacity-80 mt-0.5">
                    {resume.targetRole}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pb-1">
            {currentResume.description}
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-100/70 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 text-xs">
          <span className="text-slate-600 dark:text-slate-300 font-mono text-[11px] truncate max-w-xs sm:max-w-md">
            {currentResume.fileName}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <FileText className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Copy Link'}</span>
            </button>
            <a
              href={currentResume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Tab</span>
            </a>
            <a
              href={currentResume.path}
              download={currentResume.fileName}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 w-full bg-slate-200 dark:bg-slate-950 p-2 overflow-hidden flex flex-col min-h-[460px]">
          <iframe
            src={`${currentResume.path}#toolbar=0`}
            title={currentResume.label}
            className="w-full flex-1 rounded-lg border border-slate-300 dark:border-slate-800 bg-white"
          />
        </div>
      </div>
    </div>
  );
};
