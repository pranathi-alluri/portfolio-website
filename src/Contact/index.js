import "./index.css";

function Contact() {
    const linkedInProfile = 'https://www.linkedin.com/in/pranathi-alluri';
    const email = 'alluri.p@northeastern.edu';

    return (
        <div className="contact-section">
            <span className="contactTitle">Contact</span>
            <p className="contactContent">I’d love to hear from you! Feel free to reach out and connect on these platforms:</p>
            <div>
                <p><strong>LinkedIn:</strong> <a href={linkedInProfile} target="_blank" className="contactLink" rel="noopener noreferrer">{linkedInProfile}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${email}`} className="contactLink">{email}</a></p>
            </div>
        </div>
    );
}

export default Contact;