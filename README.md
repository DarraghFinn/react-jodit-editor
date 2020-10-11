# React-Jodit-Editor

React WYSIWYG Editor Which Uses Jodit & Jodit-React In A Simplified Component. Offers both predefined and customizable features to easily include in your project with little effort.
Features Include:

- Copy & Pasting HTML content/images to editor.
- Editor is by default, an iframe editor so content will automatically get sanitized and stay inside editor.
- Option to manually upload files from local storage and stored in state to use.
- Option to Drag and drop files on editor which will also add to the stored state for files.
- Fullsize option with close on escape key.

<b>Demo:</b> https://react-jodit-editor.netlify.app/

## Installation

```bash
npm install react-jodit-editor --save
```

## Props

| Prop            | Description                                                                                                                    | Type     | Default                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `initialValue`  | The initial markdown string                                                                                                    | string   | ""                                                                                                                                                                                          |
| `darkMode`      | Changes theme of editor to dark mode                                                                                           | boolean  | false                                                                                                                                                                                       |
| `readOnly`      | Turns editor into a viewer                                                                                                     | boolean  | false                                                                                                                                                                                       |
| `height`        | Height of the editor, measure in pixels by default                                                                             | integer  | 600                                                                                                                                                                                         |
| `customToolbar` | Toolbar options on editor                                                                                                      | string   | "undo,redo,&#124;,bold,italic,underline,strikethrough,&#124;,font,fontsize,brush,&#124;,indent,outdent,&#124;,ul,ol,&#124;,superscript,subscript,eraser,&#124;,table,&#124;,fullsize,print" |
| `overrides`     | Can overwrite any prop in the jodit config see https://xdsoft.net/jodit/doc/options/                                           | object   | undefined                                                                                                                                                                                   |
| `onChange`      | Change Event For Editor Text                                                                                                   | function |                                                                                                                                                                                             |
| `uploadFiles`   | Files can be attached by dropping on editor or manually upload from local storage                                              | function |                                                                                                                                                                                             |
| `files`         | State for files to keep track of what is dropped and uploaded to editor can be attached by dropping on editor or manual upload | array    | undefined                                                                                                                                                                                   |

## Example

```jsx
import HTMLEditor from "react-jodit-editor";
import ReactDOM from "react-dom";
import React, { useState } from "react";

export default function Test() {
  let [text, setText] = useState("");
  let [files, setFiles] = useState([]);

  console.log(files);
  console.log(text);

  return <HTMLEditor initialValue="Test" onChange={setText} uploadFiles={setFiles} files={files} />;
}

ReactDOM.render(<Test />, document.getElementById("root"));
```
