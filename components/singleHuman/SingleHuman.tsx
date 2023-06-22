import Image, { StaticImageData } from 'next/image';
import NextImageType from 'next/image';
import { FC } from 'react';

interface SingleHumanProps {
  title: string;
  image: StaticImageData;
}

export const SingleHuman: FC<SingleHumanProps> = ({ image, title }) => {
  return (
    <>
      <Image src={image} alt={title} height={712} width={500} />
    </>
  );
};
