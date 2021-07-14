import { stringify } from "querystring";
import axios from "axios";
import * as querystring from "querystring";

const Authorization = "Bearer 0be780276711400c9f6ace3f8bc03483";
const NEWS_API_URL = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/";

const $http = axios.create({
  baseURL: NEWS_API_URL,
  headers: { Authorization  },
});

export type ParamsType = {
  q: string;
  qInTitle?: string;
  sources?: string;
  from?: string;
  to?: string;
  sortBy?: string;
  pageSize?: number;
  page?: number;
};

const defaultParams: ParamsType = {
  q: "ai",
  pageSize: 10,
};

export async function fetchNews(params: ParamsType | null): Promise<any> {
  const news = await $http.get(
    `everything/?${stringify(params || defaultParams)}`
  );
  return news.data.articles;
}

export async function getNewsSource(params: ParamsType | null): Promise<any> {
  const news = await $http.get(
    `top-headlines/sources/?${stringify(params || defaultParams)}`
  );
  return news.data.articles;
}
