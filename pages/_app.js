import SEO from '../next-seo.config';
import '../styles/globals.css'
import Layout from '../components/layout/layout'
import { DefaultSeo } from 'next-seo';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
