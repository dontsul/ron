import { Button } from '../button/Button';

const btns = ['Trial', 'Cases', 'Say Hello 👋'];

export const Menu = () => {
  return (
    <div className="flex">
      {btns.map((btn, i) => {
        return (
          <Button key={i} outline={false} bg={true} animate={true}>
            {' '}
            {btn}
          </Button>
        );
      })}
    </div>
  );
};
