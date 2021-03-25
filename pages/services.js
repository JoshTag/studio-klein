import Layout from "components/layout";
import Service from "components/service";
import PageSubHeader from "components/page-subheader";
import Head from "next/head";

const Services = () => {
  const subheadings = [
    "Fully Customizable Shops",
    "Brand Creation",
    "SEO and App Integration",
  ];
  return (
    <Layout>
      <Head>
        <title>Studio Klein | Services</title>
      </Head>
      <PageSubHeader subheadings={subheadings} />
      <Service />
    </Layout>
  );
};

export default Services;
