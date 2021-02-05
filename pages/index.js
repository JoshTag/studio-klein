import Head from 'next/head'
import Hero from "./../components/Hero"
import Header from "./../components/Header"
import FeaturedProjects from "./../components/FeaturedProjects"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Studio Klein</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <FeaturedProjects />
      <div styled={{ height: "500px" }}>TEST</div>
    </div>
  )
}
