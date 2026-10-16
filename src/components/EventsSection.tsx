import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Sparkles,
  Ticket,
  CheckCircle,
  Share2,
  X,
  GraduationCap
} from 'lucide-react';
import { BookstoreEvent } from '../types';

interface EventsSectionProps {
  events: BookstoreEvent[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEventForRsvp, setSelectedEventForRsvp] = useState<BookstoreEvent | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpAttendees, setRsvpAttendees] = useState(1);
  const [rsvpRole, setRsvpRole] = useState<'Student' | 'Teacher' | 'Parent' | 'Book Lover'>('Book Lover');
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const categories = [
    'All',
    'Teacher Workshop',
    'Book Fair',
    'Reading Club',
    'Student Masterclass',
    'Author Meet',
  ];

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(e => e.category === selectedCategory);

  const handleOpenRsvp = (event: BookstoreEvent) => {
    setSelectedEventForRsvp(event);
    setRsvpConfirmed(false);
    setRsvpName('');
    setRsvpEmail('');
    setRsvpAttendees(1);
  };

  const handleSubmitRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim() || !rsvpEmail.trim()) return;
    const generatedId = `BIB-EVT-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setRsvpConfirmed(true);
  };

  return (
    <div id="events-section" className="bg-[#fcfaf7] py-12 lg:py-16 border-b border-[#dfd5c1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#ded3be]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eee5d5] border border-[#d6c7b0] text-xs font-bold text-[#5c3e23] mb-2">
              <Calendar className="w-3.5 h-3.5 text-amber-800" />
              <span>Community & Literary Gatherings</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2e1d10]">
              Bookstore Events & Teacher Workshops
            </h2>
            <p className="text-sm text-[#705e4f] mt-1 max-w-2xl">
              Join Dr. Ratan Ghosh and visiting scholars for weekend literature discussions, hands-on science pedagogy circles, and our annual school book fairs.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1.5 rounded-lg w-fit">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Admission Free with Prior RSVP</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#3d2714] text-amber-100 shadow-xs'
                  : 'bg-[#f4efe5] text-[#574332] hover:bg-[#e8decb] border border-[#d6c7b0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((evt) => {
            const seatsRemaining = evt.seatsTotal - evt.seatsBooked;
            const percentFilled = Math.min(100, Math.round((evt.seatsBooked / evt.seatsTotal) * 100));

            return (
              <div
                key={evt.id}
                className="bg-[#f8f5ee] border border-[#dcd1be] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-amber-700 hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-md">
                      {evt.category}
                    </span>
                    {evt.isDrRatanHosting && (
                      <span className="text-[11px] font-bold text-amber-950 bg-[#efe5d3] border border-[#d9cbb2] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-amber-800" />
                        Hosted by Dr. Ratan Ghosh
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#2e1d10] leading-snug">
                    {evt.title}
                  </h3>

                  {/* Speaker Details */}
                  <div className="flex items-center gap-2 text-xs text-[#5c4634]">
                    <span className="font-bold text-[#352010]">{evt.speaker}</span>
                    <span>•</span>
                    <span className="text-[#756252]">{evt.speakerRole}</span>
                  </div>

                  {/* Date, Time, Venue */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4d3b2d] bg-[#f0ebd9] p-3 rounded-xl border border-[#ded1ba]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-800 shrink-0" />
                      <span className="font-medium">{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-800 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#665445] leading-relaxed">
                    {evt.description}
                  </p>

                  {/* Agenda Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-bold text-[#3d2714] block">
                      Program Highlights:
                    </span>
                    <ul className="text-xs text-[#6e5d4e] space-y-1 pl-4 list-disc marker:text-amber-700">
                      {evt.agenda.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Section: Seats & RSVP Button */}
                <div className="pt-4 border-t border-[#ded3be] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#695646]">
                      Seats Reserved: <strong className="text-[#2e1d0f]">{evt.seatsBooked} / {evt.seatsTotal}</strong>
                    </span>
                    <span className="font-semibold text-amber-900">
                      {seatsRemaining} seats left
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-[#e3d8c5] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-800 h-full rounded-full transition-all"
                      style={{ width: `${percentFilled}%` }}
                    />
                  </div>

                  <button
                    onClick={() => handleOpenRsvp(evt)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#4a2e16] hover:bg-[#38210d] text-amber-100 font-semibold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 transition-transform active:scale-98"
                  >
                    <Ticket className="w-4 h-4 text-amber-300" />
                    Reserve Complimentary Pass
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* RSVP Modal */}
      {selectedEventForRsvp && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fcfaf7] border border-[#d6cdb7] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedEventForRsvp(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-[#ede5d6]"
            >
              <X className="w-5 h-5" />
            </button>

            {!rsvpConfirmed ? (
              <form onSubmit={handleSubmitRsvp} className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
                  <Ticket className="w-3.5 h-3.5" /> Event Reservation
                </div>

                <h3 className="font-serif font-bold text-xl text-[#2e1d10] leading-snug">
                  Reserve Pass for: {selectedEventForRsvp.title}
                </h3>

                <p className="text-xs text-[#6e5d4e]">
                  {selectedEventForRsvp.date} · {selectedEventForRsvp.time} at {selectedEventForRsvp.location}
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#422c18] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Chattopadhyay"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg px-3 py-2 text-sm text-[#2b2520] focus:ring-2 focus:ring-amber-700/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#422c18] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. suman@school.edu"
                      value={rsvpEmail}
                      onChange={(e) => setRsvpEmail(e.target.value)}
                      className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg px-3 py-2 text-sm text-[#2b2520] focus:ring-2 focus:ring-amber-700/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#422c18] mb-1">
                        I am a...
                      </label>
                      <select
                        value={rsvpRole}
                        onChange={(e) => setRsvpRole(e.target.value as any)}
                        className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg px-3 py-2 text-xs font-medium text-[#2b2520]"
                      >
                        <option value="Teacher">School Teacher</option>
                        <option value="Student">Student (High School / College)</option>
                        <option value="Parent">Parent</option>
                        <option value="Book Lover">Literature Enthusiast</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#422c18] mb-1">
                        Number of Attendees
                      </label>
                      <select
                        value={rsvpAttendees}
                        onChange={(e) => setRsvpAttendees(Number(e.target.value))}
                        className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg px-3 py-2 text-xs font-medium text-[#2b2520]"
                      >
                        <option value={1}>1 Seat</option>
                        <option value={2}>2 Seats</option>
                        <option value={3}>3 Seats</option>
                        <option value={5}>5 Seats (School Group)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#ede4d4] flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedEventForRsvp(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-[#ede5d6]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#4a2e16] hover:bg-[#38210d] text-amber-50 text-xs font-bold shadow-md"
                  >
                    Confirm My Reservation
                  </button>
                </div>
              </form>
            ) : (
              /* Ticket Confirmation Receipt */
              <div className="text-center space-y-4 py-2">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <h3 className="font-serif font-black text-2xl text-[#2e1d10]">
                  Reservation Confirmed!
                </h3>

                <p className="text-xs text-[#6e5d4e]">
                  Thank you, <strong>{rsvpName}</strong>. Your complimentary pass for{' '}
                  <strong>{selectedEventForRsvp.title}</strong> has been issued.
                </p>

                {/* Digital Ticket Card */}
                <div className="bg-[#f2ece0] border-2 border-dashed border-[#c7b9a2] rounded-xl p-4 text-left space-y-2 text-xs">
                  <div className="flex justify-between items-center border-b border-[#ddcfbb] pb-2">
                    <span className="font-bold text-[#3d2714]">B.I Books Event Pass</span>
                    <span className="font-mono font-bold text-amber-900">{ticketId}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-[10px]">Event & Venue:</span>
                    <span className="font-serif font-bold text-sm text-[#2e1d0f]">{selectedEventForRsvp.title}</span>
                    <span className="block text-[#614e3e] mt-0.5">{selectedEventForRsvp.location}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#ddcfbb]">
                    <div>
                      <span className="text-stone-500 block text-[10px]">Date & Time:</span>
                      <span className="font-medium text-[#2e1d0f]">{selectedEventForRsvp.date}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px]">Attendees:</span>
                      <span className="font-medium text-[#2e1d0f]">{rsvpAttendees} ({rsvpRole})</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-[#7d6957]">
                  A confirmation has been logged for {rsvpEmail}. Present this Pass ID at the B.I Books welcome desk on arrival.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedEventForRsvp(null)}
                    className="w-full py-2.5 rounded-xl bg-[#4a2e16] text-amber-50 text-xs font-bold shadow-xs"
                  >
                    Done & Return to Events
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
