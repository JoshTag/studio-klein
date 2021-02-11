import Head from 'next/head'
import Hero from "components/hero"
import Layout from "components/layout.js"
import Featured from "components/featured"

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Klein</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Featured />
    </>
  )
}
