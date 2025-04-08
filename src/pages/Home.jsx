import React from 'react';
import FileDownloader from '../components/FileDownloader';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <img src="./assets/profile.jpg" alt="Profile" className="profile-img" />
        <h1>Welcome to My Profile</h1>
      </header>
      <div className="card-container">
        <FileDownloader
          filePath="./assets/files/Muhammad.Azeem.CV.2024.pdf"
          fileName="Muhammad.Azeem.CV.2024.pdf"
        />
      </div>
    </div>
  );
}

export default Home;
