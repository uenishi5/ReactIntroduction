import React from "react";
import { useState, useCallback } from "react";
import { ChildArea } from "./component/childArea";
import { CssModules } from "./component/CssModules";
import { Emotion } from "./component/Emotion";
import { InlineStyles } from "./component/InlineStyles";
import { StyledComponents } from "./component/StyledComponents";
import { StyledJSX } from "./component/StyledJsx";

export const App = () => {
  return (
    <>
      <InlineStyles></InlineStyles>
      <CssModules></CssModules>
      <StyledJSX></StyledJSX>
      <StyledComponents></StyledComponents>
      <Emotion></Emotion>
    </>
  );
};
