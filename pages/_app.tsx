// import '../styles/fonts.module.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StoreProvider } from '../hooks/useStore';
import { Layout } from '@ui/Layout';
import { ThemeProvider } from '@material-tailwind/react';
// import Layout from '@ui/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Client Data Layer */}
      <StoreProvider>
        {/* Material Tailwind Layer */}
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
