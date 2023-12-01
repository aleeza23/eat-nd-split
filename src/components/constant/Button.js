import React from "react";

const Button = ({children, className,onClick}) => {
  const classes = `rounded border-0 ${className}`
  return <>
    <button onClick={onClick} className={classes}>{children}</button>
  </>;
};

export default Button;
