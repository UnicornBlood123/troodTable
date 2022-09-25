import React, { memo, ReactElement } from "react";
import * as S from "./TableHeader.styles";
import Selector from "../Selector/Selector";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons/lib";
import SearchField from "../SearchField/SearchField";
import { ITableHeader } from "./TableHeader.interfaces";
import { ITableItem } from "../TableItem/TableItem.interfaces";

const TableHeader = (props: ITableHeader): ReactElement => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    props.onSort(event.currentTarget.dataset.type as keyof ITableItem);
  };

  return (
    <S.StyledTableHeader>
      <S.FlexHeader>
        <Selector
          onFilter={props.onFilter}
          type={"status"}
          options={props.filters.status}
        />
        <S.FlexSortHeader data-type={"name"} onClick={handleClick}>
          <span>Project</span>
          <S.FlexIconsHeader>
            <CaretUpFilled ref={props.upNameArrowRef} />
            <CaretDownFilled ref={props.downNameArrowRef} />
          </S.FlexIconsHeader>
        </S.FlexSortHeader>
      </S.FlexHeader>
      <S.FlexHeader>
        <SearchField onFilter={props.onFilter} type={"type"} />
        <span>TokenType</span>
      </S.FlexHeader>
      <S.FlexHeader>
        <span> Conditions</span>
      </S.FlexHeader>
      <S.FlexHeader>
        <S.FlexSortHeader data-type={"volume"} onClick={handleClick}>
          <span>Volume</span>
          <S.FlexIconsHeader>
            <CaretUpFilled ref={props.upVolumeArrowRef} />
            <CaretDownFilled ref={props.downVolumeArrowRef} />
          </S.FlexIconsHeader>
        </S.FlexSortHeader>
      </S.FlexHeader>
      <S.FlexHeader>
        <span>ROI</span>
      </S.FlexHeader>
      <S.FlexHeader>
        <span>Free float</span>
      </S.FlexHeader>
      <div>
        <span>Insurance hedge</span>
      </div>
    </S.StyledTableHeader>
  );
};

export default memo(TableHeader);
