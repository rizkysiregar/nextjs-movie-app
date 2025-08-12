import { useQuery } from "@tanstack/react-query"
import { getPopularMovies, getMovieDetails } from "@/services/movieService";


export const usePopularMovies = () => {
    return useQuery({
        queryKey: ['popular-movies'],
        queryFn: getPopularMovies,
    });
};

export const useMovieDetails = (id: string) => {
    return useQuery({
        queryKey: ['movie-details', id],
        queryFn: () => getMovieDetails(id),
        enabled: !!id, // Only run the query if id is truthy
    });
};