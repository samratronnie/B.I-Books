import React, { useState } from 'react';
import { Download, FileCode, Globe, CheckCircle2, X, FolderArchive, Sparkles } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadedSite, setDownloadedSite] = useState(false);
  const [downloadedSource, setDownloadedSource] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fcfaf7] border border-[#d6cdb7] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-[#ede5d6]"
          aria-label="Close download modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
            <FolderArchive className="w-3.5 h-3.5" />
            <span>Download B.I Books Files</span>
          </div>

          <h3 className="font-serif font-black text-2xl text-[#1f130b] leading-tight">
            Download Project Files
          </h3>

          <p className="text-xs sm:text-sm text-[#665445] leading-relaxed">
            You can download the compiled production static website (ready to host anywhere) or the full React + TypeScript source code.
          </p>

          <div className="space-y-3 pt-2">
            
            {/* Option 1: Static Production Website ZIP */}
            <div className="bg-[#ffffff] border border-[#dcd1be] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs hover:border-amber-800 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-700" />
                  <span className="font-serif font-bold text-sm text-[#1f130b]">
                    Static Production Website (.ZIP)
                  </span>
                </div>
                <p className="text-xs text-[#705e4f]">
                  Compiled standalone HTML, CSS & JavaScript bundle. Ready to open or deploy on Netlify, GitHub Pages, or any server.
                </p>
              </div>

              <a
                href="/bi-books-site.zip"
                download="bi-books-static-website.zip"
                onClick={() => setDownloadedSite(true)}
                className="px-4 py-2 rounded-xl bg-[#362111] hover:bg-[#24150a] text-amber-50 font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-xs transition-transform active:scale-95"
              >
                <Download className="w-3.5 h-3.5 text-amber-300" />
                {downloadedSite ? 'Downloaded ✓' : 'Download ZIP'}
              </a>
            </div>

            {/* Option 2: Full Source Code ZIP */}
            <div className="bg-[#ffffff] border border-[#dcd1be] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs hover:border-amber-800 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-amber-800" />
                  <span className="font-serif font-bold text-sm text-[#1f130b]">
                    Complete Source Code (.ZIP)
                  </span>
                </div>
                <p className="text-xs text-[#705e4f]">
                  Includes all components, dataset, Tailwind CSS setup, Vite configuration, and TypeScript files.
                </p>
              </div>

              <a
                href="/bi-books-source-code.zip"
                download="bi-books-source-code.zip"
                onClick={() => setDownloadedSource(true)}
                className="px-4 py-2 rounded-xl bg-[#fdfcf9] hover:bg-[#efe7d8] text-[#362111] border border-[#cfc0a9] font-bold text-xs shrink-0 flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-amber-800" />
                {downloadedSource ? 'Downloaded ✓' : 'Source Code'}
              </a>
            </div>

          </div>

          <div className="p-3 bg-[#f5eee3] rounded-xl text-[11px] text-[#5e4b3c] leading-relaxed space-y-1 border border-[#ded1ba]">
            <p className="font-bold text-[#2e1d0f] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Tip:
            </p>
            <p>
              You can also click the <strong>Export / Download Code</strong> button at the top of the Google AI Studio interface anytime to export directly to GitHub or download your workspace.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#ede5d6] hover:bg-[#ded1bc] text-[#3d2714] font-bold text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
