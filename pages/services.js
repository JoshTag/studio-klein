import Layout from "components/layout";
import Service from "components/service";
import PageSubHeader from "components/page-subheader";

const Services = () => {
  const subheadings = ["Fully Customizable Shops", "Brand Creation", "SEO and App Integration"]
  return (
    <Layout>
      <PageSubHeader subheadings={subheadings} />
      <Service />
    </Layout>
  );
};

export default Services;
