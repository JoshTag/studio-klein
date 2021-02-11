import ProjectsNav from "components/projects-nav";
import Project from "components/project";

const Projects = () => {
  return (
    <>
      <ProjectsNav />
      <div className='project-container'>
        <Project />
        <div className='container' id='coming-soon'>
          More Featured Projects Coming Soon
        </div>
      </div>
      <style global jsx>{`
        html {
          -webkit-scroll-behavior: smooth;
          -moz-scroll-behavior: smooth;
          -ms-scroll-behavior: smooth;
          scroll-behavior: smooth;
        }

        .container {
          padding: 50px;
          background: rgba(0, 0, 0, 0.8);
          color: rgb(244, 242, 235);
          font-size: 29px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Projects;
