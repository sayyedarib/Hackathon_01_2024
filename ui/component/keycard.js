import React from "react";

const keycard = ({ src, alt, title }) => {
  return (
    <div>
      <img className="w-72 m-14" src={src} alt={alt} />
    </div>
  );
};

export default keycard;
