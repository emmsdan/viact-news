import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { useAppSelector } from "../../store/hooks";
import { Article, readNewsArticle } from "./slice";

export default function ViewNews({ openNews }: any) {
  const news = useAppSelector<Article | undefined>(readNewsArticle);

  const handleClose = () => {
    openNews(false);
  };
  return news ? (
    <Dialog
      fullWidth
      maxWidth={"md"}
      scroll={"paper"}
      open={true}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
    >
      <DialogTitle id="scroll-dialog-title">{news.title}</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText>
          <img
            src={String(news.urlToImage)}
            alt={String(news.title)}
            width={"100%"}
          />

          <Typography component={"h3"}>Author: {news.author}</Typography>
          <Typography component={"h3"}>Source: {news.source}</Typography>
          <p>{news.description}</p>
          <Button
            variant={"contained"}
            size={"large"}
            color={"primary"}
            href={String(news.url)}
          >
            View Complete News
          </Button>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  ) : null;
}
