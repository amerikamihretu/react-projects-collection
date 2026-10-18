const projects = [
    {
        title: 'Calculator App',
        description: 'Fully functional calculator with keyboard support.',
        tech: 'HTML, CSS, JS',
        github: 'https://github.com/amerikamihretu/calculator-app',
        image: 'src/assets/calculator.png',
    },
    {
        title: 'Todo App',
        description: 'CRUD task manager with localStorage persistence.',
        tech: 'HTML, CSS, JS',
        github: 'https://github.com/amerikamihretu/todo-app',
        image: 'src/assets/todo.png',
    },
    {
        title: 'Weather App',
        description: 'Real‑time weather dashboard using OpenWeatherMap API.',
        tech: 'HTML, CSS, JS, API',
        github: 'https://github.com/amerikamihretu/weatherdashboard-app',
        image: 'src/assets/weather.png',
    },
    {
        title: 'React Notes App',
        description: 'Notes manager with dark mode, search, and local storage.',
        tech: 'React, Tailwind CSS',
        github: 'https://github.com/amerikamihretu/react-notes-app',
        image: 'src/assets/react-notes-app.png',
    },
    {
        title: 'Movie Search App',
        description: 'Search movies, view details via OMDb API with React Router.',
        tech: 'React, React Router, Tailwind, API',
        github: 'https://github.com/amerikamihretu/movie-search-react',
        image: 'src/assets/movie-search.png',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div key={project.title} className="bg-white dark:bg-gray-700 rounded-xl shadow overflow-hidden transition hover:shadow-lg">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-contain" />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
                                <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-2">{project.tech}</p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}