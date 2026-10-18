export default function ThemeToggle({ dark, toggle }) {
    return (
        <button
            onClick={toggle}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 transition"
            aria-label="Toggle dark mode"
        >
            {dark ? '☀️' : '🌙'}
        </button>
    );
}