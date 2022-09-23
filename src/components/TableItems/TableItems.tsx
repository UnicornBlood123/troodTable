import React, { ReactElement } from "react";
import TableItem from "../TableItem/TableItem";
import Loader from "../Loader/Loader";
import { ITableItems } from "./TableItems.interfaces";
import { Empty } from "antd";

const TableItems = (props: ITableItems): ReactElement => {
  return (
    <>
      {props.loading ? (
        <Loader />
      ) : props.items.length ? (
        props.items.map((item) => (
          <TableItem key={item.id} onBuy={props.onBuy} item={item} />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={"Список пуст"}
        />
      )}
    </>
  );
};

export default TableItems;
