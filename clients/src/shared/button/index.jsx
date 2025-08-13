import { Loading } from "../icons";
import { StyledButton, SpinnerWrapper } from "./style";

export const Button = ({
  children,
  variant = "primary",
  onClick,
  bgColor,
  textColor,
  borderColor,
  disabled = false,
  loading = false,
}) => {
  return (
    <StyledButton
      $variant={variant}
      onClick={onClick}
      disabled={disabled || loading}
      $bgColor={bgColor}
      $textColor={textColor}
      $borderColor={borderColor}
    >
      {loading ? (
        <SpinnerWrapper>
          <Loading />
          <p>Please wait...</p>
        </SpinnerWrapper>
      ) : (
        children
      )}
    </StyledButton>
  );
};
