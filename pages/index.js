import Head from 'next/head'
import Layout from "components/layout.js"
import { useRouter } from "next/router";
import Link from "next/link";
import LottieData from "components/lottie";
import branding from "./../public/images/2022-branding-5.json";

export default function Home() {
  const router = useRouter();
  const page = router.pathname;
  return (
    <Layout>
      <Head>
        <title>Studio Klein</title>
      </Head>
      <div className='header-ctn'>
        <div className='header-ctn-inner'>
          <div className='header-ctn-top'>
            <Link href="/projects">
              <a className='header-links' page={page} route="/projects">
                projects
              </a>
            </Link>
            <Link href="/projects">
              <a className='header-links' page={page} route="/services">
                services
              </a>
            </Link>
          </div>
          <div className='header-ctn-btm'>
            <Link href="/projects">
              <a className='header-links' page={page} route="/testimonials">
                testimonials
              </a>
            </Link>
            <Link href="/projects">
              <a className='header-links' page={page} route="/contact">
                contact
              </a>
            </Link>
          </div>
        </div>
      </div>

        <div className='lottie'>
          <LottieData data={branding} />
        </div>

    </Layout>
  )
}
