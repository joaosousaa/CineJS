const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

export async function getMoviesByMood(mood: string, genreMap: Record<string, number>): Promise<Movie[]> {
    const genreId = genreMap[mood];
    const res = await fetch(`${BASE_URL}/discover/movie?with_genres=${genreId}&language=pt-BR`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json"
        }
    });

    const data = await res.json();
    return data.results;
}

export async function getWatchProviders(movieId: number) {
    const res = await fetch(`${BASE_URL}/movie/${movieId}/watch/providers`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json"
        }
    });

    const data = await res.json();
    return data.results?.BR || null; // retorna apenas os provedores do Brasil
}
