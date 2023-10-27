import "./index.css";
import {BsFillDatabaseFill, BsFillFileCodeFill} from "react-icons/bs";
import {FaBookOpen, FaServer} from "react-icons/fa";

function About() {
    const coding = <BsFillFileCodeFill className="skillIcon"/>
    const libs = <FaBookOpen className="skillIcon"/>
    const dbs = <BsFillDatabaseFill className="skillIcon"/>
    const env = <FaServer className="skillIcon"/>
    return(
        <div className="AboutContent">
            <span className="aboutTitle"> About Me</span>
            <p className="aboutContent"> Hello! I'm Pranathi Alluri, and I'm pursuing a Master's in Computer Science at Northeastern University. With a combined undergraduate degree in Data Science and Neuroscience, I proudly wear the scientist's hat.
                My scientific mindset equips me to navigate the dynamic tech landscape, think critically, and solve complex problems. I can't wait to share my unique insights and apply my diverse skill set to real-world challenges. Join me on this journey of discovery and innovation!</p>
            <div className="container TechnicalSkills">
                <ul className="list-group skills-list">
                    <li className="list-group-item skill-item">
                        <div className="container skill-card">
                            <div className="row align-items-center">
                                <div className="col-2 col-lg-1">
                                    {coding}
                                </div>
                                <div className="col">
                                    <span className="skill-cat">Languages</span>
                                    <p className="skill-content">Python, Java, R, HTML, CSS, Javascript</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item skill-item">
                        <div className="container skill-card">
                            <div className="row align-items-center">
                                <div className="col-2 col-lg-1">
                                    {libs}
                                </div>
                                <div className="col">
                                    <span className="skill-cat">Libraries</span>
                                    <p className="skill-content">Scikit-learn, PyTorch, NLTK, pandas, PySpark</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item skill-item">
                        <div className="container skill-card">
                            <div className="row align-items-center">
                                <div className="col-2 col-lg-1">
                                    {dbs}
                                </div>
                                <div className="col">
                                    <span className="skill-cat">Databases</span>
                                    <p className="skill-content">MySQL, MongoDB, Redis, Neo4j</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item skill-item">
                        <div className="container skill-card">
                            <div className="row align-items-center">
                                <div className="col-2 col-lg-1">
                                    {env}
                                </div>
                                <div className="col">
                                    <span className="skill-cat">Tools & Platforms</span>
                                    <p className="skill-content">Amazon Web Services (AWS), Git, Jupyter Notebooks, Linux, Android Studio </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
}
export default About;