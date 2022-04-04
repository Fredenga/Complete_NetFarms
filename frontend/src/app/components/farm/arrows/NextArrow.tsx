import React from "react";

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#26b5bf" }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
