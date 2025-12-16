import React from "react";
import logo from "./assets/logo.png";
import newChatIcon from "./assets/new_chat.png";
import deleteIcon from "./assets/delete.png";
// import profileIcon from "./assets/profile.png";
// import signOutIcon from "./assets/sign_out.png";
import hideSliderIcon from "./assets/hide_slider.png";
import logo2Icon from "./assets/logo_2.png";
import sliderOpenIcon from "./assets/slider_open.png";

export default function Sidebar({
  history = [],
  selectedId,
  onSelectChat,
  onNewChat,
  onClearAll,
  onDeleteChat,
  userName,
  onSignOut,
  isOpen = true,
  onToggle = () => {},
  onAbout = () => {},
  isHidden = false,
  onHiddenToggle = () => {}
}) {
  return (
    <>
      <style>{`
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutToLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        
        .sidebar-slide-in {
          animation: slideInFromLeft 0.5s ease-in-out forwards;
        }
        
        .sidebar-slide-out {
          animation: slideOutToLeft 0.5s ease-in-out forwards;
        }
      `}</style>
      
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Collapsed Sidebar for Large Screens */}
      {isHidden && (
        <div className="hidden lg:flex fixed left-0 top-0 z-40 h-20 w-screen flex-row items-center px-6 gap-4">
          {/* Logo 2 */}
          <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => { onHiddenToggle(); window.location.reload(); }}>
            <img src={logo2Icon} alt="Ayasir Logo 2" className="h-10 w-10" />
          </div>

          {/* Pill-shaped Button Container */}
          <div className="bg-[#5661F6] rounded-full p-2 flex flex-row gap-0.4 items-center justify-center shadow-lg h-12 w-[100px]">
            {/* Slider Open Button */}
            <button
              className="p-3 rounded-full hover:bg-[#f0f0f0]/10 transition-all duration-200 cursor-pointer flex items-center justify-center text-white flex-shrink-0 hover:scale-90"
              onClick={onHiddenToggle}
              title="Display Sidebar"
            >
              <img src={sliderOpenIcon} alt="slider open" className="h-6 w-6 filter brightness-0 invert" />
            </button>

            {/* New Chat Button */}
            <button
              className="p-3 rounded-full hover:bg-[#f0f0f0]/10 transition-all duration-200 cursor-pointer flex items-center justify-center text-white flex-shrink-0 hover:scale-90"
              onClick={onNewChat}
              title="Start New Conversation"
            >
              <img src={newChatIcon} alt="new chat" className="h-6 w-6 filter brightness-0 invert" />
            </button>
          </div>
        </div>
      )}

      <div
        className={`
          bg-white border-r border-[#ebecef] box-border pt-6 pb-4
          flex flex-col items-center
          fixed md:static left-0 top-0 bottom-0 z-40
          w-[260px] md:w-[260px] lg:w-[300px]
          h-screen
          rounded-none md:rounded-[28px]
          shadow-lg md:shadow-[2px_0_28px_#f5f8fc]
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isHidden ? 'lg:hidden' : 'lg:flex hidden'} ${!isHidden && 'sidebar-slide-in'}
          flex-col items-center
        `}
      >
        {/* Header with Logo and Hide Button */}
        <div className="w-[90%] md:w-[80%] flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center justify-start cursor-pointer" onClick={() => window.location.reload()}>
            <img src={logo} alt="Ayasir Logo" className="h-6 md:h-6" />
          </div>
          <button
            className="hidden lg:flex items-center justify-center h-8 w-8 rounded-lg hover:bg-[#f0f0f0] transition-colors duration-200 cursor-pointer flex-shrink-0"
            onClick={onHiddenToggle}
            title="Collapse Sidebar"
          >
            <img src={hideSliderIcon} alt="hide slider" className="h-6 w-7" />
          </button>
        </div>

        {/* New chat button */}
        <button
          className="
            w-[92%] md:w-[80%] py-[12px] md:py-[15px] rounded-[8px] bg-[#5661F6] text-white
            border-none text-[15px] md:text-[19px] font-normal mb-3 md:mb-4
            cursor-pointer shadow-[0_2px_10px_rgba(83,98,246,0.09)]
            flex items-center justify-center gap-2
          "
          onClick={onNewChat}
        >
          <img src={newChatIcon} alt="new chat" className="h-6 w-6 md:h-8 md:w-8" /> 
          <span className="hidden sm:inline">New Conversation</span>

        </button>

        {/* Conversations header */}
        <div className="w-[92%] md:w-[80%] text-left">
          <div className="font-semibold text-[13px] md:text-[15px] mb-1 text-[#292d3e] mt-1 md:mt-2 flex items-center justify-between">
            <span>Conversation History</span>
            <span
              className="font-normal text-[12px] md:text-[14px] text-[#5362F6] cursor-pointer hover:text-[#314cf5] transition-colors bg-[#5362F6]/10 px-2 py-1 rounded"
              onClick={onClearAll}
              title="Remove all conversations"
            >
              Clear All
            </span>
          </div>
          <div className="text-[11px] md:text-[12px] text-[#5362F6] opacity-100 mb-3">
            All conversations are automatically cleared upon closing this webpage.
          </div>
        </div>

        {/* Conversations list (scrollable area) */}
        <div
          className="
            w-[92%] md:w-[80%]
            flex-1
            overflow-y-auto
            mb-4 md:mb-3
            pr-1
          "
        >
          {history.map(chat => (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`
                mb-1 flex items-center py-[10px] px-[10px] rounded-[8px]
                font-medium text-[13px] md:text-[15px] cursor-pointer
                ${
                  chat.id === selectedId
                    ? "bg-[#eef4ff] text-[#314cf5] shadow-[0_1px_8px_#e1e7fa]"
                    : "bg-white text-[#29314e] border border-transparent hover:border-[#eef4ff]"
                }
              `}
            >
              <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {chat.title}
              </span>
              {chat.id === selectedId && history.length > 1 && (
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="ml-1 h-5 w-5 md:h-6 md:w-6 cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0"
                  onClick={e => {
                    e.stopPropagation();
                    onDeleteChat(chat.id);
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* User + Sign out */}
        {/* <div className="w-[92%] md:w-[80%] mt-auto">
          <div className="bg-[#5661F6]/10 rounded-[8px] py-2 px-3 md:px-4 flex items-center">
            <div className="mr-2 h-7 w-7 md:h-8 md:w-8 rounded-full border border-[#5362F6] bg-[#5362F6]/10 flex items-center justify-center">
              <img src={profileIcon} alt="profile" className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="font-semibold text-[12px] md:text-[14px] text-[#000000] truncate">
              {userName || "User"}
            </span>
          </div>
          <div
            className="
              text-center text-[#5362F6] text-[13px] md:text-[16px]
              mt-3 md:mt-4 cursor-pointer flex items-center justify-center gap-2 w-full
            "
            onClick={onSignOut}
          >
            <img src={signOutIcon} alt="sign out" className="h-4 w-4 md:h-6 md:w-6" />
            <span>Sign out</span>
          </div>
        </div> */}

        {/* About button */}
        <div className="w-[92%] md:w-[80%] mt-auto">
          <button
            className="
              w-full py-2.5 md:py-3 px-4 rounded-lg
              bg-[#5362F6]/10 hover:bg-[#5362F6]/20
              text-[#5362F6] text-[13px] md:text-[15px] font-medium
              border border-[#5362F6]/30 hover:border-[#5362F6]/50
              cursor-pointer transition-all duration-200
              flex items-center justify-center gap-2
            "
            onClick={onAbout}
            title="View application information"
          >
            About
          </button>
        </div>





      </div>
    </>
  );
}
