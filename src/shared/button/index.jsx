import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 5px 14px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  transition: background 0.3s ease;

  background-color: ${(props) =>
    props.$bgColor ||
    (props.$variant === "outline"
      ? "transparent"
      : props.theme.colors.secured)};
  color: ${(props) =>
    props.$textColor ||
    (props.$variant === "secondary"
      ? props.theme.colors.btntext
      : props.$variant === "outline"
      ? props.theme.colors.secured
      : "white")};

  ${(props) =>
    props.$variant === "outline" &&
    css`
      padding: 4px 14px;
      border: 1px solid ${props.$borderColor || props.theme.colors.secured};
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

export const Button = ({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  bgColor,
  textColor,
  borderColor,
}) => {
  return (
    <StyledButton
      $variant={variant}
      onClick={onClick}
      disabled={disabled}
      $bgColor={bgColor}
      $textColor={textColor}
      $borderColor={borderColor}
    >
      {children}
    </StyledButton>
  );
};
