import React, { useState } from 'react';
import { Star, Check, Bookmark, ChevronDown, Eye, Sparkles } from 'lucide-react';
import { Book, ShelfStatus } from '../types';

interface BookCardProps {
  book: Book;
  shelfStatus?: ShelfStatus;
  onUpdateShelf: (bookId: string, status: ShelfStatus) => void;
  onOpenDetails: (book: Book) => void;
  onReserve: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  shelfStatus = 'none',
  onUpdateShelf,
  onOpenDetails,
  onReserve,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getShelfLabel = (status: ShelfStatus) => {
    switch (status) {
      case 'want-to-read':
        return 'Want to Read';
      case 'currently-reading':
        return 'Currently Reading';
      case 'read':
        return 'Read ✓';
      default:
        return 'Want to Read';
    }
  };

  const isShelved = shelfStatus !== 'none';

  return (
    <div className="bg-[#fcfaf7] border border-[#dcd2c0] rounded-xl p-4 flex flex-col justify-between hover:border-[#a88258] transition-all duration-200 shadow-xs hover:shadow-md group">
      
      {/* Top Section: Cover & Key Details */}
      <div>
        {/* Book Cover Container */}
        <div
          onClick={() => onOpenDetails(book)}
          className="relative aspect-3/4 w-full rounded-md overflow-hidden cursor-pointer book-shadow book-shadow-hover book-spine-effect mb-4 bg-gradient-to-tr from-stone-900 to-stone-800"
        >
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Publisher Badge */}
          {book.isPublisherCurated && (
            <div className="absolute top-2 right-2 z-10">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-bold bg-[#291b10]/90 text-amber-200 border border-amber-400/40 backdrop-blur-sm shadow-md">
                <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                Dr. Ghosh Curated
              </span>
            </div>
          )}

          {/* Format Tag */}
          <div className="absolute bottom-2 left-2 z-10">
            <span className="px-2 py-0.5 rounded-xs text-[10px] font-semibold bg-stone-900/80 text-stone-200 backdrop-blur-sm">
              {book.format}
            </span>
          </div>

          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium gap-1.5 backdrop-blur-[1px]">
            <Eye className="w-4 h-4" /> Quick Preview
          </div>
        </div>

        {/* Book Meta Details */}
        <div className="space-y-1.5">
          {/* Genre Tag */}
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8b6540] block">
            {book.genre}
          </span>

          {/* Title */}
          <h3
            onClick={() => onOpenDetails(book)}
            className="font-serif font-bold text-base sm:text-lg text-[#2a1c11] leading-snug cursor-pointer hover:text-amber-900 line-clamp-2"
            title={book.title}
          >
            {book.title}
          </h3>

          {/* Subtitle if available */}
          {book.subtitle && (
            <p className="text-xs text-[#736353] line-clamp-1 italic">
              {book.subtitle}
            </p>
          )}

          {/* Author */}
          <p className="text-xs font-medium text-[#503d2e]">
            by <span className="font-semibold text-[#2e1d0f]">{book.author}</span>
          </p>

          {/* Goodreads Star Rating */}
          <div className="flex items-center gap-1.5 pt-1 text-xs text-[#5a483a]">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(book.rating)
                      ? 'fill-amber-500 text-amber-500'
                      : i < book.rating
                      ? 'fill-amber-300 text-amber-400'
                      : 'text-stone-300'
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-[#3d2714]">
              {book.rating.toFixed(2)}
            </span>
            <span className="text-[11px] text-[#857464]">
              ({book.ratingCount.toLocaleString()})
            </span>
          </div>

          {/* Pricing & Stock status */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif font-black text-lg text-[#2b180a]">
                ₹{book.price}
              </span>
              {book.originalPrice && (
                <span className="text-xs text-[#8f7e6f] line-through">
                  ₹{book.originalPrice}
                </span>
              )}
            </div>

            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                book.inStock
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {book.inStock ? `${book.stockQuantity} in stock` : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Actions: Goodreads Shelf Dropdown & Reserve Button */}
      <div className="pt-4 mt-3 border-t border-[#e2d8c7] space-y-2">
        {/* Goodreads-Style Shelf Button */}
        <div className="relative">
          <div className="flex rounded-md overflow-hidden shadow-2xs">
            <button
              onClick={() => {
                if (!isShelved) {
                  onUpdateShelf(book.id, 'want-to-read');
                } else {
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
              className={`flex-1 py-1.5 px-3 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                isShelved
                  ? 'bg-[#3b533b] hover:bg-[#2d402d] text-emerald-50'
                  : 'bg-[#406842] hover:bg-[#325234] text-white'
              }`}
            >
              {isShelved ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{getShelfLabel(shelfStatus)}</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Want to Read</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-2 bg-[#2d452e] hover:bg-[#233524] text-white border-l border-emerald-800/60"
              aria-label="Change bookshelf category"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Shelf Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 right-0 bottom-full mb-1.5 bg-[#fdfcf9] border border-[#d6cdb7] rounded-lg shadow-xl z-30 py-1 text-xs divide-y divide-[#eee7da]">
              <div className="px-3 py-1 font-semibold text-[10px] text-stone-500 uppercase tracking-wider bg-[#f4ede1]">
                My Goodreads Shelf
              </div>
              <button
                onClick={() => {
                  onUpdateShelf(book.id, 'want-to-read');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-3 py-1.5 text-left flex items-center justify-between hover:bg-[#ede3d1] ${
                  shelfStatus === 'want-to-read' ? 'font-bold text-emerald-800 bg-[#e8f0e8]' : 'text-stone-800'
                }`}
              >
                <span>Want to Read</span>
                {shelfStatus === 'want-to-read' && <Check className="w-3.5 h-3.5 text-emerald-700" />}
              </button>
              <button
                onClick={() => {
                  onUpdateShelf(book.id, 'currently-reading');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-3 py-1.5 text-left flex items-center justify-between hover:bg-[#ede3d1] ${
                  shelfStatus === 'currently-reading' ? 'font-bold text-amber-800 bg-[#fef5e7]' : 'text-stone-800'
                }`}
              >
                <span>Currently Reading</span>
                {shelfStatus === 'currently-reading' && <Check className="w-3.5 h-3.5 text-amber-700" />}
              </button>
              <button
                onClick={() => {
                  onUpdateShelf(book.id, 'read');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-3 py-1.5 text-left flex items-center justify-between hover:bg-[#ede3d1] ${
                  shelfStatus === 'read' ? 'font-bold text-blue-800 bg-[#eef4fb]' : 'text-stone-800'
                }`}
              >
                <span>Read</span>
                {shelfStatus === 'read' && <Check className="w-3.5 h-3.5 text-blue-700" />}
              </button>
              {isShelved && (
                <button
                  onClick={() => {
                    onUpdateShelf(book.id, 'none');
                    setIsDropdownOpen(false);
                  }}
                  className="w-full px-3 py-1.5 text-left text-red-700 hover:bg-red-50"
                >
                  Remove from shelf
                </button>
              )}
            </div>
          )}
        </div>

        {/* Quick Reserve/Inquire Button */}
        <button
          onClick={() => onReserve(book)}
          className="w-full py-1.5 px-3 rounded-md text-xs font-medium text-[#422d1b] bg-[#ede5d6] hover:bg-[#dfd4c0] border border-[#d3c5ae] transition-colors"
        >
          Reserve Copy / Inquire
        </button>
      </div>

    </div>
  );
};
