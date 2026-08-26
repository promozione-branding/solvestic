import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-20">
      

      {/* ---------- Footer ---------- */}
      <footer className="relative bg-[#ad51c1] text-white">
        {/* Wave top edge */}
        <div className="absolute -top-px left-0 w-full overflow-hidden leading-none translate-y-[-99%]">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-[60px] sm:h-[80px]"
          >
            <path
              d="M0,40 C240,100 360,0 600,20 C860,42 980,90 1200,55 C1320,38 1380,45 1440,30 L1440,100 L0,100 Z"
              fill="currentColor"
              className="text-[#ad51c1]"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-6">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-10 md:gap-6">
            {/* Logo + tagline */}
            <div className="text-center md:text-left">
              <div className="flex items-start justify-center md:justify-start">
                <Image
                  src="/footerlogo22.png"
                  height={100}
                  width={100}
                  alt="Solvestic"
                  className="!h-14 w-auto object-cover"
                />
              </div>
              {/* <p className="text-xs mt-2 ml-5 text-purple-300">
                Science-backed skincare.
                <br className="hidden sm:block" /> Made for Indian skin.
              </p> */}
            </div>

            {/* Divider */}
            {/* <div className="hidden md:block w-px self-stretch bg-purple-800" /> */}

            {/* Connect */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs tracking-widest text-white">
                LET&apos;S CONNECT
              </span>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-1.5">
                  <a href="https://www.instagram.com/solvesticcare">
                    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-purple-900 transition">
                      <FaInstagram className="text-white" size={16} />
                    </div>
                  </a>
                  <span className="text-xs text-white">Instagram</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <a href="https://www.facebook.com/profile.php?id=61592286175717">
                    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-purple-900 transition">
                      <FaFacebookF className="text-white" size={16} />
                    </div>
                  </a>
                  <span className="text-xs text-white">Facebook</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <a href="https://www.youtube.com/@solvesticcare">
                    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-purple-900 transition">
                      <FaYoutube className="text-white" size={16} />
                    </div>
                  </a>
                  <span className="text-xs text-white">YouTube</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            {/* <div className="hidden md:block w-px self-stretch bg-purple-800" /> */}

            {/* Legal links */}
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <span className="text-purple-700">|</span>
              <a href="#" className="hover:text-white transition">
                Terms &amp; Conditions
              </a>
            </div>
          </div>

          {/* Bottom divider + copyright */}
         <div className="mt-8 pt-6 border-t border-white text-center">
  <p className="text-xs text-white">
    © 2026 Solvestic. All rights reserved.
  </p>

  {/* <p className="mt-2 text-xs text-purple-300">
    Website Designed By{" "}
    <a
      href="https://inquirybazaar.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-white hover:text-white transition-colors"
    >
      Inquiry Bazaar Pvt. Ltd.
    </a>{" "}
    <span className="text-purple-400">B2B Marketplace</span>
  </p> */}
</div>
        </div>
      </footer>
    </div>
  );
}