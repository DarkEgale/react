import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../styles/navbar.css'
import manu from '../images/icon/menu_icon.svg'
export default function NavbarEffect({ links }) {
  const location = useLocation();

  useEffect(() => {
    console.log("NavbarEffect loaded!");
  }, []);

  return (
    <nav>

      <input type="checkbox" name="checkbox" id="check" />
      <label htmlFor="check"><img src={manu} alt="" /></label>
      <ul>
        {links && links.map((link, index) => (
          <li key={index} className={location.pathname === link.href ? "active" : ""}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
