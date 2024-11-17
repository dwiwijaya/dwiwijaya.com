import React from "react";

const PageHeading2 = ({ title, description, icon }) => {
  return (
    <>
      <h2 className="relative font-bold text-3xl text-title">
        {title}
      </h2>
      <p className="leading-5 text-subtext">
        {description}
      </p>
      <hr className="hr" />
    </>
  );
};

export default PageHeading2;
