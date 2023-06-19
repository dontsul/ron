'use client';

import { Title } from '../title/Title';
import Quotes from '../../public/svg/quotes.svg';
import { ListSmallHumansBlock } from '../listSmallHumansBlock/ListSmallHumansBlock';

export const EveryoneSection = () => {
  return (
    <section className="pb-[1221px] pt-[668px] relative">
      <div className="flex items-center justify-center">
        <Title tag="h2" cn="text-center mb-[92px] w-[90%]">
          Everyone deserves a clear & distinct design
        </Title>
      </div>
      <div className="mb-[60px]">
        <Quotes />
      </div>
      <p className="font-normal text-2xl leading-[140%] text-[rgba(0,0,0,0.7)] mb-[31px] w-[40%]">
        For <span className="font-medium">88% of users</span>, lack of ease of use may be the reason
        they never return to a site
      </p>
      <p className="font-bold text-[32px] leading-[100%] text-black">Selz</p>
      <ListSmallHumansBlock />
    </section>
  );
};
