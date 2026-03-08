import React from "react";
import "./about.css";
import profileImg from "../../assets/resize-pic.jpg";

const About = () => {
  const handleMoreAboutMe = () => {
    // Scroll to Skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Profile Image */}
        <div className="about-img">
          <img src={profileImg} alt="profile" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>
          <h3>Full Stack Developer!</h3>
          <p>
            Aspiring Full-Stack Developer with strong expertise in backend
            development using <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>, 
            and foundational knowledge of frontend technologies including 
            <b> HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b>. 
            Experienced in building scalable RESTful APIs, secure authentication 
            systems, and AWS-based solutions, with a passion for creating efficient, 
            maintainable, and user-friendly web applications. Eager to leverage backend 
            expertise while contributing to full-stack development and delivering end-to-end solutions.
          </p>

          <button className="about-btn" onClick={handleMoreAboutMe}>More About Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
