import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:7019",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;