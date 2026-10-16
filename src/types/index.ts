export type BookGenre =
  | 'All'
  | 'Academic & School Guides'
  | 'Teacher Pedagogy & Education'
  | 'Bengali & Indian Classics'
  | 'English Literature & Fiction'
  | 'Science & Mathematics'
  | 'Young Adult & Children'
  | 'History & Social Sciences';

export type BookFormat = 'Paperback' | 'Hardcover' | 'Educator Edition' | 'School Bundle';

export type ShelfStatus = 'none' | 'want-to-read' | 'currently-reading' | 'read';

export interface BookReview {
  id: string;
  reviewerName: string;
  avatarBg: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  userType: 'Student' | 'Teacher' | 'Book Club Member' | 'Parent' | 'General Reader';
  helpfulCount: number;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  editorOrPreface?: string;
  publisher: string;
  isPublisherCurated?: boolean; // Dr. Ratan Ghosh curated / published
  coverImage: string;
  coverBg: string;
  coverAccent: string;
  genre: BookGenre;
  format: BookFormat;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  pages: number;
  publicationYear: number;
  language: string;
  isbn: string;
  synopsis: string;
  keyHighlights: string[];
  sampleExcerpt: string;
  targetAudience?: string; // e.g. "Classes 9-12 & Competitive Aspirants", "Teachers & Educators"
  reviews: BookReview[];
}

export interface BookstoreEvent {
  id: string;
  title: string;
  category: 'Teacher Workshop' | 'Author Meet' | 'Book Fair' | 'Reading Club' | 'Student Masterclass';
  speaker: string;
  speakerRole: string;
  date: string;
  time: string;
  location: string;
  seatsTotal: number;
  seatsBooked: number;
  description: string;
  badge: string;
  agenda: string[];
  isDrRatanHosting?: boolean;
}

export interface BookshelfEntry {
  bookId: string;
  status: ShelfStatus;
  addedAt: string;
  userRating?: number;
  notes?: string;
}
