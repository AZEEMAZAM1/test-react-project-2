
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Home from './pages/Home';
// // import About from './pages/About';
// // import Contact from './pages/Contact';
// // import './index.css';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="top-banner">
// //         <img src={require('./assets/profile.jpg')} alt="Profile" className="profile-pic" />
// //         <h2 className="welcome-text">Its Azeem here</h2>
// //       </div>

// //       <Navbar />
    
// //       <div className="content">
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/contact" element={<Contact />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import ReactNativeProjects from './pages/ReactNativeProjects';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/react-native-projects" element={<ReactNativeProjects />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure Navbar is imported
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ReactNativeProjects from './pages/ReactNativeProjects';
import './index.css'; // Ensure global styles are imported

function App() {
  return (
    <Router>
      {/* Top Banner */}
      <div className="top-banner">
        <img src={require('./assets/profile.jpg')} alt="Profile" className="profile-pic" />
        <h2 className="welcome-text">It's Azeem here</h2>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/react-native-projects" element={<ReactNativeProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;