import { apiClient  } from "@/lib/apiClient";

export const getPopularMovies = async () => {
    const res = await apiClient.get('/movie/popular');
    return res.data;
};

export const getMovieDetails = async (id: string) => {
    const res = await apiClient.get(`/movie/${id}`);
    return res.data;
}