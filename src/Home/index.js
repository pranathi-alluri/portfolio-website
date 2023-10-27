import "./index.css";
import profile_pic from "../images/web pic no bg.png"

function Home() {
    return (
        <section id="Home">
            <div className="mainContent">
                <div className="container">
                    <div className="row">
                        <div className="col headerContent">
                            <span className="hello">Hi,</span> <br/>
                            <span className="homeHeader"> I'm
                            <span className="homeName"> Pranathi Alluri
                            </span>!
                        </span>
                            <p className="homeSubheader">Passionate about weaving data into compelling narratives.</p>
                            <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:4fcc0379-1ea8-3fe3-8547-aa77cd32e762" role="button" className="btn btn-light resume-btn">
                                View Resume
                            </a>
                        </div>
                        <div className="col-md-5 col-xl-4 col-xxl-3 d-none d-md-block img-logo">
                            <img src={profile_pic} className="profile"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;