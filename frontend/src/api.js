import axios from 'axios';

const API_BASE_URL = "http://localhost:8000";

export const fetchQuestion = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/question`);
        return response.data;
    } catch (error) {
        console.error("Error fetching question:", error);
        return { error: "Failed to load question"};
    }
};