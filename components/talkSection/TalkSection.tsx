'use client';

import { Title } from '../title/Title';
import { BorderHuman } from '../borderHuman/BorderHuman';
import Woman from '@/public/svg/woman.svg';
import ArrowSecond from '@/public/svg/arrowSecond.svg';

export const TalkSection = () => {
  return (
    <div className="mb-[320px]">
      <div className="mb-[116px]">
        <p className="text-[32px] leading-[38px] text-[rgba(0,0,0,0.7)] mb-[5px]">Shall we chat?</p>
        <a
          href="mailto:hello@rondesignlab.com"
          className="font-semibold text-[32px] leading-[38px] text-black "
        >
          hello@rondesignlab.com
        </a>
      </div>
      <div className="flex flex-wrap items-center">
        <Title tag="h2" cn="leading-[130%] flex flex-wrap items-center">
          Let’s talk {<BorderHuman el={Woman} color="#FFE99D" />} your next project
          <button className="bg-white rounded-[50px] px-[73px] py-[55px] ml-[27px] my-auto">
            <ArrowSecond />
          </button>
        </Title>
      </div>
    </div>
  );
};
