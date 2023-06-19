'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  outline: boolean;
  bg: boolean;
  content: string;
}

export const Button: FC<ButtonProps> = ({ outline, bg, content }) => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
      className={`
        rounded-[30px] px-[30px] py-[26px] text-black text-[18px] leading-[22px] font-semibold
        ${outline ? 'border-[1px] border-black' : ''}
        ${bg ? 'bg-white ml-[10px]' : ''}
  `}
    >
      {content}
    </motion.button>
  );
};
