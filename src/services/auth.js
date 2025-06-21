import axios from "./axios";

export const login = async ({email, password}) => {
    const { data } = await axios.post("/api/Accounts/Login", { email, password }, { withCredentials: true });
    return data;
};

export const register = async ({username, email, password}) => {
    const { data } = await axios.post("/api/Accounts/Register", { displayName:username, email, password }, { withCredentials: true });
    return data;
};

export const getUser = async () => {
    const { data } = await axios.get("/auth/me");
    return data;
}