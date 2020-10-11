import JoditSetup from "./JoditSetup";
import React, { memo } from "react";

const HTMLEditor = memo(({ onChange, uploadFiles, files, ...rest }) => {
  let hasFileUpload = uploadFiles && files ? { updateFiles } : undefined;

  function updateState(value) {
    onChange(value);
  }

  function updateFiles(values) {
    uploadFiles([...files, ...values]);
  }

  return <JoditSetup {...rest} updateState={updateState} {...hasFileUpload} />;
});

export default HTMLEditor;
