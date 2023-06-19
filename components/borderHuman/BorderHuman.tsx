import { FC, ComponentType } from 'react';
import { motion } from 'framer-motion';

interface BorderHumanProps {
  el: ComponentType;
  color: string;
}

export const BorderHuman: FC<BorderHumanProps> = ({ el: Element, color }) => {
  const humanAnimate = {
    hidden: {
      width: 0,
    },
    visible: {
      width: 'auto',
      transition: {
        delay: 0.2,
        duration: 1,
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
      className="rounded-[40px] inline-block overflow-hidden"
    >
      <Element />
    </motion.div>
  );
};
