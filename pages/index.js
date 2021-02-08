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
      <div className="test">TEST</div>
      <style jsx >
      {
      `.test {
        height: 500px;
      }`
      }
      </style>
    </div>
  )
}
