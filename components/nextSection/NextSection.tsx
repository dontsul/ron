'use client';

import { Title } from '../title/Title';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import brief from '@/public/images/brief.png';
import { motion, useAnimate, useInView } from 'framer-motion';
import { NextElements } from '../nextElements/NextElements';

export const NextSection = () => {
  const [isElementInCenter, setIsElementInCenter] = useState(false);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    const handleScroll = () => {
      const elementRect = document?.getElementById('wrapTitleNext')?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (elementRect !== undefined) {
        if (elementRect.top <= viewportHeight / 2 && elementRect.bottom >= viewportHeight / 2) {
          setIsElementInCenter(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView && isElementInCenter) {
      animate(
        scope.current,
        {
          scale: 0.7,
        },
        { duration: 2 }
      );
    }
  }, [isInView, scope, animate, isElementInCenter]);

  return (
    <div className="mb-[320px]">
      <motion.div ref={scope} id="wrapTitleNext" className=" mb-[110px]">
        <Title cn="text-center font-semibold text-[180px] leading-[100%] text-black" tag="h2">
          What’s next
        </Title>
      </motion.div>
      <div className="flex items-center mb-[110px]">
        <div className="ml-[50%] text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] w-[40%]">
          How will our cooperation go after the start of work
        </div>
      </div>

      <NextElements />
    </div>
  );
};
