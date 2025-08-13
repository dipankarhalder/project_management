import { Loading } from "../icons";
import { StyledButton, SpinnerWrapper } from "./style";

export const Button = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  fontSize = 14,
  textColor = "white",
  bgColor = "black",
  padding = "8px 18px",
  borderSize = 1,
  borderColor = "black",
  height = "auto",
  radius = 8,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled || loading}
      $fontSize={fontSize}
      $textColor={textColor}
      $bgColor={bgColor}
      $padding={padding}
      $borderSize={borderSize}
      $borderColor={borderColor}
      $height={height}
      $radius={radius}
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
