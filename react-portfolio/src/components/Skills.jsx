const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
    'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Git & GitHub', 'REST APIs', 'Python', "fastapi","classical ML"
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map(skill => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-white dark:bg-gray-700 shadow rounded-full text-gray-700 dark:text-gray-300 font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}