import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const addGA = () => {
    if (typeof window == 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-JN233J1JKH');
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Open+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JN233J1JKH"
        ></script>
        <script>{addGA()}</script>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
