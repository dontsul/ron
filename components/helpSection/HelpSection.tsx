'use client';

import { Chip } from '../chip/Chip';
import { Title } from '../title/Title';
import { VideoEl } from '../videoEl/VideoEl';
import Colgate from '../../public/svg/colgate.svg';
import FoxSport from '../../public/svg/foxSports.svg';
import Huawei from '../../public/svg/huawei.svg';
import Kohler from '../../public/svg/kohler.svg';
import Samsung from '../../public/svg/samsung.svg';
import Vessel from '../../public/svg/vessel.svg';
import Man from '../../public/svg/man.svg';
import { BorderHuman } from '../borderHuman/BorderHuman';

const companies = [
  { title: 'Samsung,', el: Samsung, color: '#1428A0' },
  { title: 'Huawei,', el: Huawei, color: '#CF0A2C' },
  { title: 'Kohler,', el: Kohler, color: '#000000' },
  { title: 'Vessel,', el: Vessel, color: '#CFDDC4' },
  { title: 'Colgate,', el: Colgate, color: '#F5010B' },
  { title: 'Fox Sport', el: FoxSport, color: '#2A3455' },
];

export const HelpSection = () => {
  return (
    <section className="mt-[149px] mb-[323px]">
      <div className="mb-[60px] ">
        <Title tag="h1">
          We help {<BorderHuman el={Man} color="#FFB39E" />} show your strengths
        </Title>
      </div>
      <p className="text-[32px] leading-[48px]  mb-[80px]">
        We attract digital experts to raise investments and strengthen your team
      </p>
      <VideoEl />
      <div>
        <p className="text-[48px] font-normal leading-[100%] color-black mb-[20px]">
          Since 2015, our solutions have been trusted by
        </p>
        <div className="flex items-center justify-start flex-wrap gap-y-[18px]">
          {companies.map(({ title, el, color }) => {
            return <Chip key={title} title={title} el={el} color={color} />;
          })}
        </div>
      </div>
    </section>
  );
};
