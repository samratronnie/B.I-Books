/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, NavTab } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { BookCatalog } from './components/BookCatalog';
import { AboutPublisher } from './components/AboutPublisher';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { BookDetailModal } from './components/BookDetailModal';
import { MyBookshelfModal } from './components/MyBookshelfModal';
import { ReserveBookModal } from './components/ReserveBookModal';
import { DownloadModal } from './components/DownloadModal';
import { Footer } from './components/Footer';
import { INITIAL_BOOKS } from './data/booksData';
import { BOOKSTORE_EVENTS } from './data/eventsData';
import { Book, BookGenre, BookshelfEntry, ShelfStatus, BookReview } from './types';
import { BookOpen, GraduationCap, ArrowRight, Sparkles, Calendar } from 'lucide-react';

export default function App() {
  const [books, setBooks] = useState<Book[]>(() => {
    const saved = localStorage.getItem('bibooks_catalog_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_BOOKS;
      }
    }
    return INITIAL_BOOKS;
  });

  const [bookshelf, setBookshelf] = useState<Record<string, BookshelfEntry>>(() => {
    const saved = localStorage.getItem('bibooks_shelf');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {
          'bi-01': {
            bookId: 'bi-01',
            status: 'currently-reading',
            addedAt: 'Yesterday'
          },
          'bi-05': {
            bookId: 'bi-05',
            status: 'want-to-read',
            addedAt: '3 days ago'
          }
        };
      }
    }
    return {
      'bi-01': {
        bookId: 'bi-01',
        status: 'currently-reading',
        addedAt: 'Yesterday'
      },
      'bi-05': {
        bookId: 'bi-05',
        status: 'want-to-read',
        addedAt: '3 days ago'
      }
    };
  });

  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedGenre, setSelectedGenre] = useState<BookGenre>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBookForDetails, setSelectedBookForDetails] = useState<Book | null>(null);
  const [selectedBookForReserve, setSelectedBookForReserve] = useState<Book | null>(null);
  const [isBookshelfModalOpen, setIsBookshelfModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Sync bookshelf to localStorage
  useEffect(() => {
    localStorage.setItem('bibooks_shelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  // Sync books with new reviews to localStorage
  useEffect(() => {
    localStorage.setItem('bibooks_catalog_v1', JSON.stringify(books));
  }, [books]);

  // Update shelf status
  const handleUpdateShelf = (bookId: string, status: ShelfStatus) => {
    setBookshelf((prev) => {
      const updated = { ...prev };
      if (status === 'none') {
        delete updated[bookId];
      } else {
        updated[bookId] = {
          bookId,
          status,
          addedAt: 'Just now',
        };
      }
      return updated;
    });
  };

  // Add review to a book
  const handleAddReview = (bookId: string, review: BookReview) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) => {
        if (b.id === bookId) {
          const updatedReviews = [review, ...b.reviews];
          const newAvgRating =
            updatedReviews.reduce((acc, r) => acc + r.rating, 0) / updatedReviews.length;
          return {
            ...b,
            reviews: updatedReviews,
            rating: Number(newAvgRating.toFixed(2)),
            ratingCount: b.ratingCount + 1,
            reviewCount: b.reviewCount + 1,
          };
        }
        return b;
      })
    );

    setSelectedBookForDetails((curr) => {
      if (curr && curr.id === bookId) {
        const updatedReviews = [review, ...curr.reviews];
        const newAvgRating =
          updatedReviews.reduce((acc, r) => acc + r.rating, 0) / updatedReviews.length;
        return {
          ...curr,
          reviews: updatedReviews,
          rating: Number(newAvgRating.toFixed(2)),
          ratingCount: curr.ratingCount + 1,
          reviewCount: curr.reviewCount + 1,
        };
      }
      return curr;
    });
  };

  // Filter Dr. Ghosh curated books
  const handleFilterDrGhosh = () => {
    setSelectedGenre('Teacher Pedagogy & Education');
    setActiveTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setActiveTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Shelf status map for quick lookup
  const shelfMap: Record<string, ShelfStatus> = {};
  for (const key in bookshelf) {
    shelfMap[key] = bookshelf[key].status;
  }

  const curatedBooks = books.filter((b) => b.isPublisherCurated);
  const flagshipBook = books.find((b) => b.id === 'bi-01') || books[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfaf7] text-[#24160c]">
      {/* Header */}
      <Header
        books={books}
        bookshelf={bookshelf}
        onSelectBook={(book) => setSelectedBookForDetails(book)}
        onOpenBookshelf={() => setIsBookshelfModalOpen(true)}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onFilterDrGhosh={handleFilterDrGhosh}
        onSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {/* HOME VIEW (jamesclear.com inspiration + user's index.html) */}
        {activeTab === 'home' && (
          <div>
            <HeroBanner
              onSelectGenre={(genre) => {
                setSelectedGenre(genre);
                setActiveTab('catalog');
              }}
              onExploreCatalog={() => {
                setActiveTab('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewAbout={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewContact={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenFlagshipBook={() => setSelectedBookForDetails(flagshipBook)}
            />

            {/* Quick Catalog Preview on Home */}
            <section className="py-14 bg-[#ffffff] border-b border-[#ded3be]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#ede4d4]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md">
                      Selected Titles
                    </span>
                    <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#1f130b] mt-1.5">
                      Popular Books & Academic Guides
                    </h2>
                    <p className="text-sm text-[#705e4f] mt-1">
                      Explore celebrated school companions, science essentials, and literary classics.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('catalog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs sm:text-sm font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1.5"
                  >
                    View All {books.length} Books in Catalog <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  {books.slice(0, 4).map((book) => (
                    <div
                      key={book.id}
                      onClick={() => setSelectedBookForDetails(book)}
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
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block">
                          {book.genre}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-[#1f130b] group-hover:text-amber-900 line-clamp-2 mt-0.5">
                          {book.title}
                        </h4>
                        <p className="text-xs text-[#6e5d4e] mt-1 line-clamp-1 italic">
                          by {book.author}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#ede4d4] flex items-center justify-between text-xs">
                        <span className="font-bold text-[#3d2714]">₹{book.price}</span>
                        <span className="text-amber-900 font-semibold text-[11px] group-hover:underline flex items-center gap-1">
                          View details →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Meet Dr. Ratan Ghosh Teaser on Home */}
            <section className="bg-[#f5eee3] border-b border-[#ded1ba] py-14">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8 space-y-3">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#5c3e23] bg-[#e8ded0] px-3 py-1 rounded-full border border-[#d6c7b0]">
                      The Educator's Journey
                    </span>
                    <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1f130b]">
                      "Every student has an inherent genius that awakens when met with empathy."
                    </h3>
                    <p className="text-sm text-[#5c4939] leading-relaxed max-w-2xl">
                      Learn how Dr. Ratan Ghosh spent 15+ years in secondary school classrooms formulating hands-on science experiments, demystifying examination fear, and establishing B.I Books.
                    </p>
                  </div>
                  <div className="md:col-span-4 flex justify-start md:justify-end">
                    <button
                      onClick={() => {
                        setActiveTab('about');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 rounded-xl bg-[#362111] hover:bg-[#24150a] text-amber-50 font-bold text-xs shadow-md transition-transform active:scale-98"
                    >
                      Read Dr. Ghosh's Story & Pedagogy →
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* OUR BOOKS VIEW (Matching uploaded books.html) */}
        {activeTab === 'catalog' && (
          <BookCatalog
            books={books}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            shelfMap={shelfMap}
            onUpdateShelf={handleUpdateShelf}
            onOpenDetails={(book) => setSelectedBookForDetails(book)}
            onReserve={(book) => setSelectedBookForReserve(book)}
          />
        )}

        {/* ABOUT PUBLISHER VIEW (Dr. Ratan Ghosh 15+ yrs experience & photo) */}
        {activeTab === 'about' && (
          <AboutPublisher
            curatedBooks={curatedBooks}
            onSelectBook={(book) => setSelectedBookForDetails(book)}
            onExploreCatalog={() => {
              setActiveTab('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewEvents={() => {
              setActiveTab('events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* EVENTS VIEW */}
        {activeTab === 'events' && (
          <EventsSection events={BOOKSTORE_EVENTS} />
        )}

        {/* CONTACT US VIEW (Matching uploaded contact.html) */}
        {activeTab === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Book Detail Modal */}
      <BookDetailModal
        book={selectedBookForDetails}
        onClose={() => setSelectedBookForDetails(null)}
        shelfStatus={selectedBookForDetails ? shelfMap[selectedBookForDetails.id] : 'none'}
        onUpdateShelf={handleUpdateShelf}
        onReserve={(book) => setSelectedBookForReserve(book)}
        onAddReview={handleAddReview}
      />

      {/* Reserve / Order Inquiry Modal */}
      <ReserveBookModal
        book={selectedBookForReserve}
        onClose={() => setSelectedBookForReserve(null)}
      />

      {/* My Bookshelf Modal */}
      <MyBookshelfModal
        isOpen={isBookshelfModalOpen}
        onClose={() => setIsBookshelfModalOpen(false)}
        books={books}
        bookshelf={bookshelf}
        onUpdateShelf={handleUpdateShelf}
        onOpenDetails={(book) => setSelectedBookForDetails(book)}
      />

      {/* Download Project Files Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      {/* Clean Minimalist Footer */}
      <Footer onNavigateTab={(tab) => {
        setActiveTab(tab as NavTab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
}
