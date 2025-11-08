import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarEffect from './Components/navbar';
import Home from './Page/home';
import Services from "./Page/services";
import Project from "./Page/project";
import Contact from "./Page/contact";
import Notfound from "./Page/notfound";

function App() {
  const navLinks = [
    { name: "Home", href: "/#/" },
    { name: "Services", href: "/#/services" },
    { name: "Projects", href: "/#/project" },
    { name: "Contact", href: "/#/contact" },
  ];

  return (
    <HashRouter>
      <NavbarEffect links={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
