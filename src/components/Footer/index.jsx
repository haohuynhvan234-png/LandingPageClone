import React from 'react'

export const Footer = () => {
  return (
    <footer class="w-full bg-[#1E1E24] text-[#8A8B9E] font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[13px] antialiased py-[40px] px-6 border-t border-white/[0.04]">
  <div class="max-w-[1200px] mx-auto flex flex-col items-center">
    
    <div class="flex flex-wrap items-center justify-center gap-[16px] mb-[32px]">
      <a href="#features" class="text-[#8A8B9E] hover:text-[#EEEEF0] text-decoration-none transition-colors duration-300">Features</a>
      <span class="w-[3px] h-[3px] bg-[#55566A] rounded-full"></span>
      
      <a href="#pricing" class="text-[#8A8B9E] hover:text-[#EEEEF0] text-decoration-none transition-colors duration-300">Pricing</a>
      <span class="w-[3px] h-[3px] bg-[#55566A] rounded-full"></span>
      
      <a href="#" onclick="return false;" class="text-[#8A8B9E] hover:text-[#EEEEF0] text-decoration-none transition-colors duration-300">Documentation</a>
      <span class="w-[3px] h-[3px] bg-[#55566A] rounded-full"></span>
      
      <a href="#" onclick="return false;" class="text-[#8A8B9E] hover:text-[#EEEEF0] text-decoration-none transition-colors duration-300">Blog</a>
      <span class="w-[3px] h-[3px] bg-[#55566A] rounded-full"></span>
      
      <a href="#" onclick="return false;" class="text-[#8A8B9E] hover:text-[#EEEEF0] text-decoration-none transition-colors duration-300">Partners</a>
    </div>

    <div class="w-full h-[1px] bg-white/[0.04] mb-[24px]"></div>

    <div class="w-full flex flex-col md:flex-row items-center justify-between gap-y-[16px]">
      
      <p class="m-0 p-0 text-[12.5px] text-[#55566A]">
        Copyright © 2026 Quantix. Design: 
        <a href="https://templatemo.com" target="_blank" rel="nofollow" class="text-[#FF6B6B] hover:text-[#fdb7b7] transition-colors duration-300 font-medium">TemplateMo</a>
      </p>
      
      <div class="flex flex-wrap items-center gap-[20px]">
        
        <div class="flex items-center gap-[16px]">
          <a href="#" aria-label="X" onclick="return false;" class="text-[#55566A] hover:text-[#EEEEF0] transition-colors duration-300">
            <svg class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a href="#" aria-label="GitHub" onclick="return false;" class="text-[#55566A] hover:text-[#EEEEF0] transition-colors duration-300">
            <svg class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
          </a>
          <a href="#" aria-label="LinkedIn" onclick="return false;" class="text-[#55566A] hover:text-[#EEEEF0] transition-colors duration-300">
            <svg class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
          </a>
        </div>

        <span class="w-[1px] h-[12px] bg-white/[0.08]"></span>

        <div class="flex items-center gap-[16px] text-[12.5px]">
          <a href="#" onclick="return false;" class="text-[#55566A] hover:text-[#EEEEF0] text-decoration-none transition-colors duration-300">Privacy</a>
          <a href="#" onclick="return false;" class="text-[#55566A] hover:text-[#EEEEF0] text-decoration-none transition-colors duration-300">Terms</a>
        </div>

      </div>
    </div>

  </div>
</footer>
  )
}
