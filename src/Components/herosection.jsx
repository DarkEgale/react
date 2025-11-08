import React, { useEffect, useState } from "react";
import logo from "../images/logo512.png";
import "../styles/home.css";

export default function HeroSection(props) {
  const numImages = 30;
  const [positions, setPositions] = useState([]);


  useEffect(() => {
    const pos = [];
    for (let i = 0; i < numImages; i++) {
      const baseTop = Math.random() * 100;
      const baseLeft = Math.random() * 100;
      const size = 30 + Math.random() * 20;
      const delay = Math.random() * 2; 
      pos.push({ top: baseTop, left: baseLeft, size, delay });
    }
    setPositions(pos);


  }, []);

  return (
    <section className="home-section">
      {positions.map((p, i) => (
        <img
          key={i}
          src={logo}
          alt="pattern"
          className="rotating-img"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="hero_text">
        <h1>{props.hero_title}</h1>
        <h6>{props.hero_subtitle}</h6>
        <p>{props.hero_discription}</p>
        <button type="button">{props.hero_button}</button>
        <button type="button">{props.hero_button_About}</button>
        <div/>
      </div>
      <div className="hero_img">
        <img src={props.hero_img} alt="Front-end development" />
      </div>
    </section>
  );
}
