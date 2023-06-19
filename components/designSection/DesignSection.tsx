'use client';

import Image from 'next/image';
import cheerful from '@/public/images/cheerful.png';

export const DesignSection = () => {
  return (
    <div className="rounded-[30px] mb-[320px] bg-[url('/images/cheerful.png')] bg-cover bg-no-repeat bg-center">
      <div className="rounded-[30px] h-full pt-[224px] pl-[75px] pb-[71px]">
        <p className="font-normal text-[48px] leading-[58px] text-white w-[50%] mb-[159px]">
          Design trial. Get started with your first trial
        </p>
        <div>
          <button className="font-semibold text-[24px] leading-[29px] text-white py-[40px] px-[57px] backdrop-blur-[15px] rounded-[50px] bg-[rgba(255,255,255,0.5)]">
            Book a trial
          </button>
        </div>
      </div>
    </div>
  );
};
