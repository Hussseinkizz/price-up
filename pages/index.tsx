import type { NextPage } from 'next';
import { Button } from '@material-tailwind/react';

const Home: NextPage = () => {
  return (
    <div className="grid place-items-center">
      <h1 className="text-2xl text-center font-bold capitalize">
        Unleashing a dangerous UI.
      </h1>
      <p className="text-center">
        React is lemon and I make lemonade with it!!!
      </p>
      <Button className="mt-4 mx-auto">Material Button</Button>
    </div>
  );
};

export default Home;
