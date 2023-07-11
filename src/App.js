import "./App.css";

import React from "react";

const About = React.lazy(() => import("./components/About"));
const Details = React.lazy(() => import("./components/Details"));

function App() {
  return (
    <div className="App">
      <h1 className="">
        <About />
        <Details />
      </h1>
    </div>
  );
}

export default App;
