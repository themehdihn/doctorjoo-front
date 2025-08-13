import React from "react";
import "./Empty.css";

function Empty({resourceName}) {
  return <div className="empty">هنوز {resourceName} ای موجود نیست</div>;
}

export default Empty;
