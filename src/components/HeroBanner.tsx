import React from 'react';
import { BookOpen, GraduationCap, Sparkles, ArrowRight, Star, CheckCircle, Truck, DollarSign, Layers } from 'lucide-react';
import { BookGenre } from '../types';
import { DrRatanGhoshPortrait } from './DrRatanGhoshPortrait';

interface HeroBannerProps {
  onSelectGenre: (genre: BookGenre) => void;
  onExploreCatalog: () => void;
  onViewAbout: () => void;
  onViewContact: () => void;
  onOpenFlagshipBook: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSelectGenre,
  onExploreCatalog,
  onViewAbout,
  onViewContact,
  onOpenFlagshipBook,
}) => {
  return (
    <div className="bg-[#fcfaf7]">
      {/* Main Author/Publisher Hero (In the style of jamesclear.com) */}
      <section className="border-b border-[#ded3be] py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eee5d5] border border-[#d6c7b0] text-xs font-bold text-[#5c3e23]">
                <GraduationCap className="w-3.5 h-3.5 text-amber-800" />
                <span>Publisher & School Teacher · 15+ Years Experience</span>
              </div>

              {/* Exact headline from user's index.html paired with James Clear authority */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[#1c120a] leading-[1.12]">
                  Welcome to BI Books
                </h1>
                <p className="text-xl sm:text-2xl text-[#4a3625] font-serif italic">
                  Discover stories, knowledge and inspiration, one page at a time.
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#614e3e] leading-relaxed max-w-2xl font-normal">
                I'm <strong className="font-semibold text-[#2b1b0d]">Dr. Ratan Ghosh</strong>. 
                For over 15 years, I've taught secondary school students and mentored teachers. 
                I founded <strong>B.I Books</strong> to publish books that turn complex subjects into lucid, beautiful, and lasting understanding.
              </p>

              {/* Action Buttons (featuring "Browse Books" from index.html) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onExploreCatalog}
                  className="px-6 py-3 rounded-xl bg-[#362111] hover:bg-[#24150a] text-amber-50 font-bold text-sm shadow-md flex items-center gap-2 transition-transform active:scale-98"
                >
                  <BookOpen className="w-4 h-4 text-amber-300" />
                  Browse Books
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onViewAbout}
                  className="px-6 py-3 rounded-xl bg-[#ffffff] hover:bg-[#f6f1e8] text-[#362111] border border-[#cfc0a9] font-bold text-sm flex items-center gap-2 transition-colors shadow-2xs"
                >
                  <GraduationCap className="w-4 h-4 text-amber-800" />
                  About Dr. Ratan Ghosh
                </button>

                <button
                  onClick={onViewContact}
                  className="px-5 py-3 rounded-xl text-[#5a4533] hover:text-[#24150a] hover:bg-[#eee4d2] font-semibold text-sm transition-colors"
                >
                  Contact Us
                </button>
              </div>

              {/* Stats Bar (James Clear Style Clean Tickers) */}
              <div className="pt-4 border-t border-[#e8dfcf] grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#3a2716]">
                <div>
                  <span className="block font-serif font-black text-2xl text-[#1c120a]">15+</span>
                  <span className="text-xs text-[#786656]">Years in Classroom</span>
                </div>
                <div>
                  <span className="block font-serif font-black text-2xl text-[#1c120a]">50+</span>
                  <span className="text-xs text-[#786656]">Published Titles</span>
                </div>
                <div>
                  <span className="block font-serif font-black text-2xl text-[#1c120a]">45+</span>
                  <span className="text-xs text-[#786656]">Partner Schools</span>
                </div>
                <div>
                  <span className="block font-serif font-black text-2xl text-[#1c120a] flex items-center gap-1">
                    4.9 <Star className="w-4 h-4 fill-amber-500 text-amber-500 inline" />
                  </span>
                  <span className="text-xs text-[#786656]">Reader Satisfaction</span>
                </div>
              </div>

            </div>

            {/* Right Column: Prominent Portrait of Dr. Ratan Ghosh */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md">
                <DrRatanGhoshPortrait size="large" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 3 Core Features (Directly from user's uploaded index.html) */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#ded3be]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#ffffff] border border-[#dcd1be] rounded-2xl p-6 shadow-xs hover:border-[#a17e57] transition-colors space-y-2">
            <div className="text-2xl mb-1">📖</div>
            <h3 className="font-serif font-bold text-xl text-[#24160c]">
              Wide Collection
            </h3>
            <p className="text-sm text-[#665445] leading-relaxed">
              Fiction, science, history, self-help, school guides, and teacher pedagogy handbooks curated for deep learning.
            </p>
          </div>

          <div className="bg-[#ffffff] border border-[#dcd1be] rounded-2xl p-6 shadow-xs hover:border-[#a17e57] transition-colors space-y-2">
            <div className="text-2xl mb-1">💰</div>
            <h3 className="font-serif font-bold text-xl text-[#24160c]">
              Great Prices
            </h3>
            <p className="text-sm text-[#665445] leading-relaxed">
              Quality books at prices every reader, student, and school library can comfortably afford.
            </p>
          </div>

          <div className="bg-[#ffffff] border border-[#dcd1be] rounded-2xl p-6 shadow-xs hover:border-[#a17e57] transition-colors space-y-2">
            <div className="text-2xl mb-1">🚚</div>
            <h3 className="font-serif font-bold text-xl text-[#24160c]">
              Fast Delivery
            </h3>
            <p className="text-sm text-[#665445] leading-relaxed">
              Get your next read delivered directly to your door, school campus, or local bookstore pickup lounge.
            </p>
          </div>

        </div>
      </section>

      {/* James Clear Style Flagship Book Showcase (Like Atomic Habits on jamesclear.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 border-b border-[#ded3be]">
        <div className="bg-[#f5eee3] border border-[#ded1ba] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Book Cover */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={onOpenFlagshipBook}
                className="w-52 sm:w-60 aspect-3/4 rounded-md overflow-hidden book-shadow book-shadow-hover book-spine-effect cursor-pointer bg-stone-900 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
                  alt="The Art of Teaching High School"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8ded0] border border-[#d4c5ae] text-xs font-bold text-[#5c3e23]">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Featured Masterwork by Dr. Ratan Ghosh</span>
              </div>

              <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#1f130b] leading-tight">
                The Art of Teaching High School
              </h2>

              <p className="text-sm sm:text-base text-[#614e3e] italic font-serif">
                15 Years of Classroom Pedagogy, Empathy, and Inspiring Curiosity
              </p>

              <p className="text-sm text-[#524132] leading-relaxed">
                Written directly from fifteen years on the front lines of high school education. Dr. Ratan Ghosh explores how to awaken student fascination in sciences, replace rote memorization with conceptual inquiry, and make secondary education a transformative human experience.
              </p>

              {/* Testimonial Quote */}
              <div className="bg-[#ffffff]/80 border-l-4 border-amber-800 p-4 rounded-r-xl text-xs sm:text-sm text-[#3b2716] italic">
                “Dr. Ghosh brings the humility of a true classroom practitioner. No unapproachable jargon, just compassionate pedagogy that respects student realities.”
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenFlagshipBook}
                  className="px-6 py-2.5 rounded-xl bg-[#362111] hover:bg-[#24150a] text-amber-50 font-bold text-xs shadow-md flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-amber-300" />
                  Read Excerpt & Details
                </button>

                <button
                  onClick={onExploreCatalog}
                  className="px-5 py-2.5 rounded-xl bg-[#fdfcf9] hover:bg-[#efe7d8] text-[#362111] border border-[#cfc0a9] font-bold text-xs"
                >
                  View All Books in Catalog →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
