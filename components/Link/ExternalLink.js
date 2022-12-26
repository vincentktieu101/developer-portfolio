import React from "react";

function ExternalLink(props) {
  const { children, noStyles } = props;
  
  if (noStyles) {
    return (
      <a target="_blank" rel="noreferrer">{children}</a>
    )
  }

  return (
    <a target="_blank" rel="noreferrer" className="text-blue-800 relative before:duration-200 before:h-[1px] before:absolute before:bg-blue-800 before:w-0 before:left-[50%] before:top-[25px] hover:before:left-0 hover:before:w-full">
      {children}
    </a>
  );
}

export default ExternalLink;
