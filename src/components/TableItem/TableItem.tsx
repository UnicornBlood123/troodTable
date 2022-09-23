import React, { ReactElement, MouseEvent } from "react";
import * as S from "./Table.styles";
import { ITableItemComponent } from "./TableItem.interfaces";

const TableItem = (props: ITableItemComponent): ReactElement => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    props.onBuy(props.item.id);
  };

  return (
    <S.StyledToken to={"/project/" + props.item.id} color={props.item.status}>
      <S.Status color={props.item.status} />
      <div>{props.item.name}</div>
      <div>{props.item.type}</div>
      <div>{props.item.conditions}</div>
      <div>{"$" + Number(props.item.volume).toLocaleString("ru-RU")}</div>
      <div>{props.item.roi + "%"}</div>
      <div>{props.item.free}</div>
      <div>{props.item.hedge + "%"}</div>
      <S.StyledButton onClick={handleClick}>Buy</S.StyledButton>
    </S.StyledToken>
  );
};

export default TableItem;
