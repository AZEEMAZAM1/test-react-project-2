// // // // // src/components/FileDownloader.jsx
// // // // import React from "react";
// // // // import { getDownloadURL, ref } from "firebase/storage";
// // // // import { storage } from "../firebase";

// // // // const FileDownloader = ({ filePath, fileName }) => {
// // // //   const handleDownload = async () => {
// // // //     try {
// // // //       const fileRef = ref(storage, filePath);
// // // //       const url = await getDownloadURL(fileRef);

// // // //       const link = document.createElement("a");
// // // //       link.href = url;
// // // //       link.download = fileName;
// // // //       link.click();
// // // //     } catch (error) {
// // // //       console.error("Error downloading file:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <button
// // // //       onClick={handleDownload}
// // // //       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// // // //     >
// // // //       Download {fileName}
// // // //     </button>
// // // //   );
// // // // };

// // // // export default FileDownloader;
// // // // import React from "react";

// // // // const DownloadCV = () => {
// // // //   return (
// // // //     <a
// // // //       href="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
// // // //       download
// // // //       target="_blank"
// // // //       rel="noopener noreferrer"
// // // //     >
// // // //       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
// // // //         Download My CV
// // // //       </button>
// // // //     </a>
// // // //   );
// // // // };

// // // // export default DownloadCV;
// // // import React from "react";
// // // import { FaDownload } from "react-icons/fa";

// // // const DownloadCV = () => {
// // //   return (
// // //     <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto text-center">
// // //       <h2 className="text-xl font-semibold mb-2 text-gray-800">Download My CV</h2>
// // //       <p className="text-gray-500 mb-4">Click below to download my latest resume in PDF format.</p>
      
// // //       <a
// // //         href="https://github.com/user-attachments/files/19625204/Muhammad.Azeem.CV.2024-2.pdf"
// // //         download
// // //         target="_blank"
// // //         rel="noopener noreferrer"
// // //       >
// // //         <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition">
// // //           <FaDownload />
// // //           Download CV
// // //         </button>
// // //       </a>
// // //     </div>
// // //   );
// // // };

// // // export default DownloadCV;
// // import React from "react";

// // const FileDownloader = ({ filePath, fileName }) => {
// //   return (
// //     <a
// //       href={filePath}
// //       download={fileName}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //     >
// //       <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out w-full">
// //         Download My CV
// //       </button>
// //     </a>
// //   );
// // };

// // export default FileDownloader;
// import React from "react";

// const FileDownloader = ({ filePath, fileName }) => {
//   return (
//     <a
//       href={filePath}
//       download={fileName}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <button className="download-button">
//         Download My CV
//       </button>
//     </a>
//   );
// };

// export default FileDownloader;
import React from "react";

const FileDownloader = ({ filePath, fileName }) => {
  return (
    <a
      href={filePath}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="download-button">
        Download My CV
      </button>
    </a>
  );
};

export default FileDownloader;
