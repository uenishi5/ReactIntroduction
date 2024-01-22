/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: 2px solid #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
    `;
  const titleStyle = css`
    margin: 0px;
    color: #3d84a8;
  `;
  <>
    <div css={containerStyle}>
      <p css={titleStyle}>- StyledJSX -</p>
      <Button>FIGHT!!</Button>
    </div>
  </>;
};

const Button = styled.Button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: red;
    color: #fff;
    cursor: pointer;
  }
`;
