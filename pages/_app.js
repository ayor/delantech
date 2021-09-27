import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import Script from "next/script";
import { store } from '../store/store';
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {

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
          <Script src="https://kit.fontawesome.com/2b33a4ca20.js" crossOrigin="anonymous" />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
