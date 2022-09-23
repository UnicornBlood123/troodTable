import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const StyledToken = styled(Link)<{ color: string }>`
  color: black;
  display: grid;
  font-weight: bold;
  background-color: ${(props): string =>
    props.theme.colors?.[props.color] || "white"};
  margin: 10px;
  padding: 10px;
  align-items: center;
  grid-template-columns: 0.35fr repeat(2, 3.5fr) repeat(2, 2.5fr) repeat(
      2,
      1.5fr
    ) 2fr 1.5fr;
  &:hover {
    color: black;
  }
`;

export const Status = styled.div<{ color: string }>`
  background-color: ${(props) => props.color || "white"};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const StyledButton = styled(Button)`
  font-weight: bold;
  border-radius: 6px;
  width: fit-content;
  color: ${({ theme: { colors } }): string => colors.purple || "blue"};
  border-color: ${({ theme: { colors } }): string => colors.purple || "white"};
  background-color: transparent;
  &:active,
  :focus {
    background-color: transparent;
    color: ${({ theme: { colors } }): string => colors.purple || "white"};
    border-color: ${({ theme: { colors } }): string => colors.purple || "blue"};
  }
  &:hover {
    color: white;
    background-color: ${({ theme: { colors } }): string =>
      colors.purple || "blue"};
    border-color: ${({ theme: { colors } }): string => colors.purple || "blue"};
  }
`;
