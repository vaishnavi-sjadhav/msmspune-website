"use client";

import React, { useState } from "react";

export function ConnectWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "callback">("chat");
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    { sender: "bot", text: "Welcome to MSMS Pune! How can we assist your academic journey today?" },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userText = message;
    setMessage("");
    setChatLog((prev) => [...prev, { sender: "user", text: userText }]);

    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thank you for inquiring! Admissions for 2026-27 are currently open. You can apply directly through our Admissions Portal or leave your contact number for an advisor call.",
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-7 sm:right-7 z-40">
      {/* Popover Window */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-[calc(100vw-32px)] sm:w-[360px] max-w-[360px] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden mb-3 animate-in fade-in zoom-in-95 duration-200 flex flex-col">
          {/* Header */}
          <div className="bg-[#4A0E1B] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-amber-300 text-xs">
                M
              </div>
              <div>
                <h4 className="text-sm font-semibold leading-tight">MSMS Admissions Desk</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-white/80">Online & Ready to Help</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close connect popover"
            >
              ✕
            </button>
          </div>

          {/* Quick Tabs */}
          <div className="flex border-b border-neutral-100 bg-neutral-50 text-xs">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 py-2 font-medium transition-colors ${
                activeTab === "chat"
                  ? "text-[#4A0E1B] border-b-2 border-[#4A0E1B] bg-white"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Live Chat
            </button>
            <button
              onClick={() => setActiveTab("callback")}
              className={`flex-1 py-2 font-medium transition-colors ${
                activeTab === "callback"
                  ? "text-[#4A0E1B] border-b-2 border-[#4A0E1B] bg-white"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Request Call
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "chat" ? (
            <div className="flex flex-col h-[280px]">
              <div className="flex-1 p-3.5 overflow-y-auto space-y-2.5 bg-neutral-50/50">
                {chatLog.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex ${item.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[82%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                        item.sender === "user"
                          ? "bg-[#4A0E1B] text-white rounded-tr-none"
                          : "bg-white text-neutral-800 border border-neutral-200/70 shadow-sm rounded-tl-none"
                      }`}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-2 border-t border-neutral-100 bg-white flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 text-xs px-3 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#4A0E1B]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#4A0E1B] text-white text-xs font-semibold rounded-lg hover:bg-[#3b0a13] transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              <p className="text-xs text-neutral-600">
                Leave your mobile number and our senior admissions counselor will reach out within 15 minutes.
              </p>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full text-xs px-3 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#4A0E1B]"
              />
              <input
                type="tel"
                placeholder="Phone Number (+91)"
                className="w-full text-xs px-3 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#4A0E1B]"
              />
              <button
                type="button"
                onClick={() => {
                  alert("Thank you! An admissions counselor will call you shortly.");
                  setIsOpen(false);
                }}
                className="w-full py-2 bg-[#4A0E1B] text-white text-xs font-semibold rounded-lg hover:bg-[#3b0a13] transition-colors"
              >
                Schedule Immediate Callback
              </button>
            </div>
          )}
        </div>
      )}

      {/* Pill Connect Button (matches bottom right of reference screenshot) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-2 bg-[#4A5D52]/90 hover:bg-[#3E5045] backdrop-blur-md text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 border border-white/20 select-none cursor-pointer"
        aria-label="Connect with MSMS Advisors"
      >
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white text-xs">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6l-4 4V5z" />
          </svg>
        </span>
        <span className="text-xs sm:text-sm font-medium tracking-wide">Connect</span>
      </button>
    </div>
  );
}
