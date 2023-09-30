import React from "react";

const HighlightText = ({ content = "test value", color }) => {
  return <span className={`text-[${color}]`}>{content}</span>;
};

export default HighlightText;
