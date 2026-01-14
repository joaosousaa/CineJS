import emoji from "../assets/emoji.png";

export default function Header() {
    return (
        <header className="w-full bg-black/40 backdrop-blur-md border-b max-w-6xl py-10 m-auto border-white/5">
            <div
                className="mx-auto flex flex-col-reverse  md:flex-row  items-center justify-between "
            >
                {/* Texto */}
                <div className="flex flex-col items-center max-w-xl px-4 text-center md:text-start">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        Escolha seu humor. Veja o filme perfeito.
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-3">
                        Selecione como você está se sentindo hoje e receba recomendações instantâneas.
                    </p>
                </div>

                {/* Emoji */}
                <img
                    src={emoji}
                    alt="Emoji"
                    className="w-40 h-40 md:w-80 md:h-80 object-contain drop-shadow-xl mb-5"
                />
            </div>

        </header>
    );
}
