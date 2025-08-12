"use client";

import { useParams } from "next/navigation";
import { useMovieDetails } from "@/hooks/useMovies";


export default function MovieDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const { data, isLoading, isError } = useMovieDetails(id);

    if (isLoading) return <p>Loading ... </p>;
    if (isError) return <p>Something went wrong .. </p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <img 
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} 
            alt={data.title} 
            className="rounded-lg shadow-lg mb-4"
            />

            <p>{data.overview}</p>
        </div>
    );
}