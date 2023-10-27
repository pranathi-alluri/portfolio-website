import React, {useState} from 'react';
import './projectNavbar.css';

function ProjectNavbar({types, filterProjects}) {


    return (
        <ul className="nav nav-tabs projectNav">
            {types.map((type, index) => (
                <li key={index} className="nav-item project-item">
                    <button className="nav-link"
                            onClick={() => filterProjects(type)}>
                        {type}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ProjectNavbar;