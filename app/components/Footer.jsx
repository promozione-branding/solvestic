import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-5 py-7  md:py-7 border-t border-purple-100/70 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left md:pl-10">
          <h4 className="font-semibold text-lg text-gray-900">
            Stay in the loop
          </h4>
          <p className="text-sm text-gray-500 mt-1 max-w-xs">
            Follow us for skincare tips, expert advice &amp; exciting updates.
          </p>
        </div>
        <div className="flex items-center gap-6 ">
          <div className="flex flex-col items-center gap-1.5">
            <a href="https://www.instagram.com/solvesticcare">
              {" "}
              <div className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center">
                <FaInstagram className="text-purple-900" size={16} />
              </div>
            </a>
            <span className="text-xs text-gray-500">Instagram</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <a href="https://www.facebook.com/profile.php?id=61592286175717">
              <div className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center">
                <FaFacebookF className="text-purple-900" size={16} />
              </div>
            </a>
            <span className="text-xs text-gray-500">Facebook</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center">
              <FaYoutube className="text-purple-900" size={16} />
            </div>
            <span className="text-xs text-gray-500">YouTube</span>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-purple-950 text-purple-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="flex items-center md:justify-start justify-center">
              <Image
                src="/footerLogo.png"
                height={100}
                width={100}
                className="!h-15 w-30 object-cover "
              />
            </div>
            <p className="text-xs ml-4 mt-1">
              Science-backed skincare.
              <br className="hidden sm:block" /> Made for Indian skin.
            </p>
          </div>
          <p className="text-xs">© 2026 Solvestic. All rights reserved.</p>
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
      </footer>
    </div>
  );
}
