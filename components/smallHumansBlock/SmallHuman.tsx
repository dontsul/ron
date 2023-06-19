import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface SmallHumanProps {
  color?: string;
  image: StaticImageData;
  cn: string;
}

export const SmallHuman: FC<SmallHumanProps> = ({ image, color, cn }) => {
  return (
    <div className={`rounded-[30px] w-[168px] h-[216px] ${color ? `bg-[#FFE99D]` : ''} ${cn}`}>
      <Image
        className="rounded-[30px] w-[168px] h-[216px] "
        src={image}
        alt="human"
        width={168}
        height={216}
      />
    </div>
  );
};
