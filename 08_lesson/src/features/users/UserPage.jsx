import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector(state =>
    state.users.find(
      user => user.id === userId
    )
  );

  const posts = useSelector(state =>
    state.posts.filter(
      post => post.user === userId
    )
  );

  if (!user) {
    return <h2>User not found.</h2>;
  }

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        {user.name}
      </h1>

      <h2 className="mb-3 text-2xl">
        Posts by this author
      </h2>

      <ul>
        {posts.map(post => (
          <li
            key={post.id}
            className="mb-3"
          >
            <Link
              to={`/post/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserPage;