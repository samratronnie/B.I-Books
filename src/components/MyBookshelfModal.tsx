import React, { useState } from 'react';
import {
  X,
  Bookmark,
  BookOpen,
  CheckCircle2,
  Trash2,
  Star,
  Sparkles,
  Trophy,
  ExternalLink
} from 'lucide-react';
import { Book, BookshelfEntry, ShelfStatus } from '../types';

interface MyBookshelfModalProps {
  isOpen: boolean;
  onClose: () => void;
  books: Book[];
  bookshelf: Record<string, BookshelfEntry>;
  onUpdateShelf: (bookId: string, status: ShelfStatus) => void;
  onOpenDetails: (book: Book) => void;
}

export const MyBookshelfModal: React.FC<MyBookshelfModalProps> = ({
  isOpen,
  onClose,
  books,
  bookshelf,
  onUpdateShelf,
  onOpenDetails,
}) => {
  const [activeTab, setActiveTab] = useState<ShelfStatus>('want-to-read');
  const [readingGoal, setReadingGoal] = useState(15);

  if (!isOpen) return null;

  const bookMap = new Map(books.map(b => [b.id, b]));

  const entries = Object.values(bookshelf);
  const wantToReadList = entries.filter(e => e.status === 'want-to-read');
  const currentlyReadingList = entries.filter(e => e.status === 'currently-reading');
  const readList = entries.filter(e => e.status === 'read');

  const currentList = entries.filter(e => e.status === activeTab);
  const completedCount = readList.length;
  const progressPercent = Math.min(100, Math.round((completedCount / readingGoal) * 100));

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#fcfaf7] border border-[#d6cdb7] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#ded3be] bg-[#f5eee3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#4a2e16] text-amber-200 flex items-center justify-center shadow-xs">
              <Bookmark className="w-5 h-5 fill-amber-200/20" />
            </div>
            <div>
              <h2 className="font-serif font-black text-xl sm:text-2xl text-[#2e1d10]">
                My Personal Bookshelf
              </h2>
              <p className="text-xs text-[#705e4f]">
                Your personal Goodreads-style reading tracker at B.I Books
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-[#ede5d6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2026 Reading Challenge Card */}
        <div className="px-6 py-4 bg-[#f1eade] border-b border-[#e2d8c7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <span className="font-bold text-[#352213] block">
                2026 Reading Challenge
              </span>
              <span className="text-[#695646]">
                You have read <strong>{completedCount}</strong> of <strong>{readingGoal}</strong> books ({progressPercent}%)
              </span>
            </div>
          </div>

          <div className="w-full sm:w-48 space-y-1">
            <div className="w-full bg-[#ded2bc] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#406842] h-full rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-stone-500">
              <span>Goal: {readingGoal} books</span>
              <span>{Math.max(0, readingGoal - completedCount)} remaining</span>
            </div>
          </div>
        </div>

        {/* Shelf Tabs */}
        <div className="px-6 pt-3 bg-[#fcfaf7] border-b border-[#ded3be] flex gap-2">
          <button
            onClick={() => setActiveTab('want-to-read')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'want-to-read'
                ? 'border-[#4a2e16] text-[#4a2e16]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Want to Read ({wantToReadList.length})
          </button>
          <button
            onClick={() => setActiveTab('currently-reading')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'currently-reading'
                ? 'border-amber-800 text-amber-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Currently Reading ({currentlyReadingList.length})
          </button>
          <button
            onClick={() => setActiveTab('read')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'read'
                ? 'border-blue-800 text-blue-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Read / Finished ({readList.length})
          </button>
        </div>

        {/* Shelf Content List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {currentList.length === 0 ? (
            <div className="text-center py-12 space-y-2 max-w-sm mx-auto">
              <BookOpen className="w-10 h-10 text-stone-400 mx-auto" />
              <h4 className="font-serif font-bold text-base text-[#3d2714]">
                Your {activeTab === 'want-to-read' ? 'Want to Read' : activeTab === 'currently-reading' ? 'Reading' : 'Completed'} shelf is empty
              </h4>
              <p className="text-xs text-[#705e4f]">
                Browse our catalog of school companions and literary classics, and click "Want to Read" on any title.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 rounded-xl bg-[#4a2e16] text-amber-100 text-xs font-semibold"
              >
                Explore Books in Catalog
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#eee5d5]">
              {currentList.map((entry) => {
                const book = bookMap.get(entry.bookId);
                if (!book) return null;

                return (
                  <div
                    key={entry.bookId}
                    className="py-4 flex flex-col sm:flex-row items-start justify-between gap-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        onClick={() => {
                          onOpenDetails(book);
                          onClose();
                        }}
                        className="w-16 h-22 object-cover rounded-sm shadow-xs cursor-pointer shrink-0"
                      />
                      <div className="space-y-1 min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase text-amber-800">
                          {book.genre}
                        </span>
                        <h4
                          onClick={() => {
                            onOpenDetails(book);
                            onClose();
                          }}
                          className="font-serif font-bold text-base text-[#2e1d10] hover:text-amber-900 cursor-pointer truncate"
                        >
                          {book.title}
                        </h4>
                        <p className="text-xs text-[#524032]">by {book.author}</p>
                        <div className="flex items-center gap-2 text-xs text-stone-500 pt-0.5">
                          <span className="text-amber-800 font-bold">★ {book.rating.toFixed(1)}</span>
                          <span>·</span>
                          <span>₹{book.price}</span>
                          <span>·</span>
                          <span className="text-[11px]">Added {entry.addedAt}</span>
                        </div>
                      </div>
                    </div>

                    {/* Shelf Status Changer & Actions */}
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <select
                        value={entry.status}
                        onChange={(e) => onUpdateShelf(book.id, e.target.value as ShelfStatus)}
                        className="bg-[#f0ebd9] border border-[#d6c7b0] rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#332012]"
                      >
                        <option value="want-to-read">Want to Read</option>
                        <option value="currently-reading">Currently Reading</option>
                        <option value="read">Read ✓</option>
                      </select>

                      <button
                        onClick={() => onUpdateShelf(book.id, 'none')}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-red-700 hover:bg-red-50 transition-colors"
                        title="Remove from bookshelf"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f5eee3] border-t border-[#ded3be] flex justify-between items-center text-xs">
          <span className="text-[#736252]">
            Total saved books: <strong>{entries.length}</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#4a2e16] text-amber-50 font-bold"
          >
            Close Shelf
          </button>
        </div>

      </div>
    </div>
  );
};
