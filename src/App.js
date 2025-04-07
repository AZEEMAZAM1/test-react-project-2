import React from "react";
import FileDownloader from "./components/FileDownloader"; // Make sure this path is correct
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Download CV and More</h1>
        <p className="description">
          Click the buttons below to download my CV and other documents.
        </p>
        
        {/* File 1: CV Download */}
        <FileDownloader
          filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
          fileName="Download my project"
        />

        {/* File 2: Portfolio Download */}
        <FileDownloader
          filePath="https://github.com/user-attachments/files/portfolio.pdf"
          fileName="Portfolio.pdf"
        />

        {/* File 3: Resume Download */}
        <FileDownloader
          filePath="https://github.com/user-attachments/files/resume.pdf"
          fileName="Resume.pdf"
        />
      </div>
    </div>
  );
}

export default App;
