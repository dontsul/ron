import { FC, ComponentType } from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface BorderHumanProps {
  el?: ComponentType;
  color: string;
  cn?: string;
  image?: StaticImageData;
}

export const BorderHuman: FC<BorderHumanProps> = ({ el: Element, color, cn, image }) => {
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
      {Element && <Element />}
      {image && <Image src={image} alt="human" width={200} height={100} />}
    </motion.div>
  );
};
