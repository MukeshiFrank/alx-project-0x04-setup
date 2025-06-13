import type { AppProps } from 'next/app';
import { CountProvider } from '../context/CountContext';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}

export default MyApp;
