import React, { useCallback, useState } from "react";
import { Interaction } from "./Interaction";

export const Wrapper = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  const mapContentMouseOver = (event) => {
    if (
      // event.target.tagName.toLowerCase() === "input" || // CHECK <-- this was commented
      // event.target.tagName.toLowerCase() === "textarea" ||  // CHECK <-- this was commented
      // event.target.className.includes("EditableTextarea") ||
      // event.target.className.includes("HyperEditor") ||
      // event.target.className.includes("CodeMirror") ||
      // event.target.className.includes("cm-math") ||
      // event.target.parentNode.className.includes("CodeMirror")
      // event.target.className === "ClusterSection" || // CHECK <-- this was uncommented
      event.target?.classList.contains("node")
      // event.currentTarget.id !== "MapContent" // CHECK <-- this was uncommented
    ) {
      setHovered(true);
      console.log("true");
    } else {
      setHovered(false);
      console.log("false");
    }
  };
  return (
    <div
      className="w-full h-[] bg-black flex gap-9 justify-around"
      style={{ height: "100vh" }}
      onMouseOver={mapContentMouseOver}
    >
      <Interaction hoverd={hovered}>{children}</Interaction>
    </div>
  );
};
