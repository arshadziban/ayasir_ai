import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import AboutPage from "./AboutPage";

export default function App() {
  // Load from localStorage or create initial chat
  const getInitialState = () => {
    const stored = localStorage.getItem("ayasirChatHistory");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stored chat history:", e);
      }
    }
    return [{ id: Date.now(), title: "New Chat", messages: [] }];
  };

  const initialChat = getInitialState()[0];
  const [chatHistory, setChatHistory] = useState(getInitialState());
  const [selectedId, setSelectedId] = useState(initialChat.id);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Save to localStorage whenever chatHistory changes
  useEffect(() => {
    localStorage.setItem("ayasirChatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Send and update
  const handleSendMessage = async (message) => {
    if (loading) return;
    setLoading(true);
    const idx = chatHistory.findIndex(c => c.id === selectedId);
    if (idx === -1) return;
    const allChats = [...chatHistory];
    allChats[idx].messages.push({ sender: "user", text: message });
    setChatHistory(allChats);
    try {
      const response = await fetch("https://back.techsabyte.com/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: message })
      });
      const data = await response.json();
      allChats[idx].messages.push({
        sender: "bot",
        text: data.answer,
        sources: data.sources || []
      });
      if (allChats[idx].messages.length === 2) {
        allChats[idx].title = message.slice(0, 28) || "Chat";
      }
      setChatHistory([...allChats]);
    } catch (error) {
      allChats[idx].messages.push({
        sender: "bot",
        text: "Sorry, there was an error processing your request."
      });
      setChatHistory([...allChats]);
    } finally {
      setLoading(false);
    }
  };

  // New chat
  const handleNewChat = () => {
    const newChat = { id: Date.now(), title: "New Chat", messages: [] };
    setChatHistory(prev => [newChat, ...prev]);
    setSelectedId(newChat.id);
    setSidebarOpen(false); // Close sidebar on mobile
  };

  // Select
  const handleSelectChat = (id) => {
    setSelectedId(id);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  // Clear all
  const handleClearAll = () => {
    setChatHistory([]);
    handleNewChat();
  };

  // Delete chat
  const handleDeleteChat = (id) => {
    const updatedHistory = chatHistory.filter(chat => chat.id !== id);
    if (updatedHistory.length === 0) {
      const newChat = { id: Date.now(), title: "New Chat", messages: [] };
      setChatHistory([newChat]);
      setSelectedId(newChat.id);
    } else {
      setChatHistory(updatedHistory);
      if (selectedId === id) {
        setSelectedId(updatedHistory[0].id);
      }
    }
  };

  // Dummy signout
  const handleSignOut = () => { alert("Signed out!"); };

  if (showAbout) {
    return <AboutPage onClose={() => setShowAbout(false)} />;
  }

  return (
    <div className="h-screen bg-[#f6f8fb] flex flex-row items-stretch overflow-hidden">
      {/* Menu button for mobile */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-[#5661F6] text-white p-2 rounded-lg transition-all duration-300"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <Sidebar
        history={chatHistory}
        selectedId={selectedId}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onClearAll={handleClearAll}
        onDeleteChat={handleDeleteChat}
        userName="User name"
        onSignOut={handleSignOut}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onAbout={() => setShowAbout(true)}
        isHidden={sidebarHidden}
        onHiddenToggle={() => setSidebarHidden(!sidebarHidden)}
      />
      <main className="flex-1 bg-[#f6f8fb] flex flex-col items-center justify-start md:justify-center w-full md:pt-0 overflow-hidden">
        <div className="w-[720px] max-w-[90vw] h-full md:h-auto flex flex-col mt-14 md:mt-0">
          <ChatWindow
            chat={(chatHistory.find(c => c.id === selectedId)?.messages) || []}
            onSend={handleSendMessage}
            loading={loading}
            isHidden={sidebarHidden}
          />
        </div>
      </main>
    </div>
  );
}
