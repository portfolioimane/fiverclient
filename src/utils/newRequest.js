import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://apifiver-ii1e.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
