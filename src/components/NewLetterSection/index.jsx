import React from "react";

export const NewLetterSection = () => {
  return (
    <section class="w-full bg-[#1E1E24] py-[80px] px-6 text-[#EEEEF0] font-['Plus_Jakarta_Sans',-apple-system,sans-serif] antialiased">
      <div class="max-w-[1200px] mx-auto">
        <div class="max-w-[580px] mx-auto text-center flex flex-col items-center">
          <h2 class="text-[32px] md:text-[40px] font-[800] tracking-[-0.04em] text-[#EEEEF0] leading-tight mb-[12px]">
            Stay in the loop
          </h2>

          <p class="text-[#8A8B9E] text-[14px] leading-[1.6] max-w-[460px] mb-[32px]">
            Product updates, engineering insights, and zero spam. Unsubscribe
            anytime.
          </p>

          <div class="w-full flex items-center bg-[#26262D] border border-white/5 rounded-full p-[6px] pl-[20px] focus-within:border-[#FF6B6B]/30 transition-all duration-300 mb-[24px]">
            <input
              type="email"
              placeholder="you@company.com"
              autocomplete="email"
              class="flex-1 bg-transparent border-none px-[18px] py-[14px] font-inherit text-[15px] text-[#EEEEF0] outline-none focus:outline-none focus:ring-0 min-w-0 m-0 box-border antialiased"
            />

            <button class="bg-[#FF6B6B] text-white text-[13.5px] font-[600] px-[24px] py-[10px] rounded-full shrink-0 shadow-[0_0_16px_rgba(255,107,107,0.3)] hover:bg-[#FF9B9B] hover:shadow-[0_0_24px_rgba(255,107,107,0.5)] transition-all duration-300">
              Subscribe
            </button>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-x-[24px] gap-y-[10px]">
            <span class="text-[12.5px] text-[#55566A] flex items-center gap-[6px]">
              <svg
                class="w-[13px] h-[13px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              6,200+ subscribers
            </span>

            <span class="text-[12.5px] text-[#55566A] flex items-center gap-[6px]">
              <svg
                class="w-[13px] h-[13px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Monthly digest
            </span>

            <span class="text-[12.5px] text-[#55566A] flex items-center gap-[6px]">
              <svg
                class="w-[13px] h-[13px] fill-none stroke-current stroke-[2.5] text-[#FF6B6B] shrink-0"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Unsubscribe anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
