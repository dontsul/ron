'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Title } from '../title/Title';
import { BorderHuman } from '../borderHuman/BorderHuman';
// import Woman from '@/public/svg/woman.svg';
import woman from '@/public/images/woman.png';

export const TalkSection = () => {
  const ref = useRef<SVGSVGElement>(null);
  return (
    <div className="mb-[320px]">
      <div className="mb-[116px]">
        <p className="text-[32px] leading-[38px] text-[rgba(0,0,0,0.7)] mb-[5px]">Shall we chat?</p>
        <a
          href="mailto:hello@rondesignlab.com"
          className="font-semibold text-[32px] leading-[38px] text-black 
          relative
          after:content-[''] 
          after:bg-[rgba(0,0,0,0.7)]
          after:h-[3px] 
          after:w-[0%] 
          after:rounded-xl
          after:left-0 
          after:-bottom-[3px] 
          after:absolute 
          after:duration-300 
          hover:after:w-full"
        >
          hello@rondesignlab.com
        </a>
      </div>
      <div className="flex flex-wrap items-center">
        <Title tag="h2" cn="leading-[130%] flex flex-wrap items-center">
          Let’s talk {<BorderHuman color="#FFE99D" cn="mx-[12px]" image={woman} />} your next
          project
          <motion.button
            whileHover={{
              backgroundColor: '#000000',
              color: '#ffffff',
            }}
            onHoverStart={(e) => {
              if (ref.current !== null && ref.current !== undefined) {
                ref.current.style.fill = '#ffffff';
              }
            }}
            onHoverEnd={(e) => {
              console.log(ref);

              if (ref.current !== null && ref.current !== undefined) {
                ref.current.style.fill = '#000000';
              }
            }}
            className="bg-white rounded-[50px] px-[73px] py-[50px] ml-[27px] my-auto"
          >
            <svg
              ref={ref}
              width="46"
              height="24"
              viewBox="0 0 46 24"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M45.5607 13.0607C46.1464 12.4749 46.1464 11.5251 45.5607 10.9393L36.0147 1.3934C35.4289 0.807611 34.4792 0.807611 33.8934 1.3934C33.3076 1.97919 33.3076 2.92893 33.8934 3.51472L42.3787 12L33.8934 20.4853C33.3076 21.0711 33.3076 22.0208 33.8934 22.6066C34.4792 23.1924 35.4289 23.1924 36.0147 22.6066L45.5607 13.0607ZM0 13.5H44.5V10.5H0V13.5Z" />
            </svg>
          </motion.button>
        </Title>
      </div>
    </div>
  );
};
