import React from 'react'
import { FaLeaf, FaSmog, FaSun, FaThermometerHalf, FaTint } from 'react-icons/fa'


const UnderstandItem = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center gap-3">
    <Icon className="text-purple-900" size={30} />
    <h4 className="font-light text-gray-900 text-[15px]">{title}</h4>
    <p className="text-sm text-gray-500 leading-snug">{desc}</p>
  </div>
);

export default function Understand() {
  return (
    <>
    <div className='w-full'>
         <section className="bg-purple-50/60 py-7  md:py-14">
                <div className="max-w-7xl mx-auto px-5 sm:px-8">
                  <h2 className="text-center text-2xl sm:text-3xl font-bold text-purple-950 mb-12">
                    We Understand Indian Skin
                  </h2>
        
                    <div className=' grid md:grid-cols-[70%_30%] gap-5 md:gap-0'>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center px-4">
                    <UnderstandItem
                      icon={FaSun}
                      title="Harsh Sun"
                      desc="Leads to tanning & pigmentation"
                    />
                    <UnderstandItem
                      icon={FaSmog}
                      title="Pollution"
                      desc="Causes dullness & clogged pores"
                    />
                    <UnderstandItem
                      icon={FaTint}
                      title="Hard Water"
                      desc="Makes skin dry & flaky"
                    />
                    <UnderstandItem
                      icon={FaThermometerHalf}
                      title="Extreme Weather"
                      desc="Weakens skin barrier & causes sensitivity"
                    />
                  
        
                   
                  </div>
                   <div className=" bg-white rounded-2xl p-6 relative overflow-hidden border border-purple-100">
                      <FaLeaf className="absolute -bottom-0 right-4 text-purple-100" size={90} />
                      <h4 className="font-semibold text-gray-900 relative z-10">
                        Formulated for
                      </h4>
                      <h3 className="text-lg font-bold text-purple-950 relative z-10 mb-3">
                        Indian Skin
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed relative z-10">
                        Thoughtfully created with safe ingredients that work with our
                        climate, lifestyle &amp; skin type.
                      </p>
                    </div>
                      </div>
                </div>
              </section>
    </div>
    </>
  )
}
