'use client';

import { useEffect, useState } from 'react';
import { useAnimate, useInView } from 'framer-motion';
import { Title } from '../title/Title';
import Quotes from '../../public/svg/quotes.svg';
import { ListSmallHumansBlock } from '../listSmallHumansBlock/ListSmallHumansBlock';

export const EveryoneSection = () => {
  // const [isElementInCenter, setIsElementInCenter] = useState(false);

  // const [scope, animate] = useAnimate();
  // const isInView = useInView(scope);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const elementRect = document?.getElementById('wrapTitleEveryone')?.getBoundingClientRect();
  //     const viewportHeight = window.innerHeight;

  //     if (elementRect !== undefined) {
  //       if (elementRect.top <= viewportHeight / 2 && elementRect.bottom >= viewportHeight / 2) {
  //         setIsElementInCenter(true);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (isInView && isElementInCenter) {
  //     animate(scope.current, {
  //       position: 'sticky',
  //       top: '500xp',
  //     });
  //   }
  // }, [isInView, scope, animate, isElementInCenter]);

  return (
    <section className="pb-[1221px] pt-[668px] relative">
      <div className="flex flex-col sticky top-[300px]">
        <div
          // ref={scope}
          // id="wrapTitleEveryone"
          className="flex items-center justify-center "
        >
          <Title tag="h2" cn="text-center mb-[92px] w-[90%]">
            Everyone deserves a clear & distinct design
          </Title>
        </div>
        <div className="mb-[60px]">
          <Quotes />
        </div>
        <p className="font-normal text-2xl leading-[140%] text-[rgba(0,0,0,0.7)] mb-[31px] w-[40%]">
          For <span className="font-medium">88% of users</span>, lack of ease of use may be the
          reason they never return to a site
        </p>
        <p className="font-bold text-[32px] leading-[100%] text-black">Selz</p>
      </div>

      <ListSmallHumansBlock />
    </section>
  );
};
