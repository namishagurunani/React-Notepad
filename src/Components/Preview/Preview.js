import React from "react";
import "./Preview.css";
import Markdown from "react-markdown";

const Preview = (props) => {
  return (
    <div className="previewSection">
      <Markdown>{props.markdown}</Markdown>
    </div>
  );
};

export default Preview;
