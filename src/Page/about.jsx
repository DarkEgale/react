import profileImg from '../images/profile.png';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about">
      <div className="about_photo">
        <img src={profileImg} alt="MD Shimul Hossen" />
      </div>
      <div className="about_text">
        <h1>MD SHIMUL HOSSEN</h1>
        <h2>FRONT END DEVELOPER</h2> <br />
        <p>
          I’m a passionate and dedicated Front End Developer with a strong focus on creating responsive, interactive, and visually appealing web experiences. I enjoy transforming creative ideas and designs into clean, functional, and user-friendly websites using modern technologies like <strong>React, HTML, CSS,</strong> and <strong>JavaScript</strong>. My goal is to build web interfaces that not only look great but also deliver smooth performance across all devices. I continuously learn and explore new tools and frameworks to improve my skills and bring innovation to every project I work on.
        </p>
        <button>Download CV</button>
      </div>
    </section>
  );
}
