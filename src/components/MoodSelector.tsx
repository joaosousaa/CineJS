interface MoodSelectorProps {
    onSelectMood: (mood: string) => void;
}
import { useState } from "react";

import bravo from "../assets/bravo.png";
import feliz from "../assets/feliz.png";
import assustado from "../assets/assustado.png";
import entediado from "../assets/entediado.png";
import romantico from "../assets/romantico.png";
import triste from "../assets/triste.png";

export default function MoodSelector({ onSelectMood }: MoodSelectorProps) {
    const moods = [
        { name: "feliz", image: feliz },
        { name: "triste", image: triste },
        { name: "entediado", image: entediado },
        { name: "estressado", image: bravo },
        { name: "romântico", image: romantico },
        { name: "assustado", image: assustado },
    ];

    const [selectedMood, setSelectedMood] = useState<string | null>(null);


    return (
        <div className="flex flex-wrap justify-center gap-6">
            {moods.map(({ name, image }) => (
                <button
                    key={name}
                    onClick={() => {
                        setSelectedMood(name);
                        onSelectMood(name);
                    }
                    }
                    className={`rounded-3xl shadow-lg text-white p-4 md:p-8 cursor-pointer flex flex-col items-center transition transform ${selectedMood === name
                        ? "bg-blue-700/40 border border-blue-500 scale-105 shadow-2xl"
                        : "bg-blue-700/15 border border-white/10 hover:bg-blue-700/40 hover:-translate-y-1"}`}>
                    <img
                        src={image}
                        alt={name}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />

                    <div className="text-sm mt-2 capitalize">{name}</div>
                </button>
            ))}
        </div>

    );
}
