import { useEffect } from "react";
import '../styles/navbar.css'
export default function NavbarEffect({ links }) {

  useEffect(() => {
    console.log("NavbarEffect loaded!");
  }, []);

  return (
    <nav>
      <ul>
        {links && links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
