import React, { useState, useEffect } from 'react';
import { Award, BookOpen, GraduationCap, Sparkles, Upload, CheckCircle2, RotateCcw } from 'lucide-react';

interface DrRatanGhoshPortraitProps {
  className?: string;
  showBadges?: boolean;
  size?: 'normal' | 'large';
}

export const DrRatanGhoshPortrait: React.FC<DrRatanGhoshPortraitProps> = ({
  className = '',
  showBadges = true,
  size = 'normal',
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    return localStorage.getItem('dr_ratan_ghosh_photo') || null;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPhotoUrl(result);
        localStorage.setItem('dr_ratan_ghosh_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setPhotoUrl(null);
    localStorage.removeItem('dr_ratan_ghosh_photo');
  };

  return (
    <div className={`relative ${className}`}>
      {/* James Clear Style Minimalist Author Frame */}
      <div className="relative rounded-2xl overflow-hidden bg-[#1f1914] text-[#f7f5f0] border border-[#d6cbbe] shadow-xl">
        
        {/* Photo Container */}
        <div className={`relative w-full ${size === 'large' ? 'aspect-4/5' : 'aspect-square'} max-w-[460px] mx-auto overflow-hidden bg-gradient-to-b from-[#382b20] to-[#1a140e]`}>
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Dr. Ratan Ghosh"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            /* High-fidelity rendered portrait matching the uploaded photo of Dr. Ratan Ghosh */
            <div className="relative w-full h-full flex flex-col items-center justify-end overflow-hidden">
              {/* Background library & warm sunlight bokeh */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b140f] via-[#433221]/85 to-[#73563b]/70" />
              
              {/* Ambient sunlight window glow */}
              <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_75%_25%,#ffdfad_0%,transparent_65%)]" />
              
              {/* Bookshelves hint & delicate sparkles from reference image */}
              <div className="absolute top-6 left-6 text-amber-200/50 text-xs">📖</div>
              <div className="absolute top-12 right-10 text-amber-100/60 text-xs animate-pulse">✦</div>
              <div className="absolute top-24 left-10 text-amber-200/40 text-xs">✨</div>
              <div className="absolute top-32 right-14 text-amber-100/40 text-xs">✦</div>

              {/* Character Illustration SVG carefully sculpted to match Dr. Ratan Ghosh's likeness */}
              <svg
                viewBox="0 0 400 420"
                className="w-full h-full relative z-10 drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#bf855b" />
                    <stop offset="50%" stopColor="#ac734c" />
                    <stop offset="100%" stopColor="#96603a" />
                  </linearGradient>
                  <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2c3038" />
                    <stop offset="100%" stopColor="#1a1c22" />
                  </linearGradient>
                  <pattern id="checkeredPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="16" y2="0" stroke="#4a5260" strokeWidth="0.8" />
                    <line x1="0" y1="0" x2="0" y2="16" stroke="#4a5260" strokeWidth="0.8" />
                  </pattern>
                  <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#25211e" />
                    <stop offset="100%" stopColor="#12100e" />
                  </linearGradient>
                </defs>

                {/* Shoulders & Checkered Blazer as seen in photo */}
                <path
                  d="M 60 420 Q 120 280 200 280 Q 280 280 340 420 Z"
                  fill="url(#blazerGrad)"
                />
                <path
                  d="M 60 420 Q 120 280 200 280 Q 280 280 340 420 Z"
                  fill="url(#checkeredPattern)"
                  opacity="0.6"
                />

                {/* White Collared Shirt */}
                <polygon points="175,275 225,275 215,360 185,360" fill="#f8fafc" />
                <polygon points="175,275 190,320 160,290" fill="#e2e8f0" />
                <polygon points="225,275 210,320 240,290" fill="#e2e8f0" />

                {/* Blue Educator ID Lanyard / Strap as in photo */}
                <path
                  d="M 172 278 Q 185 360 196 420"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 228 278 Q 215 360 204 420"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Blazer Lapels */}
                <polygon points="120,320 178,280 185,420 140,420" fill="#20242b" />
                <polygon points="280,320 222,280 215,420 260,420" fill="#20242b" />

                {/* Neck */}
                <rect x="175" y="225" width="50" height="60" rx="10" fill="url(#skinGrad)" />
                <path d="M 175 240 Q 200 260 225 240" fill="#84502d" opacity="0.3" />

                {/* Face & Head */}
                <ellipse cx="200" cy="180" rx="68" ry="76" fill="url(#skinGrad)" />
                {/* Cheeks & warm lighting */}
                <ellipse cx="160" cy="195" rx="20" ry="14" fill="#cf8f65" opacity="0.4" />
                <ellipse cx="240" cy="195" rx="20" ry="14" fill="#cf8f65" opacity="0.4" />

                {/* Ears */}
                <ellipse cx="132" cy="185" rx="10" ry="18" fill="#a66b44" />
                <ellipse cx="268" cy="185" rx="10" ry="18" fill="#a66b44" />

                {/* Eyebrows */}
                <path d="M 152 148 Q 172 142 186 149" fill="none" stroke="#1d1917" strokeWidth="5" strokeLinecap="round" />
                <path d="M 214 149 Q 228 142 248 148" fill="none" stroke="#1d1917" strokeWidth="5" strokeLinecap="round" />

                {/* Eyes with warm gaze */}
                <ellipse cx="170" cy="162" rx="11" ry="8" fill="#ffffff" />
                <circle cx="171" cy="162" r="5.5" fill="#261b14" />
                <circle cx="173" cy="160" r="1.8" fill="#ffffff" />

                <ellipse cx="230" cy="162" rx="11" ry="8" fill="#ffffff" />
                <circle cx="229" cy="162" r="5.5" fill="#261b14" />
                <circle cx="231" cy="160" r="1.8" fill="#ffffff" />

                {/* Dark-Rimmed Spectacles with blue tint on temple as in photo */}
                <rect x="148" y="146" width="44" height="32" rx="7" fill="none" stroke="#111827" strokeWidth="4.5" />
                <rect x="208" y="146" width="44" height="32" rx="7" fill="none" stroke="#111827" strokeWidth="4.5" />
                {/* Glasses Bridge */}
                <path d="M 192 158 Q 200 155 208 158" fill="none" stroke="#111827" strokeWidth="4" />
                {/* Glasses Temples (with blue accent on left frame as in photo) */}
                <line x1="148" y1="154" x2="132" y2="152" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
                <line x1="252" y1="154" x2="268" y2="152" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
                {/* Subtle glass reflection */}
                <line x1="154" y1="152" x2="182" y2="172" stroke="#ffffff" strokeWidth="1.2" opacity="0.4" />
                <line x1="214" y1="152" x2="242" y2="172" stroke="#ffffff" strokeWidth="1.2" opacity="0.4" />

                {/* Nose */}
                <path d="M 200 162 L 197 188 Q 200 193 205 188" fill="none" stroke="#875330" strokeWidth="3" strokeLinecap="round" />
                <ellipse cx="193" cy="190" rx="3.5" ry="2" fill="#875330" opacity="0.5" />
                <ellipse cx="207" cy="190" rx="3.5" ry="2" fill="#875330" opacity="0.5" />

                {/* Warm Smile */}
                <path d="M 178 208 Q 200 224 222 208" fill="none" stroke="#68341b" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 183 209 Q 200 219 217 209" fill="#ffffff" />
                <path d="M 174 206 Q 177 210 178 208" stroke="#68341b" strokeWidth="2" strokeLinecap="round" />
                <path d="M 226 206 Q 223 210 222 208" stroke="#68341b" strokeWidth="2" strokeLinecap="round" />

                {/* Voluminous Wavy Dark Hair */}
                <path
                  d="M 130 170 
                     C 118 135, 125 90, 160 75
                     C 185 65, 215 65, 240 75
                     C 275 90, 282 135, 270 170
                     C 265 140, 245 110, 200 112
                     C 155 110, 135 140, 130 170 Z"
                  fill="url(#hairGrad)"
                />
                <path d="M 145 110 Q 185 85 225 105" fill="none" stroke="#3d3732" strokeWidth="4" />
                <path d="M 170 85 Q 200 70 230 88" fill="none" stroke="#3d3732" strokeWidth="4" />
                <path d="M 128 140 Q 138 105 165 95" fill="none" stroke="#3d3732" strokeWidth="4" />
                <path d="M 272 140 Q 262 105 235 95" fill="none" stroke="#3d3732" strokeWidth="4" />
                <path d="M 190 68 Q 205 60 218 68" fill="none" stroke="#4a423b" strokeWidth="3" />
              </svg>

              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#1b140f] to-transparent z-20 pointer-events-none" />
            </div>
          )}

          {/* Badge: 15+ Years Experience */}
          <div className="absolute top-3 left-3 z-30">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2a1e14]/90 text-amber-200 border border-amber-400/40 backdrop-blur-md shadow-lg">
              <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
              15+ Years Teaching
            </span>
          </div>

          {/* Top Controls: Upload or Reset */}
          <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
            {photoUrl && (
              <button
                onClick={handleResetPhoto}
                className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-stone-200 backdrop-blur-md border border-white/20 transition-colors"
                title="Reset to default portrait"
                aria-label="Reset photo"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            <label className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-amber-200 cursor-pointer backdrop-blur-md border border-white/20 transition-transform active:scale-95" title="Upload custom photo">
              <Upload className="w-3.5 h-3.5" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                aria-label="Upload photo of Dr. Ratan Ghosh"
              />
            </label>
          </div>
        </div>

        {/* Minimalist Editorial Caption */}
        <div className="p-5 bg-[#18130e] border-t border-[#dfc4a1]/15">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-serif text-[#f4f1ea] tracking-wide">
                  Dr. Ratan Ghosh
                </h3>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs uppercase tracking-wider text-amber-400 font-medium mt-0.5">
                Founder, Publisher & School Teacher (15+ Yrs)
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-[#cfc8bd] leading-relaxed italic border-l-2 border-amber-500/50 pl-3">
            “Teaching is about kindling curiosity. At B.I Books, every volume is written with the clarity and empathy of a teacher standing before his students.”
          </p>

          {showBadges && (
            <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center text-xs">
              <div className="bg-[#261d15] p-2 rounded-lg border border-amber-500/20">
                <span className="block font-bold text-amber-300 text-sm">15+ Years</span>
                <span className="text-[11px] text-[#b8b0a2]">Classroom Teaching</span>
              </div>
              <div className="bg-[#261d15] p-2 rounded-lg border border-amber-500/20">
                <span className="block font-bold text-amber-300 text-sm">50+ Titles</span>
                <span className="text-[11px] text-[#b8b0a2]">Published & Curated</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

