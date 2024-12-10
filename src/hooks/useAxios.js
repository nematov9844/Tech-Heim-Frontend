/** @format */

import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;



export default function useAxios() {
	const getData = async (endpoint) => {
		if (!endpoint) {
			console.error("Endpoint is required to fetch data.");
			return;
		}

		try {
			const response = await axios.get(`${baseUrl}/${endpoint}`);
			console.log("Data received:", response.data);
			return response.data;
		} catch (error) {
			console.error("Error fetching data:", error?.response?.data || error.message);
			throw error;
		}
	};

	const deleteData = async (endpoint) => {
		if (!endpoint) {
			console.error("Endpoint is required to delete data.");
			return;
		}

		try {
			const response = await axios.delete(`${baseUrl}/${endpoint}`);
			console.log("Data deleted successfully:", response.data);
			return response.data;
		} catch (error) {
			console.error("Error deleting data:", error?.response?.data || error.message);
			throw error;
		}
	};

    const updateData = async (endpoint, payload) => {
        if (!endpoint) {
            console.error("Endpoint is required to update data.");
            return;
        }
    
        if (!payload) {
            console.error("Payload is required to update data.");
            return;
        }
    
        try {
            const response = await axios.patch(`${baseUrl}/${endpoint}`, payload);
            console.log("Data updated successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error updating data:", error?.response?.data || error.message);
            throw error;
        }
    };
    

	return { getData, deleteData, updateData };
}
