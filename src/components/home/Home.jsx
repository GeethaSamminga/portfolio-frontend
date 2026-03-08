import { useState } from "react";
import "./Home.css";
import ProfileImg from "../../assets/resize-pic.jpg";
import Resume from "../../assets/mern_resume (1).pdf";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <section id="home" className="home-section">
          <div className="navbar">
              <ul className="portfolio">
                  <li className="nav-item"><a href="#hero">Portfolio</a></li>
              </ul>
              
              <div className="hamburger" onClick={toggleMenu}>
                  {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
              </div>

              <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
                  <li className="nav-item"><a href="#home" onClick={closeMenu}>Home</a></li>
                  <li className="nav-item"><a href="#about" onClick={closeMenu}>About</a></li>
                  <li className="nav-item"><a href="#skills" onClick={closeMenu}>Skills</a></li>
                  <li className="nav-item"><a href="#projects" onClick={closeMenu}>Projects</a></li>
                  <li className="nav-item"><a href="#experience" onClick={closeMenu}>Experience</a></li>
                  <li className="nav-item"><a href="#contact" onClick={closeMenu}>Contact</a></li>
              </ul>
          </div>

          <div className="main">
              <div className="container-one">
                  <h1>Hello, It's Me</h1>
                  <h2 className="name">Geetha Samminga</h2>
                  <h3 className="role">And I'm a <span className="highlight">MERN Stack Developer</span></h3>
                  <p className="description">
                      Experienced Node.js developer expanding into full-stack MERN development. 
                      I build scalable backend APIs and now crafting complete web solutions with React.
                  </p>
                  <div className="social-icons">
                      <a href={Resume} download>
                          <button className="cv-btn">Download Resume</button>
                      </a>
                  </div>
              </div>
              <div className="profile-container">
                  <div className="circle"></div>
                  <img src={ProfileImg} alt="Geetha Samminga Profile" className="profile-img"/>
              </div>
          </div>

      </section>
  );
};

export default Home;
