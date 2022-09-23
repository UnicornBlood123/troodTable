import { Select } from "antd";
import React, { ReactElement } from "react";
import * as S from "./Selector.styles";

const { Option } = Select;

const Selector = ({ onFilter, options, type }: any): ReactElement => {
  const handleChange = (value: unknown) => {
    onFilter(type, value);
  };

  return (
    <S.StyledSelect
      bordered={false}
      dropdownMatchSelectWidth={false}
      defaultValue="all"
      showArrow={false}
      onChange={handleChange}
      size={"small"}
    >
      {options.map((option: any) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </S.StyledSelect>
  );
};

export default Selector;
