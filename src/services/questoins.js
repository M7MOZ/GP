import axios from "./axios";

export const generate = async ({context}) => {
    const { data } = await axios.post("/api/Document/upload", { context }, { withCredentials: true });
    return data;
};