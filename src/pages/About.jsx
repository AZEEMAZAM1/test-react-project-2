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
          Hi, I'm Muhammad Azeem, a passionate software developer with a love for creating innovative and user-friendly applications. 
          I specialize in mobile development and have experience working with technologies like react native, xamarin, and flutter.
        </p>
      </section>

      {/* Skills Section */}
      <section className="about-section">
        <h2>Skills</h2>
        <ul>
          <ul>✅ Experience with:
          Expo, React Navigation, AsyncStorage, and integrating REST APIs and Firebase in mobile apps.</ul>
          <ul>✅ Strong understanding of:
          Component-based architecture, state management (using React Hooks and Context API), and mobile UI/UX design principles.</ul>
          <ul>✅ Excellent problem-solving and debugging skills:
          Skilled at using React Native Debugger, Chrome DevTools, and console logging to efficiently trace and resolve runtime errors and UI glitches.</ul>
        </ul>
      </section>

      {/* Hobbies/Interests Section */}
      <section className="about-section">
        <h2>Hobbies & Interests</h2>
        <p>
        When I'm not coding, I enjoy reading tech blogs, playing chess, and exploring new technologies. I'm also passionate about mobile UI design, which helps me stay creative and motivated.  </p>
      </section>
    </div>
  );
}

export default About;