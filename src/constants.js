export const getConstants = (hasDarkMode, hasFileUpload) => {
  let textColor = hasDarkMode ? "#FFF" : "#000";
  let attachFiles = hasFileUpload ? "attachFile," : "";
  const IFRAME_STYLE = `html{margin:0px;}body{padding:10px;background:transparent;color:${textColor};position:relative;z-index: 2;user-select:auto;margin:0px;overflow:auto;}body:after{content:"";clear:both;display:block}table{width:100%;border-collapse:collapse} th,td{border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}p{margin-top:0;}`;
  let BUTTONS = `undo,redo,|,bold, italic,underline,strikethrough,|,font,fontsize,brush,|,indent,outdent,|,ul,ol,|,superscript,subscript,eraser,|,${attachFiles}table,|,fullsize,print`;
  let READ_ONLY_BUTTONS = "fullsize,print";
  return { IFRAME_STYLE, BUTTONS, READ_ONLY_BUTTONS };
};
