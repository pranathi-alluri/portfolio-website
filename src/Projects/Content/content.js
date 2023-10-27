import React, {useState} from 'react';
import NavBar from "../NavBar/projectNavbar.js";
import ProjectCard from "../Card/ProjectCard";
import "./content.css"

function Content({projects}) {
    const [selectedType, setSelectedType] = useState('Data Science');
    const [displayedProjects, setDisplayedProjects] = useState(3);

    const filterProjects = (type) => {
        setSelectedType(type);
        setDisplayedProjects(3);
    };

    const loadMoreProjects = () => {
        setDisplayedProjects(projects.length)
    };

    const getTypeProjects = () => {
        return projects.filter((project) => project.type === selectedType);
    }

    return (
        <div>
            <NavBar types={['Data Science', 'Computer Science', 'Other']} filterProjects={filterProjects}/>

            <div className="container mt-5">
                <div className="row">
                    {getTypeProjects().slice(0, displayedProjects).map((project, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <ProjectCard project={project}/>
                        </div>
                    ))}
                </div>
            </div>
            {getTypeProjects().length > 3 && displayedProjects < getTypeProjects().length && (
                <div className="text-center mt-3">
                    <button onClick={loadMoreProjects} className="btn btn-light project-btn">
                        Load More
                    </button>
                </div>
            )}
        </div>
    )
}

export default Content;