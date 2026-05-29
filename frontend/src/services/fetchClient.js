import { API_URL } from "./api";

export async function apiFetch(
    endpoint,
    options = {}
){
    const token = localStorage.getItem("access_token");
    const headers = {
        "Content-Type": "application/json",
        ...options.headers
    };

    if(token){
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            ...options,
            headers
        }
    );

    const data = await response.json();

    if(!response.ok){
        throw new Error(
            data.detail || "Error en la petición"
        );
    }

    return data;
}