import '../styles/globals.css'; // Make sure this file exists in styles folder
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout'; // Adjust path if needed

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
