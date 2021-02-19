import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [parentUrl, setParentUrl] = useState(
    "http://127.0.0.1:5500/index.html"
  );

  function onclick() {
    const testObj = [
      { id: 123456, quantity: 2 },
      { id: 78910, quantity: 1 },
    ];

    var parent = window.parent;
    parent.postMessage(JSON.stringify(testObj), parentUrl);
    console.log("send date parent page");
  }

  return (
    <>
      <div>
        <div className="title"> Test "postMessage" Iframe </div>

        <div>
          <label className="box_Title">Parent window url</label>
          <div>
            <input
              className="input"
              type="text"
              name="parent/url"
              onChange={(event) => setParentUrl(event.target.value)}
              value={parentUrl}
            ></input>
          </div>
        </div>

        <br />
        <button className="btn" onClick={() => onclick()}>
          Send Data
        </button>
      </div>
    </>
  );
}

export default App;
