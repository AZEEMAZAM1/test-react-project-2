// import React from 'react';

// const About = () => {
//   return (
//     <div className="about-container">
//       <h2>About Me</h2>
//       <p>This is the About page where I describe myself.</p>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import './About.css'; // Ensure you have a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      
      {/* Introduction Section */}
      <section className="about-section">
        <h2>Introduction</h2>
        <p>
          Hi, I'm [Your Name], a passionate software developer with a love for creating innovative and user-friendly applications. 
          I specialize in [Your Specialization] and have experience working with technologies like [Technology 1], [Technology 2], and [Technology 3].
        </p>
      </section>

      {/* Skills Section */}
      <section className="about-section">
        <h2>Skills</h2>
        <ul>
          <li>Proficient in [Programming Language/Framework]</li>
          <li>Experience with [Tool/Technology]</li>
          <li>Strong understanding of [Concept/Skill]</li>
          <li>Excellent problem-solving and debugging skills</li>
        </ul>
      </section>

      {/* Hobbies/Interests Section */}
      <section className="about-section">
        <h2>Hobbies & Interests</h2>
        <p>
          When I'm not coding, I enjoy [Hobby 1], [Hobby 2], and exploring new technologies. 
          I'm also passionate about [Interest/Activity], which helps me stay creative and motivated.
        </p>
      </section>
    </div>
  );
}

export default About;