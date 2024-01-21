import React from 'react';
import Image from 'next/image';
import banner from '@/images/bannerImg.jpg';

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={banner}
        alt="banner-image"
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute top-0 w-full h-full bg-white/15 text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-7xl lg:text-[150] font-bold">Koon_9_</h2>
        <p className='text-xl md:text-2xl lg:text-5xl font-semibold'>Web Programmer, Photographer</p>
      </div>
    </div>
  );
};

export default Hero;
