import { ITableItem } from "../TableItem/TableItem.interfaces";

export interface ISelector {
  onFilter: (type: keyof ITableItem, select: string) => void;
  type: keyof ITableItem;
  options: string[];
}
