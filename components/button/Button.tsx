'use client';

import { FC, ReactElement, ComponentType, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  outline: boolean;
  bg: boolean;
  children: ReactNode;
  animate: boolean;
  cn?: string;
}

export const Button: FC<ButtonProps> = ({ outline, bg, children, animate, cn }) => {
  return (
    <motion.button
      whileHover={
        animate
          ? {
              backgroundColor: '#000000',
              color: '#ffffff',
            }
          : {}
      }
      className={`
        rounded-[30px] px-[30px] py-[26px] text-black text-[18px] leading-[22px] font-semibold flex justify-center items-center
        ${outline ? 'border-[1px] border-black' : ''}
        ${bg ? 'bg-white ml-[10px]' : ''}
        ${cn ? `${cn}` : ''}
  `}
    >
      {children}
    </motion.button>
  );
};
