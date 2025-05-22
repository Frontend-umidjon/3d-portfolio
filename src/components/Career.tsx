import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Freelance Section */}
           <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>School Projects</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Created several internal websites for school events, clubs, and
              educational resources. These projects helped automate processes,
              improve access to materials, and were used by both students and
              teachers.
            </p>
          </div>

          {/* School Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Self-employed</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Designed and built small business websites and landing pages with
              a focus on responsive design and performance. Worked with tools
              like React, TailwindCSS, and Figma to deliver high-quality
              interfaces and modern UI/UX.
            </p>
          </div>
          {/* Current Focus */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Currently</h4>
                <h5>Growing as a Developer</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively building portfolio projects, learning advanced frontend
              patterns, contributing to open source, and documenting the journey
              on platforms like GitHub and YouTube.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
