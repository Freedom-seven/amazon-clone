import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:5001/clone-d38e1/us-central1/api",
});

export default instance;
