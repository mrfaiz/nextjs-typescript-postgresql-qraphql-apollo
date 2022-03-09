import { AppProps } from 'next/dist/shared/lib/router/router'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;

// export default function MyApp({ Component, pageProps }) {
// 	return <Component {...pageProps} />
// }