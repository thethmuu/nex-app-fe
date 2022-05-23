import Head from 'next/head'
import { ToastContainer } from 'react-toastify';

import { useApollo } from "../graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

import 'react-toastify/dist/ReactToastify.min.css'
import 'bootstrap/dist/css/bootstrap.css'

import GlobalStyle from '@/styles/globals'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo({ Component, pageProps });

  return (
    <ApolloProvider client={apolloClient}>
      <ToastContainer />
      <Head>
        <title>NexStack</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
