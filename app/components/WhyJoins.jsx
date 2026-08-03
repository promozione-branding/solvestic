import React from 'react'
import { FaBell, FaGift, FaRegSmile, FaTags } from 'react-icons/fa';


const WhyCard = ({ icon: Icon, title, desc }) => (
  <div className="border border-2 border-purple-950 rounded-xl px-5 py-5 md:py-2 flex items-start gap-3 sm:flex-col sm:items-start">
    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
      <Icon className="text-purple-900" size={18} />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-[16px]">{title}</h4>
      <p className="text-sm text-gray-500 mt-1 leading-snug">{desc}</p>
    </div>
  </div>
);

export default function WhyJoins() {
  return (
    <div className='w-full'>
         <section className="max-w-7xl mx-auto px-5 sm:px-8 py-7  mdpy-14 border-t border-purple-100/70">
         <div className="flex items-center justify-center gap-4 mb-5 md:mb-10">
  <div className="flex-1 h-[2px] bg-gray-300"></div>

  <h2 className="text-center text-2xl sm:text-3xl font-bold text-purple-950 whitespace-nowrap">
    Why Join the Solvestic Waitlist?
  </h2>

  <div className="flex-1 h-[2px] bg-gray-300"></div>
</div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <WhyCard
                    icon={FaGift}
                    title="Early Access"
                    desc="Be the first to explore our exclusive skincare range."
                  />
                  <WhyCard
                    icon={FaTags}
                    title="Exclusive Offers"
                    desc="Special launch discounts only for our waitlist tribe."
                  />
                  <WhyCard
                    icon={FaRegSmile}
                    title="Skin Solutions"
                    desc="Personalized tips & solutions for your skin concerns."
                  />
                  <WhyCard
                    icon={FaBell}
                    title="Launch Updates"
                    desc="Get notified the moment we go live."
                  />
                </div>
              </section>
    </div>
  )
}
