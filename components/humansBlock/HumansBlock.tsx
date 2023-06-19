import manOne from '../../public/images/manOne.png';
import manTwo from '../../public/images/manTwo.png';
import manThree from '../../public/images/manThree.png';

import { SingleHuman } from '../singleHuman/SingleHuman';
import { Title } from '../title/Title';
import { BigChip } from '../bigChip/BigChip';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const HumansBlock = () => {
  const { scrollY } = useScroll();

  console.log(scrollY);

  return (
    <div>
      <div className="grid grid-cols-2 relative">
        <motion.div>
          <SingleHuman title={'ux'} image={manOne} />
        </motion.div>
        <div className="flex flex-col justify-start items-start pt-[107px] pl-[80px] col-[2]">
          <Title tag="h4" cn="mb-[60px]">
            UX & Strategy
          </Title>
          <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)] mb-[60px]">
            UX strategy aims to{' '}
            <span className="text-black font-medium"> boost user satisfaction</span> by optimizing
            product usability and effectiveness.
          </p>
          <div className="flex flex-wrap">
            <BigChip text="Research" />
            <BigChip text="Discovery" />
            <BigChip text="Consulting" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start pt-[107px] pl-[80px] col-[2]">
          <Title tag="h4" cn="mb-[60px]">
            UI / Visual Design
          </Title>
          <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)] mb-[60px]">
            UX strategy aims to{' '}
            <span className="text-black font-medium"> boost user satisfaction</span> by optimizing
            product usability and effectiveness.
          </p>
          <div className="flex flex-wrap">
            <BigChip text="Mobile Application" />
            <BigChip text="Websites" />
            <BigChip text="Branding" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start pt-[107px] pl-[80px] col-[2]">
          <Title tag="h4" cn="mb-[60px]">
            Front-End Dev
          </Title>
          <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)] mb-[60px]">
            UX strategy aims to{' '}
            <span className="text-black font-medium"> boost user satisfaction</span> by optimizing
            product usability and effectiveness.
          </p>
          <div className="flex flex-wrap">
            <BigChip text="Webflow" />
            <BigChip text="Mobile Development" />
            <BigChip text="Web Applications" />
          </div>
        </div>
      </div>
    </div>
  );
};

// <div>
//       <div className="grid grid-cols-2">
//         <SingleHuman title={'ux'} image={manOne} />
//         <div className="flex flex-col justify-start items-start pt-[107px] pl-[80px] ">
//           <Title tag="h4" cn="mb-[60px]">
//             UX & Strategy
//           </Title>
//           <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)] mb-[60px]">
//             UX strategy aims to{' '}
//             <span className="text-black font-medium"> boost user satisfaction</span> by optimizing
//             product usability and effectiveness.
//           </p>
//           <div className="flex flex-wrap">
//             <BigChip text="Research" />
//             <BigChip text="Discovery" />
//             <BigChip text="Consulting" />
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2">
//         <SingleHuman title={'ux'} image={manTwo} />
//         <div className="flex flex-col justify-start items-start pt-[107px] pl-[80px] ">
//           <Title tag="h4" cn="mb-[60px]">
//             UI / Visual Design
//           </Title>
//           <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)] mb-[60px]">
//             UX strategy aims to{' '}
//             <span className="text-black font-medium"> boost user satisfaction</span> by optimizing
//             product usability and effectiveness.
//           </p>
//           <div className="flex flex-wrap">
//             <BigChip text="Mobile Application" />
//             <BigChip text="Websites" />
//             <BigChip text="Branding" />
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2">
//         <SingleHuman title={'ux'} image={manThree} />
//         <div className="flex flex-col justify-start items-start pt-[107px] pl-[80px] ">
//           <Title tag="h4" cn="mb-[60px]">
//             Front-End Dev
//           </Title>
//           <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)] mb-[60px]">
//             UX strategy aims to{' '}
//             <span className="text-black font-medium"> boost user satisfaction</span> by optimizing
//             product usability and effectiveness.
//           </p>
//           <div className="flex flex-wrap">
//             <BigChip text="Webflow" />
//             <BigChip text="Mobile Development" />
//             <BigChip text="Web Applications" />
//           </div>
//         </div>
//       </div>
//     </div>
