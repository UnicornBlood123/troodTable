import { Select } from "antd";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  background: ${({ theme: { colors } }): string => colors.gray || "grey"};
  border-radius: 4px;
  color: white;
`;
