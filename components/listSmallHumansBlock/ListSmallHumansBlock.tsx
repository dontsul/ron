import { SmallHuman } from '../smallHumansBlock/SmallHuman';
import womanOne from '../../public/images/smallHumans/womanOne.png';
import manTwo from '../../public/images/smallHumans/manTwo.png';
import womanThree from '../../public/images/smallHumans/womanThree.png';
import womanFour from '../../public/images/smallHumans/womanFour.png';

export const ListSmallHumansBlock = () => {
  return (
    <div className="grid grid-cols-3 absolute top-0 left-0 w-full">
      <SmallHuman image={womanOne} cn="absolute top-[329px] left-[-70px]" />
      <SmallHuman image={manTwo} cn="absolute top-[420px] left-[420px]" />
      <SmallHuman image={womanThree} cn="absolute top-[250px] right-[-70px]" />
      <SmallHuman image={womanFour} color="#FFE99D" cn="absolute top-[1423px] left-[-70px]" />
      <SmallHuman image={womanThree} color="#FFE99D" cn="absolute top-[1265px] left-[520px]" />
      <SmallHuman image={womanFour} color="#FFE99D" cn="absolute top-[991px] right-[100px]" />
      <SmallHuman image={manTwo} cn="absolute top-[1793px] left-[200px]" />
      <SmallHuman image={womanFour} color="#FFE99D" cn="absolute top-[2038px] left-[700px]" />
      <SmallHuman image={womanOne} cn="absolute top-[1538px] right-[-70px]" />
    </div>
  );
};
