import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-900 p-4 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-bold">
          Redux Blog
        </h1>

        <nav className="flex gap-4">
          <Link to="/">Posts</Link>

          <Link to="/post">Add Post</Link>

          <Link to="/users">Users</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;