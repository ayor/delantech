import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import Script from "next/script";
import { store } from '../store/store';
import { Provider } from 'react-redux'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {

    const fontAwesome = document.createElement("script"); 
    fontAwesome.setAttribute("src", "https://kit.fontawesome.com/2b33a4ca20.js");
    fontAwesome.setAttribute("crossOrigin", "anonymous");

    document.getElementsByTagName("head")[0].appendChild(fontAwesome);


    return () => {
      if (fontAwesome) {
        fontAwesome.remove();
      }
    }
  })

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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DelanTech</title>
      </Head>
      <Provider store={store}>
        <Layout>
          {/* <Script src="" ="" /> */}
          <Component {...pageProps} />
        </Layout>
      </Provider>
      
    </>
  )
}

export default MyApp
