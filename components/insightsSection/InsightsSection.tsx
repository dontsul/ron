import Image from 'next/image';
import qr from '@/public/images/qr.png';

export const InsightsSection = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] mb-[320px]">
      <div className="bg-white rounded-[30px] px-[34px] py-[28px] flex items-center justify-center mr-[66px] w-[300px] h-[300px]">
        <Image src={qr} alt="qr" width={231} height={250} className="w-[231px] h-[250px]" />
      </div>
      <div>
        <h6 className="font-semibold text-[80px] leading-[140%] text-black mb-[27px] inline-block">
          Insights every day
        </h6>
        <p className="font-normal text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] w-[80%]">
          We try to publish content every day, so you will receive insights and/or interesting
          content regularly.
        </p>
      </div>
    </div>
  );
};
