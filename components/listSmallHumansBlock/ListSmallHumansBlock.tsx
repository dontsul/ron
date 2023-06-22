import { SmallHuman } from '../smallHumansBlock/SmallHuman';
import womanOne from '../../public/images/smallHumans/womanOne.png';
import manTwo from '../../public/images/smallHumans/manTwo.png';
import womanThree from '../../public/images/smallHumans/womanThree.png';
import womanFour from '../../public/images/smallHumans/womanFour.png';

export const ListSmallHumansBlock = () => {
  return (
    <div className="grid grid-cols-3 absolute top-0 left-0 w-full">
      <SmallHuman image={womanOne} cn="absolute top-[-339px] left-[-70px]" />
      <SmallHuman image={manTwo} cn="absolute top-[-248px] left-[420px]" />
      <SmallHuman image={womanThree} cn="absolute top-[-418px] right-[-70px]" />
      <SmallHuman image={womanFour} color="#FFE99D" cn="absolute top-[755px] left-[-70px]" />
      <SmallHuman image={womanThree} color="#FFE99D" cn="absolute top-[597px] left-[520px] z-10" />
      <SmallHuman image={womanFour} color="#FFE99D" cn="absolute top-[323px] right-[100px] z-30" />
      <SmallHuman image={manTwo} cn="absolute top-[1125px] left-[200px] z-10" />
      <SmallHuman image={womanFour} color="#FFE99D" cn="absolute top-[1370px] left-[700px]" />
      <SmallHuman image={womanOne} cn="absolute top-[870px] right-[-70px]" />
    </div>
  );
};
