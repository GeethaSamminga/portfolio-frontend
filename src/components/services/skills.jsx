import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiExpress, SiSocketdotio, SiRedux, SiBootstrap, SiTailwindcss, SiMysql, SiPostman, SiWebstorm, SiJest } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My <span>Skills</span></h2>

      <div className="skills-container">
        <div className="skill-card"><FaHtml5 color="#e34f26" size={40}/> <p>HTML5</p></div>
        <div className="skill-card"><FaCss3Alt color="#1572B6" size={40}/> <p>CSS3</p></div>
        <div className="skill-card"><FaJs color="#f7df1e" size={40}/> <p>JavaScript</p></div>
        <div className="skill-card"><SiTypescript color="#3178C6" size={40}/> <p>TypeScript</p></div>
        <div className="skill-card"><FaReact color="#61DBFB" size={40}/> <p>React</p></div>
        <div className="skill-card"><SiRedux color="#764ABC" size={40}/> <p>Redux</p></div>
        <div className="skill-card"><SiBootstrap color="#7952B3" size={40}/> <p>Bootstrap</p></div>
        <div className="skill-card"><SiTailwindcss color="#38BDF8" size={40}/> <p>Tailwind CSS</p></div>
        <div className="skill-card"><FaNodeJs color="#3C873A" size={40}/> <p>Node.js</p></div>
        <div className="skill-card"><SiExpress color="#fff" size={40}/> <p>Express.js</p></div>
        <div className="skill-card"><SiSocketdotio color="#010101" size={40}/> <p>Socket.io</p></div>
        <div className="skill-card"><SiMysql color="#4479A1" size={40}/> <p>MySQL</p></div>
        <div className="skill-card"><SiMongodb color="#4DB33D" size={40}/> <p>MongoDB</p></div>
        <div className="skill-card"><FaAws color="#FF9900" size={40}/> <p>AWS</p></div>
        <div className="skill-card"><FaGitAlt color="#F1502F" size={40}/> <p>Git/GitHub</p></div>
        <div className="skill-card"><SiPostman size={40} color="#FF6C37"/><p>Postman</p></div>
        <div className="skill-card"><SiWebstorm size={40} color="#000000"/><p>WebStorm</p></div>
        <div className="skill-card"><SiJest size={40} color="#C21325"/><p>Jest</p></div>
      </div>
    </section>
  );
};

export default Skills;
