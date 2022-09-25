import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { orderBy } from "lodash";
import { Table as BasicTable } from "../../components";
import { getData } from "../../api/tableItemsLoader";
import { ITableItem } from "../../components/TableItem/TableItem.interfaces";

const filters = {
  status: ["all", "green", "yellow", "red"],
};

const Table = (): ReactElement => {
  const [data, setData] = useState<ITableItem[]>([]);
  const [filteredData, setFilteredData] = useState<ITableItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dataRef = useRef<ITableItem[]>(data);
  const sortType = useRef<number>(0);
  const downNameArrowRef = useRef<HTMLSpanElement>(null);
  const upNameArrowRef = useRef<HTMLSpanElement>(null);
  const downVolumeArrowRef = useRef<HTMLSpanElement>(null);
  const upVolumeArrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  const onBuy = useCallback((id: string | number): void => {
    alert("Buy: " + id);
  }, []);

  const onFilter = useCallback(
    (type: keyof ITableItem, select: string): void => {
      setFilteredData(
        dataRef.current.filter(
          (element) =>
            element?.[type] === select ||
            select === "all" ||
            element?.[type].toString().toLowerCase().includes(select)
        )
      );
    },
    []
  );

  const onSort = useCallback((type: keyof ITableItem): void => {
    if (sortType.current === 2) {
      sortType.current = 0;
    } else {
      sortType.current++;
    }
    if (sortType.current === 1) {
      if (type === "name") {
        downNameArrowRef.current?.classList.add("active");
      } else {
        downVolumeArrowRef.current?.classList.add("active");
      }
      setFilteredData(orderBy([...dataRef.current], [type], ["asc"]));
    }
    if (sortType.current === 2) {
      if (type === "name") {
        downNameArrowRef.current?.classList.remove("active");
        upNameArrowRef.current?.classList.add("active");
      } else {
        downVolumeArrowRef.current?.classList.remove("active");
        upVolumeArrowRef.current?.classList.add("active");
      }

      setFilteredData(orderBy([...dataRef.current], [type], ["desc"]));
    }
    if (sortType.current === 0) {
      upNameArrowRef.current?.classList.remove("active");
      downNameArrowRef.current?.classList.remove("active");
      downVolumeArrowRef.current?.classList.remove("active");
      upVolumeArrowRef.current?.classList.remove("active");
      setFilteredData([...dataRef.current]);
    }
  }, []);

  useEffect(() => {
    getData().then((result) => {
      setLoading(false);
      setData(result);
      setFilteredData(result);
    });
  }, []);
  return (
    <BasicTable
      items={filteredData}
      onFilter={onFilter}
      filters={filters}
      onBuy={onBuy}
      onSort={onSort}
      loading={loading}
      downNameArrowRef={downNameArrowRef}
      upNameArrowRef={upNameArrowRef}
      upVolumeArrowRef={upVolumeArrowRef}
      downVolumeArrowRef={downVolumeArrowRef}
    />
  );
};

export default Table;
