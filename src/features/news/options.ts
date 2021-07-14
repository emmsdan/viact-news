import { GridColDef } from "@material-ui/data-grid";
import { ViewImage, ViewMoreButton } from "./component";

export const columns: GridColDef[] = [
  {
    field: "urlToImage",
    headerName: "Image",
    width: 150,
    sortable: false,
    renderCell: ViewImage,
  },

  {
    hide: true,
    field: "id",
    valueGetter: (params: any) => {
      return params.getValue(params.id, "urlToImage") + Date.now();
    },
  },
  {
    field: "source",
    flex: 1,
    headerName: "Source",
  },
  {
    field: "author",
    headerName: "Author",
    width: 150,
    sortable: false,
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    sortable: false,
  },
  {
    field: "publishedAt",
    flex: 1,
    headerName: "Date",
  },
  {
    field: "url",
    headerName: "URL",
    flex: 1,
    sortable: false,
    renderCell: ViewMoreButton,
  },
];
