// // import React from "react";

// // const FileDownloader = ({ filePath, fileName }) => {
// //   return (
// //     <a
// //       href={filePath}
// //       download={fileName}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //     >
// //       <button className="download-button">
// //         Download {fileName}
// //       </button>
// //     </a>
// //   );
// // };

// // export default FileDownloader;
// import React from "react";

// const FileDownloader = ({ filePath, fileName }) => {
//   return (
//     <a href={filePath} download={fileName} target="_blank" rel="noopener noreferrer">
//       <button className="download-button">Download My CV</button>
//     </a>
//   );
// };

// export default FileDownloader;
import React from 'react';

const FileDownloader = ({ filePath, fileName }) => {
  return (
    <div className="card">
      <h3>Download {fileName}</h3>
      <a href={filePath} download={fileName}>
        <button className="download-button">Download</button>
      </a>
    </div>
  );
};

export default FileDownloader;
