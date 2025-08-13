import styled from "styled-components";
import { lighten } from "polished";

export const RowItems = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;

  .box {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;

    &.blue {
      background: ${({ theme }) => lighten(0.56, theme.colors.blue)};
      color: ${({ theme }) => theme.colors.blue};
    }

    &.green {
      background: ${({ theme }) => theme.colors.greenbg};
      color: ${({ theme }) => theme.colors.green};
    }

    &.red {
      background: ${({ theme }) => theme.colors.redbg};
      color: ${({ theme }) => theme.colors.red};
    }

    &.orange {
      background: ${({ theme }) => theme.colors.orangebg};
      color: ${({ theme }) => theme.colors.orange};
    }

    &.violet {
      background: ${({ theme }) => theme.colors.violetbg};
      color: ${({ theme }) => theme.colors.violet};
    }

    &.yellow {
      background: ${({ theme }) => theme.colors.yellowbg};
      color: ${({ theme }) => theme.colors.yellow};
    }

    &.blueitem {
      background: ${({ theme }) => theme.colors.blueitembg};
      color: ${({ theme }) => theme.colors.blueitem};
    }
  }
`;
