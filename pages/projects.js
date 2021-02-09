import Layout from "components/layout";
import ProjectsNav from "components/projects-nav";
import Project from "components/project";

const Projects = () => {
  return (
    <Layout>
      <ProjectsNav />
      <Project />
      <Project />
      <Project />
    </Layout>
  );
};

export default Projects;
