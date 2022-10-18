import { useCallback, useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import { Interaction } from "./components/Interaction";
import { Sidebar } from "./components/Sidebar";
import { Item, Node } from "./components/Node";
import { Wrapper } from "./components/Wrapper";

const initialNodes = {
  1: {
    id: 1,
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, pariatur.`,
  },
  2: {
    id: 2,
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, pariatur.`,
  },
  3: {
    id: 3,
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, pariatur.`,
  },
  4: {
    id: 4,
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, pariatur.`,
  },
  5: {
    id: 5,
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, pariatur.`,
  },
  6: {
    id: 6,
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, pariatur.`,
  },
};
function App() {
  const [nodes, setNodes] = useState(initialNodes);
  
  const memoizedList = useMemo(() => {
    console.log("Memoizando");
    return Object.keys(nodes).map((key) => nodes[key]);
  }, [nodes]);

  // useEffect(() => {
  //   console.log("effect");
  //   return () => {
  //     console.log("cleanup");
  //   };
  // });
  // useEffect(() => {
  //   console.log("effect NODES");
  //   return () => {
  //     console.log("cleanup NODES");
  //   };
  // }, [nodes]);

  // useEffect(() => {
  //   console.log("effect memoizedList");
  //   return () => {
  //     console.log("cleanup memoizedList");
  //   };
  // }, [memoizedList]);
  return (
    <div
      className="w-full h-[] bg-black flex gap-9 justify-around"
      style={{ height: "100vh" }}
    >
      <Sidebar>
        {
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, repellendus facilis expedita a eaque provident soluta totam, commodi consectetur modi doloribus incidunt nesciunt iste sed excepturi aliquam iure laboriosam eum!"
        }
      </Sidebar>
      <Wrapper>
        <div className="flex flex-col gap-5 items-center">
          {memoizedList.map((node) => (
            <Node key={node.id} id={node.id} content={`${node.id} - ${node.content}`}></Node>
          ))}
        </div>
      </Wrapper>
      {/* <Interaction hoverd={hovered}>
        <div className="flex flex-col gap-5 items-center">
          {memoizedList
            .map((node) => (
              <Node
                key={node.id}
                content={`${node.id} - ${node.content}`}
              ></Node>
            ))}
        </div>
      </Interaction> */}
      {/* <div className="flex flex-col gap-5 items-center bg-blue-900">
        {memoizedList
          .map((node) => (
            <Node key={node.id} content={`${node.id} - ${node.content}`}></Node>
            // <Item  key={node.id} content={`${node.id} - ${node.content}`}/>
          ))}
      </div> */}
    </div>
  );
}

export default App;
