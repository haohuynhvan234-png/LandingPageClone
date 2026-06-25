import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const CountUpComponent = CountUp?.default ?? CountUp;

export const StaticSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border py-[80px] border-y border-[rgba(255,255,255,0.06)]"
    >
      <div className="w-full max-w-[1200px] mx-auto px-[24px] box-border">
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border flex justify-between">
          <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-left flex-1 transition-none opacity-100 translate-y-0">
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased text-[48px] font-[800] tracking-[-0.04em] leading-[1] m-0 p-0 box-border mb-[6px]">
              <CountUpComponent end={50} suffix="M+" duration={2} />
            </div>
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased text-left m-0 p-0 box-border text-[13px] text-[#55566A] font-[500]">
              Events tracked daily
            </div>
          </div>
          <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-left flex-1 transition-none opacity-100 translate-y-0">
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased text-[48px] font-[800] tracking-[-0.04em] leading-[1] m-0 p-0 box-border mb-[6px]">
              <CountUpComponent end={99.9} suffix="%" duration={2} />
            </div>
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased text-left m-0 p-0 box-border text-[13px] text-[#55566A] font-[500]">
              Uptime SLA
            </div>
          </div>
          <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-left flex-1 transition-none opacity-100 translate-y-0">
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased text-[48px] font-[800] tracking-[-0.04em] leading-[1] m-0 p-0 box-border mb-[6px]">
              <CountUpComponent end={2400} suffix="+" duration={2} />
            </div>
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased text-left m-0 p-0 box-border text-[13px] text-[#55566A] font-[500]">
              Teams worldwide
            </div>
          </div>
          <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-left flex-1 transition-none opacity-100 translate-y-0">
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased text-[48px] font-[800] tracking-[-0.04em] leading-[1] m-0 p-0 box-border mb-[6px]">
              <CountUpComponent end={50} suffix="ms" duration={2} />
            </div>
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased text-left m-0 p-0 box-border text-[13px] text-[#55566A] font-[500]">
              Query response time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
