import React from "react";

export const Interaction = ({ children, hovered }) => {
  return <div className="text-2xl bg-black">
    {hovered}
    {children}
    </div>;
};
