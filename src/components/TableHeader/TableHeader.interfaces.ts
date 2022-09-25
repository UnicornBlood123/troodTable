import { RefObject } from "react";
import { ITableItem } from "../TableItem/TableItem.interfaces";

export interface ITableHeader {
  onFilter: (type: keyof ITableItem, select: string) => void;
  filters: { status: string[] };
  onSort: (type: keyof ITableItem) => void;
  downNameArrowRef: RefObject<HTMLSpanElement>;
  upNameArrowRef: RefObject<HTMLSpanElement>;
  upVolumeArrowRef: RefObject<HTMLSpanElement>;
  downVolumeArrowRef: RefObject<HTMLSpanElement>;
}
