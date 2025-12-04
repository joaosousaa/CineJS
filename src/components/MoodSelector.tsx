interface MoodSelectorProps {
    onSelectMood: (mood: string) => void;
}

export default function MoodSelector({ onSelectMood }: MoodSelectorProps) {
    const moods = [
        { name: "feliz", emoji: "😄" },
        { name: "triste", emoji: "😢" },
        { name: "entediado", emoji: "😴" },
        { name: "estressado", emoji: "😤" },
        { name: "romântico", emoji: "❤️" },
        { name: "assustado", emoji: "😱" }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 ">
            {moods.map(({ name, emoji }) => (
                <button
                    key={name}
                    onClick={() => onSelectMood(name)}
                    className="text-4xl bg-blue-700/15 border border-white/10 rounded-full
                               shadow-lg text-white py-6 px-8 rounded-2xl 
                               hover:bg-[#1f1f1f] hover:shadow-xl transition transform hover:-translate-y-1"
                >
                    {emoji}
                    <div className="text-sm mt-2 capitalize">{name}</div>
                </button>
            ))}
        </div>
    );
}
