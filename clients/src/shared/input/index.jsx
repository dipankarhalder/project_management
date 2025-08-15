import styled, { css } from "styled-components";

const sizeVariants = {
  small: "36px",
  medium: "42px",
};

const paddingVariants = {
  small: "0px 14px",
  medium: "0px 16px",
};

const fontVariants = {
  small: "13px",
  medium: "15px",
};

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: all 0.2s ease;
  color: #111111;
  background-color: #ffffff;

  ${({ $variant }) => css`
    height: ${sizeVariants[$variant]};
    padding: ${paddingVariants[$variant]};
    font-size: ${fontVariants[$variant]};
  `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  &:focus {
    border-color: #0d37a3;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #f5f5f5;
      color: #888888;
      cursor: not-allowed;
      border-color: #ddd;
    `}
`;

export const Input = ({
  variant = "medium",
  fullWidth = false,
  disabled = false,
  placeholder = "",
  value,
  onChange,
  type = "text",
  ...props
}) => {
  return (
    <StyledInput
      $variant={variant}
      $fullWidth={fullWidth}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      {...props}
    />
  );
};
