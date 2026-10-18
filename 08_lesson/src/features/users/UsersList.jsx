import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const UsersList = () => {
  const users = useSelector(
    state => state.users
  );

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        Authors
      </h1>

      <ul>
        {users.map(user => (
          <li
            key={user.id}
            className="mb-3"
          >
            <Link
              to={`/users/${user.id}`}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsersList;