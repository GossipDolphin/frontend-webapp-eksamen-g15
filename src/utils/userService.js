import http from './http.js';

const API_REGISTER_URL = './user/register';
const API_LOGIN_URL = './user/login';
const API_LOGOUT_URL = './user/logout';
const API_GET_USERS_URL = '/user/users';

// getting a fresh csrf token on every post req
export const getCsrfToken = async () => {
  try {
    const { data } = await http.get('/csrf-token');
    http.defaults.headers['X-CSRF-Token'] = data.data;
  } catch (err) {
    return err.response;
  }
};

export const register = async (data) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_REGISTER_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export const getUserInfo = async () => {
  try {
    return await http.get('/user/me');
  } catch (err) {
    return err.reponse;
  }
};

export const login = async (data) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_LOGIN_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export const logout = async () => {
  try {
    await getCsrfToken();
    return await http.post(`${API_LOGOUT_URL}`);
  } catch (err) {
    return err.response;
  }
};

export const getUsers = async () => {
  try {
    return await http.get(`${API_GET_USERS_URL}`);
  } catch (err) {
    return err.response;
  }
};

export default { register, getUserInfo, logout, getUsers, login };
