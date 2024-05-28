import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

const anotherUser="userwentwrong"

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "Click here to view",
//   anotherUser
// };

const anotherElement = (
  <a href="http://google.com" target="_blank">
    click me
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "http://google.com", target: "_blank" },
  "Want to go ?",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    // <MyApp />
    // <App/>
  // </React.StrictMode>
  // ReactElement
  // anotherElement
  reactElement
);
