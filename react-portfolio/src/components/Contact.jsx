export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    I'm currently looking for internship opportunities. Let's talk!
                </p>
                <div className="flex justify-center gap-6">
                    <a
                        href="mailto:mihretuamerika.com"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Email Me
                    </a>
                    <a
                        href="https://github.com/amerikamihretu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/amerika-mihretu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}