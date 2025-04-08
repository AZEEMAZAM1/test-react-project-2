// import React from 'react';
// import FileDownloader from '../components/FileDownloader';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <header className="header">
//         <img src="./assets/profile.jpg" alt="Profile" className="profile-img" />
//         <h1>Welcome to My Profile</h1>
//       </header>
//       <div className="card-container">
//         <FileDownloader
//           filePath="./assets/files/Muhammad.Azeem.CV.2024.pdf"
//           fileName="Azeem.CV.pdf"
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Mobile App Technologies</h2>
      <div className="card-container">
        <div className="card">
          <h3>React Native</h3>
          <p>Build cross-platform apps with JavaScript using React Native.</p>
        </div>
        <div className="card">
          <h3>Xamarin</h3>
          <p>Create powerful native apps for iOS and Android with C# using Xamarin.</p>
        </div>
        <div className="card">
          <h3>Flutter</h3>
          <p>Fast development and expressive UI with Dart using Flutter.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
