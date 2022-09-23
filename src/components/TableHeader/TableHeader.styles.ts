import styled from "styled-components";

export const StyledTableHeader = styled.div`
  display: grid;
  margin: 0 10px;
  padding: 0 10px;
  align-items: center;
  grid-template-columns: 3.85fr 3.5fr repeat(2, 2.5fr) repeat(2, 1.5fr) 2fr 1.5fr;
  div:nth-child(7) {
    grid-column: 7 / 9;
  }
`;

export const FlexHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexSortHeader = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const FlexIconsHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  svg {
    font-size: 10px;
    fill: ${({ theme: { colors } }): string => colors.gray || "grey"};
  }
  span.active {
    svg {
      fill: black;
    }
  }
`;
