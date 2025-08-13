import { css } from "styled-components";

export const center = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const icons = (size) => css`
  width: ${size}px;
  height: ${size}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
