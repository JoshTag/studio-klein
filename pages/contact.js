import Layout from "components/layout"

const Contact = () => {
  return (
    <Layout>
      <div className='coming-soon'>
        <h2>Contact Page Coming Soon</h2>
        <p>
          Meanwhile, you can contact us at heather.alsen@thestudioklein.com or
          josh.taguicana@thestudioklein.com
        </p>
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

        p {
          max-width: 600px;
          margin: 4rem auto;
          text-align: center;
          font-size: 19px;
        }
      `}</style>
    </Layout>
  );
};

export default Contact;
