import Layout from "components/layout";
import ProjectsHeader from "components/projects-header";
import Project from "components/project";

const Projects = () => {
  return (
    <Layout>
      <ProjectsHeader />
      <Project />
      <div className='container'>More Featured Projects Coming Soon</div>
      <style global jsx>{`
        .container {
          padding: 500px;
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
