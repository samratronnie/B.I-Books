import React, { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Bookmark,
  Calendar,
  User,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  BookMarked,
  GraduationCap,
  Download
} from 'lucide-react';
import { Book, BookshelfEntry } from '../types';

export type NavTab = 'home' | 'catalog' | 'about' | 'events' | 'contact';

interface HeaderProps {
  books: Book[];
  bookshelf: Record<string, BookshelfEntry>;
  onSelectBook: (book: Book) => void;
  onOpenBookshelf: () => void;
  onOpenDownload?: () => void;
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onFilterDrGhosh: () => void;
  onSearchSubmit: (query: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  books,
  bookshelf,
  onSelectBook,
  onOpenBookshelf,
  onOpenDownload,
  activeTab,
  setActiveTab,
  onFilterDrGhosh,
  onSearchSubmit,
  searchQuery,
  setSearchQuery,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const bookshelfCount = Object.keys(bookshelf).length;

  // Filter books for live autocomplete
  const liveResults = searchQuery.trim().length > 1
    ? books.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.genre.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit(searchQuery);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f7f4ed] border-b border-[#e5dec9] shadow-xs">
      {/* Top Heritage Notice Bar */}
      <div className="bg-[#2e2116] text-[#e8dfcf] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" /> B.I Books Announcement:
            </span>
            <span className="text-stone-300 hidden sm:inline">
              Teacher’s Pedagogy Workshop & School Book Fair with Dr. Ratan Ghosh
            </span>
            <span className="text-stone-300 sm:hidden">
              School Book Fair with Dr. Ratan Ghosh
            </span>
          </div>

          <button
            onClick={() => setActiveTab('events')}
            className="text-amber-200 hover:text-white underline font-medium text-xs whitespace-nowrap ml-3"
          >
            View Event Calendar →
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('home')}
              className="text-left flex items-center gap-2.5 group focus:outline-hidden"
            >
              <span className="text-2xl" role="img" aria-label="Books">📚</span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-black text-2xl tracking-tight text-[#24160c] group-hover:text-[#6e4624] transition-colors">
                    BI Books
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-sm bg-[#e8ded0] text-[#5e422c] border border-[#d6c7b0]">
                    Publisher
                  </span>
                </div>
                <p className="text-[11px] text-[#786656] font-medium leading-none hidden sm:block">
                  Dr. Ratan Ghosh · 15+ Years in Teaching
                </p>
              </div>
            </button>
          </div>

          {/* Goodreads-Style Live Search Bar */}
          <div ref={searchRef} className="relative flex-1 max-w-md hidden md:block">
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Search by title, author, or keyword..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                onKeyDown={handleSearchKeyDown}
                className="w-full bg-[#ffffff] border border-[#d6cdb7] rounded-full py-2 pl-9 pr-20 text-xs sm:text-sm text-[#2b2520] placeholder:text-[#948777] focus:outline-hidden focus:border-[#52351c] focus:ring-1 focus:ring-[#52351c]/20"
              />
              <Search className="w-4 h-4 text-[#8f7e6e] absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-14 top-1/2 -translate-y-1/2 text-xs text-[#8f7e6e] hover:text-[#332014]"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => {
                  onSearchSubmit(searchQuery);
                  setIsSearchOpen(false);
                }}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-[#3d2714] hover:bg-[#25160a] text-amber-100 text-xs font-semibold transition-colors"
              >
                Go
              </button>
            </div>

            {/* Live Autocomplete Dropdown */}
            {isSearchOpen && liveResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#ffffff] border border-[#d6cdb7] rounded-xl shadow-xl z-50 overflow-hidden divide-y divide-[#ece5d5]">
                <div className="px-3 py-1.5 bg-[#f4ede3] text-[10px] font-semibold uppercase tracking-wider text-[#735e4d] flex justify-between">
                  <span>Catalog Quick Match</span>
                  <span>Press Enter</span>
                </div>
                {liveResults.map((book) => (
                  <button
                    key={book.id}
                    onClick={() => {
                      onSelectBook(book);
                      setIsSearchOpen(false);
                    }}
                    className="w-full px-3 py-2 flex items-center gap-3 text-left hover:bg-[#f3ebe0] transition-colors"
                  >
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-8 h-11 object-cover rounded-sm shadow-xs shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-serif font-bold text-[#2d1f14] truncate">
                        {book.title}
                      </p>
                      <p className="text-[11px] text-[#715d4d] truncate">
                        by {book.author}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-semibold text-amber-900 block">
                        ★ {book.rating.toFixed(1)}
                      </span>
                      <span className="text-[11px] text-[#69584b]">
                        ₹{book.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Nav Links (Matching user's HTML: Home, Books, Contact Us + About & Events) */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'home'
                  ? 'bg-[#e2d7c5] text-[#2c1a0e] font-bold'
                  : 'text-[#5a483a] hover:text-[#24150a] hover:bg-[#ede5d6]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'catalog'
                  ? 'bg-[#e2d7c5] text-[#2c1a0e] font-bold'
                  : 'text-[#5a483a] hover:text-[#24150a] hover:bg-[#ede5d6]'
              }`}
            >
              Books
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                activeTab === 'about'
                  ? 'bg-[#e2d7c5] text-[#2c1a0e] font-bold'
                  : 'text-[#5a483a] hover:text-[#24150a] hover:bg-[#ede5d6]'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-800" />
              About Dr. Ghosh
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                activeTab === 'events'
                  ? 'bg-[#e2d7c5] text-[#2c1a0e] font-bold'
                  : 'text-[#5a483a] hover:text-[#24150a] hover:bg-[#ede5d6]'
              }`}
            >
              <Calendar className="w-4 h-4 text-amber-800" />
              Events
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'contact'
                  ? 'bg-[#e2d7c5] text-[#2c1a0e] font-bold'
                  : 'text-[#5a483a] hover:text-[#24150a] hover:bg-[#ede5d6]'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Right Action: Bookshelf & Mobile Toggle */}
          <div className="flex items-center gap-2">
            
            {/* Quick button to filter Dr. Ghosh works */}
            <button
              onClick={() => {
                setActiveTab('catalog');
                onFilterDrGhosh();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#eae1d0] text-[#4d321d] hover:bg-[#dfd4c0] border border-[#cfc0a9] transition-colors"
              title="Show books authored or curated by Dr. Ratan Ghosh"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              Dr. Ghosh Works
            </button>

            {/* My Bookshelf Tracker (Goodreads Inspired) */}
            <button
              onClick={onOpenBookshelf}
              className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3d2817] hover:bg-[#2b1c10] text-[#f7f2ea] text-sm font-medium shadow-sm transition-transform active:scale-95"
            >
              <Bookmark className="w-4 h-4 text-amber-400 fill-amber-400/30" />
              <span className="hidden sm:inline">My Bookshelf</span>
              {bookshelfCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-xs font-bold bg-amber-500 text-[#291708]">
                  {bookshelfCount}
                </span>
              )}
            </button>

            {/* Download Files Button */}
            {onOpenDownload && (
              <button
                onClick={onOpenDownload}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#cfc0a9] bg-[#ffffff] hover:bg-[#f6f1e8] text-xs font-bold text-[#362111] transition-colors shadow-2xs"
                title="Download static website or source code ZIP"
              >
                <Download className="w-3.5 h-3.5 text-amber-800" />
                <span>Download</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#5a483a] hover:bg-[#ede5d5] focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books, authors, syllabus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="w-full bg-[#fdfcf9] border border-[#d6cdb7] rounded-full py-2 pl-9 pr-14 text-sm text-[#2b2520] placeholder:text-[#948777]"
            />
            <Search className="w-4 h-4 text-[#8f7e6e] absolute left-3 top-1/2 -translate-y-1/2" />
            <button
              onClick={() => onSearchSubmit(searchQuery)}
              className="absolute right-1 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-[#52361b] text-amber-100 text-xs font-medium"
            >
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#f4ede1] border-b border-[#ded4c1] px-4 py-3 space-y-2">
          <button
            onClick={() => {
              setActiveTab('home');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
              activeTab === 'home' ? 'bg-[#dfd4c0] text-[#332014] font-bold' : 'text-[#5a483a]'
            }`}
          >
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setActiveTab('catalog');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
              activeTab === 'catalog' ? 'bg-[#dfd4c0] text-[#332014] font-bold' : 'text-[#5a483a]'
            }`}
          >
            <span>Our Books</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setActiveTab('about');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
              activeTab === 'about' ? 'bg-[#dfd4c0] text-[#332014] font-bold' : 'text-[#5a483a]'
            }`}
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-800" />
              <span>About Dr. Ratan Ghosh</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setActiveTab('events');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
              activeTab === 'events' ? 'bg-[#dfd4c0] text-[#332014] font-bold' : 'text-[#5a483a]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-800" />
              <span>Events & Workshops</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setActiveTab('contact');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
              activeTab === 'contact' ? 'bg-[#dfd4c0] text-[#332014] font-bold' : 'text-[#5a483a]'
            }`}
          >
            <span>Contact Us</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {onOpenDownload && (
            <button
              onClick={() => {
                onOpenDownload();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#362111] bg-[#ffffff] flex items-center justify-between border border-[#cfc0a9]"
            >
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-amber-800" />
                <span>Download Website / Source (.ZIP)</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => {
              onFilterDrGhosh();
              setActiveTab('catalog');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-amber-900 bg-[#ede4d2] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Filter Dr. Ratan Ghosh Publications</span>
          </button>
        </div>
      )}
    </header>
  );
};
