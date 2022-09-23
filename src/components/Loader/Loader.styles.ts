import styled from "styled-components";
import { Spin } from "antd";

export const StyledLoader = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    font-size: 30px;
  }
`;
