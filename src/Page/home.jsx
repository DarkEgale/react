import HomeSection from "../Components/herosection";
import captureImg from "../images/Capture.png"; 
export default function Home(){
    return(
        <>
        <HomeSection
            hero_title="MD SHIMUL HOSSEN"
            hero_subtitle="Front End Developer"
            hero_discription="I’m a passionate Front End Developer who loves turning creative ideas into responsive, modern, and user-friendly websites using React, HTML, CSS, and JavaScript."
            hero_button="Contact Me"
            hero_button_About="About Me"
            hero_img={captureImg}
        />
        </>
    )
}
