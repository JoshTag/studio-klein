import Layout from "components/layout";
import ServicesHeader from "components/services-header";
import Service from "components/service";

const Services = () => {
  return (
    <Layout>
      <ServicesHeader />
      <Service />
      <div className='service-space'>space</div>
      <style jsx>{`
        .service-space {
          height: 500px;
        }
      `}</style>
    </Layout>
  );
};

export default Services;
