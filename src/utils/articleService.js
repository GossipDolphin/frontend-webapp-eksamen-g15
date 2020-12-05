import http from "./http.js";

const API_CREATECATEGOTY_URL = "/article/category";
const API_GET_CATEGORIES_URL = "/article/categories";
const API_CREATE_ARTICLE_URL = "/article/create";

export const createCategory = async (data) => {
  try {
    return await http.post(`${API_CREATECATEGOTY_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export const getCategories = async () => {
  try {
    return await http.get(`${API_GET_CATEGORIES_URL}`);
  } catch (err) {
    return err.response;
  }
};

export const createArticle = async (data) => {
  try {
    return await http.post(`${API_CREATE_ARTICLE_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export default { createCategory, getCategories, createArticle };
