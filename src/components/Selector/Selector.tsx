import { Select } from "antd";
import React, { ReactElement } from "react";
import * as S from "./Selector.styles";
import { ISelector } from "./Selector.interfaces";

const { Option } = Select;

const Selector = ({ onFilter, options, type }: ISelector): ReactElement => {
  const handleChange = (value: unknown) => {
    onFilter(type, value as string);
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
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </S.StyledSelect>
  );
};

export default Selector;
