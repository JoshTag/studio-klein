import Layout from "components/layout";
import Head from "next/head";

const Testimonials = () => {
  return (
    <Layout>
      <Head>
        <title>Studio Klein | Testimonials</title>
      </Head>
      <div className='coming-soon'>
        <h2>Testimonials Coming Soon</h2>
      </div>
      <style jsx>{`
        .coming-soon {
          height: 100vh;
        }

        h2 {
          margin-top: 6rem;
          text-align: center;
          font-weight: 300;
          font-size: 31px;
        }
      `}</style>
    </Layout>
  );
};

export default Testimonials;
