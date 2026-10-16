import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, GraduationCap } from 'lucide-react';

interface ContactSectionProps {
  onSuccessNotice?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessNotice }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [formMsg, setFormMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormMsg({
        text: 'Please fill in all required fields.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    // Purely client-side static handling as requested (no dynamic APIs needed)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormMsg({
        text: `Thank you, ${name}! Your message regarding "${subject}" has been received. Dr. Ratan Ghosh and the B.I Books desk will get back to you at ${email} shortly.`,
        type: 'success',
      });
      setName('');
      setEmail('');
      setMessage('');
      if (onSuccessNotice) onSuccessNotice();
    }, 400);
  };

  return (
    <div id="contact-section" className="bg-[#fcfaf7] py-14 lg:py-20 border-b border-[#ded3be]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - James Clear style clean typography */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eee5d5] border border-[#d6c7b0] text-xs font-bold text-[#5c3e23] mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-800" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#22160e] tracking-tight">
            Contact Us
          </h2>
          <p className="text-base text-[#6a584a] mt-2 leading-relaxed">
            Have questions about bookstore inventory, school curriculum orders, or wish to invite Dr. Ratan Ghosh for a teacher workshop? Send us a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clean Contact Form (matching uploaded contact.html) */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#dcd1be] rounded-2xl p-6 sm:p-8 shadow-xs">
            <form id="contactForm" onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#3d2714] mb-1.5">
                  Name <span className="text-amber-800">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#fbf9f5] border border-[#d6c8b2] rounded-xl px-4 py-2.5 text-sm text-[#2b2520] placeholder:text-[#9c8e7e] focus:outline-hidden focus:border-[#52351c] focus:ring-1 focus:ring-[#52351c]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#3d2714] mb-1.5">
                    Email <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#fbf9f5] border border-[#d6c8b2] rounded-xl px-4 py-2.5 text-sm text-[#2b2520] placeholder:text-[#9c8e7e] focus:outline-hidden focus:border-[#52351c] focus:ring-1 focus:ring-[#52351c]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#3d2714] mb-1.5">
                    Purpose / Subject
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#fbf9f5] border border-[#d6c8b2] rounded-xl px-4 py-2.5 text-sm text-[#2b2520] font-medium focus:outline-hidden focus:border-[#52351c]"
                  >
                    <option value="General Inquiry">General Bookstore Inquiry</option>
                    <option value="Book Order / Delivery">Book Order & Dispatch</option>
                    <option value="School Library Bulk Order">School / College Library Procurement</option>
                    <option value="Teacher Workshop Invitation">Teacher Workshop / Speaking Invitation</option>
                    <option value="Manuscript / Editorial">Publishing with B.I Books</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#3d2714] mb-1.5">
                  Message <span className="text-amber-800">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="How can we help? Tell us about your query, desired books, or school requirements."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#fbf9f5] border border-[#d6c8b2] rounded-xl p-4 text-sm text-[#2b2520] placeholder:text-[#9c8e7e] focus:outline-hidden focus:border-[#52351c] focus:ring-1 focus:ring-[#52351c]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-xl bg-[#382312] hover:bg-[#25160a] text-amber-50 font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-98 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <span className="text-xs text-stone-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  Replies usually within 24 business hours
                </span>
              </div>

              {/* Form Message Response `#formMsg` */}
              {formMsg && (
                <div
                  id="formMsg"
                  className={`mt-4 p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 transition-all ${
                    formMsg.type === 'success'
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                      : 'bg-red-50 text-red-900 border border-red-300'
                  }`}
                >
                  {formMsg.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : null}
                  <p className="leading-relaxed font-medium">{formMsg.text}</p>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Publisher Info & Direct Visiting Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Publisher Note Card */}
            <div className="bg-[#f5eee3] border border-[#dcd1bd] rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                <GraduationCap className="w-4 h-4 text-amber-800" />
                <span>Dr. Ratan Ghosh’s Desk</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2e1d10]">
                Direct Word from the Publisher
              </h3>
              <p className="text-xs sm:text-sm text-[#5c4939] leading-relaxed">
                "Whether you are a student looking for an annotated science guide, a fellow school teacher seeking classroom pedagogy aids, or a librarian assembling a school collection, we are here to support your journey."
              </p>
              <div className="pt-2 text-xs font-bold text-[#3d2714]">
                — Dr. Ratan Ghosh, Founder & Chief Editor
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="bg-[#ffffff] border border-[#dcd1be] rounded-2xl p-6 space-y-4 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#efe7d8] flex items-center justify-center text-amber-900 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2e1d10]">
                    Bookstore & Publishing Office
                  </h4>
                  <p className="text-xs text-[#6e5d4e] mt-0.5 leading-relaxed">
                    B.I Books Publishing House & Reading Lounge<br />
                    College Street Heritage District, Kolkata, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#ede4d4]">
                <div className="w-9 h-9 rounded-lg bg-[#efe7d8] flex items-center justify-center text-amber-900 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2e1d10]">
                    Phone & WhatsApp Desk
                  </h4>
                  <p className="text-xs text-[#6e5d4e] mt-0.5">
                    Direct Orders: +91 98310 54321<br />
                    School Procurement: 033-2241-0089
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#ede4d4]">
                <div className="w-9 h-9 rounded-lg bg-[#efe7d8] flex items-center justify-center text-amber-900 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2e1d10]">
                    Official Correspondence
                  </h4>
                  <p className="text-xs text-[#6e5d4e] mt-0.5">
                    Orders: orders@bibooks.in<br />
                    Dr. Ghosh: editor@bibooks.in
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
