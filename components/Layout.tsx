// import { useStore } from '../hooks/useStore';
import { Header } from './Header';
import Head from 'next/head';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  // const {
  //   state: { pageTitle },
  // } = useStore();

  return (
    <>
      <Head>
        <title>Price UP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-indigo-600 text-white w-full min-h-screen">
      {/* The Header */}
      <Header />
      {/* The Main View */}
      <main className="w-full h-screen flex flex-auto flex-col justify-between items-center">
          {children}
      <footer className="w-full bg-indigo-700">
        some footer
      </footer>
      </main>
    </section>
    </>
  );
};

// export default Layout;
