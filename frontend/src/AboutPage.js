import React from "react";
import logoWhite from "./assets/logo_white.png";
import textWhiteLogo from "./assets/text_logo_white.png";
import sunnahIcon from "./assets/sunnah.png";
import guidanceIcon from "./assets/guidance.png";
import linkIcon from "./assets/link.png";
import chatHistoryIcon from "./assets/chat_history.png";
import mobileIcon from "./assets/mobile.png";
import securityIcon from "./assets/security.png";
import importantIcon from "./assets/important.png";
import questionIcon from "./assets/question.png";
import verifyIcon from "./assets/verify.png";
import respectIcon from "./assets/respect.png";
import consultIcon from "./assets/consult.png";
import learningIcon from "./assets/learning.png";
import reportIcon from "./assets/report.png";
import basicsIcon from "./assets/basics.png";
import ethicsIcon from "./assets/islam_ethics.png";
import historyIcon from "./assets/islamic_history.png";
import practicesIcon from "./assets/practices.png";
import jurisprudenceIcon from "./assets/jurisprudence.png";
import spiritualityIcon from "./assets/spirituality.png";

export default function AboutPage({ onClose }) {
  const [expandedFAQ, setExpandedFAQ] = React.useState(null);
  const [copiedIndex, setCopiedIndex] = React.useState(null);

  return (
    <div className="min-h-screen bg-white overflow-y-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5362F6] via-[#4251d9] to-[#3341c9] text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <style>{`
            @keyframes rotate {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            .rotate-animation {
              animation: rotate 6s linear infinite;
            }
          `}</style>
          <img src={logoWhite} alt="Ayasir Rotating Logo" className="h-16 sm:h-20 md:h-24 mx-auto mb-4 sm:mb-6 rotate-animation" />
          <img src={textWhiteLogo} alt="Ayasir Text Logo" className="h-12 sm:h-16 md:h-20 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl md:text-2xl text-[#e8ebff] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'PP Editorial', fontWeight: 200 }}>
            Your Trusted Islamic Knowledge Assistant
          </p>
          {onClose && (
            <button
              onClick={onClose}
              className="bg-white text-[#5362F6] hover:bg-[#f0f3fd] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-base sm:text-lg transition-colors mt-6 sm:mt-8"
            >
              Back to Chat
            </button>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-12 lg:space-y-16">
        {/* About Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#27282a] mb-6 sm:mb-8">About Ayasir</h2>
          <div className="bg-[#f8f9ff] rounded-2xl p-5 sm:p-8 md:p-12 border border-[#e1e7fa]">
            <p className="text-base text-[#555] leading-relaxed mb-6 text-justify" style={{ fontSize: '16px' }}>
              Ayasir is an intelligent Islamic knowledge assistant designed to provide accurate, Qur'an and Sunnah-based responses to questions about Islam. The platform leverages advanced AI technology to help users learn and understand Islamic teachings, principles, and guidance with authenticity and scholarly rigor.
            </p>
            <p className="text-base text-[#555] leading-relaxed text-justify" style={{ fontSize: '16px' }}>
              Whether you're seeking to deepen your understanding of Islamic concepts, learn about Islamic ethics, explore Islamic history, or get answers to specific Islamic questions, Ayasir is here to assist you with reliable, knowledge-based responses.
            </p>
          </div>
        </section>



        {/* Key Features */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#27282a] mb-6 sm:mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <img src={sunnahIcon} alt="Sunnah Icon" className="h-12 w-12" />,
                title: "Quran & Sunnah Based", 
                desc: "All responses grounded in authentic Islamic sources",
                gradient: "from-[#5362F6] to-[#4251d9]"
              },
              { 
                icon: <img src={guidanceIcon} alt="Guidance Icon" className="h-12 w-12" />,
                title: "Scholarly Guidance", 
                desc: "Aligned with Islamic ethics and scholarly principles",
                gradient: "from-[#5362F6] to-[#4251d9]"
              },
              { 
                icon: <img src={linkIcon} alt="Link Icon" className="h-12 w-12" />,
                title: "Source Citations", 
                desc: "Verification and reference materials included",
                gradient: "from-[#5362F6] to-[#4251d9]"
              },
              { 
                icon: <img src={chatHistoryIcon} alt="Chat History Icon" className="h-12 w-12" />,
                title: "No Data Storage", 
                desc: "Don't store any conversations or personal data",
                gradient: "from-[#5362F6] to-[#4251d9]"
              },
              { 
                icon: <img src={mobileIcon} alt="Mobile Icon" className="h-12 w-12" />,
                title: "Mobile Friendly", 
                desc: "Access from any device, anytime, anywhere",
                gradient: "from-[#5362F6] to-[#4251d9]"
              },
              { 
                icon: <img src={securityIcon} alt="Security Icon" className="h-12 w-12" />,
                title: "Privacy First", 
                desc: "Your conversations are respected and secure",
                gradient: "from-[#5362F6] to-[#4251d9]"
              },
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Feature card */}
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#5362F6]/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex gap-4 items-start h-full">
                    {/* Icon container without background */}
                    <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      <div>{feature.icon}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-normal text-[#27282a] mb-3 text-lg leading-snug">{feature.title}</h3>
                      <p className="text-[#666] text-base leading-relaxed flex-1">{feature.desc}</p>

                      {/* Bottom accent line */}
                      <div className={`h-1 w-8 bg-gradient-to-r ${feature.gradient} rounded-full mt-5 transform origin-left group-hover:w-full transition-all duration-300`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases - Bento Grid */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#27282a] mb-6 sm:mb-8">Common Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Students & Scholars", 
                desc: "Learn about Islamic concepts, history, and teachings for academic or personal growth",
                colSpan: "lg:col-span-1",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
              { 
                title: "New Muslims", 
                desc: "Get guidance on Islamic basics, practices, and principles to strengthen your foundation",
                colSpan: "lg:col-span-1",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
              { 
                title: "Islamic Educators", 
                desc: "Access verified Islamic knowledge for teaching and educational purposes",
                colSpan: "lg:col-span-1",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
              { 
                title: "Seekers of Knowledge", 
                desc: "Explore Islamic ethics, spirituality, and deep theological concepts",
                colSpan: "lg:col-span-2",
                minHeight: "min-h-[200px]",
                bgClass: "bg-gradient-to-br from-[#4251d9]/10 to-[#3341c9]/10"
              },
              { 
                title: "Families", 
                desc: "Find answers to questions about Islamic teachings in a family-friendly environment",
                colSpan: "lg:col-span-1",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
              { 
                title: "Researchers", 
                desc: "Research Islamic history, jurisprudence, and scholarly interpretations",
                colSpan: "lg:col-span-2",
                minHeight: "min-h-[200px]",
                bgClass: "bg-gradient-to-br from-[#4251d9]/10 to-[#3341c9]/10"
              },
              { 
                title: "Spiritual Seekers", 
                desc: "Deepen your spiritual journey with Islamic wisdom, guidance, and introspection",
                colSpan: "lg:col-span-1",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
            ].map((useCase, idx) => (
              <div 
                key={idx} 
                className={`${useCase.colSpan} ${useCase.minHeight || ''} ${useCase.bgClass} border-2 border-[#e1e7fa] rounded-2xl p-8 hover:border-[#5362F6] transition-all duration-300 group cursor-pointer flex flex-col`}
              >
                <div className="flex-1">
                  <h4 className="font-normal text-[#5362F6] text-lg sm:text-xl mb-3 group-hover:text-[#4251d9] transition-colors">{useCase.title}</h4>
                  <p className="text-[#666] leading-relaxed">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Important Disclaimer */}
        <section>
          <div className="bg-[#fff3cd] border-2 border-[#ffc107] rounded-2xl p-5 sm:p-8 md:p-12">
            <div className="flex gap-3 sm:gap-4">
              <img src={importantIcon} alt="Important Icon" className="h-10 sm:h-12 w-10 sm:w-12 flex-shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#856404] mb-3 sm:mb-4">Important Disclaimer</h3>
                <p className="text-[#856404] leading-relaxed text-justify" style={{ fontSize: '16px' }}>
                  This application is designed for <strong>educational and learning purposes only</strong>. It is <strong>NOT</strong> intended to provide formal religious rulings (fatwas) or replace consultation with qualified Islamic scholars.
                </p>
                <p className="text-[#856404] leading-relaxed mt-4 text-justify" style={{ fontSize: '16px' }}>
                  For critical religious matters, personal Islamic guidance, or formal religious rulings, please consult with qualified Muslim scholars, Muftis, or religious authorities in your community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Ayasir */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#27282a] mb-6 sm:mb-8">Why Choose Ayasir?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "Authentic Islamic knowledge from trusted sources and scholars",
                "Scholarly responses grounded in Islamic tradition and jurisprudence",
                "Easy-to-use interface designed for all ages and backgrounds",
                "24/7 availability for Islamic guidance whenever you need it",
                "Verified citations and sources for every answer provided",
                "Respectful and secure environment for learning"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <svg className="h-6 w-6 text-[#5362F6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[#666]" style={{ fontSize: '16px' }}>{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#5362F6] to-[#4251d9] rounded-2xl p-5 sm:p-8 text-white flex flex-col justify-center">
              <p className="leading-relaxed text-justify" style={{ fontSize: '16px' }}>
                "Ayasir bridges the gap between the need for Islamic knowledge and access to reliable, scholarly information. Whether you're new to Islam, a lifelong student of the faith, or seeking to deepen your understanding, we're here to help you on your journey of learning."
              </p>
              <p className="text-[#d8dcff] mt-4 sm:mt-6 italic text-sm sm:text-base">- Ayasir Team</p>
            </div>
          </div>
        </section>

        {/* User Guidelines */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#27282a] mb-6 sm:mb-8">User Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Ask Clear Questions",
                desc: "Provide specific and detailed questions to receive more accurate and relevant responses.",
                icon: questionIcon
              },
              {
                title: "Verify Information",
                desc: "Cross-reference important information with scholarly sources and verified Islamic references.",
                icon: verifyIcon
              },
              {
                title: "Respectful Engagement",
                desc: "Maintain respectful and sincere intentions when seeking Islamic knowledge.",
                icon: respectIcon
              },
              {
                title: "Consult Scholars",
                desc: "For critical matters and personal guidance, always consult qualified Islamic scholars in your community.",
                icon: consultIcon
              },
              {
                title: "Continuous Learning",
                desc: "Use Ayasir as a stepping stone for deeper Islamic knowledge and education.",
                icon: learningIcon
              },
              {
                title: "Report Issues",
                desc: "Help us improve by reporting any inaccuracies or concerns you encounter.",
                icon: reportIcon
              },
            ].map((guideline, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#e1e7fa] hover:border-[#5362F6]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <img src={guideline.icon} alt={guideline.title} className="h-8 w-8 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-normal text-[#5362F6] text-lg mb-2">{guideline.title}</h3>
                    <p className="text-[#666] leading-relaxed">{guideline.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Prompt */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#27282a] mb-6 sm:mb-8">How to Prompt Ayasir</h2>
          <div className="bg-[#f8f9ff] rounded-2xl p-5 sm:p-8 md:p-12 border border-[#e1e7fa] mb-8">
            <p className="text-base text-[#555] leading-relaxed mb-4 text-justify">
              Ayasir is specifically designed to answer questions about <strong className="text-[#5362F6]">Islam and Islamic knowledge only</strong>. To get the best responses, keep these guidelines in mind:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Ask Islamic Questions",
                example: "Focus your inquiries on Islamic knowledge, teachings, and principles. Ayasir responds exclusively to questions rooted in Islamic theology, jurisprudence, history, and spiritual guidance. Non-Islamic topics will not receive responses from this platform.",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
              {
                title: "Be Specific & Clear",
                example: "Formulate precise and well-defined questions with clear intent. Rather than asking broad questions, specify what aspect interests you. Detailed inquiries help Ayasir provide more accurate, comprehensive, and contextually relevant responses tailored to your needs.",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
              {
                title: "Use Islamic Terminology",
                example: "Incorporate authentic Islamic terms and concepts in your questions. Using proper terminology such as Quran, Hadith, Sunnah, Halal, Haram, and scholarly references strengthens the relevance and clarity of your inquiries.",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
              {
                title: "Provide Context",
                example: "Supply relevant background information when posing your questions. Contextual details help Ayasir understand the scope and intent of your inquiry, leading to more precise and applicable Islamic guidance tailored to specific situations.",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
              {
                title: "Request Sources",
                example: "Ask for scholarly references and citations supporting the provided answers. Requesting Quranic verses, Hadith references, and scholarly interpretations enhances the credibility and academic value of the information you receive.",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
              {
                title: "Ask Follow-up Questions",
                example: "Engage in progressive questioning to deepen understanding. Follow-up inquiries allow you to explore related concepts, clarify complex matters, and develop comprehensive knowledge of Islamic teachings through continuous dialogue.",
                bgClass: "bg-gradient-to-br from-[#5362F6]/5 to-[#4251d9]/5"
              },
            ].map((prompt, idx) => (
              <div key={idx} className={`${prompt.bgClass} border-2 border-[#e1e7fa] rounded-2xl p-6 sm:p-8 hover:border-[#5362F6] transition-all duration-300 min-h-[320px] flex flex-col`}>
                <h4 className="font-normal text-[#5362F6] text-lg mb-4">{prompt.title}</h4>
                <div className="bg-white rounded-lg p-4 border border-[#e1e7fa] flex-1 flex flex-col justify-center">
                  <p className="text-[#666] text-sm leading-relaxed whitespace-pre-line font-mono">{prompt.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-[#e8f4fd] rounded-2xl p-5 sm:p-8 border-2 border-[#5362F6]/30">
            <h3 className="font-normal text-[#5362F6] text-lg mb-3">Questions Ayasir Cannot Help With</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-[#555]">
                <p className="font-semibold text-[#5362F6] mb-2">Not Relevant:</p>
                <ul className="text-sm space-y-1">
                  <li>• Technology & Programming</li>
                  <li>• Sports & Entertainment</li>
                  <li>• Current Events & Politics</li>
                </ul>
              </div>
              <div className="text-[#555]">
                <p className="font-semibold text-[#5362F6] mb-2">Refer to Scholars:</p>
                <ul className="text-sm space-y-1">
                  <li>• Personal religious rulings (Fatwas)</li>
                  <li>• Critical spiritual matters</li>
                  <li>• Complex religious guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Example Prompts */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#27282a] mb-6 sm:mb-8">Example Prompts</h2>
          <div className="bg-[#f8f9ff] rounded-2xl p-5 sm:p-8 md:p-12 border border-[#e1e7fa] mb-8">
            <p className="text-base text-[#555] leading-relaxed mb-4 text-justify">
              Here are some examples of questions you can ask Ayasir. Feel free to modify these based on your specific interests and needs:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: "Islamic Basics",
                prompts: [
                  "What are the Five Pillars of Islam?",
                  "Explain the significance of the Quran in Islam.",
                  "What does it mean to recite the Shahada?"
                ],
                icon: basicsIcon
              },
              {
                category: "Islamic Ethics & Values",
                prompts: [
                  "What does Islam teach about honesty and truthfulness?",
                  "How should Muslims approach charity and helping others?",
                  "What is the Islamic perspective on patience and perseverance?"
                ],
                icon: ethicsIcon
              },
              {
                category: "Islamic History",
                prompts: [
                  "Tell me about the life of Prophet Muhammad.",
                  "What was the significance of the Battle of Badr?",
                  "Explain the early Islamic caliphates and their contributions."
                ],
                icon: historyIcon
              },
              {
                category: "Islamic Practices",
                prompts: [
                  "What are the steps of performing Salah (prayer)?",
                  "Explain the importance of Hajj in Islam.",
                  "How should Zakat be calculated and distributed?"
                ],
                icon: practicesIcon
              },
              {
                category: "Islamic Jurisprudence",
                prompts: [
                  "What is the difference between Halal and Haram in Islamic law?",
                  "Explain the concept of Ijma (consensus) in Islamic jurisprudence.",
                  "What are the major schools of Islamic jurisprudence (Madhabs)?"
                ],
                icon: jurisprudenceIcon
              },
              {
                category: "Islamic Spirituality",
                prompts: [
                  "What is the purpose of Dhikr (remembrance) in Islam?",
                  "How can Muslims strengthen their spiritual connection with Allah?",
                  "Explain the concept of Taqwa (piety) and its importance."
                ],
                icon: spiritualityIcon
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#e1e7fa] hover:border-[#5362F6]/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <img src={section.icon} alt={section.category} className="h-8 w-8" />
                  <h3 className="font-normal text-[#5362F6] text-lg">{section.category}</h3>
                </div>
                <ul className="space-y-2">
                  {section.prompts.map((prompt, pIdx) => {
                    const itemId = `${idx}-${pIdx}`;
                    const isCopied = copiedIndex === itemId;
                    
                    return (
                    <li key={pIdx} className="text-[#555] text-sm leading-relaxed flex gap-2 items-start group hover:bg-[#f8f9ff] p-2 rounded transition-colors">
                      <span className="text-[#5362F6] font-semibold flex-shrink-0 mt-0.5">•</span>
                      <span className="flex-1">{prompt}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(prompt);
                          setCopiedIndex(itemId);
                          setTimeout(() => setCopiedIndex(null), 2000);
                        }}
                        className="flex-shrink-0 ml-2 p-1 text-[#5362F6] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#e1e7fa] rounded relative"
                        title={isCopied ? "Copied!" : "Copy prompt"}
                      >
                        {isCopied ? (
                          <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="absolute right-full mr-2 px-2 py-1 bg-[#5362F6] text-white text-xs rounded whitespace-nowrap">Copied!</span>
                          </>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#27282a] mb-6 sm:mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is Ayasir a substitute for consulting scholars?",
                a: "No, Ayasir is an educational tool designed to help you learn about Islamic knowledge. For critical religious matters and formal fatwas, always consult qualified Islamic scholars and Muftis in your community."
              },
              {
                q: "What sources does Ayasir use for its information?",
                a: "Ayasir bases its responses on authentic Islamic sources including the Qur'an, Hadith collections, Islamic jurisprudence, and scholarly interpretations from recognized Islamic authorities. We also utilize reputable online Islamic websites and scholarly databases."
              },
              {
                q: "Is my personal data stored or shared?",
                a: "No. We respect your privacy completely. Your conversations are not stored or used for any purpose. We do not collect or share your personal information with third parties."
              },
              {
                q: "Can I use Ayasir for academic research?",
                a: "Yes, Ayasir provides detailed, cited information that can be valuable for academic research on Islamic topics. Always verify sources and cross-reference with scholarly materials."
              },
              {
                q: "What languages does Ayasir support?",
                a: "Currently, Ayasir primarily supports English. Support for additional languages is being planned for future releases."
              },
              {
                q: "Is there a cost to use Ayasir?",
                a: "Currently, Ayasir is completely free to use. Our goal is to make Islamic knowledge accessible to everyone. However, please note that premium features may be introduced in the future."
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#e1e7fa] rounded-xl overflow-hidden hover:border-[#5362F6] transition-all">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center cursor-pointer hover:bg-[#f8f9ff] transition-colors"
                >
                  <h4 className="font-normal text-[#5362F6] text-lg">{faq.q}</h4>
                  <svg 
                    className={`h-6 w-6 text-[#5362F6] transition-transform duration-300 flex-shrink-0 ml-4 ${expandedFAQ === idx ? 'rotate-45' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-6 border-t border-[#e1e7fa] bg-[#f8f9ff]">
                    <p className="text-[#666] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>


        {/* Call to Action */}
        <section className="relative mb-16 sm:mb-24 lg:mb-32 rounded-3xl" style={{WebkitMaskImage: 'radial-gradient(circle, black 0%, black 100%)', maskImage: 'radial-gradient(circle, black 0%, black 100%)'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#5362F6] via-[#4251d9] to-[#3341c9] rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#5362F6]/20 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4251d9]/20 to-transparent rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative p-8 sm:p-16 lg:p-20 text-center text-white backdrop-blur-sm border border-white/10">
            <div className="mb-2 sm:mb-3">
              <div className="inline-block">
                <img src={logoWhite} alt="Ayasir Logo" className="h-20 w-20 mx-auto" />
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-1 sm:mb-2 text-white">Ready to Transform Your Islamic Learning?</h2>
            <p className="text-lg sm:text-xl text-[#e8ebff]/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Join thousands of learners discovering authentic Islamic knowledge through Ayasir. Start your journey today with verified sources and scholarly guidance.
            </p>
            
            {onClose && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={onClose}
                  className="bg-white text-[#5362F6] hover:bg-[#f0f3fd] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Chat Now
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative bg-[#5362F6] py-16 sm:py-24 px-4 sm:px-6 mt-16 sm:mt-24">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Logo Section */}
          <div className="mb-10 sm:mb-12">
            <div className="mb-6">
              <img src={logoWhite} alt="Ayasir Logo" className="h-16 sm:h-14 mx-auto" />
            </div>
            <img src={textWhiteLogo} alt="Ayasir Text Logo" className="h-6 sm:h-8 mx-auto mb-6" />
            <p className="text-white/80 text-sm sm:text-base font-light">Islamic Knowledge Excellence</p>
          </div>

          {/* Main Content */}
          <div className="space-y-6 mb-10 sm:mb-14">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
                Created with reverence for Islamic knowledge and unwavering dedication
              </p>
              <p className="text-sm sm:text-base text-white/70 italic font-light">
                Educational resource, not for issuing religious rulings
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/30"></div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/70"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/30"></div>
          </div>

          {/* Footer Info */}
          <div className="space-y-4 mb-8">
            <p className="text-lg sm:text-xl font-semibold text-white">© 2026 Ayasir</p>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Spreading Islamic Wisdom • Building Understanding • Serving the Ummah
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8">
            <p className="text-xs sm:text-sm text-white/60 font-light tracking-wide">
              Excellence in Islamic Education • Authenticity • Trust • Knowledge
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      </footer>

    </div>
  );
}