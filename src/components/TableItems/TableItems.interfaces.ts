import { ITableItem } from "../TableItem/TableItem.interfaces";

export interface ITableItems {
  items: ITableItem[];
  onBuy: (id: string | number) => void;
  loading: boolean;
}
