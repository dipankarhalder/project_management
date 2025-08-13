import styled, { keyframes } from "styled-components";
import { darken } from "polished";
import { center, icons } from "../../styles/mixin";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledButton = styled.button`
  font-size: ${(props) => props.$fontSize}px;
  color: ${(props) => props.$textColor};
  background: ${(props) => props.$bgColor};
  border-radius: ${(props) => props.$radius}px;
  padding: ${(props) => props.$padding};
  border: ${(props) => `${props.$borderSize}px solid ${props.$borderColor}`};
  height: ${(props) => props.$height};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    border: ${(props) =>
      `${props.$borderSize}px solid ${darken(0.06, props.$borderColor)}`};
    background: ${(props) => darken(0.06, props.$bgColor)};
    transition: 0.5s;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => darken(0.7, theme.colors.border)};
    cursor: not-allowed;
  }
`;

export const SpinnerWrapper = styled.span`
  ${center()}
  gap: 6px;

  svg {
    ${icons(16)}
    animation: ${spin} 1s linear infinite;
  }

  p {
    font-size: ${(props) => props.$fontSize}px;
    height: 18px;
    line-height: 18px;
  }
`;
