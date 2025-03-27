import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_Key = import.meta.env.VITE_API_KEY;

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key": API_Key, // Optional: If required
    },
});

// 🔹 Generic API Request Function with Improved Error Handling
export const apiRequest = async (endpoint, method = "GET", data = null, token = null) => {
    try {
        const response = await api({
            url: endpoint,
            method,
            data,
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_Key, // Ensure API key is always included
                ...(token ? { Authorization: `Bearer ${token}` } : {}), // Add auth token if available
            },
        });
        return response.data;
    } catch (error) {
        let errorMessage = "An unexpected error occurred. Please try again.";

        if (error.response) {
            // 🌟 Handle API errors
            const { status, data } = error.response;

            switch (status) {
                case 400:
                    errorMessage = data?.message || "Invalid request. Please check your input.";
                    break;
                case 401:
                    errorMessage = "Unauthorized. Please log in again.";
                    break;
                case 403:
                    errorMessage = "Forbidden. You don’t have permission to access this.";
                    break;
                case 404:
                    errorMessage = "The requested resource was not found.";
                    break;
                case 500:
                    errorMessage = "Server error. Please try again later.";
                    break;
                default:
                    errorMessage = data?.message || "Something went wrong.";
            }
        } else if (error.request) {
            // 🌟 Handle network errors (No response received)
            errorMessage = "Network error. Please check your internet connection.";
        } else {
            // 🌟 Handle unexpected errors
            errorMessage = error.message || "An unknown error occurred.";
        }

        console.error("API Error:", errorMessage);
        throw new Error(errorMessage); // Throw user-friendly message
    }
};

// 🔹 Authentication Functions
export const registerUser = (credentials) => apiRequest("/v1/auth/register", "POST", credentials);
export const loginUser = (credentials) => apiRequest("/v1/auth/login", "POST", credentials);
export const forgotPassword = (email) => apiRequest("/v1/auth/forgot-password", "POST", { email });
// export const resetPassword = (resetToken, newPassword) => apiRequest(`/v1/auth/reset-password`, "POST", { resetToken, newPassword });
export const resetPassword = (resetToken, newPassword) =>
    apiRequest("/v1/auth/reset-password", "POST", { resetToken, newPassword });
// 🔹 Data Fetching (GET)
export const fetchProducts = () => apiRequest("/products");
export const fetchUsers = () => apiRequest("/users");

// 🔹 Create Data (POST)
export const createProduct = (productData, token) => apiRequest("/products", "POST", productData, token);

// 🔹 Update Data (PUT)
export const updateProduct = (productId, updatedData, token) => apiRequest(`/products/${productId}`, "PUT", updatedData, token);

// 🔹 Delete Data (DELETE)
export const deleteProduct = (productId, token) => apiRequest(`/products/${productId}`, "DELETE", null, token);
