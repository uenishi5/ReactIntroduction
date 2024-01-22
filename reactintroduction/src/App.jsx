import React from "react";
import { useState, useCallback } from "react";
import { ChildArea } from "./component/childArea";
import { CssModules } from "./component/CssModules";
import { InlineStyles } from "./component/InlineStyles";

export const App = () => {
  return (
    <>
      <InlineStyles></InlineStyles>
      <CssModules></CssModules>
    </>
  );
};
