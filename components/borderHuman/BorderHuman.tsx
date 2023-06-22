import { FC, ComponentType } from 'react';
import { motion } from 'framer-motion';

interface BorderHumanProps {
  el: ComponentType;
  color: string;
  cn?: string;
}

export const BorderHuman: FC<BorderHumanProps> = ({ el: Element, color, cn }) => {
  const humanAnimate = {
    hidden: {
      width: 0,
    },
    visible: {
      width: 'auto',
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={humanAnimate}
      style={{ backgroundColor: `${color}` }}
      className={`rounded-[40px] inline-block overflow-hidden ${cn ? `${cn}` : ''}`}
    >
      <Element />
    </motion.div>
  );
};
