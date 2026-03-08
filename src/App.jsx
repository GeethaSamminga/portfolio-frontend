import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home.jsx";
import About from "./components/about/about.jsx";
import Skills from './components/services/skills.jsx';
import Projects from "./components/projects/projects.jsx";
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';

function App() {
  return (
  <>
     <Home />
     <About />
     <Skills/>
     <Projects/>
     <Experience />
     <Contact />
  </>
  
  );
}

export default App;
