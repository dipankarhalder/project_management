import styled, { keyframes, css } from "styled-components";

const typeColors = {
  success: {
    text: "green",
  },
  info: {
    text: "blue",
  },
  warning: {
    text: "orange",
  },
  error: {
    text: "red",
  },
};

const slideIn = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideOut = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
`;

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  pointer-events: none;

  ${({ $show }) =>
    $show
      ? css`
          animation: ${slideIn} 0.4s ease forwards;
          pointer-events: auto;
        `
      : css`
          animation: ${slideOut} 0.4s ease forwards;
        `}
`;

export const ToastCover = styled.div`
  max-width: 460px;
  padding: 12px 40px 13px 14px;
  border-radius: 6px;
  box-shadow: 0px 0px 14px rgba(123, 152, 172, 0.32);
  position: relative;

  ${({ type, theme }) => {
    const textColor = typeColors[type]?.text || "info";

    return css`
      border-left: 3px solid ${theme.colors[textColor]};
      color: ${theme.colors[textColor]};

      h5 {
        color: ${theme.colors[textColor]};
      }
    `;
  }}
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h5 {
    font-size: 14px;
    margin: 0;
  }

  & > p {
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  top: 6px;
  right: 6px;
  border: none;
  width: 26px;
  height: 26px;
  display: flex;
  position: absolute;
  background: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > svg {
    display: flex;
    width: 16px;
    height: 16px;
    opacity: 0.4;
  }
`;
