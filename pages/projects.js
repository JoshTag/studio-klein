import Layout from "components/layout";
import Project from "components/project";
import PageSubHeader from "components/page-subheader";
import Head from "next/head";

const Projects = () => {
  const subheadings = ["Studio Zoubida", "The Pielander"]
  return (
    <Layout>
      <Head>
        <title>Studio Klein | Projects</title>
      </Head>
      <PageSubHeader subheadings={subheadings} />
      <Project />
      <div className='container'>More Featured Projects Coming Soon</div>
      <style global jsx>{`
        .container {
          padding: 50px;
          background: rgba(0, 0, 0, 0.8);
          color: rgb(244, 242, 235);
          font-size: 21px;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default Projects;
