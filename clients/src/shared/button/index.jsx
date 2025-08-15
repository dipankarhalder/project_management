import styled, { css, keyframes } from "styled-components";
import { Loading } from "../icons";

const sizeVariants = {
  small: "36px",
  medium: "42px",
};

const paddingVariants = {
  small: "0px 20px",
  medium: "0px 30px",
};

const loadingPaddingVariants = {
  small: "0px 22px 0px 18px",
  medium: "0px 30px 0px 26px",
};

const fontVariants = {
  small: "13px",
  medium: "15px",
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
  transition: all 0.2s ease;

  ${({ $variant, $loading }) => css`
    height: ${sizeVariants[$variant]};
    padding: ${$loading
      ? loadingPaddingVariants[$variant]
      : paddingVariants[$variant]};
    font-size: ${fontVariants[$variant]};
  `}

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #dddddd !important;
      color: #000000 !important;
      cursor: not-allowed;
      opacity: 0.6;
      transform: none;
    `}
`;

const SpinnerWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${spin} 1s linear infinite;
  }
`;

const SpinnerText = styled.p`
  height: 18px;
  line-height: 18px;

  ${({ $variant }) => css`
    font-size: ${fontVariants[$variant]};
  `}
`;

export const Button = ({
  children,
  variant = "medium",
  bgColor = "#007bff",
  textColor = "#ffffff",
  loading = false,
  disabled = false,
  onClick,
}) => {
  const isDisabled = disabled || loading;

  return (
    <StyledButton
      $variant={variant}
      $bgColor={bgColor}
      $textColor={textColor}
      $loading={loading}
      onClick={onClick}
      disabled={isDisabled}
    >
      {loading ? (
        <SpinnerWrapper>
          <Loading />
          <SpinnerText $variant={variant}>Please wait...</SpinnerText>
        </SpinnerWrapper>
      ) : (
        children
      )}
    </StyledButton>
  );
};
