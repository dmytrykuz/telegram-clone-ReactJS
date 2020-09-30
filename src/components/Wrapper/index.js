import React from "react";
import classNames from "classnames";

import "./Wrapper.sass";

const Wrapper = ({ children, className }) => {
  return <div className={classNames("wrapper", className)}>{children}</div>;
};

export default Wrapper;
