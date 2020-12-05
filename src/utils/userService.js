import http from './http.js';

const API_REGISTER_URL = './user/register';
const API_LOGIN_URL = './user/login';
const API_LOGOUT_URL = './user/logout';

export const register = async (data) => {
  try {
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
    return await http.post(`${API_LOGIN_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export const logout = async () => {
  try {
    return await http.post(`${API_LOGOUT_URL}`);
  } catch (err) {
    return err.response;
  }
};

export default { register, getUserInfo, logout };
