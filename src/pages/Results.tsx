import MovieList from "../components/MovieList";
import type { Movie } from "../services/tmdb";

export default function Results({ movies, mood }: { movies: Movie[]; mood: string }) {
    return (
        <section className="mt-12 w-full max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center capitalize mb-6">
                Filmes para quando você está <span className="text-purple-400">{mood}</span>
            </h2>

            <MovieList movies={movies} />
        </section>
    );
}
