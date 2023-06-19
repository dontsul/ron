import { FC } from 'react';

interface BigChipProps {
  text: string;
}

export const BigChip: FC<BigChipProps> = ({ text }) => {
  return (
    <div className="py-[20px] px-[32px] border not-italic font-normal text-2xl leading-[29px] text-[rgba(0,0,0,0.7)] rounded-[30px] border-solid border-[rgba(0,0,0,0.2)] mr-[10px] mb-[10px]">
      {text}
    </div>
  );
};
