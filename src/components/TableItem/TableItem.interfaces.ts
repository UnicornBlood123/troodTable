export interface ITableItem {
  id: number;
  name: string;
  status: string;
  type: string;
  conditions: string;
  volume: number;
  roi: number;
  free: number;
  hedge: number;
}

export interface ITableItemComponent {
  item: ITableItem;
  onBuy: (id: string | number) => void;
}
