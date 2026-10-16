import React, { useState } from 'react';
import {
  X,
  Bookmark,
  CheckCircle,
  Truck,
  Store,
  GraduationCap,
  Sparkles,
  Phone,
  Mail,
  User,
  Building
} from 'lucide-react';
import { Book } from '../types';

interface ReserveBookModalProps {
  book: Book | null;
  onClose: () => void;
}

export const ReserveBookModal: React.FC<ReserveBookModalProps> = ({
  book,
  onClose,
}) => {
  const [orderType, setOrderType] = useState<'store-pickup' | 'delivery'>('store-pickup');
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  if (!book) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim()) return;

    const code = `BIB-RES-${Math.floor(100000 + Math.random() * 900000)}`;
    setReservationCode(code);
    setIsConfirmed(true);
  };

  const totalPrice = book.price * quantity;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#fcfaf7] border border-[#d6cdb7] rounded-2xl max-w-lg w-full my-auto overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-[#ded3be] bg-[#f5eee3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-800" />
            <h3 className="font-serif font-bold text-lg text-[#2e1d10]">
              {isConfirmed ? 'Reservation Confirmed' : 'Bookstore Reservation & Order'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-[#ede5d6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isConfirmed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Selected Book Summary Bar */}
              <div className="flex items-center gap-3 bg-[#f0ebd9] p-3 rounded-xl border border-[#ded1ba]">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-12 h-16 object-cover rounded-sm shadow-xs shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-sm text-[#2e1d10] truncate">
                    {book.title}
                  </h4>
                  <p className="text-xs text-[#523d2b] truncate">
                    by {book.author}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-stone-700 mt-1">
                    <span className="font-bold text-[#2e1d10]">₹{book.price}</span>
                    <span>•</span>
                    <span className="text-emerald-800 font-semibold">{book.stockQuantity} copies available</span>
                  </div>
                </div>
              </div>

              {/* Order Mode: In-Store Pickup or Express Delivery */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setOrderType('store-pickup')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-center transition-all ${
                    orderType === 'store-pickup'
                      ? 'bg-amber-100/70 border-amber-800 text-amber-950 font-bold shadow-2xs'
                      : 'bg-[#f7f2ea] border-[#dcd1be] text-stone-700'
                  }`}
                >
                  <Store className="w-4 h-4 text-amber-800" />
                  <span>Hold for Store Pickup</span>
                  <span className="text-[10px] text-stone-500 font-normal">Pick up at B.I Books</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-center transition-all ${
                    orderType === 'delivery'
                      ? 'bg-amber-100/70 border-amber-800 text-amber-950 font-bold shadow-2xs'
                      : 'bg-[#f7f2ea] border-[#dcd1be] text-stone-700'
                  }`}
                >
                  <Truck className="w-4 h-4 text-amber-800" />
                  <span>Home / School Delivery</span>
                  <span className="text-[10px] text-stone-500 font-normal">Courier within 24-48 hrs</span>
                </button>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3 pt-1 text-xs">
                <div>
                  <label className="block font-semibold text-[#422c18] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Joydeep Ghosh"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg px-3 py-2 text-xs text-[#2b2520]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#422c18] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98300 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg px-3 py-2 text-xs text-[#2b2520]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#422c18] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg px-3 py-2 text-xs text-[#2b2520]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#422c18] mb-1">
                      Quantity (Copies)
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg px-3 py-2 text-xs text-[#2b2520]"
                    >
                      <option value={1}>1 Copy (Personal)</option>
                      <option value={2}>2 Copies</option>
                      <option value={5}>5 Copies (Reading Club)</option>
                      <option value={15}>15 Copies (Classroom Set)</option>
                      <option value={30}>30+ Copies (Institutional Bulk)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#422c18] mb-1">
                      School / College (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. St. Xavier’s / Vidyasagar"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg px-3 py-2 text-xs text-[#2b2520]"
                    />
                  </div>
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="block font-semibold text-[#422c18] mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Full street address with PIN code"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full bg-[#f8f5ee] border border-[#d6c7b0] rounded-lg p-2.5 text-xs text-[#2b2520]"
                    />
                  </div>
                )}
              </div>

              {/* Total Calculation */}
              <div className="pt-2 border-t border-[#ede4d4] flex items-center justify-between text-xs">
                <div>
                  <span className="text-stone-500 block">Estimated Amount:</span>
                  <span className="font-serif font-black text-xl text-[#2e1d0f]">
                    ₹{totalPrice}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-[#ede5d6]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#4a2e16] hover:bg-[#38210d] text-amber-50 text-xs font-bold shadow-md"
                  >
                    Submit Reservation
                  </button>
                </div>
              </div>

            </form>
          ) : (
            /* Reservation Slip Confirmation */
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border-2 border-emerald-300">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div>
                <h4 className="font-serif font-bold text-xl text-[#2e1d0f]">
                  Reservation Slip Issued
                </h4>
                <p className="text-xs text-[#6e5d4e] mt-1">
                  We have put your order on priority hold with the B.I Books inventory desk.
                </p>
              </div>

              <div className="bg-[#f2ece0] border-2 border-dashed border-[#cdbfa9] rounded-xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between items-center border-b border-[#ddcfba] pb-2">
                  <span className="font-bold text-[#3d2714]">B.I Books Reservation Slip</span>
                  <span className="font-mono font-bold text-amber-900">{reservationCode}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">Book Reserved:</span>
                  <span className="font-serif font-bold text-sm text-[#2e1d0f]">{book.title}</span>
                  <span className="text-stone-600 block text-xs">by {book.author} · {quantity} copy (₹{totalPrice})</span>
                </div>
                <div className="pt-1 border-t border-[#ddcfba] flex justify-between">
                  <span className="text-stone-500">Reserved For:</span>
                  <span className="font-semibold text-stone-800">{customerName} ({phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Fulfillment Mode:</span>
                  <span className="font-semibold text-stone-800">
                    {orderType === 'store-pickup' ? 'Hold at Bookstore Lounge' : 'Courier Dispatch'}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#ede5d6] rounded-xl text-left text-[11px] text-[#5c4a3b] space-y-1">
                <p className="font-bold text-[#352212]">Bookstore Visiting & Pickup Hours:</p>
                <p>B.I Books Literary House · Monday - Saturday (10:00 AM - 8:30 PM)</p>
                <p>Support Desk: +91 98310 54321 / orders@bibooks.in</p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-[#4a2e16] text-amber-50 text-xs font-bold"
              >
                Close Reservation
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
