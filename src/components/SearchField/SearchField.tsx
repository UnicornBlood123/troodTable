import React, { ChangeEvent, ReactElement } from "react";
import * as S from "./SearchField.styles";
import { ISearchField } from "./SearchField.interfaces";

const SearchField = ({ onFilter, type }: ISearchField): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onFilter(type, event.target.value.toLowerCase());
  };

  return (
    <S.StyledSelect
      bordered={false}
      onChange={handleChange}
      size={"small"}
      placeholder="all"
    />
  );
};

export default SearchField;
