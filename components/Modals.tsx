"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface ModalsProps {
  contactOpen: boolean;
  onCloseContact: () => void;
  getStartedOpen: boolean;
  onCloseGetStarted: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  contactOpen,
  onCloseContact,
  getStartedOpen,
  onCloseGetStarted,
}) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [getStartedSubmitted, setGetStartedSubmitted] = useState(false);

  return (
    <>
      {/* CONTACT MODAL */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <button
              onClick={onCloseContact}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Contact Us</h3>
            <p className="text-base text-slate-600 mt-2 mb-8">
              We respond to all inquiries within one business hour.
            </p>

            {contactSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Message sent</h4>
                <p className="text-sm text-slate-600">
                  Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setContactSubmitted(false);
                    onCloseContact();
                  }}
                  className="btn-pill-black px-6 py-2.5 text-xs font-semibold mt-4 cursor-pointer"
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
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="How can we help your business?"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-pill-black py-4 text-sm font-semibold cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* GET STARTED MODAL */}
      {getStartedOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <button
              onClick={onCloseGetStarted}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
              Reserve your ₹9 architecture session
            </h3>
            <p className="text-base text-slate-600 mt-2 mb-8">
              A 20-minute live production walkthrough with a senior systems engineer. Your ₹9 becomes ₹500 in platform balance after joining.
            </p>

            {getStartedSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Welcome to Flowra</h4>
                <p className="text-sm text-slate-600">
                  Check your inbox for your activation link.
                </p>
                <button
                  onClick={() => {
                    setGetStartedSubmitted(false);
                    onCloseGetStarted();
                  }}
                  className="btn-pill-black px-6 py-2.5 text-xs font-semibold mt-4 cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setGetStartedSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-pill-emerald py-4 text-sm font-semibold cursor-pointer text-white"
                >
                  Reserve my ₹9 session
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
