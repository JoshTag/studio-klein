import Head from 'next/head'
import Hero from "components/hero"
import Layout from "components/layout.js"
import FeaturedProjects from "components/featured"

export default function Home() {
  return (
    <Layout page="home" >
      <Head>
        <title>Studio Klein</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedProjects />
      <div className="test">TEST</div>
      <style jsx >
      {
      `.test {
        height: 500px;
      }`
      }
      </style>
    </Layout>
  )
}
