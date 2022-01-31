import Layout from "components/layout";
import Head from "next/head";


const Header = () => {
  return (
    <Layout>
      <Head>
        <title>Studio Klein | Header</title>
      </Head>
      <div className='header'>
        <div className='header-inner-ctn'>
          <a className='header-link'>projects</a>
          <a className='header-link'>testimonials</a>
        </div>
        <img className='header-logo' src='/images/logo-wordmark-dark.svg'/>

        <div className='header-inner-ctn'>
          <a className='header-link'>contact</a>
          <a className='header-link'>about</a>
        </div>
      </div>
    </Layout>
  );
};

export default Header;
