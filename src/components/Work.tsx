import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import biletick from "../assets/biletick show.png";
import commerce from "../assets/commerce.png";
import byDesign from "../assets/by design.png";
import portfolioImg from '../assets/image.png'
import admin from "../assets/image copy.png";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Movie App",
    category: "Personal",
    tools: "React, TailwindCSS, TMDB API",
    image: biletick,
    link: "https://7-8-one.vercel.app/",
  },
  {
    title: "Portfolio Website",
    category: "Personal",
    tools: "React, TypeScript, GSAP",
    image: portfolioImg,
    link: "https://3d-portfolio-ruby-delta.vercel.app/",
  },
  {
    title: "Commercial Website",
    category: "Personal",
    tools: "React, SCSS, Context , FakeStore API",
    image: commerce,
    link: "https://6-11-pi.vercel.app/",
  },
  {
    title: "Website by design ", 
    category: "Personal",
    tools: "React, SCSS, reusable components, Chart.js",
    image: byDesign,
    link: "https://6-8-two.vercel.app/",
  },
  {
    title: "Admin Panel",
    category: "FreeLance",
    tools: "React, TailwindCSS, RTK Query",
    image: admin,
    link: "admin.milliardev.com",
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WorkImage image={project.image} alt={project.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
