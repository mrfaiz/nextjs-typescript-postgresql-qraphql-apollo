import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/shared/lib/router/router'
import Layout from '../components/layout/Layout'
import client from '../constants/apollo-client';
import '../styles/globals.css'

/**
 * ApolloProvider is responsible for client side rendering
 * @param param0 A
 * @returns 
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ApolloProvider client={client}> 
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  )
}

export default MyApp;

// export default function MyApp({ Component, pageProps }) {
// 	return <Component {...pageProps} />
// }