import axios from 'axios';

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    }
    // params: {
    //     api_key: process.env.NEXT_PUBLOC_TMDB_API_KEY,
    //     language: "en-US",
    // }
});