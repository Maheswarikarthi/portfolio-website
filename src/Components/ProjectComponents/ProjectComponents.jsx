// import React from 'react';
// import img1 from '../../assets/music.png'
// import img2 from '../../assets/pro1.png'
// import img3 from '../../assets/pro2.png'
// import './ProjectComponents.css'


// const Projects = () => {
//   return (
//     <section id="projects">
//       <h2>Projects</h2>
//      <img src={img1} alt=""></img>
//      <img src={img2} alt=""></img>
//      <img src={img3} alt=""></img>
//     </section>
//   );
// };

// export default Projects;
import React from 'react';
import img2 from '../../assets/pro1.png';
import img3 from '../../assets/pro2.png';
import './ProjectComponents.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      
      <div className="project-box">
        <a href="https://github.com/Maheswarikarthi/axios" target="_blank" rel="noopener noreferrer">
          <img src={img2} alt="Project 1"></img>
        </a>
        <p>Character Axios - Fetching and displaying characters.</p>
      </div>
      <div className="project-box">
        <a href="https://github.com/Maheswarikarthi/Stopwatch
" target="_blank" rel="noopener noreferrer">
          <img src={img3} alt="Project 2"></img>
        </a>
        <p>StopWatch - A simple stopwatch application.</p>
      </div>
      
    </section>
  );
};

export default Projects;

