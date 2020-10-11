import React from "react";
import { getConstants } from "./constants";
import JoditEditor from "jodit-react";
import "jodit";

export default function JoditSetup(props) {
  let { IFRAME_STYLE, BUTTONS, READ_ONLY_BUTTONS } = getConstants(props.darkMode, props.updateFiles);
  let {
    darkMode = false,
    readOnly = false,
    height = 600,
    customToolbar = BUTTONS,
    initialValue = "",
    updateFiles,
    updateState,
    overrides,
  } = props;

  let config = {
    buttons: readOnly ? READ_ONLY_BUTTONS : customToolbar,
    buttonsMD: readOnly ? READ_ONLY_BUTTONS : customToolbar,
    buttonsSM: readOnly ? READ_ONLY_BUTTONS : customToolbar,
    buttonsXS: readOnly ? READ_ONLY_BUTTONS : customToolbar,
    enableDragAndDropFileToEditor: false,
    readonly: readOnly,
    iframe: true,
    theme: darkMode ? "dark" : undefined,
    iframeStyle: IFRAME_STYLE,
    showPlaceholder: false,
    image: { openOnDblClick: false },
    toolbarButtonSize: "small",
    minWidth: "100%",
    tabIndex: 0,
    height: height,
    minHeight: height,
    allowResizeY: false,
    beautify: false,
    beautifyHTMLCDNUrlsJS: [],
    sourceEditorCDNUrls: [],
    showCharsCounter: !readOnly,
    showWordsCounter: !readOnly,
    showXPathInStatusbar: !readOnly,
    controls: {
      fullsize: { exec: executeToggle, isActive: updateToggle, tooltip: "Full Screen" },
      attachFile: {
        exec: attachFiles,
        icon: "upload",
        tooltip: "Attach Files",
      },
    },
    events: { paste: onPaste, drop: onDrop },
    ...overrides,
  };

  function executeToggle(e) {
    e.toggleFullSize();
  }

  function updateToggle(e) {
    document.getElementsByClassName("jodit-wysiwyg_iframe")[0].contentWindow.document.onkeydown = function (evt) {
      let isEscape = false;
      if ("key" in evt && e.__isFullSize) isEscape = evt.key === "Escape" || evt.key === "Esc";
      else isEscape = evt.keyCode === 27;
      if (isEscape && e.__isFullSize) executeToggle(e);
    };
    return e.__isFullSize;
  }

  function onPaste(e) {
    let pastedItems = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (let index in pastedItems) {
      if (pastedItems[index].kind === "file" && pastedItems.length < 4)
        new FileReader().readAsDataURL(pastedItems[index].getAsFile());
    }
  }

  function onDrop(e) {
    e.preventDefault();
    if (updateFiles) updateFiles(Array.from(e.dataTransfer.files));
  }

  function attachFiles() {
    let input = document.createElement("input");
    input.type = "file";
    let attribute = document.createAttribute("multiple");
    attribute.value = "multiple";
    input.setAttributeNode(attribute);
    input.onchange = ({ target }) => updateFiles(Object.keys(target.files).map((key) => target.files[key]));
    input.click();
  }

  return <JoditEditor config={config} value={initialValue} onChange={updateState} />;
}
