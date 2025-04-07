// // // // // import logo from './logo.svg';
// // // // // import './App.css';

// // // // // function App() {
// // // // //   return (
// // // // //     <div className="App">
// // // // //       <header className="App-header">
// // // // //         <img src={logo} className="App-logo" alt="logo" />
// // // // //         <p>
// // // // //           Edit <code>src/App.js</code> and save to reload.
// // // // //         </p>
// // // // //         <a
// // // // //           className="App-link"
// // // // //           href="https://reactjs.org"
// // // // //           target="_blank"
// // // // //           rel="noopener noreferrer"
// // // // //         >
// // // // //           Learn React
// // // // //         </a>
// // // // //       </header>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // // src/App.jsx
// // // // import React from "react";
// // // // import FileDownloader from "./components/FileDownloader";

// // // // function App() {
// // // //   return (
// // // //     <div className="p-10">
// // // //       <h1 className="text-2xl font-bold mb-4">Download Files from Firebase</h1>
// // // //       <FileDownloader
// // // //         filePath="documents/my-document.pdf"  // change to your file's path in Firebase Storage
// // // //         fileName="My Document.pdf"
// // // //       />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
// // // import React from "react";
// // // import FileDownloader from "./components/FileDownloader";

// // // function App() {
// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
// // //       <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
// // //         <h1 className="text-2xl font-bold mb-4 text-center">Welcome to My Homepage</h1>
// // //         <p className="text-gray-600 mb-6 text-center">
// // //           You can download my CV below. Just click the button.
// // //         </p>
// // //         <FileDownloader
// // //           filePath="documents/my-cv.pdf" // change to your Firebase Storage file path
// // //           fileName="My_CV.pdf"
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React from "react";
// // import FileDownloader from "./components/FileDownloader"; // Make sure this path is correct

// // function App() {
// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white shadow-xl rounded-lg p-10 w-96">
// //         <h1 className="text-2xl font-semibold text-center mb-4">Download CV</h1>
// //         <p className="text-center text-gray-500 mb-6">
// //           Click the button below to download my CV.
// //         </p>
// //         <FileDownloader
// //           filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
// //           fileName="Muhammad.Azeem.CV.2024-2.pdf"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// import React from "react";
// import FileDownloader from "./components/FileDownloader"; // Make sure the path is correct
// import './App.css'; // Import the CSS file for styling

// function App() {
//   return (
//     <div className="app-container">
//       <div className="card">
//         <h1 className="title">Download CV</h1>
//         <p className="description">
//           Click the button below to download my CV.
//         </p>
//         <FileDownloader
//           filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
//           fileName="Muhammad.Azeem.CV.2024-2.pdf"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import FileDownloader from "./components/FileDownloader"; // Make sure this path is correct
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Download CV</h1>
        <p className="description">
          Click the button below to download my CV.
        </p>
        <FileDownloader
          filePath="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
          fileName="Muhammad.Azeem.CV.2024-2.pdf"
        />
      </div>
    </div>
  );
}

export default App;
