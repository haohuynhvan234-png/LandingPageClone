import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (e) => {
    setActiveTab(e.currentTarget.dataset.tab);
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border py-[120px] relative border-t border-t-[rgba(255,255,255,0.06)]"
    >
      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased box-border w-full max-w-[1200px] mx-auto px-[24px]">
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 mb-[64px] p-0 box-border opacity-100 translate-y-0 transition-none text-center">
          <p className="leading-[1.6] antialiased text-center m-0 p-0 box-border inline-flex items-center gap-[8px] text-[12px] font-[600] text-[#FF6B6B] uppercase tracking-[0.1em] mb-[14px] font-['JetBrains_Mono',monospace]">
            <div className="content-[''] w-[18px] h-[2px] bg-[#ff6b6b] rounded-[2px]"></div>
            <div>Features</div>
          </p>
          <h2 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased text-center m-0 p-0 box-border text-[clamp(30px,4vw,46px)] font-[800] tracking-[-0.04em] leading-[1.1] mb-[14px]">
            <div>Everything you need.</div>
            <div>Nothing you don't.</div>
          </h2>
          <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] antialiased text-center p-0 box-border text-[16px] text-[#8A8B9E] max-w-[480px] leading-[1.7] my-0 mx-auto">
            A complete analytics toolkit that replaces five tools in your stack.
          </p>
        </div>
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased box-border flex justify-center items-center gap-[4px] mt-0 mb-[56px] mx-auto bg-[#26262D] border border-[rgba(141,45,45,0.06)] rounded-[100px] p-[4px] w-fit transition-none opacity-100 translate-y-0">
          <button
            data-tab="dashboard"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "dashboard" ? "bg-[#FF6B6B] text-white" : "bg-transparent text-[#55566A]"} hover:bg-[#FF6B6B] hover:text-white hover:shadow-[0_0_20px_rgba(255,107,107,0.35)]`}
          >
            Dashboard
          </button>
          <button
            data-tab="funnels"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "funnels" ? "bg-[#FF6B6B] text-white" : "bg-transparent text-[#55566A]"} hover:bg-[#FF6B6B] hover:text-white hover:shadow-[0_0_20px_rgba(255,107,107,0.35)]`}
          >
            Funnels
          </button>
          <button
            data-tab="sdk"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "sdk" ? "bg-[#FF6B6B] text-white" : "bg-transparent text-[#55566A]"}  hover:bg-[#FF6B6B] hover:text-white hover:shadow-[0_0_20px_rgba(255,107,107,0.35)]`}
          >
            SDK
          </button>
          <button
            data-tab="session-replay"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "session-replay" ? "bg-[#FF6B6B] text-white" : "bg-transparent text-[#55566A]"} hover:bg-[#FF6B6B] hover:text-white hover:shadow-[0_0_20px_rgba(255,107,107,0.35)]`}
          >
            Session Replay
          </button>
          <button
            data-tab="privacy"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "privacy" ? "bg-[#FF6B6B] text-white" : "bg-transparent text-[#55566A]"} hover:bg-[#FF6B6B] hover:text-white hover:shadow-[0_0_20px_rgba(255,107,107,0.35)]`}
          >
            Privacy
          </button>
        </div>
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border relative">
          {activeTab == "dashboard" && (
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border grid grid-cols-[1fr_1.2fr] gap-[64px] items-center animate-[panelIn_0.45s_ease_forwards] opacity-100 transform-none">
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border max-w-[440px]">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 mb-[24px] p-0 box-border w-[48px] h-[48px] bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.10)] rounded-[12px] grid place-items-center text-[#FF6B6B]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 12 A9 9 0 1 1 12 3"></path>
                    <path d="M21 3v9h-9"></path>
                  </svg>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased m-0 p-0 box-border text-[28px] font-[800] tracking-[-0.04em] mb-[14px] leading-[1.15]">
                  Real-Time Dashboard
                </h3>
                <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] antialiased m-0 p-0 box-border text-[15px] text-[#8A8B9E] leading-[1.75] mb-[28px]">
                  Watch your metrics update live with sub-second latency. Custom
                  widgets, drag-and-drop layout, and instant sharing with your
                  team.
                </p>
                <ul className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border list-none flex flex-col gap-[12px]">
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Sub-second data refresh</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Drag-and-drop widgets</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Scheduled email reports</div>
                  </li>
                </ul>
              </div>
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border bg-[#26262D] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border flex items-center gap-[6px] py-[11px] px-[16px] border-b border-b-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F43F5E] opacity-60"></span>
                  <span class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F59E0B] opacity-60"></span>
                  <span class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#22C55E] opacity-60"></span>
                </div>
                <div class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border p-[24px]">
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border grid grid-cols-3 gap-[10px] mb-[16px]">
                    <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="font-['JetBrains_Mono',monospace] text-[9.5px] text-[#55566A] uppercase tracking-[0.08em] leading-[1.6] antialiased m-0 p-0 box-border mb-[6px]">
                        Active Users
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-[22px] font-[800] tracking-[-0.04em] mb-[4px]">
                        3,842
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] font-[600] text-[#22C55E]">
                        +12.3%
                      </div>
                    </div>
                    <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="font-['JetBrains_Mono',monospace] text-[9.5px] text-[#55566A] uppercase tracking-[0.08em] leading-[1.6] antialiased m-0 p-0 box-border mb-[6px]">
                        Conversion
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-[22px] font-[800] tracking-[-0.04em] mb-[4px]">
                        12.4%
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] font-[600] text-[#22C55E]">
                        +2.1%
                      </div>
                    </div>
                    <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="font-['JetBrains_Mono',monospace] text-[9.5px] text-[#55566A] uppercase tracking-[0.08em] leading-[1.6] antialiased m-0 p-0 box-border mb-[6px]">
                        Churn
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-[22px] font-[800] tracking-[-0.04em] mb-[4px]">
                        1.8%
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] font-[600] text-[#F43F5E]">
                        -0.4%
                      </div>
                    </div>
                  </div>
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[16px] h-[140px] relative">
                    <div className="font-['JetBrains_Mono',monospace] text-[10px] text-[#55566A] uppercase tracking-[0.08em] leading-[1.6] antialiased m-0 p-0 box-border mb-[8px]">
                      Revenue — Last 7 days
                    </div>
                    <svg viewBox="0 0 400 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient
                          id="areaGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stop-color="rgba(255,107,107,0.2)"
                          ></stop>
                          <stop
                            offset="100%"
                            stop-color="rgba(255,107,107,0)"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5 V80 H0Z"
                        fill="url(#areaGrad)"
                      ></path>
                      <path
                        d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5"
                        fill="none"
                        stroke="#FF6B6B"
                        stroke-width="2"
                      ></path>
                      <circle
                        cx="320"
                        cy="15"
                        r="4"
                        fill="#FF6B6B"
                        stroke="#1E1E24"
                        stroke-width="2"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab == "funnels" && (
            <div className="feature-panel grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <div className="w-12 h-12 rounded-xl border border-[#5a2b35] bg-[#2a2028] flex items-center justify-center text-[#ff6b7d]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-4" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold mb-4">Funnel Analytics</h3>

                <p className="text-gray-400 leading-7 mb-8">
                  Identify exactly where users drop off and why. Build funnels
                  in seconds and correlate drop-off with user segments.
                </p>

                <ul className="space-y-4">
                  {[
                    "Visual drop-off analysis",
                    "Segment correlation",
                    "Historical comparison",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-green-400 shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Visual */}
              <div className="relative m-0 p-0 box-border antialiased font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] bg-[#26262D] border border-white/[0.06] rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                {/* Toolbar */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                {/* Funnel */}
                <div className="p-6 space-y-5">
                  {[
                    {
                      label: "Landing Page",
                      value: "12,480",
                      width: "100%",
                      drop: "—",
                      color: "bg-[#FF6B6B]",
                    },
                    {
                      label: "Sign Up Started",
                      value: "8,736",
                      width: "70%",
                      drop: "-30%",
                      color: "bg-[#FF6B6B]",
                    },
                    {
                      label: "Email Verified",
                      value: "6,115",
                      width: "49%",
                      drop: "-30%",
                      color: "bg-amber-500",
                    },
                    {
                      label: "Onboarding Done",
                      value: "3,670",
                      width: "29%",
                      drop: "-40%",
                      color: "bg-amber-500",
                    },
                    {
                      label: "First Action",
                      value: "2,569",
                      width: "20.5%",
                      drop: "-30%",
                      color: "bg-green-500",
                    },
                  ].map((stage) => (
                    <div key={stage.label} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm text-gray-300 mb-2">
                          <span>{stage.label}</span>
                          <span>{stage.value}</span>
                        </div>

                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${stage.color}`}
                            style={{ width: stage.width }}
                          />
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 min-w-[50px] text-right">
                        {stage.drop}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab == "sdk" && (
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center animate-[panelIn_0.45s_ease_forwards]">
              <div className="flex flex-col items-start space-y-6">
                {/* Icon wrapper (Màu hồng mờ theo biến --accent-soft) */}
                <div className="w-12 h-12 bg-[#FF6B6B]/[0.08] border border-[#FF6B6B]/[0.25] rounded-[10px] grid place-items-center text-[#FF6B6B]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>

                {/* Tiêu đề (Biến --text-primary) */}
                <h3 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#EEEEF0] leading-[1.15]">
                  One-Line SDK
                </h3>

                {/* Mô tả (Biến --text-secondary) */}
                <p className="text-[16px] text-[#8A8B9E] leading-[1.6] max-w-md">
                  Drop in a single script tag or npm package. Auto-capture
                  pageviews, clicks, and custom events out of the box.
                </p>

                {/* Bullet list */}
                <ul className="space-y-4 pt-2">
                  <li className="flex items-center gap-3 text-[15px] font-medium text-[#97979d]">
                    <svg
                      className="text-[#FF6B6B]"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Under 4KB gzipped
                  </li>
                  <li className="flex items-center gap-3 text-[15px] font-medium text-[#97979d]">
                    <svg
                      className="text-[#FF6B6B]"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Zero config autocapture
                  </li>
                  <li className="flex items-center gap-3 text-[15px] font-medium text-[#97979d]">
                    <svg
                      className="text-[#FF6B6B]"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    TypeScript-first API
                  </li>
                </ul>
              </div>
              <div className="w-full">
                {/* Cửa sổ Mockup chính */}
                <div className="rounded-2xl bg-[#1A1A1E] border border-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.55)] overflow-hidden relative">
                  {/* Thanh công cụ 3 chấm Mac-style */}
                  <div className="px-5 py-4 bg-white/[0.02] border-b border-white/[0.04] flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
                  </div>

                  {/* Thân cửa sổ code */}
                  <div className="p-6 font-mono text-[14px] leading-[1.65]">
                    {/* Khối Code Editor (Khớp màu chữ theo ảnh mẫu) */}
                    <div className="whitespace-pre overflow-x-auto text-left text-[#8A8B9E]">
                      <span className="text-[#55566A]">
                        {"// Install: npm i @quantix/sdk"}
                      </span>
                      {"\n\n"}
                      <span className="text-[#FF6B6B]">import</span>
                      {" { Quantix } "}
                      <span className="text-[#FF6B6B]">from</span>{" "}
                      <span className="text-[#22C55E]">{"'@quantix/sdk'"}</span>
                      {"\n\n"}
                      <span className="text-[#FF6B6B]">const</span>
                      {" qx = "}
                      <span className="text-[#FF6B6B]">new</span>{" "}
                      <span className="text-[#F59E0B]">Quantix</span>({"{"}
                      {"\n"}
                      {"  apiKey: "}
                      <span className="text-[#22C55E]">
                        {"'qx_live_k8x2...'"}
                      </span>
                      ,{"\n"}
                      {"  autocapture: "}
                      <span className="text-[#FF6B6B]">true</span>,{"\n"}
                      {"  sessionReplay: "}
                      <span className="text-[#FF6B6B]">true</span>,{"\n"}
                      {"})"}
                      {"\n\n"}
                      <span className="text-[#55566A]">
                        {"// Track custom events"}
                      </span>
                      {"\n"}
                      {"qx."}
                      <span className="text-[#F59E0B]">track</span>(
                      <span className="text-[#22C55E]">{"'checkout'"}</span>,{" "}
                      {"{"}
                      {"\n"}
                      {"  value: "}
                      <span className="text-[#FF6B6B]">49.99</span>,{"\n"}
                      {"  plan: "}
                      <span className="text-[#22C55E]">{"'pro'"}</span>
                      {"\n"}
                      {"})"}
                    </div>

                    {/* Khu vực Output */}
                    <div className="mt-6 pt-5 border-t border-white/[0.05]">
                      <div className="text-[11px] font-bold text-[#55566A] uppercase tracking-wider mb-3">
                        Output
                      </div>

                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[#22C55E] text-[13.5px]">
                        {/* Chấm xanh lá nhấp nháy phát sóng */}
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                        </span>
                        Event tracked in 8ms — 200 OK
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab == "session-replay" && (
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
              {/* Left */}
              <div className="flex flex-col items-start space-y-6">
                <div className="w-12 h-12 rounded-[10px] border border-[#FF6B6B]/25 bg-[#FF6B6B]/10 text-[#FF6B6B] grid place-items-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>

                <h3 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#EEEEF0] leading-[1.15]">
                  Session Replay
                </h3>

                <p className="text-[16px] text-[#8A8B9E] leading-[1.6] max-w-md">
                  See exactly what your users see. Replay sessions with
                  pixel-perfect accuracy and zero performance impact on your
                  app.
                </p>

                <ul className="space-y-4">
                  {[
                    "Pixel-perfect playback",
                    "Console log capture",
                    "Rage click detection",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[15px] font-medium text-[#97979d]"
                    >
                      <svg
                        className="text-[#FF6B6B]"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="rounded-3xl border border-white/5 bg-[#26262D] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                {/* Toolbar */}
                <div className="px-5 py-4 border-b border-white/5 flex gap-2 bg-white/[0.02]">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                <div className="p-6">
                  {/* Replay UI */}
                  <div className="rounded-2xl border border-white/5 bg-[#1E1E24] p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between text-[12px] mb-4">
                      <span className="flex items-center gap-2 text-[#EEEEF0]">
                        <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse" />
                        Recording
                      </span>

                      <span className="text-[#8A8B9E]">02:34 / 05:12</span>
                    </div>

                    {/* Viewport */}
                    <div className="relative rounded-xl bg-[#26262D] p-4 min-h-[260px] overflow-hidden">
                      {/* Fake Page */}
                      <div className="rounded-lg bg-[#2E2E36] p-4">
                        <div className="h-3 w-full rounded bg-[#3A3A43] mb-4" />

                        <div className="space-y-3 mb-5">
                          <div className="h-4 w-4/5 rounded bg-[#3A3A43]" />
                          <div className="h-4 w-3/5 rounded bg-[#3A3A43]" />
                          <div className="h-4 w-2/3 rounded bg-[#3A3A43]" />
                        </div>

                        <div className="w-24 h-8 rounded-lg bg-[#FF6B6B]" />

                        <div className="grid grid-cols-3 gap-3 mt-6">
                          <div className="h-20 rounded-xl bg-[#3A3A43]" />
                          <div className="h-20 rounded-xl bg-[#3A3A43]" />
                          <div className="h-20 rounded-xl bg-[#3A3A43]" />
                        </div>
                      </div>

                      {/* Cursor */}
                      <div className="absolute top-[110px] left-[180px] text-[#FF6B6B] drop-shadow-[0_0_8px_rgba(255,107,107,0.5)]">
                        <svg
                          width="20"
                          height="26"
                          viewBox="0 0 20 26"
                          fill="none"
                        >
                          <path
                            d="M17 2L4 13L17 24"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center gap-3 mt-4">
                      <button className="w-7 h-7 rounded-full bg-[#FF6B6B] flex items-center justify-center">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </button>

                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[55%] bg-[#FF6B6B] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Event Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-[12px] text-[#EEEEF0] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
                      click
                    </span>

                    <span className="px-3 py-1 rounded-full bg-white/5 text-[12px] text-[#EEEEF0] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      scroll
                    </span>

                    <span className="px-3 py-1 rounded-full bg-white/5 text-[12px] text-[#EEEEF0] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F43F5E]" />
                      rage_click
                    </span>

                    <span className="px-3 py-1 rounded-full bg-white/5 text-[12px] text-[#EEEEF0] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                      input
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab == "privacy" && (
            <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center m-0 p-0 box-border antialiased text-[#EEEEF0] font-['Plus_Jakarta_Sans',-apple-system,sans-serif]">
              {/* ================= KHỐI TEXT BÊN TRÁI ================= */}
              <div className="feature-text flex flex-col items-start space-y-6">
                {/* Icon Ổ Khóa (Màu hồng mờ theo biến --accent-soft) */}
                <div className="feat-icon w-12 h-12 bg-[#FF6B6B]/[0.08] border border-[#FF6B6B]/[0.15] rounded-xl grid place-items-center text-[#FF6B6B]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>

                {/* Tiêu đề chính */}
                <h3 className="text-[36px] font-extrabold tracking-[-0.03em] text-white leading-[1.15]">
                  Privacy First
                </h3>

                {/* Đoạn mô tả (Biến --text-secondary) */}
                <p className="text-[16px] text-[#8A8B9E] leading-[1.6] max-w-md">
                  GDPR and CCPA compliant out of the box. Cookieless tracking,
                  automatic PII masking, and EU hosting available.
                </p>

                {/* Danh sách Bullet List (Dấu tích đỏ cam) */}
                <ul className="feature-bullets space-y-4 pt-2">
                  <li className="flex items-center gap-3 text-[15px] font-medium text-[#EEEEF0]">
                    <svg
                      className="text-[#FF6B6B]"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    No cookie banners needed
                  </li>
                  <li className="flex items-center gap-3 text-[15px] font-medium text-[#EEEEF0]">
                    <svg
                      className="text-[#FF6B6B]"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    EU data residency
                  </li>
                  <li className="flex items-center gap-3 text-[15px] font-medium text-[#EEEEF0]">
                    <svg
                      className="text-[#FF6B6B]"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    SOC 2 Type II certified
                  </li>
                </ul>
              </div>

              {/* ================= KHỐI VISUAL Ô CỬA SỔ BÊN PHẢI ================= */}
              <div className="feature-visual w-full">
                {/* Khung ô cửa sổ lớn */}
                <div className="rounded-2xl bg-[#1A1A1E] border border-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.55)] overflow-hidden relative">
                  {/* Thanh công cụ Toolbar 3 chấm Mac-style */}
                  <div className="fv-toolbar px-5 py-4 bg-white/[0.02] border-b border-white/[0.04] flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
                  </div>

                  {/* Thân cửa sổ chứa lưới 4 thẻ thông tin nhỏ (Privacy Grid) */}
                  <div className="fv-body p-6 md:p-8">
                    <div className="privacy-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Thẻ 1: GDPR Compliant */}
                      <div className="privacy-card p-5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col items-start space-y-3">
                        <div className="pc-icon w-8 h-8 rounded-lg bg-[#22C55E]/[0.08] border border-[#22C55E]/[0.15] grid place-items-center text-[#22C55E]">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <h4 className="text-[16px] font-bold text-white tracking-tight">
                          GDPR Compliant
                        </h4>
                        <p className="text-[13.5px] text-[#8A8B9E] leading-[1.5]">
                          Full compliance with European data regulations
                        </p>
                      </div>

                      {/* Thẻ 2: No Cookies */}
                      <div className="privacy-card p-5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col items-start space-y-3">
                        <div className="pc-icon w-8 h-8 rounded-lg bg-[#22C55E]/[0.08] border border-[#22C55E]/[0.15] grid place-items-center text-[#22C55E]">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                          </svg>
                        </div>
                        <h4 className="text-[16px] font-bold text-white tracking-tight">
                          No Cookies
                        </h4>
                        <p className="text-[13.5px] text-[#8A8B9E] leading-[1.5]">
                          Cookieless tracking — no annoying banners
                        </p>
                      </div>

                      {/* Thẻ 3: SOC 2 Type II */}
                      <div className="privacy-card p-5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col items-start space-y-3">
                        <div className="pc-icon w-8 h-8 rounded-lg bg-[#22C55E]/[0.08] border border-[#22C55E]/[0.15] grid place-items-center text-[#22C55E]">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                            ></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                        </div>
                        <h4 className="text-[16px] font-bold text-white tracking-tight">
                          SOC 2 Type II
                        </h4>
                        <p className="text-[13.5px] text-[#8A8B9E] leading-[1.5]">
                          Enterprise-grade security certification
                        </p>
                      </div>

                      {/* Thẻ 4: EU Hosting */}
                      <div className="privacy-card p-5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col items-start space-y-3">
                        <div className="pc-icon w-8 h-8 rounded-lg bg-[#22C55E]/[0.08] border border-[#22C55E]/[0.15] grid place-items-center text-[#22C55E]">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <h4 className="text-[16px] font-bold text-white tracking-tight">
                          EU Hosting
                        </h4>
                        <p className="text-[13.5px] text-[#8A8B9E] leading-[1.5]">
                          Data residency in Frankfurt, Germany
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border hidden grid-cols-[1fr_1.2fr] gap-[64px] items-center animate-[panelIn_0.45s_ease_forwards]">
            {/* chua lam */}

            <div>Funnel Analytics</div>
          </div>
        </div>
      </div>
    </div>
  );
};
