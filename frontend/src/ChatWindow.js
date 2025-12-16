// Import React hooks for state management and DOM references
import React, { useState, useRef, useEffect } from "react";

// Markdown rendering with math formula support
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

// Import UI icons and logos
import sendLightIcon from "./assets/Send_light.png";
import bookIcon from "./assets/book.png";
import ethicsIcon from "./assets/ethics.png";
import historyIcon from "./assets/history.png";
import guideIcon from "./assets/guide.png";
import logo2Icon from "./assets/logo_2.png";
import logo from "./assets/logo.png";

// Custom scrollbar styling for chat window
const scrollbarStyles = `
  .chat-window::-webkit-scrollbar {
    width: 6px;
  }
  .chat-window::-webkit-scrollbar-track {
    background: transparent;
  }
  .chat-window::-webkit-scrollbar-thumb {
    background: #d2d7e5;
    border-radius: 999px;
  }
  .chat-window::-webkit-scrollbar-thumb:hover {
    background: #b8c0d8;
  }
  @keyframes spin-smooth {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .spin-smooth {
    animation: spin-smooth 1s linear infinite;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
    border: 1px solid #d1d5db;
    background-color: transparent;
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  thead {
    background-color: transparent;
  }
  th {
    border: 1px solid #d1d5db;
    padding: 12px 8px;
    text-align: left;
    font-weight: 700;
    color: #000000;
    font-size: 14px;
    white-space: nowrap;
  }
  td {
    border: 1px solid #d1d5db;
    padding: 12px 8px;
    color: #000000;
    font-size: 14px;
    white-space: nowrap;
  }
  tbody tr:hover {
    background-color: transparent;
  }
  @media (max-width: 640px) {
    th, td {
      padding: 8px 6px;
      font-size: 12px;
    }
  }
`;

// SVG Icons for UI actions
// Copy button icon
const CopyIcon = () => (
  <svg className="h-4 w-4" fill="#5661F61A" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />
  </svg>
);

// Check/confirmation icon shown after copying
const CheckIcon = () => (
  <svg className="h-4 w-4" fill="#5661F61A" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

// Document/sources icon for showing citations
const SourcesIcon = () => (
  <svg className="h-4 w-4" fill="#5661F61A" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// Utility function to copy text to clipboard
const copyToClipboard = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
};

// Modal component for displaying source citations
function SourcesModal({ sources, onClose }) {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl min-w-[340px] max-w-[90vw] sm:max-w-[550px] overflow-hidden">
        <div className="bg-gradient-to-r from-[#5362F6] to-[#4251d9] px-8 py-6 flex items-center gap-3">
          <h2 className="text-2xl font-bold text-white">Sources</h2>
        </div>

        <div className="p-8">
          <ul className="pl-0 list-none m-0 space-y-3 max-h-[420px] overflow-y-auto">
            {sources.map((source, idx) => (
              <li
                key={idx}
                className="flex gap-4 items-start border border-[#eef4ff] hover:border-[#5362F6] bg-[#f8f9ff] hover:bg-[#f0f3ff] p-4 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <span className="text-[#5362F6] font-bold text-sm flex-shrink-0 bg-white border border-[#5362F6]/30 px-3 py-1.5 rounded-lg min-w-[28px] text-center">
                  {idx + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5362F6] hover:text-[#4251d9] font-semibold break-all text-sm block hover:underline transition-colors"
                  >
                    {source.title || source.url}
                  </a>
                  <p className="text-[#999] text-xs mt-1 break-all line-clamp-1">
                    {source.url}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#f8f9ff] px-8 py-4 flex justify-end border-t border-[#eef4ff]">
          <button
            className="bg-[#5362F6] text-white rounded-lg font-semibold px-8 py-2.5 cursor-pointer hover:bg-[#4251d9] transition-colors duration-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ChatWindow({ chat, onSend, loading, isHidden = false }) {
  const [input, setInput] = useState("");
  const [showSourcesIdx, setShowSourcesIdx] = useState(null);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [error, setError] = useState("");

  const chatWindowRef = useRef(null);
  const inputRef = useRef(null);

  const suggestedQuestions = [
    { icon: bookIcon, title: "Quran & Sunnah", desc: "Ask about Islamic teachings" },
    { icon: ethicsIcon, title: "Islamic Ethics", desc: "Learn about moral principles" },
    { icon: historyIcon, title: "Islamic History", desc: "Explore Islamic heritage" },
    { icon: guideIcon, title: "Islamic Guidance", desc: "Get answers to your questions" },
  ];

  // Auto-scroll to bottom whenever chat changes or loading state changes
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chat, loading]);

  // Handle sending a message - validates input and calls onSend callback
  const handleSend = () => {
    if (loading) return;
    if (!input.trim()) {
      setError("Please enter a message before sending.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    setError("");
    setInput("");
    onSend(input);
  };

  // Handle Enter key press to send message (Shift+Enter for newline)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Scroll input field into view on mobile when focused (keyboard handling)
  const handleInputFocus = () => {
    // Scroll input into view when focused on mobile
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 300);
  };

  // Main render - Chat UI layout
  return (
    <div className={`w-full h-screen max-h-screen flex flex-col overflow-hidden`}>
      <style>{scrollbarStyles}</style>

      {/* Mobile header with logo - hidden on desktop (md:hidden) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-20 sm:h-24 bg-white/30 backdrop-blur-md border-b border-white/20 z-20 flex items-center px-6 sm:px-8">
        <button 
          onClick={() => window.location.reload()}
          className="cursor-pointer p-2 hover:opacity-80 transition-opacity"
          title="Click to reload"
        >
          <img src={logo} alt=" Ayasir Logo" className="h-9 w-15 sm:h-10 sm:w-10" />
        </button>
      </div>

      {/* Main scrollable chat content area */}
      <div
        ref={chatWindowRef}
        className="chat-window flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-transparent px-3 sm:px-6 md:px-9 pt-4 sm:pt-6 md:pt-8 pb-1 md:pb-4 rounded-2xl"
      >
        {/* Welcome screen - shown when no messages yet */}
        {chat.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center min-h-full py-8">
            <h2 className="text-4xl md:text-4xl font-medium text-[#27282a] mb-2">Welcome to Ayasir</h2>
            <p className="text-sm md:text-base text-[#5362F6] mb-8">Your Islamic Knowledge Assistant</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onSend(q.title);
                  }}
                  className="p-5 bg-white border border-[#d0d7e8] rounded-xl hover:border-[#5362F6] hover:bg-[#f8f9ff] transition-all duration-200 text-left group"
                >
                  <img src={q.icon} alt="icon" className="h-8 w-8 mb-2" />
                  <h3 className="font-semibold text-[#27282a] group-hover:text-[#5362F6] transition-colors">{q.title}</h3>
                  <p className="text-sm text-[#7a86b8]">{q.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat message history - alternates between user and assistant messages */}
        {chat.map((m, i) => (
          <div
            key={i}
            className={`mb-4 ${m.sender === "user" ? "text-right" : "text-left"}`}
          >
            <div
              className={`inline-block ${
                m.sender === "user" ? "bg-[#f0f3fd]" : "bg-[#eef7fa]"
              } text-gray-900 rounded-2xl px-5 py-3 text-[17px] max-w-[74%] break-words leading-relaxed text-left relative`}
            >
              {/* User message - plain text */}
              {m.sender === "user" ? (
                m.text
              ) : (
                <>
                  {/* Assistant message - formatted markdown with math support */}
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      strong: ({ node, ...props }) => (
                        <strong className="font-bold" {...props} />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="my-2 leading-relaxed" {...props} />
                      ),
                      table: ({ node, ...props }) => (
                        <table className="w-full border-collapse my-3 border border-gray-300" {...props} />
                      ),
                      thead: ({ node, ...props }) => (
                        <thead className="bg-gray-100" {...props} />
                      ),
                      tbody: ({ node, ...props }) => (
                        <tbody {...props} />
                      ),
                      tr: ({ node, ...props }) => (
                        <tr className="border border-gray-300" {...props} />
                      ),
                      th: ({ node, ...props }) => (
                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold" {...props} />
                      ),
                      td: ({ node, ...props }) => (
                        <td className="border border-gray-300 px-3 py-2" {...props} />
                      ),
                    }}
                  >
                    {m.text}
                  </ReactMarkdown>

                  {/* Action buttons - Sources and Copy */}
                  <div className="flex gap-2 mt-3">
                    {m.sources && m.sources.length > 0 && (
                      <button
                        className="px-3 py-1.5 text-sm rounded-lg border border-[#5362F6]/20 bg-[#5362F6]/5 text-[#5362F6] font-medium cursor-pointer transition-colors hover:bg-[#5362F6]/10 flex items-center gap-1.5"
                        onClick={() => setShowSourcesIdx(i)}
                      >
                        <SourcesIcon />
                        Sources
                      </button>
                    )}
                    <button
                      className="px-3 py-1.5 text-sm rounded-lg border border-[#5362F6]/20 bg-[#5362F6]/5 text-[#5362F6] font-medium cursor-pointer transition-colors hover:bg-[#5362F6]/10 flex items-center gap-1.5"
                      onClick={() => {
                        copyToClipboard(m.text);
                        setCopiedIdx(i);
                        setTimeout(() => setCopiedIdx(null), 1000);
                      }}
                    >
                      {copiedIdx === i ? (
                        <>
                          <CheckIcon />
                          Copied!
                        </>
                      ) : (
                        <>
                          <CopyIcon />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Loading indicator - shown while AI is thinking */}
        {loading && (
          <div className="text-center text-[#5362F6] mt-4 text-sm flex items-center justify-center gap-3">
            <img
              src={logo2Icon}
              alt="Loading"
              className="h-6 w-6 spin-smooth"
            />
            <span className="font-medium">Ayasir is thinking</span>
          </div>
        )}
      </div>

      {/* Sources modal - displayed when user clicks "Sources" button */}
      {showSourcesIdx !== null && (
        <SourcesModal
          sources={chat[showSourcesIdx]?.sources || []}
          onClose={() => setShowSourcesIdx(null)}
        />
      )}

      {/* Fixed input section at bottom */}
      <div className="flex-shrink-0 w-full px-3 sm:px-6 md:px-9 -mt-2 sm:-mt-1 md:mt-0 py-0 pb-20 sm:pb-20 md:py-2">
        {/* Error message display */}
        {error && (
          <div className="mx-auto max-w-[580px] mb-3 px-4 py-2.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center gap-2">
            <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
        )}

        {/* Message input form */}
        <form
          className="relative mx-auto flex items-center bg-white border border-[#d0d7e8] rounded-xl hover:border-[#5362F6] transition-all duration-300 px-3 pr-2 w-full max-w-[660px] h-11 md:h-14"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            placeholder="Ask Ayasir..."
            className="flex-1 bg-transparent border-none outline-none text-base px-4 py-3 text-[#27282a] placeholder-[#999]"
            disabled={loading}
          />

          {/* Send button with loading state */}
          <button
            type="submit"
            className={`rounded-md w-8 h-8 md:w-10 md:h-10 ml-3 flex items-center justify-center border-none text-white font-medium transition-all duration-200 ${
              loading || !input.trim()
                ? "opacity-60 cursor-not-allowed bg-gradient-to-r from-[#b8c0d8] to-[#a0aacb]"
                : "bg-gradient-to-r from-[#5362F6] to-[#4251d9] cursor-pointer hover:from-[#4251d9] hover:to-[#3341c9]"
            }`}
            disabled={loading || !input.trim()}
          >
            {loading ? (
              <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <img src={sendLightIcon} alt="send" className="h-4 w-4 md:h-5 md:w-5" />
            )}
          </button>
        </form>

        {/* Disclaimer message */}
        <div className="mt-1 md:mt-2 text-[11px] md:text-[13px] text-[#5362F6] text-center">
          This is for learning purposes, not for issuing a fatwa.
        </div>
      </div>
    </div>
  );
}
