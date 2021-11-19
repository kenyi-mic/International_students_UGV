import axios from "axios";

const url = "http://localhost:3001/post";

export const fetchPost = () => axios.get(url);
