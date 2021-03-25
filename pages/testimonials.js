
import Layout from "components/layout"

const Testimonials = () => {
  return (
    <Layout>
      <div className="coming-soon">
        <h2>Testimonials Coming Soon</h2>
      </div>
      <style jsx>{`
        .coming-soon {
          height: 100vh;
        }

        h2 {
          margin-top: 6rem;
          text-align: center;
          font-weight: normal;
          font-size: 31px;
        }
      `}</style>
    </Layout>
  );
};

export default Testimonials;
