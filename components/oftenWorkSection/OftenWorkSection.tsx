import { Title } from '../title/Title';
import { WorkBlock } from '../workBlock/WorkBlock';
export const OftenWorkSection = () => {
  return (
    <div>
      <Title tag="h2" cn="text-center mb-[110px]">
        Most often we work with{' '}
      </Title>
      <div>
        <WorkBlock />
      </div>
    </div>
  );
};
