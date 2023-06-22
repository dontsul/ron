'use client';
import { useState, useEffect } from 'react';

import { Title } from '../title/Title';
import { motion, useInView, useAnimate } from 'framer-motion';
import { HumansBlock } from '../humansBlock/HumansBlock';

export const FightingSection = () => {
  const [isElementInCenter, setIsElementInCenter] = useState(false);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    const handleScroll = () => {
      const elementRect = document?.getElementById('wrapTitle')?.getBoundingClientRect();
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
    <section className="mb-[668px]">
      <motion.div id="wrapTitle" ref={scope}>
        <Title cn="text-center mb-[60px]" tag="h2">
          What are we fighting against?
        </Title>
      </motion.div>

      <p className="font-normal text-[32px] leading-[48px] text-center text-[rgba(0,0,0,0.7)] mb-[210px]">
        Users do not use my design or project
      </p>
      <HumansBlock />
    </section>
  );
};
