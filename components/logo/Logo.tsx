'use client';

import LogoImg from '../../public/svg/logo.svg';

export const Logo = () => {
  return (
    <div className="bg-black flex justify-center items-center rounded-[30px] w-[73px] h-[73px] cursor-pointer">
      <LogoImg />
    </div>
  );
};
