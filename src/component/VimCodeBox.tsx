import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { vim } from "@replit/codemirror-vim";

const VimCodeBox: React.FC = () => {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={dracula}
      extensions={[vim()]}
    />
  )
}

export default VimCodeBox;
