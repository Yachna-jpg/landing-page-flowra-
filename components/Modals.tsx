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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0e0e12] p-8 shadow-2xl">
            <button
              onClick={onCloseContact}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-3xl font-bold text-white tracking-tight">Contact Us</h3>
            <p className="text-base text-zinc-400 mt-2 mb-8">
              We respond to all inquiries within one business hour.
            </p>

            {contactSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-white">Message sent</h4>
                <p className="text-sm text-zinc-400">
                  Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setContactSubmitted(false);
                    onCloseContact();
                  }}
                  className="btn-pill-white px-6 py-2.5 text-xs font-semibold mt-4"
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
                className="space-y-5"
              >
                <div>
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-black/50 text-white placeholder-zinc-500 text-base focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="How can we help your business?"
                    className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-black/50 text-white placeholder-zinc-500 text-base focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-pill-white py-4 text-sm font-semibold"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0e0e12] p-8 shadow-2xl">
            <button
              onClick={onCloseGetStarted}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-3xl font-bold text-white tracking-tight">
              Get Started with Flowora
            </h3>
            <p className="text-base text-zinc-400 mt-2 mb-8">
              Start qualifying your leads across Voice, WhatsApp, and Web.
            </p>

            {getStartedSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-white">Welcome to Flowora</h4>
                <p className="text-sm text-zinc-400">
                  Check your inbox for your activation link.
                </p>
                <button
                  onClick={() => {
                    setGetStartedSubmitted(false);
                    onCloseGetStarted();
                  }}
                  className="btn-pill-white px-6 py-2.5 text-xs font-semibold mt-4"
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
                className="space-y-5"
              >
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-black/50 text-white placeholder-zinc-500 text-base focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-black/50 text-white placeholder-zinc-500 text-base focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-pill-white py-4 text-sm font-semibold"
                >
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
