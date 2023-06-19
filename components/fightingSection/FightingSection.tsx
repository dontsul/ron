'use client';
import { useRef } from 'react';

import { Title } from '../title/Title';
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { HumansBlock } from '../humansBlock/HumansBlock';

export const FightingSection = () => {
  const titleAnimation = {
    hidden: {
      scale: 1,
    },
    visible: {
      scale: 0.5,
    },
  };

  const { scrollY } = useScroll();
  console.log(scrollY);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className="">
      <motion.div style={{ scaleX, scaleY }} ref={targetRef}>
        <Title cn="text-center mb-[60px]" tag="h2">
          What are we fighting against?
        </Title>
      </motion.div>

      <p
        ref={targetRef}
        className="font-normal text-[32px] leading-[48px] text-center text-[rgba(0,0,0,0.7)] mb-[210px]"
      >
        Users do not use my design or project
      </p>
      <HumansBlock />
    </section>
  );
};
