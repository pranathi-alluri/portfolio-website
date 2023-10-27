import React, {useState} from 'react';
import "./ProjectCard.css"

function ProjectCard({project}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="card-cont">
            <div className="card mb-3">
                <div className="card-img-cont">
                    <img src={project.mainImage} className="card-img-top" alt={project.title}/>
                </div>
                <div className="card-body">
                    <div className="body-cont">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                    </div>
                    <div className="btn-cont">
                        <button type="button" className="btn btn-primary btn-card"
                                onClick={openModal}>
                            View More
                        </button>
                    </div>
                </div>

                {showModal &&
                 <div className="modal fade show" style={{display: 'block'}}>
                     <div
                         className="modal-dialog modal-fullscreen modal-xl modal-dialog-centered">
                         <div className="modal-content">
                             <div className="modal-header">
                                 <h5 className="modal-title">{project.title}</h5>
                                 <button type="button" className="btn-close" onClick={closeModal}>
                                 </button>
                             </div>
                             <div className="modal-body">
                                 {project.body.map((paragraph, index) => (
                                     <p className="projectBody" key={index}>{paragraph}</p>
                                 ))
                                 }
                                 {project.created && (
                                     <p className="createdText">Created in {project.created}</p>
                                 )}
                                 {project.myRole && (
                                     <div>
                                         <p className="myRole">My role:</p>
                                         <ul>
                                             {project.myRole.map((role, index) => (
                                                 <li key={index}>{role}</li>
                                             ))}
                                         </ul>
                                     </div>
                                 )}

                                 {project.media && (
                                     <div className="embed-responsive">
                                         <iframe
                                             className="embed-responsive-item"
                                             src={project.media}
                                             title={project.title}
                                             allowFullScreen>
                                         </iframe>
                                     </div>
                                 )}

                                 {project.images && (
                                     <div className="container">
                                         {project.images.map((image, index) => (
                                             <img src={image} alt={`Image ${index}`}
                                                  className="img-fluid mediaStyles"/>
                                         ))}
                                     </div>
                                 )}
                                 {project.gitLink && (
                                     <div className="btn-cont">
                                     <a href={project.gitLink} target="_blank"
                                        className="btn btn-light contentButtons">
                                         GitHub Repo
                                     </a>
                                     </div>
                                 )}
                                 {project.reportLink && (
                                     <div className="btn-cont">
                                     <a href={project.reportLink} target="_blank"
                                        className="btn btn-light contentButtons">
                                         Learn More
                                     </a>
                                     </div>)}
                             </div>
                             <div className="modal-footer">
                                 <button type="button" className="btn btn-secondary"
                                         onClick={closeModal}>
                                     Close
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>}
            </div>
        </div>
    )
        ;
};

export default ProjectCard;
