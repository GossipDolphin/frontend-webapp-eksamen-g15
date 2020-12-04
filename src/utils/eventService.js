import http from './http.js';

const API_REGISTER_URL = "/user/register"

export const register = async (data) =>{
    try{
        return await http.post(`${API_REGISTER_URL}`,data)
    }
    catch(err){
        return err.response.data;
    }
}

export default {register};