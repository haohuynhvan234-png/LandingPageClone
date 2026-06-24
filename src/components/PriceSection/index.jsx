import React from "react";

export const PriceSection = () => {
  return (
    <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border py-[120px] relative bg-gradient-to-b from-[#1E1E24] via-[rgba(255,107,107,0.02)] to-[#1E1E24]">
      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased box-border w-full max-w-[1200px] mx-auto px-6">
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-center mb-[64px] transition-none opacity-100 translate-y-0">
          <div className="font-mono text-[12px] font-[600] text-[#FF6B6B] uppercase tracking-[0.1em] inline-flex items-center gap-[8px] text-center m-0 p-0 box-border mb-[14px] leading-[1.6] antialiased">
            <div className="w-[18px] h-[2px] bg-[#ff6b6b] rounded-[2px]"></div>
            <div>Pricing</div>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased text-center m-0 p-0 box-border text-[clamp(30px,4vw,46px)] font-[800] tracking-[-0.04em] leading-[1.1] mb-[14px]">
            Start free. Scale as you grow.
          </h2>
          <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#8A8B9E] antialiased text-center p-0 box-border text-[16px] max-w-[480px] leading-[1.7] mx-auto m-0">
            No credit card required. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border flex items-center justify-center gap-[14px] mb-[56px] transition-none opacity-100 translate-y-0">
          <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[14px] font-[500] text-[#EEEEF0] transition-colors duration-300 m-0 p-0 box-border leading-[1.6] antialiased">
            Monthly
          </span>
          <button className="relative w-[48px] h-[26px] bg-white/8 rounded-full cursor-pointer border border-[rgba(255,255,255,0.06)] m-0 p-0 box-border antialiased">
            <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-[#FF6B6B] rounded-full shadow-[0_0_12px_rgba(255,107,107,0.35)] transition-transform duration-300 ease-in-out" />
          </button>
          <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[14px] font-[500] text-[#55566A] transition-colors duration-300 m-0 p-0 box-border leading-[1.6] antialiased">
            Annually
          </span>
          <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[11px] font-[700] text-[#22C55E] bg-[#22C55E]/10 px-[10px] py-[3px] rounded-full border border-[#22C55E]/20 box-border leading-[1.6] antialiased m-0">
            Save 30%
          </span>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[20px] items-center m-0 p-0 box-border">
          <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#26262D] border border-white/5 rounded-[20px] px-[32px] py-[40px] relative transition-none opacity-100 translate-y-0">
            <h3 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[15px] font-[600] text-[#8A8B9E] mb-[20px] leading-[1.6] antialiased m-0 p-0 box-border">
              Starter
            </h3>
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border flex items-start gap-[2px] mb-[4px] min-height-[56px]">
              <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased m-0 p-0 box-border font-[800] leading-none transition-all duration-300 cubic-bezier(0.4,0,0.2,1) text-[44px] tracking-[-0.03em]">
                FREE
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[13px] text-[#55566A] leading-[1.6] mb-[28px] antialiased m-0 p-0 box-border">
              Free forever.
            </p>
            <button className="w-full inline-flex items-center justify-center gap-[8px] px-[22px] py-[10px] rounded-full border border-[rgba(255,255,255,0.06)] bg-white/[0.05] text-[#EEEEF0] text-[13.5px] font-[600] tracking-[-0.01em] cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/[0.08] hover:border-white/10 m-0 box-border leading-[1.6] antialiased">
              Get Started
            </button>
            <div class="h-[1px] bg-white/[0.06] my-[24px] p-0 box-border"></div>
            <ul class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border list-none mb-[32px]">
              <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#8A8B9E] text-[13.5px] leading-[1.6] antialiased flex items-center gap-[10px] py-[7px] m-0 box-border list-none">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0 m-0 p-0 box-border"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div> Up to 10K events/mo</div>
              </li>
              <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#8A8B9E] text-[13.5px] leading-[1.6] antialiased flex items-center gap-[10px] py-[7px] m-0 box-border list-none">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0 m-0 p-0 box-border"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div> 1 project</div>
              </li>
              <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#8A8B9E] text-[13.5px] leading-[1.6] antialiased flex items-center gap-[10px] py-[7px] m-0 box-border list-none">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0 m-0 p-0 box-border"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div> Core analytics</div>
              </li>
              <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#8A8B9E] text-[13.5px] leading-[1.6] antialiased flex items-center gap-[10px] py-[7px] m-0 box-border list-none">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0 m-0 p-0 box-border"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div> Community support</div>
              </li>
            </ul>
          </div>
          <div class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#26262D] border border-[#FF6B6B]/25 rounded-[20px] px-[32px] py-[40px] relative z-[2] opacity-100 translate-y-0 transition-all shadow-[0_0_80px_rgba(255,107,107,0.06),0_24px_48px_rgba(0,0,0,0.4)]">
            <span class="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-[#FF6B6B] text-white text-[11px] font-[700] uppercase tracking-[0.05em] px-[16px] py-[4px] rounded-full shadow-[0_0_14px_rgba(255,107,107,0.5)] whitespace-nowrap">
              Most Popular
            </span>

            <div class="text-[15px] font-[600] text-[#8A8B9E] mb-[20px] mt-[6px]">
              Pro
            </div>

            <div class="flex items-start gap-[4px] mb-[4px] min-h-[56px]">
              <span class="text-[#8A8B9E] text-[18px] font-[500] mt-[6px]">
                $
              </span>
              <span class="text-[44px] font-[800] tracking-[-0.03em] text-[#EEEEF0] leading-none">
                25
              </span>
            </div>

            <div class="text-[13px] text-[#55566A] mb-[28px]">per month</div>

            <a
              href="#"
              onclick="return false;"
              class="w-full inline-flex items-center justify-center gap-[8px] px-[22px] py-[12px] rounded-full bg-[#FF6B6B] text-white text-[13.5px] font-[600] tracking-[-0.01em] text-decoration-none cursor-pointer transition-all duration-300 ease-in-out shadow-[0_0_16px_rgba(255,107,107,0.3)] hover:bg-[#FF9B9B] hover:shadow-[0_0_24px_rgba(255,107,107,0.5)]"
            >
              Start Free Trial
            </a>

            <div class="h-[1px] bg-white/[0.06] my-[24px]"></div>

            <ul class="list-none p-0 m-0 mb-[32px]">
              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Up to 1M events/mo</span>
              </li>

              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited projects</span>
              </li>

              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Session replay</span>
              </li>

              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Feature flags &amp; A/B</span>
              </li>

              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Priority support</span>
              </li>
            </ul>
          </div>
          <div class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#26262D] border border-white/5 rounded-[20px] px-[32px] py-[40px] relative transition-all opacity-100 translate-y-0">
            <div class="text-[15px] font-[600] text-[#8A8B9E] mb-[20px]">
              Scale
            </div>

            <div class="flex items-start gap-[4px] mb-[4px] min-h-[56px]">
              <span class="text-[#8A8B9E] text-[18px] font-[500] mt-[6px]">
                $
              </span>
              <span class="text-[44px] font-[800] tracking-[-0.03em] text-[#EEEEF0] leading-none">
                120
              </span>
            </div>

            <div class="text-[13px] text-[#55566A] mb-[28px]">per month</div>

            <a
              href="#"
              onclick="return false;"
              class="w-full inline-flex items-center justify-center gap-[8px] px-[22px] py-[12px] rounded-full border border-[rgba(255,255,255,0.06)] bg-white/[0.05] text-[#EEEEF0] text-[13.5px] font-[600] tracking-[-0.01em] text-decoration-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/[0.08] hover:border-white/10"
            >
              Contact Sales
            </a>

            <div class="h-[1px] bg-white/[0.06] my-[24px]"></div>

            <ul class="list-none p-0 m-0 mb-[32px]">
              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited events</span>
              </li>

              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>SSO &amp; SAML</span>
              </li>

              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Custom retention</span>
              </li>

              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Dedicated CSM</span>
              </li>

              <li class="text-[#8A8B9E] text-[13.5px] flex items-center gap-[10px] py-[7px]">
                <svg
                  class="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>SLA guarantee</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
