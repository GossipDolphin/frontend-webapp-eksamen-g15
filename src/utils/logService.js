import http from './http.js';

const API_GET_LOG_URL = '/user/logdata';

export const getLogData = async () => {
  try {
    return await http.get(`${API_GET_LOG_URL}`);
  } catch (err) {
    return err.response;
  }
};

export default { getLogData };
