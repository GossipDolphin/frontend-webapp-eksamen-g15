import http from './http.js';

const API_FORM = '/contact';

// getting a fresh csrf token on every post req
export const getCsrfToken = async () => {
  try {
    const { data } = await http.get('/csrf-token');
    http.defaults.headers['X-CSRF-Token'] = data.data;
  } catch (err) {
    return err.response;
  }
};

export const submitForm = async (data) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_FORM}`, data);
  } catch (err) {
    return err.response;
  }
};

export const listForms = async () => {
  try {
    return await http.get(`${API_FORM}`);
  } catch (err) {
    return err.response;
  }
};

export const deleteForm = async (id) => {
  try {
    return await http.delete(`${API_FORM}/delete/${id}`);
  } catch (err) {
    return err.response;
  }
};

export default {
  submitForm,
  listForms,
  deleteForm,
};
