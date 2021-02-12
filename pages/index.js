import Head from 'next/head'
import Layout from "components/layout.js"
import Hero from "components/hero"
import Featured from "components/featured"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Studio Klein</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Featured />
    </Layout>
  )
}
