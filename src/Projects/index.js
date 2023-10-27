import Content from "./Content/content";
import projectsData from "./projects.json";
import './index.css';

function Projects() {
    const projects = projectsData;
    return (
        <div className="projectsSection">
            <span className="projectTitle">Projects</span>
            <p className="projectContent">Here are some projects I've worked on. Make sure to check back as it's forever growing!</p>
            <Content projects={projects}/>

        </div>
    );
}

export default Projects;