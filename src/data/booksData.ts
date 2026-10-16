import { Book } from '../types';

export const INITIAL_BOOKS: Book[] = [
  {
    id: 'bi-01',
    title: 'The Art of Teaching High School',
    subtitle: '15 Years of Classroom Pedagogy, Empathy, and Inspiring Curiosity',
    author: 'Dr. Ratan Ghosh',
    publisher: 'B.I Books Publishing',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#2c3e50] to-[#1a252f]',
    coverAccent: '#f39c12',
    genre: 'Teacher Pedagogy & Education',
    format: 'Educator Edition',
    price: 499,
    originalPrice: 650,
    rating: 4.9,
    ratingCount: 1840,
    reviewCount: 312,
    inStock: true,
    stockQuantity: 42,
    pages: 368,
    publicationYear: 2024,
    language: 'English',
    isbn: '978-93-89102-14-3',
    targetAudience: 'Secondary Teachers, B.Ed Scholars & School Principals',
    synopsis:
      'Distilled from more than 15 years of daily secondary classroom teaching, Dr. Ratan Ghosh shares actionable frameworks for rekindling student wonder, turning rote memorization into inquiry-driven discovery, and building compassionate classroom ecosystems. Essential reading for every teacher who believes education is an art rather than a checklist.',
    keyHighlights: [
      'Over 40 real-world classroom case studies from Indian schools',
      'Bridge strategies for transitioning students from passive listeners to active thinkers',
      'Continuous formative evaluation techniques that reduce exam anxiety',
      'Foreword by state academic advisory council members'
    ],
    sampleExcerpt:
      'When a child asks "why does a rainbow bend?" in the middle of a hurried physics lesson, a teacher stands at a crossroad. You can either say "that is on page 112" or you can pause the clock and let thirty pairs of eyes gaze out the window to imagine light splitting into wonder. In fifteen years of standing before blackboards and digital screens alike, I have learned that wonder is the only syllabus that never expires.',
    reviews: [
      {
        id: 'rev-01',
        reviewerName: 'Mousumi Bhattacharya',
        avatarBg: 'bg-emerald-700',
        rating: 5,
        date: 'October 12, 2026',
        title: 'A transformative guide for every secondary teacher',
        comment:
          'Having taught high school for 8 years myself, Dr. Ratan Ghosh’s insights hit right home. His chapter on turning classroom questions into collective discovery projects transformed my 10th grade physics class within a fortnight.',
        userType: 'Teacher',
        helpfulCount: 48
      },
      {
        id: 'rev-02',
        reviewerName: 'Subir Karmakar',
        avatarBg: 'bg-amber-700',
        rating: 5,
        date: 'September 28, 2026',
        title: 'Practical, humane, and deeply inspiring',
        comment:
          'Dr. Ghosh brings the humility of a true classroom practitioner. No heavy unapproachable jargon, just compassionate pedagogy that respects Indian school realities.',
        userType: 'Teacher',
        helpfulCount: 31
      }
    ]
  },
  {
    id: 'bi-02',
    title: 'Mastering Physical Sciences: A Conceptual Companion',
    subtitle: 'Bridging Fundamentals for Secondary & Senior Secondary Excellence',
    author: 'Dr. Ratan Ghosh',
    editorOrPreface: 'With Editorial Notes by B.I Books Science Board',
    publisher: 'B.I Books Publishing',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#1b4332] to-[#081c15]',
    coverAccent: '#52b788',
    genre: 'Science & Mathematics',
    format: 'Paperback',
    price: 420,
    originalPrice: 520,
    rating: 4.8,
    ratingCount: 3290,
    reviewCount: 460,
    inStock: true,
    stockQuantity: 85,
    pages: 440,
    publicationYear: 2025,
    language: 'English & Bilingual Notes',
    isbn: '978-93-89102-22-8',
    targetAudience: 'Classes 9, 10 & 11 (CBSE/ICSE/State Boards)',
    synopsis:
      'Designed to overcome the barrier between formula recitation and true physical comprehension. Dr. Ratan Ghosh blends step-by-step conceptual diagrams, daily life experiments, and clear diagnostic self-tests that prepare students both for board evaluations and foundational competitive assessments.',
    keyHighlights: [
      'Zero-jargon explanations of Newton’s Laws, Optics, and Electromagnetism',
      'Over 250 solved conceptual dilemmas frequently faced by school students',
      'Teacher’s margin tips: Common pitfalls and misunderstandings',
      'QR codes linking to live experiment demonstrations'
    ],
    sampleExcerpt:
      'We often teach velocity as a vector formula, forgetting to ask the child if they have felt the sudden push when a bus halts at a red light. Physics is not trapped between textbook covers; it is breathing in every breath you take and every cycle pedal you press.',
    reviews: [
      {
        id: 'rev-03',
        reviewerName: 'Ananya Roy',
        avatarBg: 'bg-blue-700',
        rating: 5,
        date: 'October 2, 2026',
        title: 'My daughter finally loves Physics!',
        comment:
          'We were struggling with formulas until our school teacher recommended Dr. Ratan Ghosh’s book from B.I Books. The diagrams and real-life examples made concepts crystal clear.',
        userType: 'Parent',
        helpfulCount: 29
      },
      {
        id: 'rev-04',
        reviewerName: 'Debjit Sarkar',
        avatarBg: 'bg-indigo-700',
        rating: 4,
        date: 'August 19, 2026',
        title: 'Best conceptual book for Class 10 boards',
        comment:
          'Clear explanations, no unnecessary padding. Solved problems test your actual thinking instead of simple plugging in numbers.',
        userType: 'Student',
        helpfulCount: 19
      }
    ]
  },
  {
    id: 'bi-03',
    title: 'Stories from Bengal: Curated Classics for Young Minds',
    subtitle: 'Timeless Masterpieces with Modern Critical Commentary & Vocabulary Aids',
    author: 'Curated by Dr. Ratan Ghosh',
    publisher: 'B.I Books Publishing',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#780000] to-[#3f0008]',
    coverAccent: '#fdf0d5',
    genre: 'Bengali & Indian Classics',
    format: 'Hardcover',
    price: 550,
    originalPrice: 699,
    rating: 4.9,
    ratingCount: 1540,
    reviewCount: 280,
    inStock: true,
    stockQuantity: 34,
    pages: 310,
    publicationYear: 2024,
    language: 'Bengali & English Translations',
    isbn: '978-93-89102-39-6',
    targetAudience: 'Students (Age 12+), Literature Enthusiasts, School Libraries',
    synopsis:
      'An exquisite anthology curated by veteran educator Dr. Ratan Ghosh featuring works by Rabindranath Tagore, Sarat Chandra Chattopadhyay, Sukumar Ray, and Bibhutibhushan Bandyopadhyay. Specially formatted with biographical preludes, vocabulary margins, and reflective discussion prompts suited for young readers and book clubs.',
    keyHighlights: [
      'Annotated literary glossary on every page to preserve cultural nuances',
      'Discussion prompts tailored for high school literature circles',
      'Exclusive essays by Dr. Ghosh on cultural context and moral philosophy',
      'Hardbound library edition with golden ribbon bookmark'
    ],
    sampleExcerpt:
      'In a digital era where attention flits in seconds, the gentle rhythm of Bengali literature offers a sanctuary. When a young reader walks alongside Apu in Nishchindipur or laughs at the nonsensical brilliance of Pagla Dashu, they discover a heritage of empathy that borders cannot confine.',
    reviews: [
      {
        id: 'rev-05',
        reviewerName: 'Sanchita Sen',
        avatarBg: 'bg-purple-700',
        rating: 5,
        date: 'October 8, 2026',
        title: 'A treasure for our school reading club',
        comment:
          'B.I Books has produced a stunning edition. The vocabulary notes and Dr. Ghosh’s introductory essays make these historic classics completely accessible to today’s generation.',
        userType: 'Book Club Member',
        helpfulCount: 42
      }
    ]
  },
  {
    id: 'bi-04',
    title: 'Foundations of Mathematical Reasoning',
    subtitle: 'From Arithmetic Intuition to Algebraic Thinking for Classes 8-10',
    author: 'Dr. Ratan Ghosh & Prof. P. K. Banerjee',
    publisher: 'B.I Books Publishing',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#003049] to-[#101924]',
    coverAccent: '#fdf0d5',
    genre: 'Academic & School Guides',
    format: 'Paperback',
    price: 380,
    originalPrice: 480,
    rating: 4.7,
    ratingCount: 2110,
    reviewCount: 305,
    inStock: true,
    stockQuantity: 60,
    pages: 390,
    publicationYear: 2025,
    language: 'English',
    isbn: '978-93-89102-45-7',
    targetAudience: 'Secondary Students, Olympiad Aspirants, Math Teachers',
    synopsis:
      'Mathematics is frequently feared because it is presented as a list of abstract rules. In this celebrated guide, Dr. Ratan Ghosh demystifies algebra and geometry by connecting them to spatial intuition, visual proof patterns, and real-world problem mapping.',
    keyHighlights: [
      'Visual proofs for Pythagorean theorem and polynomial factorizations',
      'Diagnostic quizzes to identify early algebra misconceptions',
      'Olympiad challenge sections for advanced learners',
      'Structured curriculum alignment for CBSE, ICSE, and West Bengal Boards'
    ],
    sampleExcerpt:
      'Numbers are not cold symbols; they are the language through which the cosmos hums. When we teach a child that (a+b)² is a geometric square divided into four distinct rooms, fear dissolves into a sudden smile of understanding.',
    reviews: [
      {
        id: 'rev-06',
        reviewerName: 'Arindam Das',
        avatarBg: 'bg-teal-700',
        rating: 5,
        date: 'September 14, 2026',
        title: 'Cured my son’s fear of algebra',
        comment:
          'I wish I had this book during my own school days. The step-by-step visual proofs are incredible. A true masterpiece from B.I Books.',
        userType: 'Parent',
        helpfulCount: 24
      }
    ]
  },
  {
    id: 'bi-05',
    title: 'Gitanjali (Song Offerings): Centenary Critical Edition',
    subtitle: 'Nobel Prize Winning Verse with Line-by-Line Context & Philosophical Notes',
    author: 'Rabindranath Tagore',
    editorOrPreface: 'Critical Introduction by Dr. Ratan Ghosh',
    publisher: 'B.I Books Classics Imprint',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#4a154b] to-[#250826]',
    coverAccent: '#e0a96d',
    genre: 'Bengali & Indian Classics',
    format: 'Hardcover',
    price: 490,
    originalPrice: 599,
    rating: 4.95,
    ratingCount: 5410,
    reviewCount: 780,
    inStock: true,
    stockQuantity: 28,
    pages: 220,
    publicationYear: 2024,
    language: 'English & Bengali Original Text',
    isbn: '978-93-89102-09-9',
    targetAudience: 'Poetry Lovers, Literature Students, Collectors',
    synopsis:
      'A collector’s bilingual edition of Tagore’s mystical masterpiece. Features the original Bengali verses alongside Tagore’s English prose-poems, enriched by Dr. Ratan Ghosh’s comprehensive introductory essay exploring Tagore’s educational philosophy at Santiniketan.',
    keyHighlights: [
      'Full bilingual layout with parallel English and Bengali verses',
      'Annotated notes explaining Baul and Upanishadic allusions',
      'Archival photographs and facsimile of Tagore’s handwritten draft',
      'High-grade archival paper with foil embossed cover'
    ],
    sampleExcerpt:
      'Where the mind is without fear and the head is held high; Where knowledge is free; Where the world has not been broken up into fragments by narrow domestic walls... Into that heaven of freedom, my Father, let my country awake.',
    reviews: [
      {
        id: 'rev-07',
        reviewerName: 'Priyanka Mukherjee',
        avatarBg: 'bg-rose-700',
        rating: 5,
        date: 'October 5, 2026',
        title: 'Bilingual layout is pure perfection',
        comment:
          'The paper quality and binding feel like a heritage book. Dr. Ghosh’s introductory treatise on Santiniketan’s open-air learning makes this edition irreplaceable.',
        userType: 'General Reader',
        helpfulCount: 38
      }
    ]
  },
  {
    id: 'bi-06',
    title: 'Wings of Fire: An Inspiring Autobiography',
    subtitle: 'From Rameswaram to the Heights of Scientific Leadership',
    author: 'Dr. A.P.J. Abdul Kalam & Arun Tiwari',
    publisher: 'Universities Press (Distributed by B.I Books)',
    isPublisherCurated: false,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#1e3d59] to-[#17252a]',
    coverAccent: '#ff6e40',
    genre: 'History & Social Sciences',
    format: 'Paperback',
    price: 350,
    originalPrice: 425,
    rating: 4.88,
    ratingCount: 14200,
    reviewCount: 1840,
    inStock: true,
    stockQuantity: 70,
    pages: 180,
    publicationYear: 2023,
    language: 'English',
    isbn: '978-81-73711-46-6',
    targetAudience: 'Youth, School Students, Teachers, Dreamers',
    synopsis:
      'The uplifting autobiography of the "People’s President" Dr. Kalam. Chronicles his journey from distributing newspapers as a boy in Tamil Nadu to spearheading India’s missile and space launch programs. Highly recommended in Dr. Ratan Ghosh’s school reading syllabus.',
    keyHighlights: [
      'Inspiring narrative of perseverance through adversity and failures',
      'Detailed accounts of India’s SLV-3 and guided missile missions',
      'Essential leadership lessons for students and young professionals',
      'Official study edition with discussion questions'
    ],
    sampleExcerpt:
      'To succeed in your mission, you must have single-minded devotion to your goal. Individuals like myself are merely instruments of a larger destiny that binds our nation together.',
    reviews: [
      {
        id: 'rev-08',
        reviewerName: 'Tanmoy Sengupta',
        avatarBg: 'bg-cyan-700',
        rating: 5,
        date: 'September 1, 2026',
        title: 'Every Indian child must read this',
        comment:
          'Purchased 15 copies for our school library through B.I Books. Fast delivery and pristine print condition.',
        userType: 'Teacher',
        helpfulCount: 52
      }
    ]
  },
  {
    id: 'bi-07',
    title: 'Feluda: The Complete Sleuth Chronicles (Vol. I)',
    subtitle: 'The Definite English Translation with Case Notes & Kolkata Maps',
    author: 'Satyajit Ray',
    editorOrPreface: 'Translated by Gopa Majumdar | Annotated by B.I Books',
    publisher: 'Penguin / B.I Books Literary Showcase',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#582f0e] to-[#291708]',
    coverAccent: '#ddb892',
    genre: 'English Literature & Fiction',
    format: 'Hardcover',
    price: 620,
    originalPrice: 750,
    rating: 4.92,
    ratingCount: 8940,
    reviewCount: 920,
    inStock: true,
    stockQuantity: 32,
    pages: 520,
    publicationYear: 2024,
    language: 'English',
    isbn: '978-01-43425-67-1',
    targetAudience: 'Mystery Fans, Young Adults, Classic Bengali Fiction Lovers',
    synopsis:
      'Join detective Prodosh C. Mitter (Feluda), his teenage cousin Topshe, and the hilarious thriller writer Jatayu as they solve mysteries across Rajasthan, Varanasi, Darjeeling, and London. Celebrated worldwide for razor-sharp logic and pure storytelling joy.',
    keyHighlights: [
      'Includes famous cases: The Golden Fortress, The Royal Bengal Mystery, and Gangtokey Gondogol',
      'Illustrated character sketches and retro Kolkata street maps',
      'Teacher-approved vocabulary and deductive reasoning exercises'
    ],
    sampleExcerpt:
      '“A good detective must have the eyes of a hawk, the patience of a heron, and the logic of an ancient mathematician,” Feluda said, lighting his Charminar and gazing at the antique dagger.',
    reviews: [
      {
        id: 'rev-09',
        reviewerName: 'Rohan Banerjee',
        avatarBg: 'bg-amber-800',
        rating: 5,
        date: 'October 11, 2026',
        title: 'Timeless comfort reading',
        comment:
          'Feluda never gets old! This edition from B.I Books has great type sizing and sturdy binding that will survive dozens of re-reads.',
        userType: 'Student',
        helpfulCount: 22
      }
    ]
  },
  {
    id: 'bi-08',
    title: 'Environmental Science & Sustainable Earth',
    subtitle: 'A Modern High School Guide to Climate Action, Ecology & Biodiversity',
    author: 'Dr. Ratan Ghosh & Dr. Meenakshi Sanyal',
    publisher: 'B.I Books Publishing',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#134e4a] to-[#042f2e]',
    coverAccent: '#5eead4',
    genre: 'Academic & School Guides',
    format: 'Paperback',
    price: 360,
    originalPrice: 450,
    rating: 4.85,
    ratingCount: 1670,
    reviewCount: 215,
    inStock: true,
    stockQuantity: 55,
    pages: 280,
    publicationYear: 2025,
    language: 'English',
    isbn: '978-93-89102-78-5',
    targetAudience: 'Classes 9-12, Nature Clubs, Eco-Educators',
    synopsis:
      'Authored in response to the growing global climate crisis, Dr. Ratan Ghosh connects rigorous biological and geological sciences with actionable community initiatives. Includes field survey projects, carbon footprint worksheets, and local biodiversity audits.',
    keyHighlights: [
      'Practical ecological field study models for Indian schools',
      'In-depth breakdown of COP agreements, renewable energy, and wetland conservation',
      'Full-color eco-infographics and native flora/fauna identification keys',
      'Adopted by over 45 regional secondary schools as reference manual'
    ],
    sampleExcerpt:
      'We cannot teach ecology from abstract chalkboard definitions while ignoring the polluted stream two hundred meters from our school gates. Environmental education begins when students step into the soil and realize that every leaf is an oxygen factory sustaining their heartbeat.',
    reviews: [
      {
        id: 'rev-10',
        reviewerName: 'Barnali Chakraborty',
        avatarBg: 'bg-green-700',
        rating: 5,
        date: 'August 30, 2026',
        title: 'Best eco-science book for school clubs',
        comment:
          'Our eco-club used the water testing and local tree audit projects described in chapter 4. The students were thrilled to do real hands-on science.',
        userType: 'Teacher',
        helpfulCount: 35
      }
    ]
  },
  {
    id: 'bi-09',
    title: 'To Kill a Mockingbird: Critical Academic Edition',
    subtitle: 'Classic Literature Study Guide with Historical Context & Character Analysis',
    author: 'Harper Lee',
    editorOrPreface: 'Pedagogical Notes by Dr. Ratan Ghosh',
    publisher: 'B.I Books Literature Series',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#3d2645] to-[#1e1124]',
    coverAccent: '#f5cb5c',
    genre: 'English Literature & Fiction',
    format: 'Paperback',
    price: 395,
    originalPrice: 499,
    rating: 4.9,
    ratingCount: 7120,
    reviewCount: 880,
    inStock: true,
    stockQuantity: 40,
    pages: 350,
    publicationYear: 2024,
    language: 'English',
    isbn: '978-93-89102-55-6',
    targetAudience: 'Classes 10-12 ICSE/ISC, College Undergraduates, General Readers',
    synopsis:
      'The Pulitzer Prize-winning classic of moral courage, childhood innocence, and racial justice in the American South. Enriched with Dr. Ratan Ghosh’s classroom-tested scene analysis, thematic commentary on empathy, and essay-writing guides for board examinees.',
    keyHighlights: [
      'Comprehensive scene-by-scene analysis and thematic motif breakdowns',
      'Sample high-scoring analytical essays and character sketches',
      'Historical timeline of the American Civil Rights movement',
      'Teacher’s guide for leading respectful classroom debates on prejudice'
    ],
    sampleExcerpt:
      '“You never really understand a person until you consider things from his point of view,” Atticus Finch told Scout, “until you climb into his skin and walk around in it.”',
    reviews: [
      {
        id: 'rev-11',
        reviewerName: 'Nilanjana Guha',
        avatarBg: 'bg-violet-700',
        rating: 5,
        date: 'September 22, 2026',
        title: 'Helped me score 96% in ICSE English Lit',
        comment:
          'Dr. Ghosh’s study notes at the back are incredible. He breaks down Atticus’s courtroom speech line by line. Must-buy for board students!',
        userType: 'Student',
        helpfulCount: 61
      }
    ]
  },
  {
    id: 'bi-10',
    title: 'Pather Panchali: Song of the Little Road',
    subtitle: 'Centennial Illustrated Masterwork of Indian Rural Life',
    author: 'Bibhutibhushan Bandyopadhyay',
    publisher: 'B.I Books Heritage Imprint',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#472d30] to-[#201314]',
    coverAccent: '#f4a261',
    genre: 'Bengali & Indian Classics',
    format: 'Hardcover',
    price: 520,
    originalPrice: 650,
    rating: 4.96,
    ratingCount: 6890,
    reviewCount: 840,
    inStock: true,
    stockQuantity: 25,
    pages: 380,
    publicationYear: 2024,
    language: 'Bengali (Classic Edition)',
    isbn: '978-93-89102-18-1',
    targetAudience: 'Literature Lovers, School Libraries, Cultural Collectors',
    synopsis:
      'The immortal lyrical saga of Apu and his sister Durga growing up in the quiet village of Nishchindipur. A tender exploration of rural poverty, child innocence, nature’s splendors, and resilient human spirit that inspired Satyajit Ray’s legendary cinematic trilogy.',
    keyHighlights: [
      'Includes original archival woodcut illustrations',
      'Critical afterword by Dr. Ratan Ghosh on rural childhood and pedagogical empathy',
      'Preserves original regional dialect with helpful footnotes',
      'Embossed clothbound spine with gold foil lettering'
    ],
    sampleExcerpt:
      'The train whistled from far across the vast kash fields. Apu and Durga ran through the tall white blossoms, their bare feet scarcely touching the wet earth, hearts beating wild with the pure thrill of witnessing the iron giant roar into the distant horizon.',
    reviews: [
      {
        id: 'rev-12',
        reviewerName: 'Prabir Ganguly',
        avatarBg: 'bg-amber-900',
        rating: 5,
        date: 'October 3, 2026',
        title: 'Breathtaking printing quality',
        comment:
          'Every Bengali home should treasure this edition. Dr. Ghosh’s introduction captures Bibhutibhushan’s pantheistic love for nature with immense tenderness.',
        userType: 'General Reader',
        helpfulCount: 44
      }
    ]
  },
  {
    id: 'bi-11',
    title: 'The Young Scientist’s Handbook of Inventions',
    subtitle: '50 Simple Hands-on Experiments That Changed Human History',
    author: 'Dr. Ratan Ghosh',
    publisher: 'B.I Books Publishing',
    isPublisherCurated: true,
    coverImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#0b3c5d] to-[#1d2731]',
    coverAccent: '#328cc1',
    genre: 'Young Adult & Children',
    format: 'Paperback',
    price: 340,
    originalPrice: 420,
    rating: 4.82,
    ratingCount: 1980,
    reviewCount: 230,
    inStock: true,
    stockQuantity: 48,
    pages: 210,
    publicationYear: 2025,
    language: 'English',
    isbn: '978-93-89102-61-7',
    targetAudience: 'Children & Young Adults (Ages 10-16), STEM Clubs',
    synopsis:
      'Written specifically to spark kitchen-table curiosity without needing expensive laboratory apparatus. Dr. Ratan Ghosh guides young inventors through replicating historic breakthroughs: building a battery with lemons, charting pendulum harmonics, and creating a pinhole camera.',
    keyHighlights: [
      '50 safe household science projects tested with school students',
      'Clear safety guidelines and scientific explanation for every step',
      'Stories of unsung Indian inventors and scientists',
      'Full-color photographic diagrams and project logbook sheets'
    ],
    sampleExcerpt:
      'Science does not demand that you wait until university to become a discoverer. Galileo discovered the laws of the pendulum while looking at a swinging chandelier in a cathedral. If you have two eyes and a curious mind, your bedroom is already a laboratory.',
    reviews: [
      {
        id: 'rev-13',
        reviewerName: 'Kavita Sharma',
        avatarBg: 'bg-teal-800',
        rating: 5,
        date: 'October 9, 2026',
        title: 'Perfect holiday gift for curious kids',
        comment:
          'My 12-year-old nephew built the periscope and electric electromagnet within two days! He hasn’t touched his tablet since. Thank you Dr. Ghosh!',
        userType: 'Parent',
        helpfulCount: 37
      }
    ]
  },
  {
    id: 'bi-12',
    title: 'A Brief History of Time & Cosmos',
    subtitle: 'From the Big Bang to Black Holes: Student Illustrated Edition',
    author: 'Stephen Hawking',
    editorOrPreface: 'Educational Appendix by Dr. Ratan Ghosh',
    publisher: 'B.I Books Science Desk',
    isPublisherCurated: false,
    coverImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80',
    coverBg: 'from-[#03071e] to-[#370617]',
    coverAccent: '#ffba08',
    genre: 'Science & Mathematics',
    format: 'Paperback',
    price: 450,
    originalPrice: 550,
    rating: 4.91,
    ratingCount: 16500,
    reviewCount: 2100,
    inStock: true,
    stockQuantity: 38,
    pages: 260,
    publicationYear: 2024,
    language: 'English',
    isbn: '978-05-53380-16-3',
    targetAudience: 'Curious Minds, High School & College Students',
    synopsis:
      'The landmark book on cosmology that has sold millions worldwide. Explores Einstein’s General Relativity, quantum gravity, arrow of time, and the expansion of the universe. Includes an exclusive reader’s study guide crafted by Dr. Ratan Ghosh to help young readers grasp complex spacetime concepts.',
    keyHighlights: [
      'Accessible exploration of singularity and quantum cosmology',
      'Visual timeline of cosmic evolution from 10^-43 seconds to the heat death',
      'Glossary of cosmological terms curated for high school science olympiads'
    ],
    sampleExcerpt:
      'Even if there is only one possible unified theory, it is just a set of rules and equations. What is it that breathes fire into the equations and makes a universe for them to describe?',
    reviews: [
      {
        id: 'rev-14',
        reviewerName: 'Ritwik Paul',
        avatarBg: 'bg-sky-700',
        rating: 5,
        date: 'September 19, 2026',
        title: 'Hawking + Dr. Ghosh’s study notes = Gold',
        comment:
          'Hawking’s brilliance accompanied by the educational companion questions at the end of each chapter makes this the definitive edition for school libraries.',
        userType: 'Student',
        helpfulCount: 28
      }
    ]
  }
];
