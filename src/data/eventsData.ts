import { BookstoreEvent } from '../types';

export const BOOKSTORE_EVENTS: BookstoreEvent[] = [
  {
    id: 'evt-01',
    title: 'Transforming Secondary Science: Hands-on Classroom Pedagogy',
    category: 'Teacher Workshop',
    speaker: 'Dr. Ratan Ghosh',
    speakerRole: 'Founder, B.I Books & Veteran Educator (15+ Yrs Experience)',
    date: 'Saturday, November 7, 2026',
    time: '10:30 AM - 1:00 PM IST',
    location: 'B.I Books Reading Hall & Online Stream',
    seatsTotal: 60,
    seatsBooked: 48,
    badge: 'Popular for Teachers',
    description:
      'A practical workshop for high school and middle school teachers. Dr. Ratan Ghosh presents classroom-tested low-cost experiment kits, methods for demystifying physical sciences, and participatory assessment frameworks that banish exam phobia.',
    agenda: [
      '10:30 AM: Welcome & Opening Thoughts by Dr. Ratan Ghosh',
      '11:00 AM: Interactive demonstration of 8 low-cost science classroom experiments',
      '11:45 AM: Redesigning question papers to assess conceptual clarity vs rote memory',
      '12:30 PM: Open Q&A & Distribution of B.I Books Educator Kits',
      '1:00 PM: High Tea & Networking'
    ],
    isDrRatanHosting: true
  },
  {
    id: 'evt-02',
    title: 'Autumn Book Fair & School Reading Circle Kickoff',
    category: 'Book Fair',
    speaker: 'B.I Books Editorial Board',
    speakerRole: 'Curated by Dr. Ratan Ghosh with Regional School Principals',
    date: 'Friday - Sunday, November 20-22, 2026',
    time: '11:00 AM - 8:00 PM IST Daily',
    location: 'B.I Books Bookstore Courtyard & Exhibition Hall',
    seatsTotal: 250,
    seatsBooked: 182,
    badge: 'Open to All / Free Entry',
    description:
      'Our flagship seasonal book fair featuring over 5,000 titles across literature, academic companions, science classics, and illustrated children’s editions. Special 20% discount for school students with valid ID cards, book swaps, and spot storytelling.',
    agenda: [
      'Special curated school book stalls (CBSE, ICSE, WB Board)',
      'Live author book signings every afternoon at 4:00 PM',
      'Student Book Review Contest with prizes by Dr. Ratan Ghosh',
      'Special Educator & School Library procurement counter'
    ],
    isDrRatanHosting: true
  },
  {
    id: 'evt-03',
    title: 'Tagore & Beyond: Exploring Bengal’s Renaissance in Modern Schools',
    category: 'Reading Club',
    speaker: 'Prof. Alok Mukherjee & Dr. Ratan Ghosh',
    speakerRole: 'Literature Scholars & Academic Council Members',
    date: 'Sunday, December 6, 2026',
    time: '4:00 PM - 6:30 PM IST',
    location: 'B.I Books Heritage Reading Lounge',
    seatsTotal: 45,
    seatsBooked: 39,
    badge: 'Literary Gathering',
    description:
      'An intimate evening discussing Rabindranath Tagore’s educational experiments at Santiniketan, reading excerpts from Gitanjali and Galpaguchchha, and reflecting on how literary empathy can revive mental well-being in students today.',
    agenda: [
      '4:00 PM: Recitation of selected verses in Bengali & English',
      '4:45 PM: Dialogue between Prof. Mukherjee and Dr. Ratan Ghosh on education through art',
      '5:30 PM: Audience reflections & open book club discussion',
      '6:15 PM: Musical rendition & book signing'
    ],
    isDrRatanHosting: true
  },
  {
    id: 'evt-04',
    title: 'Young Authors & Creative Writing Masterclass (Ages 12-18)',
    category: 'Student Masterclass',
    speaker: 'Nilanjana Guha & Guest Children’s Authors',
    speakerRole: 'Senior Fiction Editor, B.I Books',
    date: 'Saturday, December 12, 2026',
    time: '2:00 PM - 4:30 PM IST',
    location: 'B.I Books Workshop Studio',
    seatsTotal: 35,
    seatsBooked: 29,
    badge: 'Limited Seats',
    description:
      'A hands-on masterclass for young storytellers. Learn how to construct compelling characters, world-build without getting lost, create dialogue that crackles with life, and prepare manuscript submissions for school magazines and anthologies.',
    agenda: [
      '2:00 PM: The anatomy of a gripping opening hook',
      '2:45 PM: Character sketching sprint & live feedback',
      '3:30 PM: The art of revision: cutting the flab without losing the heart',
      '4:15 PM: Certificate presentation by Dr. Ratan Ghosh'
    ],
    isDrRatanHosting: false
  },
  {
    id: 'evt-05',
    title: 'Evening with Contemporary Science Communicators',
    category: 'Author Meet',
    speaker: 'Dr. Debabrata Basu & Science Panel',
    speakerRole: 'Astrophysics Researcher & Popular Science Columnist',
    date: 'Friday, January 8, 2027',
    time: '5:30 PM - 7:30 PM IST',
    location: 'B.I Books Main Amphitheatre',
    seatsTotal: 75,
    seatsBooked: 44,
    badge: 'Science & Society',
    description:
      'Fascinating insights into India’s deep space missions, black hole discoveries, and how science communication is evolving for the next generation of researchers. Book signing of new titles from B.I Books Science Desk.',
    agenda: [
      '5:30 PM: Visual lecture on Chandrayaan, Gaganyaan & James Webb Telescope images',
      '6:20 PM: Panel discussion on making STEM literature accessible in vernacular languages',
      '7:00 PM: Audience Q&A and book signing'
    ],
    isDrRatanHosting: false
  }
];
