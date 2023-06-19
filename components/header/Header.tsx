'use client';

import { Menu } from '../menu/Menu';
import { Logo } from '../logo/Logo';
import { Button } from '../button/Button';

export const Header = () => {
  return (
    <header className={`py-[10px] mb-[149px] z-50 top-0 sticky`}>
      <div className="flex justify-between ">
        <div className="flex">
          <Logo />
          <Menu />
        </div>
        <Button outline={true} bg={false} content="Get Free Estimate" />
      </div>
    </header>
  );
};
