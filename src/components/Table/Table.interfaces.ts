import { ITableItem } from "../TableItem/TableItem.interfaces";
import { RefObject } from "react";

export interface ITable {
  items: ITableItem[];
  onFilter: (type: string, select: string) => void;
  filters: { status: string[] };
  onSort: (type: string) => void;
  onBuy: (id: string | number) => void;
  loading: boolean;
  downNameArrowRef: RefObject<HTMLSpanElement>;
  upNameArrowRef: RefObject<HTMLSpanElement>;
  upVolumeArrowRef: RefObject<HTMLSpanElement>;
  downVolumeArrowRef: RefObject<HTMLSpanElement>;
}
