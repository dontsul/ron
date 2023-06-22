'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import firstImg from '../../public/images/first-img.png';
import Play from '../../public/svg/Polygon.svg';
import { motion, useAnimate, useInView } from 'framer-motion';

export const VideoEl = () => {
  const [isElementInCenter, setIsElementInCenter] = useState(false);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    const handleScroll = () => {
      const elementRect = document?.getElementById('video')?.getBoundingClientRect();
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
          scale: 1.1,
        },
        { duration: 2 }
      );
    }
  }, [isInView, scope, animate, isElementInCenter]);

  return (
    <motion.div
      ref={scope}
      id="video"
      viewport={{ once: true }}
      className="relative mb-[320px] flex items-center justify-center"
    >
      <Image src={firstImg} alt="digital" width={1200} height={700} />
      <div className="backdrop-blur-[25px] rounded-[50px] bg-[rgba(255, 255, 255, 0.1)]  inline-block absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 z-10 py-[47px] px-[76px] cursor-pointer">
        <Play />
      </div>
    </motion.div>
  );
};
