import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => {
  return async dispatch => {
    const res = await instance.get("/api/authors/");
    const authors = res.data;
    dispatch({
      type: actionTypes.FETCH_AUTHORS,
      payload: authors
    });
  };
};

export const filterAuthors = query => {
  return {
    type: actionTypes.FILTER_AUTHORS,
    payload: query
  };
};
