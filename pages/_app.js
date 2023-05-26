import '@/styles/globals.css'
import Layout from '@/components/Layout';
import Script from 'next/script';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>      
  );
}