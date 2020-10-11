import HTMLEditor from "../src/HTMLEditor";
import ReactDOM from "react-dom";
import React, { useState } from "react";

export default function Test() {
  let [text, setText] = useState("");
  let [isDarkMode, setDarkMode] = useState(false);
  let [isReadOnly, setReadOnly] = useState(false);
  let [files, setFiles] = useState([]);

  console.log(files);
  console.log(text);

  return (
    <div>
      <HTMLEditor
        initialValue="Test"
        readOnly={isReadOnly}
        darkMode={isDarkMode}
        onChange={setText}
        uploadFiles={setFiles}
        files={files}
      />
      <div>
        <label style={{ color: "white" }}>
          Dark Mode:
          <input type="checkbox" defaultChecked={isDarkMode} onChange={({ target }) => setDarkMode(target.checked)} />
        </label>
      </div>
      <div>
        <label style={{ color: "white" }}>
          Read Only View:
          <input type="checkbox" checked={isReadOnly} onChange={({ target }) => setReadOnly(target.checked)} />
        </label>
      </div>
    </div>
  );
}

ReactDOM.render(<Test />, document.getElementById("root"));
