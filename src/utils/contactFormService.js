import http from './http.js';

const API_SUBMIT_FORM = '/contact';

export const submitForm = async (data) => {
  try {
    return await http.post(`${API_SUBMIT_FORM}`, data);
  } catch (err) {
    return err.response;
  }
};


export default {
    submitForm,
}