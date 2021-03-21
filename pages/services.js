import Layout from "components/layout";
import Service from "components/service";
import PageSubHeader from "components/page-sub-header";

const Services = () => {
  const subheadings = ["Design", "Development", "SEO"]
  return (
    <Layout>
      <PageSubHeader subheadings={subheadings} />
      <Service />
    </Layout>
  );
};

export default Services;
