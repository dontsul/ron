'use client';

import { Chip } from '../chip/Chip';
import Vessel from '../../public/svg/vessel.svg';
import Huawei from '../../public/svg/huawei.svg';
import Arrow from '../../public/svg/Arrow.svg';

export const WorkBlock = () => {
  return (
    <div className="pb-[320px]">
      <div className="grid grid-cols-2 px-[80px] py-[100px] rounded-[30px] bg-white mb-[10px]">
        <div className="">
          <h5 className="font-normal text-[48px] leading-[140%] text-black mb-[53px]">
            We make money for startups. <br /> Series A <Arrow className="inline" /> Series B
          </h5>
          <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)]">
            Last 3 years over <span className="text-black font-semibold">$73.000.000</span> clients’
            investment.
          </p>
        </div>
        <div className="pl-[80px]">
          <h6 className="mb-[48px] font-semibold text-[90px] leading-[100%] text-black text-start">
            $22M+
          </h6>
          <div className="flex items-center justify-start mb-[33px]">
            <div className="flex justify-start items-center">
              <Chip el={Vessel} color={'#CFDDC4'} />
              <p className="font-semibold text-[24px] leading-[100%] text-black">
                Acquisition of Vessel
              </p>
            </div>
          </div>
          <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)] ml-[82px]">
            Brand identity design for a platform that manages recurring bills.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 px-[80px] py-[100px] rounded-[30px] bg-white mb-[10px]">
        <div className="pr-[80px]">
          <h5 className="font-normal text-[48px] leading-[140%] text-black mb-[53px]">
            We also solve problems of enterprise
          </h5>
          <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)]">
            For the last 2 years we saved over{' '}
            <span className="text-black font-semibold">$5.000.000.000</span> for our enterprise
            customers.
          </p>
        </div>
        <div className="pl-[80px]">
          <h6 className="mb-[48px] font-semibold text-[90px] leading-[100%] text-black text-start">
            $5M+
          </h6>
          <div className="flex items-center justify-start mb-[33px]">
            <div className="flex justify-start items-center">
              <Chip el={Huawei} color={'#CF0A2C'} />
              <p className="font-semibold text-[24px] leading-[100%] text-black">
                Acquisition of Huawei
              </p>
            </div>
          </div>
          <p className="font-normal text-[24px] leading-[160%] text-[rgba(0,0,0,0.7)] ml-[82px]">
            Brand identity design for a platform that manages recurring bills.
          </p>
        </div>
      </div>
    </div>
  );
};
