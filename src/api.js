import axios from "axios";

const api = axios.create({
  aseURL: "https://jsonplaceholder.typicode.com/users",
});

export default api;
