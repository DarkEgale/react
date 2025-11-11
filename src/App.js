import { HashRouter, Routes, Route } from "react-router-dom"; // <-- change here
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarEffect from './Components/navbar';
import Home from './Page/home';
import Services from "./Page/services";
import Project from "./Page/project";
import Contact from "./Page/contact";
import Notfound from "./Page/notfound";
import About from "./Page/about";

function App() {
  const navLinks = [
    { name: "Home", href: "#/" },
    { name: "About", href: "#/about" },
    { name: "Services", href: "#/services" },
    { name: "Projects", href: "#/project" },
    { name: "Contact", href: "#/contact" },
  ];

  return (
    <HashRouter> 
      <NavbarEffect links={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

