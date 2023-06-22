import manOne from '../../public/images/manOne.png';
import manTwo from '../../public/images/manTwo.png';
import manThree from '../../public/images/manThree.png';

import { SingleHuman } from '../singleHuman/SingleHuman';
import { Title } from '../title/Title';
import { BigChip } from '../bigChip/BigChip';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const HumansBlock = () => {
  const uxRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const [first, setFirst] = useState<boolean>(true);
  const [second, setSecond] = useState<boolean>(false);
  const [three, setThree] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        uxRef.current !== null &&
        uiRef.current !== null &&
        frontendRef.current !== null &&
        imgRef.current !== null
      ) {
        const imgEl = imgRef?.current?.getBoundingClientRect();
        const imgCenter = imgEl.top + imgEl.height / 2;

        const uxEl = uxRef.current.getBoundingClientRect();
        const uxBottom = uxEl.bottom;

        const uiEl = uiRef.current.getBoundingClientRect();
        const uiBottom = uiEl.bottom;

        const frontendEl = frontendRef.current.getBoundingClientRect();
        const frontendBottom = frontendEl.bottom;

        if (imgCenter <= uxBottom) {
          setFirst(true);
          setSecond(false);
          setThree(false);
        } else if (imgCenter <= uiBottom) {
          setFirst(false);
          setSecond(true);
          setThree(false);
        } else if (imgCenter <= frontendBottom) {
          setFirst(false);
          setSecond(false);
          setThree(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 auto-rows-fr gap-5 justify-between">
        <motion.div ref={imgRef} className="col-[1] flex justify-start sticky top-[150px]">
          {first && (
            <motion.div className="flex justify-start">
              <SingleHuman title={'ux'} image={manOne} />
            </motion.div>
          )}
          {second && (
            <motion.div className="flex justify-start">
              <SingleHuman title={'ux'} image={manTwo} />
            </motion.div>
          )}
          {three && (
            <motion.div className="flex justify-start">
              <SingleHuman title={'ux'} image={manThree} />
            </motion.div>
          )}
        </motion.div>

        <div
          ref={uxRef}
          className="flex flex-col justify-start items-start pt-[107px] pl-[80px] col-[2]"
        >
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
        <div
          ref={uiRef}
          className="flex flex-col justify-start items-start pt-[107px] pl-[80px] col-[2]"
        >
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
        <div
          ref={frontendRef}
          className="flex flex-col justify-start items-start pt-[107px] pl-[80px] col-[2]"
        >
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
