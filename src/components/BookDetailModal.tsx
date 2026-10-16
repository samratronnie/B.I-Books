import React, { useState } from 'react';
import {
  X,
  Star,
  Bookmark,
  Check,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  Globe,
  Share2,
  CheckCircle2,
  MessageSquare,
  GraduationCap
} from 'lucide-react';
import { Book, ShelfStatus, BookReview } from '../types';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  shelfStatus?: ShelfStatus;
  onUpdateShelf: (bookId: string, status: ShelfStatus) => void;
  onReserve: (book: Book) => void;
  onAddReview: (bookId: string, review: BookReview) => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  onClose,
  shelfStatus = 'none',
  onUpdateShelf,
  onReserve,
  onAddReview,
}) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewerName, setNewReviewerName] = useState('');
  const [newReviewerType, setNewReviewerType] = useState<BookReview['userType']>('Student');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!book) return null;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewerName.trim() || !newComment.trim()) return;

    const newReview: BookReview = {
      id: `rev-${Date.now()}`,
      reviewerName: newReviewerName,
      avatarBg: 'bg-amber-800',
      rating: newRating,
      date: 'Today',
      title: newTitle || 'Reflective review from B.I Books reader',
      comment: newComment,
      userType: newReviewerType,
      helpfulCount: 1,
    };

    onAddReview(book.id, newReview);
    setShowReviewForm(false);
    setNewReviewerName('');
    setNewTitle('');
    setNewComment('');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs overflow-y-auto flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#fcfaf7] border border-[#d6cdb7] rounded-2xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#ede5d6] hover:bg-[#ded1bc] text-stone-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="max-h-[88vh] overflow-y-auto p-5 sm:p-8 space-y-8">
          
          {/* Top Section: Cover + Book Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Book Cover Column */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-48 sm:w-56 aspect-3/4 rounded-md overflow-hidden book-shadow book-spine-effect bg-stone-900 relative">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                {book.isPublisherCurated && (
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-bold bg-[#291b10]/95 text-amber-200 border border-amber-400/40 shadow-md">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      Dr. Ghosh Edition
                    </span>
                  </div>
                )}
              </div>

              {/* Shelf Status Buttons */}
              <div className="w-full max-w-56 mt-4 space-y-2">
                <div className="grid grid-cols-3 gap-1 bg-[#ede4d2] p-1 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => onUpdateShelf(book.id, 'want-to-read')}
                    className={`py-1.5 rounded-md transition-colors ${
                      shelfStatus === 'want-to-read'
                        ? 'bg-[#3b533b] text-white shadow-xs'
                        : 'text-stone-700 hover:bg-[#dfd4be]'
                    }`}
                  >
                    Want
                  </button>
                  <button
                    onClick={() => onUpdateShelf(book.id, 'currently-reading')}
                    className={`py-1.5 rounded-md transition-colors ${
                      shelfStatus === 'currently-reading'
                        ? 'bg-amber-800 text-white shadow-xs'
                        : 'text-stone-700 hover:bg-[#dfd4be]'
                    }`}
                  >
                    Reading
                  </button>
                  <button
                    onClick={() => onUpdateShelf(book.id, 'read')}
                    className={`py-1.5 rounded-md transition-colors ${
                      shelfStatus === 'read'
                        ? 'bg-blue-800 text-white shadow-xs'
                        : 'text-stone-700 hover:bg-[#dfd4be]'
                    }`}
                  >
                    Read ✓
                  </button>
                </div>

                <button
                  onClick={() => onReserve(book)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#4a2e16] hover:bg-[#38210d] text-amber-50 text-xs font-bold shadow-xs flex items-center justify-center gap-2"
                >
                  <Bookmark className="w-4 h-4 text-amber-300" />
                  Reserve Copy / Order Inquiry
                </button>

                <button
                  onClick={handleShare}
                  className="w-full py-1.5 px-3 rounded-lg text-xs text-[#6e5d4e] hover:bg-[#ede5d6] flex items-center justify-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  {copiedLink ? 'Link copied to clipboard!' : 'Share this book'}
                </button>
              </div>
            </div>

            {/* Info Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-md">
                  {book.genre}
                </span>
                <span className="text-xs font-semibold text-stone-600 bg-[#ede4d4] px-2 py-0.5 rounded-md">
                  {book.format}
                </span>
              </div>

              <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#2e1d0f] leading-tight">
                {book.title}
              </h2>

              {book.subtitle && (
                <p className="text-sm text-[#665445] italic font-serif">
                  {book.subtitle}
                </p>
              )}

              <div className="text-sm text-[#4d3a2b] space-y-1">
                <p>
                  by <strong className="font-semibold text-[#291708]">{book.author}</strong>
                </p>
                {book.editorOrPreface && (
                  <p className="text-xs text-stone-600">
                    {book.editorOrPreface}
                  </p>
                )}
                <p className="text-xs text-stone-500">
                  Published by <span className="font-semibold text-stone-700">{book.publisher}</span>
                </p>
              </div>

              {/* Goodreads Ratings Banner */}
              <div className="bg-[#f2ece0] border border-[#dcd1be] rounded-xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-center pr-3 border-r border-[#d4c6b2]">
                    <span className="font-serif font-black text-2xl text-[#291708] block leading-none">
                      {book.rating.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider">
                      out of 5
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(book.rating)
                              ? 'fill-amber-500 text-amber-500'
                              : i < book.rating
                              ? 'fill-amber-300 text-amber-400'
                              : 'text-stone-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5">
                      <strong>{book.ratingCount.toLocaleString()}</strong> ratings · <strong>{book.reviewCount}</strong> community reviews
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-serif font-black text-2xl text-[#2e1d0f] block">
                    ₹{book.price}
                  </span>
                  {book.originalPrice && (
                    <span className="text-xs text-stone-500 line-through">
                      ₹{book.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Synopsis */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6e5d4e]">
                  Synopsis & Editorial Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#45362a] leading-relaxed">
                  {book.synopsis}
                </p>
              </div>

              {/* Key Highlights */}
              {book.keyHighlights && book.keyHighlights.length > 0 && (
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6e5d4e]">
                    Key Pedagogical Highlights:
                  </h4>
                  <ul className="text-xs text-[#524133] space-y-1.5 pl-4 list-disc marker:text-amber-800">
                    {book.keyHighlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-[#ede4d4] text-xs">
                <div className="bg-[#f5efe5] p-2.5 rounded-lg">
                  <span className="text-[10px] text-stone-500 block uppercase">Pages</span>
                  <span className="font-bold text-stone-800">{book.pages}</span>
                </div>
                <div className="bg-[#f5efe5] p-2.5 rounded-lg">
                  <span className="text-[10px] text-stone-500 block uppercase">Language</span>
                  <span className="font-bold text-stone-800">{book.language}</span>
                </div>
                <div className="bg-[#f5efe5] p-2.5 rounded-lg">
                  <span className="text-[10px] text-stone-500 block uppercase">Year</span>
                  <span className="font-bold text-stone-800">{book.publicationYear}</span>
                </div>
                <div className="bg-[#f5efe5] p-2.5 rounded-lg">
                  <span className="text-[10px] text-stone-500 block uppercase">ISBN</span>
                  <span className="font-mono font-bold text-stone-800 text-[11px] truncate block">{book.isbn}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sample Excerpt Box (Goodreads style excerpt quotation) */}
          <div className="bg-[#f3ece0] border-l-4 border-amber-800 rounded-r-xl p-5 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
              <BookOpen className="w-4 h-4 text-amber-800" />
              <span>Excerpt from the Book</span>
            </div>
            <p className="font-serif italic text-sm text-[#382618] leading-relaxed">
              "{book.sampleExcerpt}"
            </p>
          </div>

          {/* Community Reviews Section */}
          <div className="space-y-5 pt-4 border-t border-[#ded3be]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#2e1d0f]">
                  Reader Community Reviews
                </h3>
                <p className="text-xs text-[#705e4f]">
                  Honest reviews from students, school educators, and book club members.
                </p>
              </div>

              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="px-3.5 py-1.5 rounded-lg bg-[#ede5d6] hover:bg-[#ded1bc] text-xs font-bold text-[#422c19] flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                {showReviewForm ? 'Cancel Review' : 'Write a Review'}
              </button>
            </div>

            {/* Write Review Form */}
            {showReviewForm && (
              <form onSubmit={handleReviewSubmit} className="bg-[#f5efe4] border border-[#d6cdb7] rounded-xl p-5 space-y-4">
                <h4 className="font-serif font-bold text-base text-[#2e1d10]">
                  Share Your Thoughts on "{book.title}"
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block font-semibold text-[#422c18] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sourav Majumdar"
                      value={newReviewerName}
                      onChange={(e) => setNewReviewerName(e.target.value)}
                      className="w-full bg-[#fcfaf7] border border-[#d6c7b0] rounded-lg px-3 py-1.5 text-xs text-[#2b2520]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#422c18] mb-1">Your Role</label>
                    <select
                      value={newReviewerType}
                      onChange={(e) => setNewReviewerType(e.target.value as any)}
                      className="w-full bg-[#fcfaf7] border border-[#d6c7b0] rounded-lg px-3 py-1.5 text-xs text-[#2b2520]"
                    >
                      <option value="Student">Student</option>
                      <option value="Teacher">School Teacher</option>
                      <option value="Parent">Parent</option>
                      <option value="Book Club Member">Book Club Member</option>
                      <option value="General Reader">General Reader</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#422c18] mb-1">Your Rating</label>
                    <div className="flex items-center gap-1 pt-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="focus:outline-hidden"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= newRating
                                ? 'fill-amber-500 text-amber-500'
                                : 'text-stone-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#422c18] mb-1">Review Headline</label>
                  <input
                    type="text"
                    placeholder="Summary of your reading experience"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-[#fcfaf7] border border-[#d6c7b0] rounded-lg px-3 py-1.5 text-xs text-[#2b2520]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#422c18] mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="How did this book help your study, teaching, or reading journey?"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-[#fcfaf7] border border-[#d6c7b0] rounded-lg p-3 text-xs text-[#2b2520]"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-stone-600 hover:bg-[#ede5d6]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#4a2e16] text-amber-50 text-xs font-bold shadow-xs"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}

            {/* Existing Reviews List */}
            <div className="space-y-4">
              {book.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#fcfaf7] border border-[#dcd1be] rounded-xl p-4 space-y-2 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full ${rev.avatarBg} text-white font-bold text-xs flex items-center justify-center`}>
                        {rev.reviewerName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-[#2e1d0f]">
                            {rev.reviewerName}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ede4d2] text-[#543f2f]">
                            {rev.userType}
                          </span>
                        </div>
                        <span className="text-[10px] text-stone-500">{rev.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < rev.rating ? 'fill-amber-500 text-amber-500' : 'text-stone-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h5 className="font-serif font-bold text-xs text-[#2e1d0f]">
                    {rev.title}
                  </h5>

                  <p className="text-xs text-[#5c4a3b] leading-relaxed">
                    {rev.comment}
                  </p>

                  <div className="text-[10px] text-stone-500 pt-1">
                    {rev.helpfulCount} people found this review helpful
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
