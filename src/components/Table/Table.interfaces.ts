import { ITableItem } from "../TableItem/TableItem.interfaces";
import { RefObject } from "react";

export interface ITable {
  items: ITableItem[];
  onFilter: (type: keyof ITableItem, select: string) => void;
  filters: { status: string[] };
  onSort: (type: keyof ITableItem) => void;
  onBuy: (id: string | number) => void;
  loading: boolean;
  downNameArrowRef: RefObject<HTMLSpanElement>;
  upNameArrowRef: RefObject<HTMLSpanElement>;
  upVolumeArrowRef: RefObject<HTMLSpanElement>;
  downVolumeArrowRef: RefObject<HTMLSpanElement>;
}
