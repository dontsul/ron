'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import brief from '@/public/images/brief.png';
import estimate from '@/public/images/estimate.png';
import proposal from '@/public/images/proposal.png';
import { motion, useAnimate, useInView, useScroll, AnimatePresence } from 'framer-motion';

export const NextElements = () => {
  const briefRef = useRef<HTMLDivElement>(null);
  const estimateRef = useRef<HTMLDivElement>(null);
  const proposalRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const [first, setFirst] = useState<boolean>(true);
  const [second, setSecond] = useState<boolean>(false);
  const [three, setThree] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        briefRef.current !== null &&
        estimateRef.current !== null &&
        proposalRef.current !== null &&
        imgRef.current !== null
      ) {
        const imgEl = imgRef?.current?.getBoundingClientRect();
        const imgCenter = imgEl.top + imgEl.height / 2;

        const briefEl = briefRef.current.getBoundingClientRect();
        const briefBottom = briefEl.bottom;
        const estimateEl = estimateRef.current.getBoundingClientRect();
        const estimateBottom = estimateEl.bottom;
        const proposalEl = proposalRef.current.getBoundingClientRect();
        const proposalBottom = proposalEl.bottom;

        if (imgCenter <= briefBottom) {
          setFirst(true);
          setSecond(false);
          setThree(false);
        } else if (imgCenter <= estimateBottom) {
          setFirst(false);
          setSecond(true);
          setThree(false);
        } else if (imgCenter <= proposalBottom) {
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
    <AnimatePresence>
      <div className="grid grid-cols-2 auto-rows-fr gap-5">
        <div ref={briefRef} className="col-[1] pt-[100px]">
          <h4 className="font-semibold text-[90px] leading-[140%] text-black mb-[60px]">Brief</h4>
          <p className="text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] mb-[63px]">
            This is one of the{' '}
            <span className="text-black font-semibold">most important stages</span> in the process
            of our cooperation.
          </p>
          <ul className="marker:text-black list-disc pl-5 space-y-[16px] text-[rgba(0,0,0,0.7)]">
            <li className="text-[24px] leading-[29px]">Our questionnaire</li>
            <li className="text-[24px] leading-[29px]">Documentation</li>
            <li className="text-[24px] leading-[29px]">Visual assets</li>
          </ul>
        </div>
        <motion.div ref={imgRef} className="col-[2] flex justify-end sticky top-[150px]">
          {first && (
            <motion.div>
              <Image src={brief} alt="brief" width={578} height={712} />
            </motion.div>
          )}
          {second && (
            <motion.div>
              <Image src={estimate} alt="estimate" width={578} height={712} />
            </motion.div>
          )}
          {three && (
            <motion.div>
              <Image src={proposal} alt="proposal" width={578} height={712} />
            </motion.div>
          )}
        </motion.div>

        <div ref={estimateRef} className="col-[1] pt-[100px]">
          <h4 className="font-semibold text-[90px] leading-[140%] text-black mb-[60px]">
            Estimate
          </h4>
          <p className="text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] mb-[63px]">
            This is one of the{' '}
            <span className="text-black font-semibold">most important stages</span> in the process
            of our cooperation.
          </p>
          <ul className="marker:text-black list-disc pl-5 space-y-[16px] text-[rgba(0,0,0,0.7)]">
            <li className="text-[24px] leading-[29px]">Our questionnaire</li>
            <li className="text-[24px] leading-[29px]">Documentation</li>
            <li className="text-[24px] leading-[29px]">Visual assets</li>
          </ul>
        </div>
        <div ref={proposalRef} className="col-[1] pt-[100px]">
          <h4 className="font-semibold text-[90px] leading-[140%] text-black mb-[60px]">
            Proposal
          </h4>
          <p className="text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] mb-[63px]">
            This is one of the{' '}
            <span className="text-black font-semibold">most important stages</span> in the process
            of our cooperation.
          </p>
          <ul className="marker:text-black list-disc pl-5 space-y-[16px] text-[rgba(0,0,0,0.7)]">
            <li className="text-[24px] leading-[29px]">Our questionnaire</li>
            <li className="text-[24px] leading-[29px]">Documentation</li>
            <li className="text-[24px] leading-[29px]">Visual assets</li>
          </ul>
        </div>
      </div>
    </AnimatePresence>
  );
};
