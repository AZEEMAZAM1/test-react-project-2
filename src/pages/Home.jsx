// // // import React from 'react';
// // // import FileDownloader from '../components/FileDownloader';

// // // const Home = () => {
// // //   return (
// // //     <div className="home-container">
// // //       <header className="header">
// // //         <img src="./assets/profile.jpg" alt="Profile" className="profile-img" />
// // //         <h1>Welcome to My Profile</h1>
// // //       </header>
// // //       <div className="card-container">
// // //         <FileDownloader
// // //           filePath="./assets/files/Muhammad.Azeem.CV.2024.pdf"
// // //           fileName="Azeem.CV.pdf"
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Home;
// // import React from 'react';
// // import './Home.css';

// // const Home = () => {
// //   return (
// //     <div className="home-container">
// //       <h2 className="home-title">Mobile App Technologies</h2>
// //       <div className="card-container">
// //         <div className="card">
// //           <h3>React Native</h3>
// //           <p>Build cross-platform apps with JavaScript using React Native.</p>
// //         </div>
// //         <div className="card">
// //           <h3>Xamarin</h3>
// //           <p>Create powerful native apps for iOS and Android with C# using Xamarin.</p>
// //         </div>
// //         <div className="card">
// //           <h3>Flutter</h3>
// //           <p>Fast development and expressive UI with Dart using Flutter.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h2 className="home-title">Mobile App Technologies</h2>
//       <div className="card-container">
//         <Link to="/react-native" className="card"> {/* Link to React Native page */}
//           <h3>React Native</h3>
//           <p>Build cross-platform apps with JavaScript using React Native.</p>
//         </Link>
//         <Link to="/xamarin" className="card"> {/* Link to Xamarin page */}
//           <h3>Xamarin</h3>
//           <p>Create powerful native apps for iOS and Android with C# using Xamarin.</p>
//         </Link>
//         <Link to="/flutter" className="card"> {/* Link to Flutter page */}
//           <h3>Flutter</h3>
//           <p>Fast development and expressive UI with Dart using Flutter.</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Mobile App Technologies</h2>
      <div className="card-container">
        {/* First Row of Cards */}
        <Link to="/react-native" className="card"> {/* Link to React Native page */}
          <h3>React Native</h3>
          <p>Build cross-platform apps with JavaScript using React Native.</p>
        </Link>
        <Link to="/xamarin" className="card"> {/* Link to Xamarin page */}
          <h3>Xamarin</h3>
          <p>Create powerful native apps for iOS and Android with C# using Xamarin.</p>
        </Link>
        <Link to="/flutter" className="card"> {/* Link to Flutter page */}
          <h3>Flutter</h3>
          <p>Fast development and expressive UI with Dart using Flutter.</p>
        </Link>

        {/* Second Row of Cards */}
        <Link to="/swift" className="card"> {/* Link to Swift page */}
          <h3>Swift</h3>
          <p>Build native iOS apps with Apple's Swift programming language.</p>
        </Link>
        <Link to="/kotlin" className="card"> {/* Link to Kotlin page */}
          <h3>Kotlin</h3>
          <p>Create modern Android apps with Kotlin, a powerful JVM language.</p>
        </Link>
        <Link to="/ionic" className="card"> {/* Link to Ionic page */}
          <h3>Ionic</h3>
          <p>Develop hybrid mobile apps using web technologies with Ionic.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;