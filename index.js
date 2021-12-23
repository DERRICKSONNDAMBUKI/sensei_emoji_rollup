import React from "react";
import ReactDom from "react-dom";

const App = () => {
  <svg width="960" height="500">
      <circle
        r="245"
        cx="480"
        cy="250"
        fill="yellow"
        stroke="black"
        stroke-width="10"
      ></circle>
      <circle r="50" cx="350" cy="180"></circle>
      <circle r="50" cx="600" cy="180"></circle>
    </svg>
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
