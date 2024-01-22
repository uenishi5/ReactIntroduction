import React from "react";
import { useState, useCallback } from "react";
import { ChildArea } from "./component/childArea";

export const App = () => {
  const [text, setText] = useState();

  const onChangeText = (event) => setText(event.target.value);

  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(!open);

  const onClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <div className="APP">
        <input value={text} onchange={onChangeText}></input>
        <br />
        <br />
        <button onClick={onClick}>表示</button>
        <ChildArea open={open} close={onClose}></ChildArea>
      </div>
    </>
  );
};
