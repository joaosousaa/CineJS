import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import MoodSelector from "./components/MoodSelector";
import Results from "./pages/Results";

import { getMoviesByMood } from "./services/tmdb";
import { moodToGenre } from "./utils/moods";
import type { Movie } from "./services/tmdb";

export default function App() {
  const [mood, setMood] = useState<string | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  async function handleSelectMood(selectedMood: string) {
    const results = await getMoviesByMood(selectedMood, moodToGenre);
    setMovies(results);
    setMood(selectedMood);
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <Header />

      <main className="flex flex-col items-center p-10 bg-blue-800/15 max-w-6xl mx-auto px-4 rounded-3xl">

        <MoodSelector onSelectMood={handleSelectMood} />

        {mood && <Results movies={movies} mood={mood} />}
      </main>

      <Footer />
    </div>
  );
}
