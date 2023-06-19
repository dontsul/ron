import { FC, ComponentType } from 'react';

interface ChipProps {
  title?: string;
  el: ComponentType;
  color: string;
}

export const Chip: FC<ChipProps> = ({ el: Element, title, color }) => {
  return (
    <div className="flex items-center justify-start">
      <div
        style={{ backgroundColor: `${color}` }}
        className={`flex items-center justify-center h-[60px] px-[20px] backdrop-blur-[12.75px] rounded-[28px] mr-[16px] `}
      >
        <Element />
      </div>
      {title && (
        <span className="text-[48px] leading-[100%] font-normal text-black mr-[24px]">{title}</span>
      )}
    </div>
  );
};
