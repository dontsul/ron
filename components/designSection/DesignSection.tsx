'use client';
import { motion } from 'framer-motion';

export const DesignSection = () => {
  const bgAnimation = {
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
      variants={bgAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-[30px] mb-[320px] bg-[url('/images/cheerful.png')] bg-cover bg-no-repeat bg-center"
    >
      <div className="rounded-[30px] h-full pt-[224px] pl-[75px] pb-[71px]">
        <p className="font-normal text-[48px] leading-[58px] text-white w-[50%] mb-[159px]">
          Design trial. Get started with your first trial
        </p>
        <div>
          <button className="font-semibold text-[24px] leading-[29px] text-white py-[40px] px-[57px] backdrop-blur-[15px] rounded-[50px] bg-[rgba(255,255,255,0.5)]">
            Book a trial
          </button>
        </div>
      </div>
    </motion.div>
  );
};
