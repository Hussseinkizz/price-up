// import '../styles/fonts.module.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { StoreProvider } from '../hooks/useStore';
import { ThemeProvider } from '@material-tailwind/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Client Data Layer */}
      <StoreProvider>
        {/* Material Taiwind Layer */}
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}

export default MyApp;
