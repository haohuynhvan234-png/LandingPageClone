import React from "react";

export const HeroSection = () => {
  return (
    // Hero Section
    <div className="relative pt-[180px] px-6 pb-[120px] overflow-hidden text-text-primary font-jakarta leading-[1.6] antialiased box-border m-0">
      <div className="`relative z-[1] grid grid-cols-2 gap-[60px] items-center w-full max-w-[1200px] mx-auto px-6 text-text-primary font-jakarta leading-[1.6] antialiased box-border">
        <div>
          <div className="inline-flex items-center gap-2 pt-[5px] pr-4 pb-[5px] pl-[7px] bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.2)] rounded-[100px] text-[12.5px] font-semibold text-[#FF9B9B] mb-7 font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased box-border m-0">
            <span className="w-[7px] h-[7px] rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(255,155,155,0.6)] box-border"></span>
            <div>Version 2.0 is Live</div>
          </div>
          <div className="text-[clamp(40px,5vw,62px)] font-extrabold tracking-[-0.04em] leading-[1.05] text-text-primary mb-5 font-jakarta antialiased box-border m-0 p-0">
            Analytics that
          </div>
          <span
            className="
              text-[65px]
              font-extrabold
              leading-none
              bg-gradient-to-r
              from-[#f8c5c5]
              via-[#ff6b6b]
              to-[#ff8f8f]
              bg-clip-text
              text-transparent
            "
          >
            move the needle
          </span>
          <div className="text-[16.5px] leading-[1.7] text-text-secondary mb-9 max-w-[460px] font-jakarta antialiased box-border m-0 p-0">
            Ship faster with real-time product analytics, session replay, and
            feature flags — all in one platform built for engineering teams.
          </div>
          <div className="flex items-center gap-3.5 mb-12 text-text-primary font-jakarta leading-[1.6] antialiased box-border m-0 p-0">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-[linear-gradient(135deg,_#ff6b6b_0%,_#ff8787_100%)]
                px-8 py-4
                text-[14.5px] font-semibold text-white
                shadow-[0_8px_24px_rgba(255,107,107,0.3)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_36px_rgba(255,107,107,0.45)]
              "
            >
              Get Started Free
              <span className="transition-transform duration-300 hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/10
                bg-white/5
                px-8 py-4
                text-[14.5px] font-semibold text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:border-white/20
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>

              Watch Demo
            </a>
          </div>
          <div className="flex flex-col gap-3.5 text-[#EEEEF0] font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased box-border m-0 p-0">
            <div className="text-[11.5px] font-medium text-[#55566A] uppercase tracking-[0.1em] font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased box-border m-0 p-0">
              Trusted by 2,400+ teams
            </div>
            <div className="flex flex-wrap items-center gap-8">
              {["Vercel", "Linear", "Raycast", "Resend", "Supabase"].map((logo) => (
                <span
                  key={logo}
                  className="flex items-center gap-2 text-[14px] font-medium text-white/20"
                >
                  <span className="h-5 w-5 rounded-md bg-white/5 border border-white/5" />
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border relative">
          <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border bg-[#26262D] border border-[rgba(255,255,255,0.06)] rounded-[14px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-transform duration-500 ease-[ease] transform-none">
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border flex items-center gap-[6px] px-[16px] py-[12px] border-b border-b-[rgba(255,255,255,0.06)]">
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border w-[10px] h-[10px] rounded-full bg-[#f43f5e] opacity-70"></div>
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border w-[10px] h-[10px] rounded-full bg-[#F59E0B] opacity-70"></div>
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border w-[10px] h-[10px] rounded-full bg-[#22C55E] opacity-70"></div>
            </div>

            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border p-[20px]">
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border grid grid-cols-3 gap-[12px] mb-[16px]">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] rounded-[10px] p-[14px] border border-[rgba(255,255,255,0.06)]">
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] text-[#55566A] mb-[6px] uppercase tracking-[0.06em]">
                    Page Views
                  </div>
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-[20px] font-[800] tracking-[-0.04em]">
                    24.8K
                  </div>
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] font-[600] text-[#22C55E] mt-[4px]">
                    +12.3%
                  </div>
                </div>
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] rounded-[10px] p-[14px] border border-[rgba(255,255,255,0.06)]">
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] text-[#55566A] mb-[6px] uppercase tracking-[0.06em]">
                    Conversions
                  </div>
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-[20px] font-[800] tracking-[-0.04em]">
                    1,847
                  </div>
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] font-[600] text-[#22C55E] mt-[4px]">
                    +8.1%
                  </div>
                </div>
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] rounded-[10px] p-[14px] border border-[rgba(255,255,255,0.06)]">
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] text-[#55566A] mb-[6px] uppercase tracking-[0.06em]">
                    Bounce Rate
                  </div>
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-[20px] font-[800] tracking-[-0.04em]">
                    32%
                  </div>
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] font-[600] text-[#22C55E] mt-[4px]">
                    -4.2%
                  </div>
                </div>
              </div>
              {/* next */}
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] rounded-[10px] p-[16px] border border-[rgba(255,255,255,0.06)] h-[120px] relative overflow-hidden">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] text-[#55566A] uppercase tracking-[0.06em]">
                  Traffic — Last 30 days
                </div>
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border absolute bottom-[16px] left-[16px] right-[16px] h-[60px]">
                  <svg viewBox="0 0 300 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stop-color="rgba(255,107,107,0.25)"
                        ></stop>
                        <stop
                          offset="100%"
                          stop-color="rgba(255,107,107,0)"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 50 Q20 45 40 40 T80 30 T120 35 T160 20 T200 25 T240 15 T280 10 T300 5 V60 H0Z"
                      fill="url(#lineGrad)"
                    ></path>
                    <path
                      d="M0 50 Q20 45 40 40 T80 30 T120 35 T160 20 T200 25 T240 15 T280 10 T300 5"
                      fill="none"
                      stroke="#FF6B6B"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
