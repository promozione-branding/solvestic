import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <>
    <div className='w-full'>
     <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 pt-2 pb-2">
        <div className="flex  justify-center items-center">
          <Image src="/mainLogo1.png" height={100} width={100} className='!h-20 w-30 object-cover'/>
          {/* <span className="text-pink-500 text-2xl sm:text-3xl font-bold">
            .
          </span> */}
        </div>
        <div className="hidden sm:block text-right">
          <p className="text-sm text-gray-600">
            Skincare that understands Indian skin
          </p>
          <div className="h-0.5 w-16 bg-gradient-to-r from-pink-400 to-purple-400 ml-auto mt-1 rounded-full" />
        </div>
      </div>
      </div>
    </>
  )
}
