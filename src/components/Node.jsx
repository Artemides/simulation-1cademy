import React, { useEffect } from "react";

export const Node = ({ id, content }) => {
  useEffect(() => {
    console.log("RENDER  N ", id);
    return () => {
      console.log("Clean up ", id);
    };
  }, []);
  return <div className="w-[400px] bg-slate-500 p-10 node">{content}</div>;
};

export const Item = React.memo(({ content }) => {
  return (
    <div className="w-[400px] bg-slate-500 p-10 node">
      {content}
      <input type="text" />
    </div>
  );
});

export const memoizedNode = React.memo(Node, (prev, next) => {
  if (prev.content === next.content) return true;
  return false;
});
