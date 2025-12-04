import MovieCard from "./MovieCard";
import type { Movie } from "../services/tmdb";

export default function MovieList({ movies }: { movies: Movie[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 px-4">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
