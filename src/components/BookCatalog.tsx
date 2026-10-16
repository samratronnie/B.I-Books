import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Grid,
  List,
  Sparkles,
  RotateCcw,
  BookOpen,
  Check,
  ChevronDown,
  SlidersHorizontal,
  Bookmark
} from 'lucide-react';
import { Book, BookGenre, BookFormat, ShelfStatus } from '../types';
import { BookCard } from './BookCard';

interface BookCatalogProps {
  books: Book[];
  selectedGenre: BookGenre;
  setSelectedGenre: (genre: BookGenre) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  shelfMap: Record<string, ShelfStatus>;
  onUpdateShelf: (bookId: string, status: ShelfStatus) => void;
  onOpenDetails: (book: Book) => void;
  onReserve: (book: Book) => void;
}

export const BookCatalog: React.FC<BookCatalogProps> = ({
  books,
  selectedGenre,
  setSelectedGenre,
  searchQuery,
  setSearchQuery,
  shelfMap,
  onUpdateShelf,
  onOpenDetails,
  onReserve,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [drGhoshOnly, setDrGhoshOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'price-asc' | 'price-desc' | 'title'>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const genres: BookGenre[] = [
    'All',
    'Academic & School Guides',
    'Teacher Pedagogy & Education',
    'Bengali & Indian Classics',
    'English Literature & Fiction',
    'Science & Mathematics',
    'Young Adult & Children',
    'History & Social Sciences',
  ];

  // Filtering Logic
  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      // Genre filter
      if (selectedGenre !== 'All' && book.genre !== selectedGenre) {
        return false;
      }
      // Format filter
      if (selectedFormat !== 'All' && book.format !== selectedFormat) {
        return false;
      }
      // In stock
      if (inStockOnly && !book.inStock) {
        return false;
      }
      // Dr Ghosh curated only
      if (drGhoshOnly && !book.isPublisherCurated) {
        return false;
      }
      // Text Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = book.title.toLowerCase().includes(query);
        const matchAuthor = book.author.toLowerCase().includes(query);
        const matchGenre = book.genre.toLowerCase().includes(query);
        const matchIsbn = book.isbn.toLowerCase().includes(query);
        const matchSynopsis = book.synopsis.toLowerCase().includes(query);
        if (!matchTitle && !matchAuthor && !matchGenre && !matchIsbn && !matchSynopsis) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [books, selectedGenre, selectedFormat, inStockOnly, drGhoshOnly, searchQuery, sortBy]);

  const hasActiveFilters =
    selectedGenre !== 'All' ||
    selectedFormat !== 'All' ||
    inStockOnly ||
    drGhoshOnly ||
    searchQuery.trim().length > 0;

  const resetAllFilters = () => {
    setSelectedGenre('All');
    setSelectedFormat('All');
    setInStockOnly(false);
    setDrGhoshOnly(false);
    setSearchQuery('');
  };

  return (
    <div id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Section Header (Matching uploaded books.html) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#ded3bd]">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#1f130b] tracking-tight">
              Our Books
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e6ddcd] text-[#543d2b] font-bold">
              {filteredBooks.length} Available
            </span>
          </div>
          <p className="text-sm text-[#705e4f] mt-1.5">
            Discover fiction, science, history, self-help, and academic guides curated by Dr. Ratan Ghosh.
          </p>
        </div>

        {/* View Toggle & Mobile Filter Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="md:hidden px-3 py-1.5 rounded-lg border border-[#cfc0a9] bg-[#ffffff] text-xs font-semibold text-[#422c19] flex items-center gap-1.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters {hasActiveFilters && '•'}
          </button>

          <div className="bg-[#ede4d4] p-1 rounded-lg flex items-center gap-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#ffffff] text-[#3d2714] shadow-xs'
                  : 'text-[#7d6957] hover:text-[#2d1b0f]'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-[#ffffff] text-[#3d2714] shadow-xs'
                  : 'text-[#7d6957] hover:text-[#2d1b0f]'
              }`}
              title="Goodreads List View"
              aria-label="Goodreads List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Search & Category Controls (from uploaded books.html) */}
      <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        <div className="md:col-span-8 relative">
          <input
            type="text"
            id="search"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#ffffff] border border-[#d6cdb7] rounded-xl py-2.5 pl-10 pr-10 text-sm text-[#2b2520] placeholder:text-[#948777] focus:outline-hidden focus:border-[#52351c] focus:ring-1 focus:ring-[#52351c]"
          />
          <Search className="w-4 h-4 text-[#8f7e6e] absolute left-3.5 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8f7e6e] hover:text-[#332014]"
            >
              Clear
            </button>
          )}
        </div>

        <div className="md:col-span-4">
          <select
            id="category"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value as BookGenre)}
            className="w-full bg-[#ffffff] border border-[#d6cdb7] rounded-xl py-2.5 px-3 text-sm text-[#2b2520] font-medium focus:outline-hidden focus:border-[#52351c]"
          >
            <option value="All">All Categories</option>
            <option value="English Literature & Fiction">Fiction</option>
            <option value="Science & Mathematics">Science</option>
            <option value="Teacher Pedagogy & Education">Self-Help & Pedagogy</option>
            <option value="History & Social Sciences">History</option>
            <option value="Academic & School Guides">Academic & School Guides</option>
            <option value="Bengali & Indian Classics">Bengali & Indian Classics</option>
            <option value="Young Adult & Children">Young Adult & Children</option>
          </select>
        </div>
      </div>

      {/* Genre Filter Carousel / Buttons */}
      <div className="py-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max pb-1">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedGenre === genre
                  ? 'bg-[#3d2714] text-amber-100 shadow-xs scale-102'
                  : 'bg-[#f4efe5] text-[#574332] hover:bg-[#e8decb] border border-[#d6c7b0]'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="bg-[#fcfaf7] border border-[#dcd1be] rounded-xl p-4 mb-6 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Quick Checkbox / Pill Filters */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Dr Ratan Ghosh Curated Pill */}
            <button
              onClick={() => setDrGhoshOnly(!drGhoshOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                drGhoshOnly
                  ? 'bg-amber-900 text-amber-50 border-amber-950'
                  : 'bg-[#f5efe5] text-[#4d3725] border-[#d6c7b0] hover:bg-[#ede3d1]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Dr. Ratan Ghosh Curated ({books.filter(b => b.isPublisherCurated).length})
            </button>

            {/* In Stock Only */}
            <label className="flex items-center gap-1.5 text-xs font-medium text-[#4a3523] cursor-pointer select-none bg-[#f5efe5] px-3 py-1.5 rounded-lg border border-[#d6c7b0] hover:bg-[#ede3d1]">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded-sm text-amber-800 focus:ring-amber-800"
              />
              <span>In Stock Only</span>
            </label>

            {/* Format Dropdown */}
            <div className="flex items-center gap-1.5 text-xs text-[#523d2b]">
              <span className="font-medium text-[#7d6957]">Format:</span>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="bg-[#f5efe5] border border-[#d6c7b0] rounded-lg px-2.5 py-1 text-xs text-[#3d2714] font-medium focus:outline-hidden"
              >
                <option value="All">All Formats</option>
                <option value="Paperback">Paperback</option>
                <option value="Hardcover">Hardcover</option>
                <option value="Educator Edition">Educator Edition</option>
              </select>
            </div>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#7d6957]">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#f5efe5] border border-[#d6c7b0] rounded-lg px-2.5 py-1 text-xs font-semibold text-[#3d2714] focus:outline-hidden"
            >
              <option value="rating">Highest Rated (Goodreads)</option>
              <option value="reviews">Most Reviewed</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>

        </div>

        {/* Active Filter Chips & Reset */}
        {hasActiveFilters && (
          <div className="mt-3 pt-3 border-t border-[#ede4d4] flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#877463] font-medium">Active filters:</span>
            {searchQuery && (
              <span className="bg-[#ede4d4] text-[#3d2714] px-2 py-0.5 rounded-md flex items-center gap-1">
                Keyword: "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:text-red-700 font-bold ml-1">×</button>
              </span>
            )}
            {selectedGenre !== 'All' && (
              <span className="bg-[#ede4d4] text-[#3d2714] px-2 py-0.5 rounded-md flex items-center gap-1">
                Genre: {selectedGenre}
                <button onClick={() => setSelectedGenre('All')} className="hover:text-red-700 font-bold ml-1">×</button>
              </span>
            )}
            {drGhoshOnly && (
              <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                Dr. Ghosh Curated
                <button onClick={() => setDrGhoshOnly(false)} className="hover:text-red-700 font-bold ml-1">×</button>
              </span>
            )}
            {inStockOnly && (
              <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-md flex items-center gap-1">
                In Stock
                <button onClick={() => setInStockOnly(false)} className="hover:text-red-700 font-bold ml-1">×</button>
              </span>
            )}
            {selectedFormat !== 'All' && (
              <span className="bg-[#ede4d4] text-[#3d2714] px-2 py-0.5 rounded-md flex items-center gap-1">
                Format: {selectedFormat}
                <button onClick={() => setSelectedFormat('All')} className="hover:text-red-700 font-bold ml-1">×</button>
              </span>
            )}
            <button
              onClick={resetAllFilters}
              className="text-amber-900 hover:text-amber-950 underline font-semibold flex items-center gap-1 ml-auto"
            >
              <RotateCcw className="w-3 h-3" /> Reset all
            </button>
          </div>
        )}
      </div>

      {/* Book Grid / List Rendering */}
      {filteredBooks.length === 0 ? (
        <div className="bg-[#fcfaf7] border border-[#ded2bd] rounded-2xl p-12 text-center max-w-xl mx-auto my-8 space-y-3">
          <BookOpen className="w-12 h-12 text-[#998675] mx-auto stroke-1" />
          <h3 className="font-serif font-bold text-xl text-[#3d2714]">
            No matching books found
          </h3>
          <p className="text-sm text-[#736353]">
            We couldn't find any titles matching your search criteria. Try clearing some filters or searching with a different keyword.
          </p>
          <button
            onClick={resetAllFilters}
            className="mt-2 px-4 py-2 rounded-xl bg-[#4d321d] text-amber-100 text-xs font-semibold shadow-xs"
          >
            Clear All Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* Grid View (Matching uploaded books.html id="bookList") */
        <div id="bookList" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              shelfStatus={shelfMap[book.id] || 'none'}
              onUpdateShelf={onUpdateShelf}
              onOpenDetails={onOpenDetails}
              onReserve={onReserve}
            />
          ))}
        </div>
      ) : (
        /* Goodreads Detailed List View */
        <div className="divide-y divide-[#ded3bf] bg-[#fcfaf7] border border-[#dcd1be] rounded-xl overflow-hidden shadow-xs">
          {filteredBooks.map((book) => {
            const currentShelf = shelfMap[book.id] || 'none';
            return (
              <div
                key={book.id}
                className="p-5 flex flex-col sm:flex-row gap-5 items-start hover:bg-[#f6f1e7] transition-colors"
              >
                {/* Book Cover */}
                <div
                  onClick={() => onOpenDetails(book)}
                  className="w-24 sm:w-28 shrink-0 aspect-3/4 rounded-sm overflow-hidden book-shadow book-spine-effect cursor-pointer"
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Main Book Details */}
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b6540] bg-[#ede3d1] px-2 py-0.5 rounded-sm">
                      {book.genre}
                    </span>
                    {book.isPublisherCurated && (
                      <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-sm flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> Dr. Ghosh Curated
                      </span>
                    )}
                    <span className="text-xs text-stone-500">
                      Published {book.publicationYear} · {book.pages} pages · {book.language}
                    </span>
                  </div>

                  <h3
                    onClick={() => onOpenDetails(book)}
                    className="font-serif font-bold text-lg sm:text-xl text-[#2e1d0f] hover:text-amber-900 cursor-pointer"
                  >
                    {book.title}
                  </h3>

                  <p className="text-xs text-[#523e2e] font-medium">
                    by <span className="font-bold text-[#2e1d0f]">{book.author}</span>
                    {book.editorOrPreface && (
                      <span className="text-stone-500 ml-1">({book.editorOrPreface})</span>
                    )}
                  </p>

                  {/* Goodreads Rating */}
                  <div className="flex items-center gap-2 text-xs text-[#544234]">
                    <span className="font-bold text-amber-900">
                      ★ {book.rating.toFixed(2)}
                    </span>
                    <span className="text-stone-400">·</span>
                    <span>{book.ratingCount.toLocaleString()} ratings</span>
                    <span className="text-stone-400">·</span>
                    <span>{book.reviewCount} reviews</span>
                  </div>

                  {/* Synopsis Excerpt */}
                  <p className="text-xs text-[#6e5d4e] line-clamp-2 leading-relaxed pt-1">
                    {book.synopsis}
                  </p>

                  <div className="text-xs text-stone-500 pt-1">
                    <span className="font-semibold text-stone-700">ISBN:</span> {book.isbn} · <span className="font-semibold text-stone-700">Format:</span> {book.format}
                  </div>
                </div>

                {/* Right Column: Pricing & Shelf Actions */}
                <div className="w-full sm:w-44 shrink-0 flex flex-col justify-between items-start sm:items-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#ede4d4]">
                  <div className="text-left sm:text-right">
                    <div className="font-serif font-black text-xl text-[#2e1d0f]">
                      ₹{book.price}
                    </div>
                    {book.originalPrice && (
                      <div className="text-xs text-[#8f7e6f] line-through">
                        ₹{book.originalPrice}
                      </div>
                    )}
                    <span
                      className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                        book.inStock
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {book.inStock ? `${book.stockQuantity} in stock` : 'Out of Stock'}
                    </span>
                  </div>

                  <div className="w-full space-y-1.5">
                    <button
                      onClick={() => onUpdateShelf(
                        book.id,
                        currentShelf === 'want-to-read' ? 'none' : 'want-to-read'
                      )}
                      className={`w-full py-1.5 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 ${
                        currentShelf !== 'none'
                          ? 'bg-[#3b533b] text-white'
                          : 'bg-[#406842] hover:bg-[#325234] text-white'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      {currentShelf !== 'none' ? 'Shelved ✓' : 'Want to Read'}
                    </button>

                    <button
                      onClick={() => onReserve(book)}
                      className="w-full py-1.5 px-3 rounded-md text-xs font-medium text-[#422d1b] bg-[#ede5d6] hover:bg-[#ded1bc] border border-[#d3c5ae]"
                    >
                      Reserve / Inquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
