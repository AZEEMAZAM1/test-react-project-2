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
        Download {fileName}
      </button>
    </a>
  );
};

export default FileDownloader;
