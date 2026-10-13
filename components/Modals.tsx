"use client";

import React, { useState, useMemo } from "react";
import {
  X,
  Check,
  Calendar,
  Clock,
  Mail,
  User,
  Building,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface ModalsProps {
  contactOpen: boolean;
  onCloseContact: () => void;
  getStartedOpen: boolean;
  onCloseGetStarted: () => void;
}

// Available demo time slots in IST
const TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
];

export const Modals: React.FC<ModalsProps> = ({
  contactOpen,
  onCloseContact,
  getStartedOpen,
  onCloseGetStarted,
}) => {
  // Contact Modal State
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Demo Booking State
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3>(1); // 1: Date & Time, 2: Business Info, 3: Confirmed

  // Generate the next 6 available business days dynamically
  const availableDates = useMemo(() => {
    const dates = [];
    const now = new Date();
    let added = 0;
    let dayOffset = 0;

    while (added < 6) {
      const d = new Date(now);
      d.setDate(now.getDate() + dayOffset);
      const dayOfWeek = d.getDay(); // 0 is Sunday
      // Skip Sundays
      if (dayOfWeek !== 0) {
        const isToday = dayOffset === 0;
        const isTomorrow = dayOffset === 1;
        const label = isToday
          ? "Today"
          : isTomorrow
          ? "Tomorrow"
          : d.toLocaleDateString("en-US", { weekday: "short" });
        const monthDay = d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        const fullDateStr = d.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        dates.push({
          id: d.toISOString().split("T")[0],
          label,
          monthDay,
          fullDateStr,
        });
        added++;
      }
      dayOffset++;
    }
    return dates;
  }, []);

  const [selectedDate, setSelectedDate] = useState<string>(
    availableDates[0]?.id || ""
  );
  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[1]);

  // Business Intake Form
  const [businessEmail, setBusinessEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    "WhatsApp Bot",
    "AI Voice Calls",
  ]);

  const toggleChannel = (channel: string) => {
    setSelectedChannels((prev) =>
      prev.includes(channel)
        ? prev.filter((c) => c !== channel)
        : [...prev, channel]
    );
  };

  const handleDateSelect = (dateId: string) => {
    setSelectedDate(dateId);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleProceedToDetails = () => {
    if (selectedDate && selectedTime) {
      setBookingStep(2);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessEmail || !fullName) return;
    setBookingStep(3);
  };

  const handleCloseBooking = () => {
    setBookingStep(1);
    onCloseGetStarted();
  };

  const selectedDateObj = availableDates.find((d) => d.id === selectedDate);

  return (
    <>
      {/* 1. CONTACT MODAL */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <button
              onClick={onCloseContact}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer rounded-full hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
              Contact Systems Team
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 mb-6">
              Inquire about enterprise API limits, custom telephonic trunks, or bespoke workflow integrations.
            </p>

            {contactSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  Message Dispatched
                </h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  An enterprise engineer will reply to your work inbox within 1 business hour.
                </p>
                <button
                  onClick={() => {
                    setContactSubmitted(false);
                    onCloseContact();
                  }}
                  className="btn-pill-black bg-slate-900 text-white px-7 py-2.5 text-xs font-semibold rounded-full shadow-sm hover:bg-slate-800 transition-all mt-4 cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Business Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full pl-11 pr-5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your current lead volume, CRM, and target workflow..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-pill-black bg-slate-900 text-white py-3.5 text-sm font-semibold rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.18)] hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.25)] transition-all cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. DEMO BOOKING & CALENDAR TIME SLOT MODAL */}
      {getStartedOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl lg:max-w-3xl rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Header Strip */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 sm:px-8 py-5 bg-slate-50/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Live Demo & Architecture Session
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                    Book ₹9 Session with Systems Team
                  </h3>
                </div>
              </div>
              <button
                onClick={handleCloseBooking}
                className="p-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer rounded-full hover:bg-slate-200/60"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              {/* STEP 1: Select Date & Time Slot */}
              {bookingStep === 1 && (
                <div className="space-y-6">
                  {/* Overview callout */}
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-emerald-900 font-medium">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>20-minute 1:1 Live Setup: We configure your WhatsApp & voice rails</span>
                    </div>
                    <span className="font-semibold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full text-xs">
                      ₹9 → ₹500 credit back
                    </span>
                  </div>

                  {/* 1. Date Picker */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span>1. Select Date</span>
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                      {availableDates.map((item) => {
                        const isSelected = selectedDate === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleDateSelect(item.id)}
                            className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? "border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-900/10"
                                : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <span
                              className={`block text-[11px] font-semibold uppercase tracking-wider ${
                                isSelected ? "text-slate-300" : "text-slate-500"
                              }`}
                            >
                              {item.label}
                            </span>
                            <span className="block text-sm font-bold mt-1">
                              {item.monthDay}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Time Slot Picker */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <span>2. Select Time Slot</span>
                      </label>
                      <span className="text-xs text-slate-500 font-medium">
                        India Standard Time (IST)
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500/20"
                                : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <span>{slot}</span>
                            {isSelected ? (
                              <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                            ) : (
                              <span className="w-2 h-2 rounded-full bg-slate-200" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Continue Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      Selected:{" "}
                      <span className="font-semibold text-slate-800">
                        {selectedDateObj?.fullDateStr} at {selectedTime}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleProceedToDetails}
                      className="btn-pill-black bg-slate-900 text-white px-7 py-3 text-sm font-semibold rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.18)] hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Continue to Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Business Email & Company Details */}
              {bookingStep === 2 && (
                <form onSubmit={handleConfirmBooking} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        Slot Reserved For
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {selectedDateObj?.fullDateStr} · {selectedTime} IST
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setBookingStep(1)}
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline cursor-pointer"
                    >
                      Change slot
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Email */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
                        <span>Business / Work Email *</span>
                        <span className="text-[11px] font-normal text-emerald-700">
                          Invite sent here
                        </span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="email"
                          value={businessEmail}
                          onChange={(e) => setBusinessEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full pl-11 pr-5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full pl-11 pr-5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Company / Business Name"
                          className="w-full pl-11 pr-5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* WhatsApp / Phone Number */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
                        <span>WhatsApp / Phone Number *</span>
                        <span className="text-[11px] font-normal text-slate-500">
                          For reminder & meeting join link
                        </span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full pl-11 pr-5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Channels Interest */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Channels You Need to Automate
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "WhatsApp Bot",
                        "AI Voice Calls",
                        "Website Chat",
                        "CRM & Google Sheets",
                        "Shared Team Inbox",
                      ].map((channel) => {
                        const active = selectedChannels.includes(channel);
                        return (
                          <button
                            key={channel}
                            type="button"
                            onClick={() => toggleChannel(channel)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                              active
                                ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                                : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            {active ? "✓ " : "+ "}
                            {channel}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setBookingStep(1)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="btn-pill-emerald bg-emerald-600 text-white px-8 py-3.5 text-sm font-semibold rounded-full shadow-[0_4px_18px_rgba(16,185,129,0.3)] hover:bg-emerald-700 hover:shadow-[0_6px_24px_rgba(16,185,129,0.45)] transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Confirm & Reserve for ₹9</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: Confirmed Success View */}
              {bookingStep === 3 && (
                <div className="py-6 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 font-heading">
                      Architecture Session Confirmed!
                    </h4>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                      Your 20-minute live session with a Flowra systems architect is confirmed. We will map your knowledge catalog and live Meta WhatsApp connection.
                    </p>
                  </div>

                  {/* Booking Receipt Box */}
                  <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Date & Time</span>
                      <span className="font-bold text-slate-900">
                        {selectedDateObj?.fullDateStr} · {selectedTime} IST
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Business Email</span>
                      <span className="font-semibold text-slate-900">
                        {businessEmail}
                      </span>
                    </div>
                    {phone && (
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">WhatsApp Alert</span>
                        <span className="font-semibold text-slate-900">
                          {phone}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-500">Credit Guarantee</span>
                      <span className="font-bold text-emerald-700">
                        ₹500 Balance Credited Back
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleCloseBooking}
                      className="btn-pill-black bg-slate-900 text-white px-8 py-3 text-sm font-semibold rounded-full shadow-sm hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      Done
                    </button>
                    <a
                      href="https://calendar.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors flex items-center gap-1.5"
                    >
                      <span>Add to Google Calendar</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
