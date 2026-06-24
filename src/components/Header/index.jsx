import React from "react";

export const Header = () => {
  return (
    <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased fixed top-0 left-0 w-full z-[1000] bg-[#1E1E24]/80 backdrop-blur-[24px] py-[14px] border-b border-[rgba(255,255,255,0.06)]">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between box-border">
        
        <a
          href="#"
          className="flex items-center gap-3 text-[18px] font-extrabold text-white"
        >
          <span className="grid h-[30px] w-[30px] place-items-center rounded-[8px] bg-[#ff6b6b] text-[14px] font-extrabold text-white shadow-[0_0_24px_#ff6b6b59]">
            Q
          </span>
          Quantix
        </a>

        <nav>
          <ul className="flex items-center gap-[32px] list-none m-0 p-0">
            <li>
              <a href="#features" className="text-[13.5px] font-[500] tracking-[-0.01em] text-[#55566A] no-underline transition-colors duration-300 hover:text-[#EEEEF0]">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-[13.5px] font-[500] tracking-[-0.01em] text-[#55566A] no-underline transition-colors duration-300 hover:text-[#EEEEF0]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#docs" className="text-[13.5px] font-[500] tracking-[-0.01em] text-[#55566A] no-underline transition-colors duration-300 hover:text-[#EEEEF0]">
                Docs
              </a>
            </li>
            <li>
              <a href="#templates" className="text-[13.5px] font-[500] tracking-[-0.01em] text-[#55566A] no-underline transition-colors duration-300 hover:text-[#EEEEF0]">
                Templates
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-[20px]">
          <a href="#login" className="text-[13.5px] font-semibold text-[#55566A] no-underline transition-colors duration-300 hover:text-[#EEEEF0] cursor-pointer">
            Log in
          </a>
          <button className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[100px] text-[13.5px] font-semibold cursor-pointer border-0 transition-all duration-300 ease-in-out tracking-[-0.01em] bg-[#ff6b6b] text-white shadow-[0_0_24px_#ff6b6b59,inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#ff8282]">
            Start Free Trial
          </button>
        </div>

      </div>
    </div>
  );
};