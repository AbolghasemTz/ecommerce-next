import axios from "axios";

axios.defaults.baseURL = "http://localhost:1337";


const http ={
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
}

export default http;