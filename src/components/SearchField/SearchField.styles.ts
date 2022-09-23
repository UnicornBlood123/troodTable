import styled from "styled-components";
import Search from "antd/es/input/Search";

export const StyledSelect = styled(Search)`
  background: ${({ theme: { colors } }): string => colors.gray || "grey"};
  border-radius: 4px;
  width: 60px;
  input,
  input::placeholder {
    color: white;
  }
  button {
    display: none;
  }
  span.ant-input-group-addon {
    display: none;
  }
`;
