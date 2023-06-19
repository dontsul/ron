import { Title } from '../title/Title';
import Image from 'next/image';
import brief from '@/public/images/brief.png';

export const NextSection = () => {
  return (
    <div className="mb-[320px]">
      <Title
        cn="text-center font-semibold text-[180px] leading-[100%] text-black mb-[110px]"
        tag="h2"
      >
        What’s next
      </Title>
      <div className="flex items-center mb-[110px]">
        <div className="ml-[50%] text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] w-[40%]">
          How will our cooperation go after the start of work
        </div>
      </div>
      <div className="grid grid-cols-2 relative">
        <div className="col-[1] pt-[100px]">
          <h4 className="font-semibold text-[90px] leading-[140%] text-black mb-[60px]">Brief</h4>
          <p className="text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] mb-[63px]">
            This is one of the{' '}
            <span className="text-black font-semibold">most important stages</span> in the process
            of our cooperation.
          </p>
          <ul className="marker:text-black list-disc pl-5 space-y-[16px] text-[rgba(0,0,0,0.7)]">
            <li className="text-[24px] leading-[29px]">Our questionnaire</li>
            <li className="text-[24px] leading-[29px]">Documentation</li>
            <li className="text-[24px] leading-[29px]">Visual assets</li>
          </ul>
        </div>
        <div className="col-[2] flex justify-end">
          <Image src={brief} alt="brief" width={578} height={712} />
        </div>

        <div className="col-[1] pt-[100px]">
          <h4 className="font-semibold text-[90px] leading-[140%] text-black mb-[60px]">
            Estimate
          </h4>
          <p className="text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] mb-[63px]">
            This is one of the{' '}
            <span className="text-black font-semibold">most important stages</span> in the process
            of our cooperation.
          </p>
          <ul className="marker:text-black list-disc pl-5 space-y-[16px] text-[rgba(0,0,0,0.7)]">
            <li className="text-[24px] leading-[29px]">Our questionnaire</li>
            <li className="text-[24px] leading-[29px]">Documentation</li>
            <li className="text-[24px] leading-[29px]">Visual assets</li>
          </ul>
        </div>
        <div className="col-[1] pt-[100px]">
          <h4 className="font-semibold text-[90px] leading-[140%] text-black mb-[60px]">
            Proposal
          </h4>
          <p className="text-[32px] leading-[140%] text-[rgba(0,0,0,0.7)] mb-[63px]">
            This is one of the{' '}
            <span className="text-black font-semibold">most important stages</span> in the process
            of our cooperation.
          </p>
          <ul className="marker:text-black list-disc pl-5 space-y-[16px] text-[rgba(0,0,0,0.7)]">
            <li className="text-[24px] leading-[29px]">Our questionnaire</li>
            <li className="text-[24px] leading-[29px]">Documentation</li>
            <li className="text-[24px] leading-[29px]">Visual assets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
