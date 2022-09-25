import { ITableItem } from "../TableItem/TableItem.interfaces";

export interface ISearchField {
  onFilter: (type: keyof ITableItem, select: string) => void;
  type: keyof ITableItem;
}
