import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import Script from 'next/script';
import Image from 'next/image';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const fontAwesome = document.createElement('script');
    fontAwesome.setAttribute(
      'src',
      'https://kit.fontawesome.com/2b33a4ca20.js'
    );
    fontAwesome.setAttribute('crossOrigin', 'anonymous');

    document.getElementsByTagName('head')[0].appendChild(fontAwesome);

    return () => {
      if (fontAwesome) {
        fontAwesome.remove();
      }
    };
  });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta lang="en-us" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="Delantech" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <noscript>
          <img
            alt="facebook pixel"
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=726953401369013&ev=PageView&noscript=1"
          />
        </noscript>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DelanTech</title>
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <Layout>
            {/* <Script src="" ="" /> */}
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
      <script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
     fbq('init', '726953401369013'); 
    fbq('track', 'PageView'););
  `,
        }}
      ></script>
    </>
  );
}

export default MyApp;
