import { FC, ReactNode } from 'react';

interface TitleProps {
  tag: string;
  children: ReactNode;
  cn?: string;
}

export const Title: FC<TitleProps> = ({ tag, children, cn }) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={`text-[110px] font-semibold leading-[100%] text-black ${cn ? `${cn}` : ''}`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={`text-[110px] font-semibold leading-[100%] text-black ${cn ? `${cn}` : ''}`}>
          {children}
        </h2>
      );
    case 'h4':
      return (
        <h4 className={`text-[60px] font-semibold leading-[100%] text-black ${cn ? `${cn}` : ''}`}>
          {children}
        </h4>
      );
    default:
      return <></>;
  }
};
