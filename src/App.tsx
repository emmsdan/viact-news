import React from "react";
import SearchField from "./shared/components/SearchField";
import NewsIndex from "./features/news";
import Pagination from "@material-ui/lab/Pagination";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { GridRowModel } from "@material-ui/data-grid";
import ViewNews from "./features/news/ViewNews";
import { useAppDispatch } from "./store/hooks";
import { viewNews } from "./features/news/slice";

function App() {
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState<number>(0);
  const [search, setSearch] = React.useState<string>("");
  const [openNews, setOpenNews] = React.useState<boolean | object>(false);

  const onChange = (__event: object, pageNum: number) => setPage(pageNum - 1);
  const onSearch = (search: string) => {
    if (search) {
      setSearch(search);
    }
  };
  const onRowClick = ({ row }: GridRowModel) => {
    setOpenNews(true);
    dispatch(viewNews(row));
  };
  return (
    <>
      {openNews ? <ViewNews openNews={setOpenNews} /> : null}
      <AppBar position="static" color={"transparent"}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ margin: 20 }} />
      <Container maxWidth={"md"}>
        <SearchField onChange={onSearch} />
        <br /> <br />
        <NewsIndex currentPage={page} search={search} onRowClick={onRowClick} />
        <br />
        <Pagination
          defaultPage={1}
          siblingCount={0}
          onChange={onChange}
          count={100 / 10}
          variant="outlined"
          color="primary"
        />
        <div style={{ margin: 20 }} />
      </Container>
    </>
  );
}

export default App;
