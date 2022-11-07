import type { NextPage } from 'next';
import { Button } from '@material-tailwind/react';

const Home: NextPage = () => {
  return (
    <div className="grid place-items-center bg-indigo-50 text-gray-800">
      <h1 className="text-2xl text-center font-bold capitalize">
        Unleashing a dangerous UI.
      </h1>
      <p className="text-center">
        React is lemon and I make lemonade with it!!!
      </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, eligendi atque qui consectetur laboriosam animi eius veritatis tempora libero sit laborum quod vitae vel sapiente culpa pariatur consequatur. Deleniti magni eius consectetur itaque tempore suscipit, nihil ratione, natus velit quibusdam obcaecati? Labore et fugit consequatur deleniti, quam qui alias dicta!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, eligendi atque qui consectetur laboriosam animi eius veritatis tempora libero sit laborum quod vitae vel sapiente culpa pariatur consequatur. Deleniti magni eius consectetur itaque tempore suscipit, nihil ratione, natus velit quibusdam obcaecati? Labore et fugit consequatur deleniti, quam qui alias dicta!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, eligendi atque qui consectetur laboriosam animi eius veritatis tempora libero sit laborum quod vitae vel sapiente culpa pariatur consequatur. Deleniti magni eius consectetur itaque tempore suscipit, nihil ratione, natus velit quibusdam obcaecati? Labore et fugit consequatur deleniti, quam qui alias dicta!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, eligendi atque qui consectetur laboriosam animi eius veritatis tempora libero sit laborum quod vitae vel sapiente culpa pariatur consequatur. Deleniti magni eius consectetur itaque tempore suscipit, nihil ratione, natus velit quibusdam obcaecati? Labore et fugit consequatur deleniti, quam qui alias dicta!</p>
      <Button className="mt-4 mx-auto">Material Button</Button>
      <span id="pricing">pricing</span>
    </div>
  );
};

export default Home;
