import { useState, useEffect } from "react";

import "./App.css";
import { loadConfigFromFile } from "vite";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then((response) => response.json())
    //   .then((json) => setItems(json));

    console.log("resource changed");

    return () => {
      console.log("return from resource change");
    };
  }, [resourceType]);

  return (
    <>
      <div className="btns">
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h1> {resourceType} </h1>
      {/* {items.map((item, index) => {
        return <pre key={index}> {JSON.stringify(item)} </pre>;
      })} */}
    </>
  );

  //  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // return (
  //   <>
  //     <div> {windowWidth} </div>
  //   </>
  // );
}

export default App;
