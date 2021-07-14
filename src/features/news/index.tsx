import * as React from "react";
import {
  DataGrid,
} from "@material-ui/data-grid";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getDefaultNews, getNewsArticle } from "./slice";
import { columns } from "./options";

export default function Index({ currentPage, search, onRowClick }: any) {
  const newsData = useAppSelector(getNewsArticle);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);

  const loadContent = () => {
    dispatch(getDefaultNews(null));
  };
  React.useEffect(() => {
    loadContent();
  }, []);

  React.useEffect(() => {
    (async () => {
      if ((currentPage < 1 && !search) || loading) return;
      setLoading(true);
      dispatch(
        getDefaultNews({
          q: search || "bitcoin",
          page: currentPage + 1,
          pageSize: 10,
        })
      );
      setTimeout(() => setLoading(false), 1000);
    })();
  }, [currentPage, search]);

  return (
    <DataGrid
      autoHeight
      rows={newsData}
      columns={columns}
      pageSize={10}
      page={currentPage}
      rowCount={100}
      rowHeight={80}
      paginationMode="server"
      pagination
      loading={loading}
      hideFooter
      onRowClick={onRowClick}
    />
  );
}
