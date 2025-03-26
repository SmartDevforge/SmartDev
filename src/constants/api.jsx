import axios from "axios";

const API_BASE_URL = "https://teefey-api.onrender.com";
const API_Key = "45689dc402de76d3bcf03f961ea072af:4f6fdabc7610ebc538ef870c4161588176d8e138fbaf380a0944537beaf7deb4"
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key": API_Key,
    },
});

// Function to handle API requests
export const fetchData = async (endpoint, method = "GET", data = null, token = null) => {
    try {
        const response = await api({
            // url: `${API_BASE_URL}${endpoint}`,
            url: "https://teefey-api.onrender.com",
            method,
            data,
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};

export const fetchProducts = async () => {
    return await fetchData("/products");
};
export const loginUser = async (credentials) => {
    return await fetchData("/auth/login", "POST", credentials);
};

export const registerUser = async (credentials) => {
    return await fetchData("auth/register", "POST", credentials);
};
