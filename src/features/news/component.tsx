import React from "react";
import { GridCellParams } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

export const ViewMoreButton = (params: GridCellParams) => (
  <Button
    variant={"contained"}
    size={"large"}
    color={"primary"}
    href={String(params.value)}
  >
    View News
  </Button>
);

export const ViewImage = (params: GridCellParams) => (
  <img src={String(params.value)} alt={String(params.value)} width={150} />
);
