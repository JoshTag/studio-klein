import Layout from "components/layout";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Studio Klein | About</title>
      </Head>
      <div className='about-ctn'>
          <p className='about-txt'>Studio Klein is based in Toronto, Canada.
               It is led by Joshua Taguicana and Heather Alsen.
           </p>
           <p className='about-txt-email'>heather.alsen@thestudioklein.com</p>
           <p className='about-txt'>josh.taguicana@thestudioklein.com</p>
           </div>

    </Layout>
  );
};

export default About;
