'use client';

import { Button } from '../button/Button';
import Share from '@/public/svg/share.svg';

const footerList = ['Say Hello 👋', 'TikTok', 'Instagram', 'Dribbble', 'Behance'];

export const Footer = () => {
  return (
    <footer className="container pb-[60px]">
      <div className="grid grid-cols-2 mb-[333px]">
        <ul className="space-y-[32px] text-black">
          {footerList.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className="text-[32px] leading-[38px] 
                 relative
                 after:content-[''] 
                 after:bg-black
                 after:h-[3px] 
                 after:w-[0%] 
                 after:rounded-xl
                 after:left-0 
                 after:-bottom-[3px] 
                 after:absolute 
                 after:duration-300 
                 hover:after:w-full
                
                "
                  href="!#"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="space-y-[35px]  font-semibold text-[42px] leading-[140%] text-black">
          <li>
            <a
              className="
            relative
            after:bg-black
            after:h-[3px] 
            after:w-[0%] 
            after:rounded-xl
            after:left-0 
            after:-bottom-[3px] 
            after:absolute 
            after:duration-300 
            hover:after:w-full
            after:content-[''] 
            "
              href="!#"
            >
              Trial
            </a>
          </li>
          <li>
            <a
              className="
             relative
             after:bg-black
             after:h-[3px] 
             after:w-[0%] 
             after:rounded-xl
             after:left-0 
             after:-bottom-[3px] 
             after:absolute 
             after:duration-300 
             hover:after:w-full
             after:content-['']
            "
              href="!#"
            >
              Cases
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center mb-[210px]">
        <p className="font-normal text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] w-[40%] mr-[57px]">
          If you know someone we can help, please share this site
        </p>
        <Button outline={true} bg={false} animate={false}>
          Share the Link <Share className="ml-[24px] " />
        </Button>
      </div>
      <div className="flex items-center">
        <p className="mr-[27px] font-normal text-lg leading-[140%] text-[rgba(0,0,0,0.7)]">
          © 2023, Rondesignlab Inc.
        </p>
        <ul className="flex items-center space-x-[33px] font-normal text-lg leading-[140%] text-[rgba(0,0,0,0.7)]">
          <li>
            <a href="!#">Sitemap</a>
          </li>
          <li>
            <a href="!#">Privacy Policy</a>
          </li>
          <li>
            <a href="!#">Terms of Use</a>
          </li>
          <li>
            <a href="!#">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
