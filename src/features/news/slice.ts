import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { fetchNews, ParamsType } from "./api";

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: any;
  title: string;
  url: string;
  urlToImage: string;
  id?: any;
}
export interface NewsState {
  articles: Article[];
  currentArticle?: Article;
  status: "idle" | "loading" | "failed";
  error?: any;
}

const initialState: NewsState = {
  articles: [],
  status: "idle",
};

export const getDefaultNews = createAsyncThunk(
  "news/fetchNews",
  async (params: ParamsType | null) => {
    const response = await fetchNews(params);
    return response;
  }
);

export const slice = createSlice({
  name: "news",
  initialState,
  reducers: {
    viewNews: (state, action) => {
      state.currentArticle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDefaultNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDefaultNews.fulfilled, (state, action) => {
        state.status = "idle";
        state.articles = action.payload;
      })
      .addCase(getDefaultNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const getNewsArticle = (state: RootState) => {
  return state.news.articles.map((article) => {
    return {
      ...article,
      id: (article.id || article.urlToImage || article.url) + Date.now(),
      source: (article.source || {}).name || "N/A",
    };
  });
};
export const getNewsError = (state: RootState) => state.news.error;
export const readNewsArticle = (state: RootState): Article | undefined =>
  state.news.currentArticle;

export const { viewNews } = slice.actions;
export default slice.reducer;
