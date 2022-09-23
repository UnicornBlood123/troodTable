import { RefObject } from "react";

export interface ITableHeader {
  onFilter: (type: string, select: string) => void;
  filters: { status: string[] };
  onSort: (type: string) => void;
  downNameArrowRef: RefObject<HTMLSpanElement>;
  upNameArrowRef: RefObject<HTMLSpanElement>;
  upVolumeArrowRef: RefObject<HTMLSpanElement>;
  downVolumeArrowRef: RefObject<HTMLSpanElement>;
}
