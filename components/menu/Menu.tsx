import { Button } from '../button/Button';

const btns = ['Trial', 'Cases', 'Say Hello 👋'];

export const Menu = () => {
  return (
    <div>
      {btns.map((btn, i) => {
        return <Button key={i} content={btn} outline={false} bg={true} />;
      })}
    </div>
  );
};
