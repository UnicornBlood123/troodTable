import React from "react";
import * as S from "./Table.styles";
import TableHeader from "../TableHeader/TableHeader";
import TableItems from "../TableItems/TableItems";
import { ITable } from "./Table.interfaces";

const Table = (props: ITable) => {
  return (
    <S.Table>
      <TableHeader
        onFilter={props.onFilter}
        filters={props.filters}
        downNameArrowRef={props.downNameArrowRef}
        upNameArrowRef={props.upNameArrowRef}
        upVolumeArrowRef={props.upVolumeArrowRef}
        downVolumeArrowRef={props.downVolumeArrowRef}
        onSort={props.onSort}
      />
      <TableItems
        items={props.items}
        onBuy={props.onBuy}
        loading={props.loading}
      />
    </S.Table>
  );
};

export default Table;
