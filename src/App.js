// // // // // import React from "react";
// // // // // import FileDownloader from "./components/FileDownloader"; // Make sure this path is correct
// // // // // import './App.css'; // Import the CSS file for styling

// // // // // function App() {
// // // // //   return (
// // // // //     <div className="app-container">
// // // // //       <div className="card">
// // // // //         <h1 className="title">Download CV and More</h1>
// // // // //         <p className="description">
// // // // //           Click the buttons below to download my CV and other documents.
// // // // //         </p>
        
// // // // //         {/* File 1: CV Download */}
// // // // //         <FileDownloader
// // // // //           filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
// // // // //           fileName="Download my project"
// // // // //         />

// // // // //         {/* File 2: Portfolio Download */}
// // // // //         <FileDownloader
// // // // //           filePath="https://github.com/user-attachments/files/portfolio.pdf"
// // // // //           fileName="Portfolio.pdf"
// // // // //         />

// // // // //         {/* File 3: Resume Download */}
// // // // //         <FileDownloader
// // // // //           filePath="https://github.com/user-attachments/files/resume.pdf"
// // // // //           fileName="Resume.pdf"
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // import React from "react";
// // // // import FileDownloader from "./components/FileDownloader";
// // // // import './App.css';

// // // // function App() {
// // // //   return (
// // // //     <div className="app-container">
      
// // // //       {/* Card 1: CV */}
// // // //       <div className="card">
// // // //         <h2 className="title">Download CV</h2>
// // // //         <p className="description">Click below to download my latest CV.</p>
// // // //         <FileDownloader
// // // //           filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
// // // //           fileName="Muhammad.Azeem.CV.2024-2.pdf"
// // // //         />
// // // //       </div>

// // // //       {/* Card 2: React Project */}
// // // //       <div className="card">
// // // //         <h2 className="title">React Project</h2>
// // // //         <p className="description">Download a sample React project ZIP file.</p>
// // // //         <FileDownloader
// // // //           filePath="https://example.com/projects/react-project.zip"
// // // //           fileName="React-Project.zip"
// // // //         />
// // // //       </div>

// // // //       {/* Card 3: Flutter Project */}
// // // //       <div className="card">
// // // //         <h2 className="title">Flutter Project</h2>
// // // //         <p className="description">Download a sample Flutter project ZIP file.</p>
// // // //         <FileDownloader
// // // //           filePath="https://example.com/projects/flutter-project.zip"
// // // //           fileName="Flutter-Project.zip"
// // // //         />
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
// // // import React from "react";
// // // import FileDownloader from "./components/FileDownloader";
// // // import "./App.css";

// // // function App() {
// // //   return (
// // //     <div className="app-container">
// // //       <div className="card">
// // //         <h1 className="title">Download CV</h1>
// // //         <p className="description">Click the button below to download my CV.</p>
// // //         <FileDownloader
// // //           filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
// // //           fileName="Muhammad.Azeem.CV.2024-2.pdf"
// // //         />
// // //       </div>

// // //       <div className="card">
// // //         <h1 className="title">React Project 1</h1>
// // //         <p className="description">Download a React project example.</p>
// // //         <FileDownloader
// // //           filePath="https://example.com/react-project-1.zip"
// // //           fileName="React-Project-1.zip"
// // //         />
// // //       </div>

// // //       <div className="card">
// // //         <h1 className="title">Flutter Project 1</h1>
// // //         <p className="description">Download a Flutter project example.</p>
// // //         <FileDownloader
// // //           filePath="https://example.com/flutter-project-1.zip"
// // //           fileName="Flutter-Project-1.zip"
// // //         />
// // //       </div>

// // //       <div className="card">
// // //         <h1 className="title">React Project 2</h1>
// // //         <p className="description">Another React project to check out.</p>
// // //         <FileDownloader
// // //           filePath="https://example.com/react-project-2.zip"
// // //           fileName="React-Project-2.zip"
// // //         />
// // //       </div>

// // //       <div className="card">
// // //         <h1 className="title">Flutter Project 2</h1>
// // //         <p className="description">Another Flutter project to download.</p>
// // //         <FileDownloader
// // //           filePath="https://example.com/flutter-project-2.zip"
// // //           fileName="Flutter-Project-2.zip"
// // //         />
// // //       </div>

// // //       <div className="card">
// // //         <h1 className="title">Portfolio PDF</h1>
// // //         <p className="description">Download my full portfolio PDF.</p>
// // //         <FileDownloader
// // //           filePath="https://example.com/portfolio.pdf"
// // //           fileName="Portfolio.pdf"
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React from "react";
// // import FileDownloader from "./components/FileDownloader";
// // import './App.css';
// // import ddd from "./ddd.jpg"; // Import the profile image

// // function App() {
// //   return (
// //     <div className="app-container">
      
// //       {/* Profile Header */}
// //       <div className="profile-header">
// //         <img src={ddd} alt="Profile" className="profile-pic" />
// //         <h2 className="welcome-text">Welcome to my profile</h2>
// //       </div>

// //       {/* Cards Container */}
// //       <div className="cards-container">
// //         {/* Six Cards */}
// //         {[...Array(6)].map((_, index) => (
// //           <div key={index} className="card">
// //             <h1 className="title">Download CV {index + 1}</h1>
// //             <p className="description">Click to download my CV.</p>
// //             <FileDownloader
// //               filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
// //               fileName={`Muhammad.Azeem.CV.2024-${index + 1}.pdf`}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// import React from "react";
// import FileDownloader from "./components/FileDownloader";
// import './App.css';
// import profileImage from './ddd.jpg'; // Ensure this path is correct

// function App() {
//   return (
//     <div className="app-container">
//       {/* Profile Header */}
//       <div className="profile-header">
//         <img src={profileImage} alt="Profile" className="profile-pic" />
//         <span className="welcome-text">Welcome to my profile</span>
//       </div>

//       {/* Cards container */}
//       <div className="cards-container">
//         <div className="card">
//           <h1 className="title">Download CV</h1>
//           <p className="description">
//             Click the button below to download my CV.
//           </p>
//           <FileDownloader
//             filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
//             fileName="Muhammad.Azeem.CV.2024-2.pdf"
//           />
//         </div>

//         {/* More cards */}
//         <div className="card">
//           <h1 className="title">Sample File 1</h1>
//           <FileDownloader
//             filePath="https://example.com/file1.pdf"
//             fileName="file1.pdf"
//           />
//         </div>

//         <div className="card">
//           <h1 className="title">Sample File 2</h1>
//           <FileDownloader
//             filePath="https://example.com/file2.pdf"
//             fileName="file2.pdf"
//           />
//         </div>

//         {/* Add up to 6 cards this way */}
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import FileDownloader from "./components/FileDownloader";
import './App.css';
import profileImage from './ddd.jpg'; // Your profile pic

function App() {
  return (
    <div className="app-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={profileImage} alt="Profile" className="profile-pic" />
        <span className="welcome-text">Welcome to my profile</span>
      </div>

      {/* Cards Grid Container */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <h1 className="title">Download CV</h1>
          <p className="description">Click below to download CV</p>
          <FileDownloader
            filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
            fileName="cv.pdf"
          />
        </div>

        {/* Card 2 */}
        <div className="card">
          <h1 className="title">File 1</h1>
          <FileDownloader
            filePath="https://example.com/file1.pdf"
            fileName="file1.pdf"
          />
        </div>

        {/* Card 3 */}
        <div className="card">
          <h1 className="title">File 2</h1>
          <FileDownloader
            filePath="https://example.com/file2.pdf"
            fileName="file2.pdf"
          />
        </div>

        {/* Card 4 */}
        <div className="card">
          <h1 className="title">File 3</h1>
          <FileDownloader
            filePath="https://example.com/file3.pdf"
            fileName="file3.pdf"
          />
        </div>

        {/* Card 5 */}
        <div className="card">
          <h1 className="title">File 4</h1>
          <FileDownloader
            filePath="https://example.com/file4.pdf"
            fileName="file4.pdf"
          />
        </div>

        {/* Card 6 */}
        <div className="card">
          <h1 className="title">File 5</h1>
          <FileDownloader
            filePath="https://example.com/file5.pdf"
            fileName="file5.pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
