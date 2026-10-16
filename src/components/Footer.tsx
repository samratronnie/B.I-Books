import React, { useState } from 'react';
import {
  BookOpen,
  Mail,
  GraduationCap,
  Calendar,
  Sparkles,
  MapPin,
  Phone,
  Heart,
  Check
} from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: 'catalog' | 'about' | 'events') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-[#241a12] text-[#e8dfd3] border-t border-[#3d2c1f]">
      {/* Newsletter Strip */}
      <div className="border-b border-[#3d2c1f] bg-[#1d140e] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif font-bold text-xl text-amber-100 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Subscribe to the B.I Books Literary Gazette
            </h3>
            <p className="text-xs text-[#b8a999]">
              Receive new book releases, Dr. Ratan Ghosh's pedagogical essays, and invitations to upcoming teacher workshops.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="bg-[#2c2016] border border-[#4d3827] rounded-xl px-4 py-2.5 text-xs text-amber-50 placeholder:text-[#8f7e6f] flex-1 focus:outline-hidden focus:border-amber-400"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs shrink-0 shadow-md transition-colors flex items-center gap-1.5"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" /> Subscribed!
                </>
              ) : (
                'Join Gazette'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Founder Blurb */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-700/40 text-amber-300 flex items-center justify-center border border-amber-600/30">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-serif font-black text-2xl text-amber-100 tracking-tight">
                B.I Books
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#b5a695] leading-relaxed max-w-md">
              An independent educational and literary publishing imprint and community bookstore founded by veteran educator <strong className="text-amber-200">Dr. Ratan Ghosh</strong>. Driven by over 15 years of secondary classroom teaching to cultivate deep understanding and joy in reading.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-amber-300/80">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Dedicated to School Teachers, Students & Lifelong Readers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-amber-200 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="text-xs space-y-2 text-[#c2b2a1]">
              <li>
                <button
                  onClick={() => onNavigateTab('catalog')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Book Catalog & Inventory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('about')}
                  className="hover:text-amber-300 transition-colors"
                >
                  About Dr. Ratan Ghosh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('events')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Teacher Workshops & Fairs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('catalog')}
                  className="hover:text-amber-300 transition-colors"
                >
                  CBSE / ICSE Companions
                </button>
              </li>
            </ul>
          </div>

          {/* Curations */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-amber-200 uppercase tracking-wider">
              Curations
            </h4>
            <ul className="text-xs space-y-2 text-[#c2b2a1]">
              <li>Science & Math Guides</li>
              <li>Bengali Literature Classics</li>
              <li>Teacher Pedagogy Handbooks</li>
              <li>Young Adult STEM Kits</li>
              <li>School Library Sets</li>
            </ul>
          </div>

          {/* Bookstore Visiting & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-amber-200 uppercase tracking-wider">
              Bookstore & Reading Lounge
            </h4>
            <div className="text-xs space-y-2 text-[#b5a695]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>B.I Books Reading Hall, College Street Heritage Area, Kolkata, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 98310 54321 / 033-2241-0089</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contact@bibooks.in / editor@bibooks.in</span>
              </div>
              <p className="text-[11px] text-[#8e7e6e] pt-1">
                Visiting Hours: Mon–Sat 10:00 AM – 8:30 PM (Sunday Closed for Reading Club Meetings)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Matching uploaded snippet) */}
        <div className="pt-10 mt-10 border-t border-[#3d2c1f] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8f7f6f]">
          <p>&copy; <span id="year">{new Date().getFullYear()}</span> BI Books. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Published & Curated by Dr. Ratan Ghosh · 15+ Years in Teaching
          </p>
        </div>
      </div>
    </footer>
  );
};
