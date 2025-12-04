import { useEffect, useState } from "react";
import { getWatchProviders } from "../services/tmdb";
import type { Movie } from "../services/tmdb";

export default function MovieCard({ movie }: { movie: Movie }) {
    const [providers, setProviders] = useState<any>(null);

    useEffect(() => {
        async function load() {
            const data = await getWatchProviders(movie.id);
            setProviders(data);
        }
        load();
    }, [movie.id]);

    return (
        <div className="bg-blue-700/15 p-3 rounded-xl border border-white/10 hover:border-purple-500/40 transition hover:scale-105 shadow-lg">

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="rounded-lg w-full"
                alt={movie.title}
            />

            <h3 className="mt-3 font-semibold">{movie.title}</h3>
            <p className="text-xs text-gray-400">{movie.vote_average} ⭐</p>

            {/* Plataformas */}
            <div className="mt-3">
                {!providers && (
                    <p className="text-xs text-gray-500">Carregando...</p>
                )}

                {providers?.flatrate && (
                    <div>
                        <p className="text-xs text-purple-400">Disponível em:</p>
                        <div className="flex gap-2 mt-2">
                            {providers.flatrate.map((p: any) => (
                                <img
                                    key={p.provider_id}
                                    src={`https://image.tmdb.org/t/p/w45${p.logo_path}`}
                                    className="w-6 h-6 rounded"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {providers && !providers.flatrate && (
                    <p className="text-xs text-gray-500">Não disponível em streaming</p>
                )}
            </div>
        </div>
    );
}
