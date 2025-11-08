import Cards from "../Components/cards";
import "../styles/services.css";
import codeImg from "../images/code_logo.svg"

export default function Services() {
  const serviceData = [
    {
      img_src:codeImg,
      title: "Front End Development",
      description: "Building responsive and interactive web interfaces using React.js, HTML5, and CSS3.",
      button: "Learn More"
    },
    {
      img_src: codeImg,
      title: "UI/UX Design to Code",
      description: "Converting Figma or XD designs into clean, functional, and pixel-perfect web pages.",
      button: "View Work"
    },
    {
      img_src: codeImg,
      title: "Responsive Web Design",
      description: "Optimizing layouts for mobile, tablet, and desktop for a seamless user experience.",
      button: "Explore"
    }
  ];

  return (
    <section id="services">
      {serviceData.map((service, index) => (
        <Cards
          key={index}
          img_src={service.img_src}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
}
