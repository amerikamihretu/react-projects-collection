export default function Footer() {
    return (
        <footer className="py-6 bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-800">
            <div className="container mx-auto text-center text-gray-600 dark:text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Amerika Mihretu. Built with React & Tailwind.
            </div>
        </footer>
    );
}