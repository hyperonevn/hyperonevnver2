import "./index.css";
import React, { useState } from "react";
import { render } from "react-dom";
import { App } from "./App";
import Intro from "./Intro";

const Root = () => {
  const [showApp, setShowApp] = useState(false);
  return (
    <>
      {!showApp && <Intro onFinish={() => setShowApp(true)} />}
      {showApp && <App />}
    </>
  );
};

render(<Root />, document.getElementById("root"));
