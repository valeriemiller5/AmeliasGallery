import React from "react";
import "./Container.css"

// Basic Boostrap container, className can be determined when used
export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);