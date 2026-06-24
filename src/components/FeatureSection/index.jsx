import React from "react";

export const FeatureSection = () => {
  return (
    <div class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border py-[120px] relative border-t border-t-[rgba(255,255,255,0.06)]">
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
          <button className="antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] bg-[#FF6B6B] text-white shadow-[0_0_20px_rgba(255,107,107,0.35)]">
            Dashboard
          </button>
          <button className="font-sans text-[13.5px] font-[600] tracking-[-0.01em] text-[#55566A] bg-transparent rounded-full px-[24px] py-[10px] whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer border-none hover:text-[#EEEEF0]">
            Funnels
          </button>
          <button className="font-sans text-[13.5px] font-[600] tracking-[-0.01em] text-[#55566A] bg-transparent rounded-full px-[24px] py-[10px] whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer border-none hover:text-[#EEEEF0]">
            SDK
          </button>
          <button className="font-sans text-[13.5px] font-[600] tracking-[-0.01em] text-[#55566A] bg-transparent rounded-full px-[24px] py-[10px] whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer border-none hover:text-[#EEEEF0]">
            Session Replay
          </button>
          <button className="font-sans text-[13.5px] font-[600] tracking-[-0.01em] text-[#55566A] bg-transparent rounded-full px-[24px] py-[10px] whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer border-none hover:text-[#EEEEF0]">
            Privacy
          </button>
        </div>
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border relative">
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
                  <svg className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>Sub-second data refresh</div>
                </li>
                <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                  <svg className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>Drag-and-drop widgets</div>
                </li>
                <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                  <svg className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
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
          <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border hidden grid-cols-[1fr_1.2fr] gap-[64px] items-center animate-[panelIn_0.45s_ease_forwards]">
            {/* chua lam */}
            <div>Funnel Analytics</div>
          </div>
        </div>
      </div>
    </div>
  );
};
