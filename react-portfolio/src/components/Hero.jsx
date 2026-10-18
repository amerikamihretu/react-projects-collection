export default function Hero() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
            <div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Amerika Mihretu</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Full‑stack MERN developer in training, passionate about AI‑powered applications.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="#projects"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}