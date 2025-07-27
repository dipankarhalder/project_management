import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledButton = styled.button`
  padding: 5px 14px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  transition: background 0.3s ease;

  background-color: ${(props) =>
    props.$bgColor ||
    (props.$variant === "outline" ? "transparent" : props.theme.colors.black)};

  color: ${(props) =>
    props.$textColor ||
    (props.$variant === "secondary"
      ? props.theme.colors.btntext
      : props.$variant === "outline"
      ? props.theme.colors.black
      : "white")};

  ${(props) =>
    props.$variant === "outline" &&
    css`
      padding: 4px 14px;
      border: 1px solid ${props.$borderColor || props.theme.colors.black};
    `}

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    cursor: not-allowed;
  }
`;

export const SpinnerWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    width: 16px;
    height: 16px;
    animation: ${spin} 1s linear infinite;
  }

  p {
    height: 18px;
    line-height: 18px;
    font-size: 13px;
    font-weight: 600;
  }
`;
