import Axios from 'axios';
import 'dotenv/config'

const http = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export default http;