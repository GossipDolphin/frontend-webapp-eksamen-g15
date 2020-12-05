import Axios from 'axios';

const http = Axios.create({
  baseURL: `${process.env.BASE_URL}`,
  withCredentials: true, // used to send tokens
});

export default http;
