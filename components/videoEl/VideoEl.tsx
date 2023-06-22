import Image from 'next/image';
import firstImg from '../../public/images/first-img.png';
import Play from '../../public/svg/Polygon.svg';
import { motion } from 'framer-motion';

export const VideoEl = () => {
  const videoAnimation = {
    hidden: {
      scale: 1,
    },
    visible: {
      scale: 1.1,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={videoAnimation}
      initial="hidden"
      whileInView="visible"
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
