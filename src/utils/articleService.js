import http from './http.js';

const API_CREATECATEGOTY_URL = '/article/category';
const API_GET_CATEGORIES_URL = '/article/categories';
const API_CREATE_ARTICLE_URL = '/article/create';
const API_GET_ARTICLES_URL = '/article';
const API_CREATE_IMAGE_URL = '/image/upload';
const API_UPDATE_ARTICLE_URL = `/article`

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

export const getArticles = async () => {
  try {
    return await http.get(`${API_GET_ARTICLES_URL}`);
  } catch (err) {
    return err.response;
  }
};

export const getArticleByid = async (id) => {
  try {
    return await http.get(`${API_GET_ARTICLES_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export const updateArticle = async (data) => {
  try {
    return await http.put(`${API_UPDATE_ARTICLE_URL}/${data._id}`, data);
  } catch (err) {
    return err.response;
  }
};

export const createImage = async (image) => {
  try {
    const data = new FormData();
    data.append('image', image);
    return await http.post(`${API_CREATE_IMAGE_URL}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    return err.response;
  }
};

export default {
  createCategory,
  getCategories,
  createArticle,
  getArticles,
  getArticleByid,
  createImage,
};
