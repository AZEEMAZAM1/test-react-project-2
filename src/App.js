// // import React from "react";
// // import FileDownloader from "./components/FileDownloader"; // Make sure this path is correct
// // import './App.css'; // Import the CSS file for styling

// // function App() {
// //   return (
// //     <div className="app-container">
// //       <div className="card">
// //         <h1 className="title">Download CV and More</h1>
// //         <p className="description">
// //           Click the buttons below to download my CV and other documents.
// //         </p>
        
// //         {/* File 1: CV Download */}
// //         <FileDownloader
// //           filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
// //           fileName="Download my project"
// //         />

// //         {/* File 2: Portfolio Download */}
// //         <FileDownloader
// //           filePath="https://github.com/user-attachments/files/portfolio.pdf"
// //           fileName="Portfolio.pdf"
// //         />

// //         {/* File 3: Resume Download */}
// //         <FileDownloader
// //           filePath="https://github.com/user-attachments/files/resume.pdf"
// //           fileName="Resume.pdf"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// import React from "react";
// import FileDownloader from "./components/FileDownloader";
// import './App.css';

// function App() {
//   return (
//     <div className="app-container">
      
//       {/* Card 1: CV */}
//       <div className="card">
//         <h2 className="title">Download CV</h2>
//         <p className="description">Click below to download my latest CV.</p>
//         <FileDownloader
//           filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
//           fileName="Muhammad.Azeem.CV.2024-2.pdf"
//         />
//       </div>

//       {/* Card 2: React Project */}
//       <div className="card">
//         <h2 className="title">React Project</h2>
//         <p className="description">Download a sample React project ZIP file.</p>
//         <FileDownloader
//           filePath="https://example.com/projects/react-project.zip"
//           fileName="React-Project.zip"
//         />
//       </div>

//       {/* Card 3: Flutter Project */}
//       <div className="card">
//         <h2 className="title">Flutter Project</h2>
//         <p className="description">Download a sample Flutter project ZIP file.</p>
//         <FileDownloader
//           filePath="https://example.com/projects/flutter-project.zip"
//           fileName="Flutter-Project.zip"
//         />
//       </div>

//     </div>
//   );
// }

// export default App;
import React from "react";
import FileDownloader from "./components/FileDownloader";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Download CV</h1>
        <p className="description">Click the button below to download my CV.</p>
        <FileDownloader
          filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
          fileName="Muhammad.Azeem.CV.2024-2.pdf"
        />
      </div>

      <div className="card">
        <h1 className="title">React Project 1</h1>
        <p className="description">Download a React project example.</p>
        <FileDownloader
          filePath="https://example.com/react-project-1.zip"
          fileName="React-Project-1.zip"
        />
      </div>

      <div className="card">
        <h1 className="title">Flutter Project 1</h1>
        <p className="description">Download a Flutter project example.</p>
        <FileDownloader
          filePath="https://example.com/flutter-project-1.zip"
          fileName="Flutter-Project-1.zip"
        />
      </div>

      <div className="card">
        <h1 className="title">React Project 2</h1>
        <p className="description">Another React project to check out.</p>
        <FileDownloader
          filePath="https://example.com/react-project-2.zip"
          fileName="React-Project-2.zip"
        />
      </div>

      <div className="card">
        <h1 className="title">Flutter Project 2</h1>
        <p className="description">Another Flutter project to download.</p>
        <FileDownloader
          filePath="https://example.com/flutter-project-2.zip"
          fileName="Flutter-Project-2.zip"
        />
      </div>

      <div className="card">
        <h1 className="title">Portfolio PDF</h1>
        <p className="description">Download my full portfolio PDF.</p>
        <FileDownloader
          filePath="https://example.com/portfolio.pdf"
          fileName="Portfolio.pdf"
        />
      </div>
    </div>
  );
}

export default App;
