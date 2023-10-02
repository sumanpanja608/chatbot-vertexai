import React from "react";

const HighlightText = ({ content, color }) => {
  return <span className={`text-[${color}]`}>{content}</span>;
};

export default HighlightText;
