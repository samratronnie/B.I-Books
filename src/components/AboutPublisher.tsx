import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  Users,
  Compass,
  CheckCircle,
  Quote,
  Calendar,
  Mail,
  HeartHandshake
} from 'lucide-react';
import { DrRatanGhoshPortrait } from './DrRatanGhoshPortrait';
import { Book } from '../types';

interface AboutPublisherProps {
  curatedBooks: Book[];
  onSelectBook: (book: Book) => void;
  onExploreCatalog: () => void;
  onViewEvents: () => void;
}

export const AboutPublisher: React.FC<AboutPublisherProps> = ({
  curatedBooks,
  onSelectBook,
  onExploreCatalog,
  onViewEvents,
}) => {
  const milestones = [
    {
      year: '2011',
      title: 'Classroom Roots & Early Teaching Career',
      desc: 'Began teaching physical sciences and mathematics in high schools, noticing how conventional textbooks often extinguished young curiosity through dry memorization.'
    },
    {
      year: '2015',
      title: 'The Hands-On Experiment Movement',
      desc: 'Designed 50+ low-cost classroom experiment kits for rural and urban schools, proving that scientific discovery requires curiosity rather than expensive lab gear.'
    },
    {
      year: '2019',
      title: 'Founding B.I Books Publishing',
      desc: 'Formally launched B.I Books as an independent educational and literary publishing press, with a pledge to produce student companions with deep conceptual empathy.'
    },
    {
      year: '2024',
      title: 'Landmark Publication: The Art of Teaching High School',
      desc: 'Synthesized 15 years of secondary pedagogical insights into a celebrated handbook adopted by teacher training institutes and educational colleges across the region.'
    },
    {
      year: 'Present',
      title: '50+ Curated Titles & 45+ School Partnerships',
      desc: 'Continuing daily active educator mentoring, curating classic Bengali and English literature, and hosting regional book fairs and teacher pedagogy circles.'
    }
  ];

  const pillars = [
    {
      icon: <GraduationCap className="w-6 h-6 text-amber-700" />,
      title: '15+ Years Classroom Pedagogy',
      desc: 'Every curriculum guide published by B.I Books is grounded in 15+ years of real chalk-and-board school teaching experience, addressing the genuine doubts students face.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-700" />,
      title: 'Literature as Empathy Building',
      desc: 'Curating timeless Indian and world classics with comprehensive vocabulary margins and contextual prefaces, helping young readers bridge language barriers.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-700" />,
      title: 'Inquiry-Driven Discovery',
      desc: 'Replacing rote examination pressure with hands-on projects, visual proof patterns, and real-life connections that nurture lifelong autodidacts.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-700" />,
      title: 'Affordable Library Editions',
      desc: 'Ensuring high-quality paper, robust thread-sewn bindings, and affordable pricing so school libraries and modest homes can build enduring family collections.'
    }
  ];

  return (
    <div id="about-section" className="bg-[#f7f4ee] py-12 lg:py-16 border-b border-[#dfd5c1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Publisher Spotlight Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Dr. Ratan Ghosh Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <DrRatanGhoshPortrait />
              <div className="mt-3 text-center">
                <p className="text-[11px] text-[#786657]">
                  Photograph & Profile: <strong className="text-[#3a2717]">Dr. Ratan Ghosh</strong>, Founder & Publisher of B.I Books
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Story & Mission */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8ded0] border border-[#d6c7b2] text-xs font-bold text-[#5c3e23]">
              <GraduationCap className="w-3.5 h-3.5 text-amber-800" />
              <span>About Us · Publisher & Educator Profile</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#2e1d10] leading-tight">
              Dr. Ratan Ghosh: A Teacher’s Heart Behind Every Page.
            </h2>

            <p className="text-base text-[#5c4939] leading-relaxed">
              For more than <strong>15 years</strong>, Dr. Ratan Ghosh has stood in front of school classrooms, 
              guiding generations of students through the intricacies of secondary science, mathematics, and literature. 
              As an educator, he observed a recurring heartache: school children were being taught to cram facts for 
              terminal examinations, while the sheer joy of inquiry and reading was fading away.
            </p>

            <p className="text-base text-[#5c4939] leading-relaxed">
              To answer this challenge, Dr. Ghosh established <strong>B.I Books</strong>—not merely as a commercial publisher, 
              but as a cultural mission. Under his thoughtful editorial stewardship, B.I Books produces 
              carefully annotated literary classics, concept-driven science handbooks, and teacher pedagogical treatises 
              that turn study sessions into adventures of discovery.
            </p>

            {/* Quote Block */}
            <div className="bg-[#f2ece0] border-l-4 border-amber-800 p-5 rounded-r-xl shadow-xs">
              <Quote className="w-6 h-6 text-amber-800/40 mb-1" />
              <p className="text-sm sm:text-base font-serif italic text-[#382414] leading-relaxed">
                “When a school teacher steps into the world of publishing, the objective shifts fundamentally. 
                We don’t measure success by print runs alone; we measure it by the spark that flashes in a child’s eyes 
                when an equation suddenly makes sense, or when a poem touches their soul for the first time.”
              </p>
              <div className="mt-2 text-xs font-bold text-[#5a3e26]">
                — Dr. Ratan Ghosh, M.Sc., B.Ed., Ph.D. (Education & Sciences)
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreCatalog}
                className="px-5 py-2.5 rounded-xl bg-[#4a2e16] hover:bg-[#38210d] text-amber-50 text-xs font-semibold shadow-xs flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                Explore Books Curated by Dr. Ghosh
              </button>

              <button
                onClick={onViewEvents}
                className="px-5 py-2.5 rounded-xl bg-[#fdfcf9] hover:bg-[#f2ede4] text-[#422c19] border border-[#cfc0a9] text-xs font-semibold flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-800" />
                Attend His Upcoming Workshop
              </button>
            </div>
          </div>

        </div>

        {/* Four Educational Pillars */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#2e1d10]">
              The B.I Books Publishing Philosophy
            </h3>
            <p className="text-sm text-[#705e4f] mt-1">
              Guiding principles derived from fifteen years of continuous school room practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#fcfaf7] border border-[#dcd1bd] rounded-xl p-5 hover:border-amber-700 transition-colors shadow-2xs space-y-2.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#efe7d8] flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h4 className="font-serif font-bold text-base text-[#2e1d10]">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#6e5d4e] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 15-Year Educator Journey Timeline */}
        <div className="bg-[#fcfaf7] border border-[#dcd1be] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ede4d4] pb-4">
            <div>
              <h3 className="font-serif font-black text-2xl text-[#2e1d10]">
                15+ Years Educator & Publisher Timeline
              </h3>
              <p className="text-xs text-[#705e4f]">
                Tracing the path from chalk dust to independent literary imprint.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 w-fit">
              2011 — Present
            </span>
          </div>

          <div className="relative border-l-2 border-amber-800/30 ml-4 sm:ml-6 space-y-8 pl-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Marker point */}
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#4a2e16] border-2 border-[#fcfaf7] group-hover:scale-125 transition-transform" />
                
                <div>
                  <span className="font-mono text-xs font-bold text-amber-800 bg-[#efe7d8] px-2 py-0.5 rounded-md">
                    {item.year}
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#2e1d10] mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#665445] mt-1 leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Books Authored & Curated by Dr. Ratan Ghosh Showcase */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h3 className="font-serif font-black text-2xl text-[#2e1d10]">
                Essential Publications by Dr. Ratan Ghosh
              </h3>
              <p className="text-xs text-[#705e4f]">
                Flagship curriculum companions, teacher handbooks, and annotated masterworks.
              </p>
            </div>
            <button
              onClick={onExploreCatalog}
              className="text-xs font-semibold text-amber-900 hover:text-amber-950 underline"
            >
              View all works in catalog →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {curatedBooks.slice(0, 4).map((book) => (
              <div
                key={book.id}
                onClick={() => onSelectBook(book)}
                className="bg-[#fcfaf7] border border-[#dcd1be] rounded-xl p-4 flex flex-col justify-between hover:border-amber-800 transition-all cursor-pointer shadow-xs group"
              >
                <div>
                  <div className="aspect-3/4 w-full rounded-md overflow-hidden book-shadow book-spine-effect mb-3 bg-stone-900">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                    {book.genre}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#2e1d10] group-hover:text-amber-900 line-clamp-2 mt-0.5">
                    {book.title}
                  </h4>
                  <p className="text-xs text-[#6e5d4e] mt-1 line-clamp-2 italic">
                    {book.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#ede4d4] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#3d2714]">₹{book.price}</span>
                  <span className="text-amber-800 font-semibold text-[11px] group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher & School Collaboration CTA */}
        <div className="bg-gradient-to-br from-[#3b2413] to-[#24150a] text-amber-100 rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-9xl font-serif">
            📖
          </div>
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
              For Schools, Principals & Educator Circles
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
              Partner with Dr. Ratan Ghosh & B.I Books for Your School Library
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              We provide bulk educational library sets, customized teacher training workshops, 
              and student reading circle kits for secondary and higher secondary institutions across the region.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="mailto:contact@bibooks.in?subject=School%20Library%20Procurement%20Inquiry"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#291708] font-bold text-xs flex items-center gap-2 shadow-md transition-colors"
              >
                <Mail className="w-4 h-4" />
                Inquire for School Library Bulk Order
              </a>
              <button
                onClick={onViewEvents}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Teacher Workshop
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
